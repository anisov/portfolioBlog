var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepages')
const ctrlBlog = require('../controllers/blog')
const ctrlWorks = require('../controllers/works')
const ctrlAbout = require('../controllers/about')

router.get('/', ctrlHome.getIndex);
router.post('/login', ctrlHome.authorization );

router.get('/blog', ctrlBlog.getBlogPage );

router.get('/about', ctrlAbout.getAboutPage );

router.get('/works', ctrlWorks.getWorksPage );
router.post('/contact', ctrlWorks.sendEmail);

module.exports = router;
