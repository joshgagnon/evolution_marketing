var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/**/*.{sass,scss}",
  dest: config.publicAssets + '/stylesheets',
  settings: {
  	includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets'],
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'assets/images' // Used by the image-url helper
  }
}