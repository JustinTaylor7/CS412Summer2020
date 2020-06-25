const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/APIconfig');
const redis = require('redis')
const client = redis.createClient();
const {promisify} = require('util');
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});

router.route('/ps4')
    .post(async (req, res, next) => {
        let artist = req.body.artist
        let dataCall = await fetch(CONFIG.baseURL + '?method=artist.getinfo&artist=' + artist + '&api_key=' + CONFIG.key + '&format=json');
        let data = JSON.stringify(dataCall);

        const existsAsync = promisify(client.exists).bind(client);
        const getAsync = promisify(client.get).bind(client);
        const setAsync = promisify(client.set).bind(client);
        const expireAsync = promisify(client.expire).bind(client);

        let match = await existsAsync(artist);
        if (match) { //key exists, grab value=>

            let result = await getAsync(data);
            res.send(result + ' cached ')

        } else {
            let call = await fetch(CONFIG.baseURL + '?method=artist.getinfo&artist=' + artist + '&api_key=' + CONFIG.key + '&format=json');
            let callJSON = JSON.stringify(call);
            let newArtist = req.body.artist

            await setAsync(data, callJSON);
            await setAsync(artist, newArtist);
            await expireAsync(artist, 30);
            await expireAsync(data, 30)

            res.send(callJSON + ' not cached ')
        }
    })
module.exports = router;