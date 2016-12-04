var cssmin = {
  options: {
    preserveComments: false,
    sourceMap: false,
    report: 'gzip'
  },
  dist: {
    src: ['dist/release/css/UP-src.css'],
    dest: 'dist/release/css/UP.css'
  }
};
var uglify = {
  options: {
    preserveComments: false,
    sourceMap: false,
    report: 'gzip'
  },
  dist: {
    src: 'dist/release/UP-src.js',
    dest: 'dist/release/UP.js'
  }
};
module.exports = function (grunt) {
  grunt.config.set('cssmin', cssmin);
  grunt.config.set('uglify', uglify);
}
