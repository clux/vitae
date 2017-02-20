# Vitae
[![build status](https://secure.travis-ci.org/clux/vitae.svg)](http://travis-ci.org/clux/vitae)
[![dependency status](https://david-dm.org/clux/vitae.svg)](https://david-dm.org/clux/vitae)

Personal resume, occasionally updated. Now uses HTML5 technologies instead of LaTeX for ease of maintanance. Stashed here as weak self advertising.

## Usage
If you feel I should be exploring new horizons with YOURCOMPANY, send me an email. It's in the json.

My current job is great for personal development, autonomy, and occasional remote deployment. Lenient attitudes toward these are a must, as are contributing to open source projects.

Locations considered are primarily in England and Norway.

## Building
Clone, install dependencies, and build:

```bash
$ git clone https://github.com/clux/vitae.git && cd vitae
$ yarn
$ npm run build
$ xdg-open vitae.html
```

## Developing
With dependencies installed, run `npm run develop`.

## Release
To build a `.pdf` release version, run `npm run release`. This requires `wkhtmltopdf` installed. Note that issue #3 means this output is inferior to what webkit produces naturally using print to pdf.

## License
MIT-Licensed. See LICENSE file for details.
