const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlSkill = require('../controllers/skill');
const ctrlWorks = require('../controllers/works');
const ctrlUser = require('../controllers/user');

const isAdmin = (req, res, next) => {
    if (req.session.isAdmin) {
      return next();
    }
    res.redirect('/');
  };
router.post('/user', ctrlUser.isAuth);

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog', ctrlBlog.editArticle);
router.delete('/blog', ctrlBlog.deleteArticle);

router.get('/skill', ctrlSkill.getSkill);
router.post('/skill', ctrlSkill.createSkill);
router.put('/skill', ctrlSkill.editSkill);
router.delete('/skill',  ctrlSkill.deleteSkill);

router.get('/work', ctrlWorks.getWork);
router.post('/work', ctrlWorks.createWork);
router.put('/work', ctrlWorks.editWork);
router.delete('/work', ctrlWorks.deleteWork);

module.exports = router;