var Metalsmith = require('metalsmith'),
    path = require('path');

var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var inPlace = require('metalsmith-in-place');
var assets = require('metalsmith-assets');
var watch = require('metalsmith-watch');

var watching;
if (process.env.WATCH_FILES) {
  watching = watch({
    paths: {
      "${source}/**/*": true,
      "templates/**/*": "**/*.md",
      "static/**/*": "**/*"
    }
  });
}

Metalsmith(__dirname)
  .source('pages')
  .use(watching)
  .use(inPlace({
    engine: 'handlebars',
    partials: 'partials',
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials',
    directory: 'templates',
    default: 'index.html'
  }))
  .use(assets({
    source: 'static'
  }))
  .use(permalinks({
    pattern: ':title',
    relative: false
  }))
  .build(function(err) {
    if (err) throw err;
  });
