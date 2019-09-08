const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// the blogposts
const Post = require('../models/Post.js');

router.get('/', (req, res) => {     
    Post.find()
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No posts found.'}));
});

router.get('/:id', (req, res) => {
    Post.findByID(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound: 'Can\'t find post'}));
});

router.post('/addpost', (req, res) => {
    console.log('trying to add post');
    const newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    });

    newPost.save()
        .then(post => res.json(post));
});

router.delete('/deletepost/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.remove()
                .then((() => res.json({success: true})));
        })
        .catch(err => res.status(404).json({postnotfound: 'Not a valid post to delete'}));
});


module.exports = router;
