# Roll Recovery

## Getting Started

```
git clone git@github.com:loadsfaster/rollrecovery.git
cd rollrecovery
npm install
```

The index.html file currently has a bunch of css in a style tag within the head of the HTML file.
This is the minified css that has had any classes that aren't being used in index.html stripped out.
If you want to work on the page and add classes to elements, you should delete the style tag and then
add a link to the full css

```
<link rel="stylesheet" href="/css/tachyons.min.css">
```

When you are ready to strip out unused css here is the process:

From root directory run
```
npm run uncss
```
This will create a file in the css directory called tachyons.stripped.css
Just copy that file and paste it into a style tag in the head of the html file and then publish your changes.

## Live Reload and CSS Compilation

If you want to have a server that livereloads when you update css or html files
run ```npm start``` from the command line.

You can edit css in src/ - that is where all the css partials are.

## If you want to compress images add them to the i/ folder and then run
```npm run build:images```
This will move images to images-prod directory.

