const express = require('express');
const exphbs = require('../middleware/exphbs');
const router = express.Router();

router.get('/test', exphbs.exposeTemplates, function (req, res) {
    res.render('echo', {
        title  : 'Echo',
        message: req.params.message,

        // Overrides which layout to use, instead of the defaul "main" layout.
        layout: 'shared-templates',

        partials: Promise.resolve({
            echo: hbs.handlebars.compile('<p>ECHO: {{message}}</p>')
        })
    });
});

module.exports = router;