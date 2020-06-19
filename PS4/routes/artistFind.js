const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/APIconfig');

router.route('/ps4')
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.baseURL + '?method=artist.getinfo&artist=' + req.body.artist + '&api_key=' + CONFIG.key + '&format=json');
        let info = await result.json();
        res.render('wx', {title: 'Artist Info', artist : info.artist.name, listeners : info.artist.stats.listeners, playcount : info.artist.stats.playcount, bio : info.artist.bio.content});
    })
module.exports = router;