define(['sammy', 'jquery', 'page-manager'], function (Sammy, $, pageManager) {
	return {
		bootstrap: function (modules) {
			console.log('loaded');
			
			var router = Sammy('#container');
			
			router.route('#/', function (context) {
				require(['text!./root.html', 'text!./root.css'], function (template, style) {
					pageManager.render(template, style);
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