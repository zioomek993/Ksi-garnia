var typescript = {
  // dev: {
  //   src: ['*.ts','src/ts/**/*.ts'],
  //   options: {
  //     target: 'es5',
  //     module: 'commonjs',
  //     sourceMap: false
  //   }
  // },
  build: {
    src: ['src/ts/**/*.ts'],
    dest: 'dist/build/ts',
    options: {
      target: 'es5',
      module: 'commonjs',
      sourceMap: false
    }
  }
  
}

module.exports = function (grunt) {
  grunt.config.set('typescript', typescript);
}
