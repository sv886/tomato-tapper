module.exports = function(grunt) {

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js', '*.css'],
      task: ['updated']
    }
  })

  // load watching into grunt
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('updated', () => {
    grunt.log.writeln(`It updated again!`);
  });

  // pull in name from initConfig above
  grunt.registerTask('default', () => {
    grunt.log.writeln(`Hello ${grunt.config.get('name')}!`);
  });
}
