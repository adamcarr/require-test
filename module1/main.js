define([], function () {
	return {
		bootstrap: function () {
			console.log('module1 loaded');
			requirejs(['module1/test'], function (test) {
				test.bootstrap();
			})
		}
	};
	
});