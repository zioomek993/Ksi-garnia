'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    tsd: {
      refresh: {
        options: {
          command: 'reinstall',
          latest: false,
          config: 'tsd.json'
        }
      }
    },
    processhtml: {
      options: {
        data: {
        }
      },
      release: {
        files: {
          'dist/release/main.html': ['src/main.html']
        }
      }
    },
    // Bower plugin
    "bower-install-simple": {
      options: {
        color: true,
        directory: 'external',
        update: true,
        command: "update"
      },
      dev: {
      }
    },
    'sanitize': {
      options: {
      },
      files: {
        src: [
          'dist/build/ts/**/*.js'
        ]
      }
    }
  });
  grunt.loadTasks('tasks');

  grunt.registerTask('styles', [
    //"sass:build"
  ]);

  grunt.registerTask('scripts', [
    'typescript',
    'sanitize'
  ]);

  grunt.registerTask('external', [
    'bower-install-simple',
    'copy:external',
  ]);

  grunt.registerTask('default', [
    'dev',
  ]);

  grunt.registerTask('dev', [
    'external',
    'tsd',
    'styles',
    'scripts',
    'copy:initBuild'
  ]);

  grunt.registerTask('release', [
    'dev',
    'copy:release',
    'concat:js',
    'concat:css',
    'processhtml:release',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('deploy', [
    'release',
    'copy:deploy'
  ]);

}
