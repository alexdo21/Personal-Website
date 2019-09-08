const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/Post.js');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// datebase
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.prepare()
.then(() => {
  const server = express()
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  

  server.get('/blog', (req, res) => {
    const actualPage = '/blog'
    const queryParams = {id: req.params}
       
    Post.find()
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No posts found.'}));

    app.render(req, res, actualPage, queryParams)

  });
    




  server.get('*', (req, res) => {
    return handle(req, res)
  })

  

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})