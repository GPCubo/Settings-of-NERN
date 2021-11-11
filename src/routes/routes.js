const express = require('express');
const {getBlog, postBlog} = require('../controllers')
const router = express.Router();

router.get('/apis',getBlog )

router.post('/add-public', postBlog)

module.exports = router;