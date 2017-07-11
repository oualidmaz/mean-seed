var express = require('express');
var router = express.Router();
var cors = require('cors');

router.get('/hello',  function (req, res) {
    res.status(200).send('hello world from API route');
});

module.exports = router;