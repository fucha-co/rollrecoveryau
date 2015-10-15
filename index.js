// dependencies

var fs = require("fs")
var filesize = require("filesize")
var gzipSize = require("gzip-size")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var cssvariables = require('postcss-css-variables')
var customMedia = require("postcss-custom-media")
var purify = require('purify-css');

// css to be processed
var css = fs.readFileSync("src/tachyons.css", "utf8")

// process css
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .process(css, {
    from: "src/tachyons.css",
    to: "css/tachyons.css"
  })
  .css

fs.writeFile("css/tachyons.css", output, 'utf-8')
var uncompressed = fs.statSync("css/tachyons.css")
var uncompressedSize = uncompressed["size"]

//console.log(filesize(output.css))

new compressor.minify({
    type: 'sqwish',
    fileIn: 'css/tachyons.css',
    fileOut: 'css/tachyons.min.css'
});

var minified = fs.statSync("css/tachyons.min.css", "utf8")
var gzipped = gzipSize.sync(fs.readFileSync("css/tachyons.min.css", "utf8"))

var minifiedSize = minified["size"]

//purify("index.html", "css/tachyons.css", {minify: true}, function(output){
//  fs.writeFile("css/tachyons.stripped.css", output, 'utf-8')
//  console.log(output + "Hurray")
//});

console.log("After minification it is " + filesize(minifiedSize))
console.log("After gzipping it is " + filesize(gzipped))
