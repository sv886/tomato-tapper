module.exports = function(grunt) {

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js', '*.css']
    }
  })

  // load watching into grunt
  grunt.loadNpmTasks('grunt-contrib-watch');

  // pull in name from initConfig above
  grunt.registerTask('default', () => {
    grunt.log.writeln(`Hello ${grunt.config.get('name')}!`);
  });
}
