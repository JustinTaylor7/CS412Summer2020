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
        let artist = req.body.artist;
        let dataCall = await fetch(CONFIG.baseURL + '?method=artist.getinfo&artist=' + artist + '&api_key=' + CONFIG.key + '&format=json');
        let data = await JSON.stringify(dataCall);

        //converting redis for use with async
        const existsAsync = promisify(client.exists).bind(client);
        const getAsync = promisify(client.get).bind(client);
        const setAsync = promisify(client.set).bind(client);
        const expireAsync = promisify(client.expire).bind(client);

        let match = await existsAsync(artist);
        if (match) { //if artist is in cache

            //get response data from cache and turn it into JSON object
            let result = await getAsync(data);
            let object = JSON.parse(result);

            object.fromCache = true;
            res.send(object)

        } else { //if artist is not in cache
            let call = await fetch(CONFIG.baseURL + '?method=artist.getinfo&artist=' + artist + '&api_key=' + CONFIG.key + '&format=json');
            let callJSON = await call.json();
            let callString = JSON.stringify(callJSON);
            let newArtist = req.body.artist;

            //set response data and artist in cache
            await setAsync(data, callString);
            await setAsync(artist, newArtist);

            //cache expires after 30 seconds
            await expireAsync(artist, 30);
            await expireAsync(data, 30)

            callJSON.fromCache = false;
            res.send(callJSON)
        }
    })
module.exports = router;