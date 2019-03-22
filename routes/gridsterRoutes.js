const express = require("express");
const exphbs = require('express-handlebars');
const temps = require('../middleware/exphbs_templates');

const router = express.Router();

router.get('/base', (req, res) => {
    res.render('gridster_main', {layout: 'main'});
});


module.exports = router;