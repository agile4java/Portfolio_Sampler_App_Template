const exphbs = require('express-handlebars');

// create expresshandlbars instance with a default layout
var hbs = exphbs.create({
    layoutsDir: 'views/layouts',
    // Can use multiple partials directories
    partialsDir: [
      'views/partials',
      'views/partials/scripts'
    ]
  });

  module.exports = hbs;