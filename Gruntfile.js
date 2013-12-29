
module.exports = function(grunt) {
    grunt.initConfig({

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "",
                  src: "**/*.jade",
                  dest: "html/",
                  ext: ".html",
                  expand: true
                } ]
            }
        },
        watch: {
            files: ['**/*.jade'],
            tasks: ['jade'],
            options: {
              interrupt: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    // To run: $ grunt watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // this would be run by typing "grunt test" on the command line
    //grunt.registerTask('test', ['jshint', 'qunit']);

    // the default task can be run just by typing "grunt" on the command line
    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default',['jade']);
};
