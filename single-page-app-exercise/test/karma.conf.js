module.exports = function(config){
	'use strict';

	// Configuration
	config.set({

		// Enable / disable watching file and executing tests whenever any file changes,
		// this can also be watched from Grunt (so set it to false)
		autoWatch: false,

		// Base path, that will be used to resolve files and excludes
		basePath: '../',

		// Continuous integration mode
		// If true, it captures browsers, run tests and exits
		singleRun: false,

		// Colors
		colors: true,

		// Testing framework to use (jasmine, mocha, qunit...)
		// as well as any additional frameworks (requirejs, chai, sinon...)
		frameworks: [ 'jasmine' ],

		// Reporters, progress is the default reporter
		reporters: [ 'progress', 'coverage' ],

		// Start these browsers, currently available (if karma browser launcher is installed):
		// Possibilities to use (Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows))
		browsers: [ 'PhantomJS', 'Chrome', 'Firefox', 'Safari' ],

		// Which plugins to enable
		plugins: [
			'karma-junit-reporter',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-safari-launcher',
			'karma-jasmine',
			'karma-coverage',
			'karma-ng-html2js-preprocessor'
		],

		// Plugin settings
		coverageReporter: {
			// Type of file to output, use text to output to console
			type: 'text',
			// Directory where coverage results are saved
			dir: 'text/coverage/',
			// If type is text or text-summary, you can set the file name
			// file: 'coverage.txt'
		},
		junitReporter: {
			outputFile: 'test-results/junit-results.xml'
		},
		ngHtml2JsPreprocessor: {
			stripPrefix: 'app/',
			moduleName: 'singlePageAppExerciseApp.templates'
		},

		// List of files / patterns to load in the browsers
		files: [

			// 3rd party code
			// bower:js
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-aria/angular-aria.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/angular-cookies/angular-cookies.js',
			'bower_components/angular-loading-bar/build/loading-bar.js',
			'bower_components/angular-local-storage/dist/angular-local-storage.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/moment/moment.js',
			'bower_components/angular-momentjs/angular-momentjs.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-touch/angular-touch.js',
			'bower_components/angular-ui-mask/dist/mask.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-ui-scroll/dist/ui-scroll.js',
			'bower_components/angular-ui-scrollpoint/dist/scrollpoint.js',
			'bower_components/angular-ui-event/dist/event.js',
			'bower_components/angular-ui-validate/dist/validate.js',
			'bower_components/angular-ui-indeterminate/dist/indeterminate.js',
			'bower_components/angular-ui-uploader/dist/uploader.js',
			'bower_components/angular-ui-utils/index.js',
			'bower_components/fastclick/lib/fastclick.js',
			'bower_components/jquery.cookie/jquery.cookie.js',
			'bower_components/jquery-placeholder/jquery.placeholder.js',
			'bower_components/foundation/js/foundation.js',
			'bower_components/jquery.nicescroll/jquery.nicescroll.js',
			'bower_components/json3/lib/json3.js',
			'bower_components/lodash/lodash.js',
			'bower_components/restangular/dist/restangular.js',
			'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
			'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.hacks.js',
			'bower_components/tether/tether.js',
			'bower_components/hammerjs/hammer.js',
			'bower_components/foundation-apps/dist/js/foundation-apps.js',
			'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
			'bower_components/angular-ui-grid/ui-grid.js',
			'bower_components/angular-material/angular-material.js',
			'bower_components/gsap/src/uncompressed/TweenMax.js',
			'bower_components/ngFx/dist/ngFx.js',
			'bower_components/ngBrowserInfo/dist/ngBrowserInfo.js',
			'bower_components/angular-mocks/angular-mocks.js',
			// endbower

			// Application code
			'app/components/app.js',
			'app/components/global/configs.js',
			'app/components/global/runs.js',
			'app/components/content/directives.js',
			'app/components/footer/directives.js',
			'app/modules/edit/controllers.js',
			'app/modules/edit/services.js',
			'app/modules/list/controllers.js',

			// App HTML & CSS
			// injector:html
			'app/components/accordion/accordion-item.html',
			'app/components/accordion/accordion.html',
			'app/components/actionsheet/actionsheet-button.html',
			'app/components/actionsheet/actionsheet-content.html',
			'app/components/actionsheet/actionsheet.html',
			'app/components/content/templates/error.html',
			'app/components/content/templates/loader.html',
			'app/components/footer/templates/footer.html',
			'app/components/modal/modal.html',
			'app/components/notification/notification-set.html',
			'app/components/notification/notification-static.html',
			'app/components/notification/notification.html',
			'app/components/offcanvas/offcanvas.html',
			'app/components/panel/panel.html',
			'app/components/popup/popup.html',
			'app/components/tabs/tab-content.html',
			'app/components/tabs/tab.html',
			'app/components/tabs/tabs.html',
			'app/modules/edit/templates/edit.html',
			'app/modules/list/templates/list.html',
			// endinjector:html
			'.tmp/styles/main.css',

			// Test code
			'test/spec/**/*.js'

		],

		// List of files / patterns to exclude
		exclude: [],

		// Map of preprocessors that are mostly used for plugins
		preprocessors: {
			'app/components/**/*.html': [ 'ng-html2js' ],
			'app/modules/**/*.html': [ 'ng-html2js' ]
		},

		// Level of logging
		// Possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Uncomment the following lines if you are using Grunt's server to run the tests
		proxies: { '/': 'http://localhost:9001' },
		// URL root prevent conflicts with the site root
		urlRoot: '_karma_',

	});

};