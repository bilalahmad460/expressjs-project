const express = require('express');
const http = require('http');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {pageTitle: "Welcom Bilal"});
});

router.get('/about', (req, res, next) => {
    res.render('about', {pageTitle: "About Bilal"});
})

router.get('/contact', (req, res, next) => {
    res.render('contact', {pageTitle: "Contact Bilal"});
})
module.exports = router;