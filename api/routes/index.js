const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlSkill = require('../controllers/skill');
const ctrlAvatar = require('../controllers/avatar');

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized', error: 401 });
};

router.get('/blog', ctrlBlog.getArticles); // READ
router.post('/blog', ctrlBlog.createArticle); // CREATE
router.put('/blog/:id', isAuthenticated, ctrlBlog.editArticle); // EDIT
router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE

router.get('/skill', ctrlSkill.getSkills); // READ
router.post('/skill', ctrlSkill.createSkill); // CREATE
router.put('/skill/:id', isAuthenticated, ctrlSkill.editSkill); // EDIT
router.delete('/skill/:id', ctrlSkill.deleteSkill); // DELETE

router.get('/avatar', ctrlAvatar.getAvatar);
router.post('/avatar', ctrlAvatar.setAvatar);

router.get('*', (req, res) => {
    res.status(404).json({ msg: 'Not found', err: 404 });
});

module.exports = router;