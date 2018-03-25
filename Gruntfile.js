module.exports = function(grunt) {

  // Define default task
  // $grunt default:Mudda will log with name arg
  grunt.registerTask('default', (name) => {
    grunt.log.writeln(`Hello ${name}!`);
  });
}
