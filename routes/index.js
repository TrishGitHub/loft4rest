const express = require('express');
const router = express.Router();

const ctrlWorks = require('../controllers/works');
const ctrlBlog = require('../controllers/blog');
const ctrlLogin = require('../controllers/login');
const ctrlAdmin = require('../controllers/admin');

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};

router.get('/', ctrlWorks.index);
router.post('/mail', ctrlWorks.sendEmail);

router.get('/blog', ctrlBlog.blog);

router.get('/login', ctrlLogin.login);
router.post('/login', ctrlLogin.auth);

router.get('/admin', isAuthenticated, ctrlAdmin.admin);
router.post('/admin/avatar', isAuthenticated, ctrlAdmin.uploadAvatar);

module.exports = router;