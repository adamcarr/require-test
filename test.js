define(['sammy', 'jquery'], function (Sammy, $) {
	return {
		bootstrap: function (modules) {
			console.log('loaded');
			
			var router = Sammy('#container');
			
			router.route('#/', function (context) {
				require(['text!./root.html'], function (template) {
					context.$element().html(template);
				});
			});
			
			Object.keys(modules).forEach(function (moduleKey) {
				requirejs([modules[moduleKey] + 'main.js'], function (moduleBootstrapper) {
					moduleBootstrapper.bootstrap(router);
				});
			});
			
			router.run('#/');
		}
	};
})