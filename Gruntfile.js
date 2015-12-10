module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'src/css/styles.css' : 'src/sass/bootstrap.scss'
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'app/assets/css/styles.css': ['src/css/*.css']
				}
			}
		},

		browserify: {
			dist: {
				files: {
					'app/assets/js/app.js': ['src/js/**/*.js']
				}
			}
		},

		uglify: {
			options: {
				mangle: true,
				sourceMap: false,
				maxLineLen: 16000
			},
			dist: {
				files: {
					'app/assets/js/app.min.js': ['app/assets/js/app.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['browserify']
			},
			css: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},

		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 2,
				title: '<%= pkg.name %>',
				success: true,
				duration: 2
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-notify');

	grunt.task.run('notify_hooks');
	
	grunt.registerTask('default', ['sass', 'cssmin', 'browserify', 'uglify']);

}