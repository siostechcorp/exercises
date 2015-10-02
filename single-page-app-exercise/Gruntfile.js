// Generated on 2015-09-28 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/{components,modules}/**/*.js'],
        tasks: ['newer:jshint:all', 'injector:scripts'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/unit/{,*/}*.js', 'test/midway/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      // * Introduced Sass
      // styles: {
      //   files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
      //   tasks: ['newer:copy:styles', 'autoprefixer']
      // },
      sass: {
        files: ['<%= yeoman.app %>/{components,modules}/**/*.{scss,sass}'],
        tasks: ['sass']
      },
      html: {
        files: ['<%= yeoman.app %>/{components,modules}/**/*.html'],
        tasks: ['ngtemplates']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          // '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/templates.js',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/{components,modules}/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/{,*/}*.js', 'test/midway/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    // * I don't use this because Compass takes care it for you.
    // autoprefixer: {
    //   options: {
    //     browsers: ['last 1 version']
    //   },
    //   server: {
    //     options: {
    //       map: true,
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '.tmp/styles/',
    //       src: '{,*/}*.css',
    //       dest: '.tmp/styles/'
    //     }]
    //   },
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '.tmp/styles/',
    //       src: '{,*/}*.css',
    //       dest: '.tmp/styles/'
    //     }]
    //   }
    // },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//,
        exclude: [
          /json3/,
          /es5-shim/,
          /font-awesome.css/,
          /foundation.css/,
          /foundation.js/,
          /foundation-apps.css/
        ]
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        },
        exclude: [
          /es5-shim/
        ]
      },
      sass: {
        src: ['<%= yeoman.app %>/components/global/styles/main.scss'],
        ignorePath: /(\.\.\/){1,4}bower_components\//,
        exclude: [
          /bootstrap-sass/
        ]
      }
    },

    // Automatically inject development components into the app
    injector: {
      // Inject script components into index.html
      scripts: {
        options: {
          transform: function(filePath){
            filePath = filePath.replace('/app/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector:js -->'
        },
        files: {
          '<%= yeoman.app %>/index.html': [
            '{.tmp,<%= yeoman.app %>}/{components,modules}/**/*.js',
            '!<%= yeoman.app %>/components/app.js',
            '!<%= yeoman.app %>/components/global/configs.js',
            '!<%= yeoman.app %>/components/global/runs.js'
          ]
        }
      },
      // Inject script components into test configuration file
      scriptsTest: {
        options: {
          transform: function(filePath){
            filePath = filePath.replace('/app/', 'app/');
            return '\'' + filePath + '\',';
          },
          starttag: '// injector:js',
          endtag: '// endinjector'
        },
        files: {
          'test/karma.conf.js': [
            '{.tmp,<%= yeoman.app %>}/{components,modules}/**/*.js',
            '!<%= yeoman.app %>/components/app.js',
            '!<%= yeoman.app %>/components/global/configs.js',
            '!<%= yeoman.app %>/components/global/runs.js'
          ]
        }
      },
      // Inject html components into test configuration file
      htmlTest: {
        options: {
          transform: function(filePath){
            filePath = filePath.replace('/app/', 'app/');
            return '\'' + filePath + '\',';
          },
          starttag: '// injector:html',
          endtag: '// endinjector'
        },
        files: {
          'test/karma.conf.js': [
            '<%= yeoman.app %>/{components,modules}/**/*.html'
          ]
        }
      },
      // Inject _settings.scss components into main.scss
      settingsSass: {
        options: {
          transform: function(filePath){
            filePath = filePath.replace('/app/components/', '');
            filePath = filePath.replace('/app/modules/', '');
            filePath = filePath.replace('_settings.scss', 'settings');
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector:settings',
          endtag: '// endinjector:settings'
        },
        files: {
          '<%= yeoman.app %>/components/global/styles/main.scss': [
            '<%= yeoman.app %>/{components,modules}/**/_settings.scss',
            '!<%= yeoman.app %>/components/global/styles/_settings.scss'
          ]
        }
      },
      // Inject _styles.scss components into main.scss
      stylesSass: {
        options: {
          transform: function(filePath){
            filePath = filePath.replace('/app/components/', '');
            filePath = filePath.replace('/app/modules/', '');
            filePath = filePath.replace('_styles.scss', 'styles');
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector:styles',
          endtag: '// endinjector:styles'
        },
        files: {
          '<%= yeoman.app %>/components/global/styles/main.scss': [
            '<%= yeoman.app %>/{components,modules}/**/_styles.scss',
            '!<%= yeoman.app %>/components/global/styles/_styles.scss'
          ]
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      server: {
        options: {
          loadPath: [
            '<%= yeoman.app %>/components',
            '<%= yeoman.app %>/modules',
            './bower_components'
          ],
          compass: true
        },
        files: {
          '.tmp/styles/main.css': '<%= yeoman.app %>/components/global/styles/main.scss'
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    ngtemplates: {
      options: {
        module: 'singlePageAppExerciseApp'
      },
      main: {
        cwd: '<%= yeoman.app %>',
        src: '{components,modules}/**/*.html',
        dest: '.tmp/templates.js'
      },
      foundation: {
        cwd: 'bower_components/foundation-apps/js/angular',
        src: 'components/**/*.html',
        dest: '.tmp/foundation-templates.js'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>/fonts'
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass',
        'ngtemplates'
      ],
      test: [
        'sass',
        'ngtemplates'
      ],
      dist: [
        'sass',
        'imagemin',
        'svgmin',
        'ngtemplates'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'injector:settingsSass',
      'injector:stylesSass',
      'concurrent:server',
      'injector:scripts',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'injector:settingsSass',
    'injector:stylesSass',
    'concurrent:test',
    'injector:scripts',
    'injector:scriptsTest',
    'injector:htmlTest',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'injector:settingsSass',
    'injector:stylesSass',
    'concurrent:dist',
    'injector:scripts',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
