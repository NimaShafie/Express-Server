const express = require('express');
const router = express.Router();
const app = express();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express', word: 'bob' });
})
// define the about route
router.get('/test', (req, res) => {
  res.render('test', { test: 'testing' })
});

module.exports = router;
