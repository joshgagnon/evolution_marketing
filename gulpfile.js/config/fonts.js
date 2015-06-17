var config = require('./')

module.exports = {
  src: [config.sourceAssets + '/fonts/**/*', './node_modules/font-awesome/fonts/*'],
  dest: config.publicAssets + '/fonts'
}
