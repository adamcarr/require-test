/// <reference path="../typings/tsd.d.ts" />

export function bootstrap (router: Sammy.Application) {
	console.log('moduleTS loaded');
	require(['moduleTS/test'], function (test) {
		test.bootstrap(router);
	})
}