module.exports = function(grunt) {

  grunt.initConfig({
    name: 'class'
  })

  // pull in name from initConfig above
  grunt.registerTask('default', (name) => {
    grunt.log.writeln(`Hello ${grunt.config.get('name')}!`);
  });
}
