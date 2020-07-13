const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res, next) => {
  const tweetsPath = path.join(__dirname, '../data/tweets.json');
  console.log('outputting router get tweetsPath');
  console.log(tweetsPath);
  const tweetsFile = JSON.parse(fs.readFileSync(tweetsPath, 'utf-8'));
  console.log('outputting router get tweetsFile');
  console.log(tweetsFile);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(tweetsFile);
});

module.exports = router;
