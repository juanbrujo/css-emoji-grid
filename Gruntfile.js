module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    usebanner: 'grunt-banner'
  });

  grunt.initConfig({

    pkg: grunt.file.readJSON("emoji-grid.json"),
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *\n" +
        " *  <%= pkg.homepage %>\n" +
        " *  Demo: <%= pkg.demo %>\n" +
        " *\n" +
        " *  Author: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
        " *  License: <%= pkg.licenses[0].type %>\n" +
        " *  <%= pkg.licenses[0].copyright %>\n" +
        " */\n"
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      build: {
          files: {
            'dist/emoji-grid.min.css': 'dist/emoji-grid.css'
          }
      }
    },
    usebanner: {
      taskName: {
        options: {
          position: "top",
          banner: "<%= meta.banner %>",
          linebreak: true
        },
        files: {
          src: [ 'dist/*.css']
        }
      }
    },
    sass: {
      build: {
        options: {
          style: "compact"
        },
        files: [{
          expand: true,
          cwd: "src",
          src: [ "*.scss" ],
          dest: "dist",
          ext: ".css"
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 3 versions", "ie 8", "ie 9"],
        cascade: false,
        map: true
      },
      target: {
        src: "dist/*.css"
      },
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ["src/*.scss"],
        tasks: ["newer:sass","newer:autoprefixer"]
      }
    }
  });

  grunt.registerTask("default", ["newer:sass","watch"]);
  grunt.registerTask("build",   ["sass","cssmin:build","usebanner"]);

};