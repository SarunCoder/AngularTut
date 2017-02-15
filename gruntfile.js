module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      release: ['dist']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: 'index.html',
            dest: 'dist/'
          }
        ]
      },
      libs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/angular/',
            src: '*.js',
            dest: 'dist/libs/angular',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'node_modules/lodash/',
            src: '*.js',
            dest: 'dist/libs/lodash/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/',
            src: '**/*',
            dest: 'dist/libs/bootstrap/'
          }
        ]
      },
      styles: {
        files: [
          {
            expand: true,
            cwd: 'styles/',
            src: '*.css',
            dest: 'dist/style/css/custom',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean','concat', 'uglify', 'copy']);

};
