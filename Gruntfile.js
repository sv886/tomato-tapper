module.exports = function(grunt) {

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js', '*.css'],
      task: ['updated']
    },
    // script in index.html is looking for src="dist/bundle.js"
    // need to uglify assets into a bundle.js file
    uglify: {
      build: {
        // add source files to bundle from
        src: ['index.js', 'logger.js'],
        // add destination to bundle to
        dest: 'dist/bundle.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'dist/bundle.js': 'src/app.js'
        }
      }
    }
  })

  // load watching into grunt - $ grunt watch will look for changes
  grunt.loadNpmTasks('grunt-contrib-watch');

  // load uglifying into grunt - $ grunt uglify will create
  // new minified bundle.js file (combines index.js and logger.js) in new dist/ dir
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['babel']);

  grunt.registerTask('updated', () => {
    grunt.log.writeln(`It updated again!`);
  });

  // pull in name from initConfig above
  grunt.registerTask('default', () => {
    grunt.log.writeln(`Hello ${grunt.config.get('name')}!`);
  });
}
