var copy = {
  external: {
    files: [
        { expand: true, cwd: 'external/angular/', src: ['angular.min.js'], dest: 'src/lib/angular' },
        { expand: true, cwd: 'external/angular-ui-router/release', src: ['angular-ui-router.min.js'], dest: 'src/lib/angular-ui-router' },
        { expand: true, cwd: 'external/angular-bootstrap/', src: ['ui-bootstrap.js', 'ui-bootstrap-csp.css', 'ui-bootstrap-tpls.js'], dest: 'src/lib/angular-bootstrap'},
        { expand: true, cwd: 'external/bootstrap/', src: ['dist/js/bootstrap.js','dist/css/bootstrap.css','dist/css/bootstrap-theme.css','dist/fonts/*','js/*.js'], dest: 'src/lib/bootstrap' },
        { expand: true, cwd: 'external/moment', src: ['moment.js','locale/*.js','min/moment-with-locales.js'], dest: 'src/lib/moment' },
        { expand: true, cwd: 'external/jquery/dist', src: ['jquery.js','core.js'], dest: 'src/lib/jquery' },
        { expand: true, cwd: 'external/angular-animate', src: ['angular-animate.js'], dest: 'src/lib/angular-animate' },
        { expand: true, cwd: 'external/angular-sanitize', src: ['angular-sanitize.js'], dest: 'src/lib/angular-sanitize' },
    ]
  },
  release: {
    files: [
      { expand: true, cwd: 'dist/build', src: ['**', '!css/**', '!lib/**', '!leaflet/**', '!sass/**', '!scripts/**', '!ts/**', '!patches/**'], dest: 'dist/release' },
    ]
  },
  deploy: {
    files: [
       { expand: true, cwd: 'dist/release', src: ['**'], dest: '../smartsab_mobile/www' }
    ]
  },
  initBuild: {
    files: [
      { expand: true, cwd: 'src', src: ['**', '!**/*.ts', '!**/*.scss'], dest: 'dist/build' },
    ]
  },
  htmlBuild: {
    files: [
      { expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/build' },
    ]
  }
};

module.exports = function (grunt) {
  grunt.config.set('copy', copy);
}
