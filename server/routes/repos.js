const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios.get('https://api.github.com/users/alexdo21/repos')
        .then(repos => repos.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            link: repo.html_url,
            des: repo.description

        })))
        .then(repos => res.send(repos))
        .catch(err => console.log(err));
});



module.exports = router;