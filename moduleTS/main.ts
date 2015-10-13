/// <reference path="../typings/tsd.d.ts" />

export function bootstrap (page: PageJS.Static) {
	console.log('moduleTS loaded');
	require(['moduleTS/test'], function (test) {
		test.bootstrap(page);
	})
}