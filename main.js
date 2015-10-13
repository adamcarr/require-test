var modules = {
	'module1': 'http://localhost:8080/module1/',
	'moduleTS': 'http://localhost:8081/'
};

function getConfig() {
	var config = {};
	Object.keys(modules).forEach(function (key) {
		config[key] = modules[key];
	});

	config['jquery'] = '/bower_components/jquery/dist/jquery.min';
	config['sammy'] = '/bower_components/sammy/lib/min/sammy-latest.min';
	config['page'] = '/bower_components/page/page';
	config['text'] = '/bower_components/text/text';
	config['page-manager'] = './page-manager';
	return config;
}

requirejs.config({
	paths: getConfig(),
	shim: {
		sammy: {
			deps: ['jquery'],
			exports: 'Sammy'
		}
	},
	config: {
		text: {
			useXhr: function (url, protocol, hostname, port) {
				return true;
			}
		}
	}
});


requirejs(['./test'], function (test) {
	test.bootstrap(modules);
});