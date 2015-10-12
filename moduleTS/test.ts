import {sayHello} from './test2';

export function bootstrap(router: Sammy.Application) {
	sayHello();
	
	router.get('#/moduleTS', (context) => {
		require(['text!./moduleTS.html'], (template) => {
			context.$element().html(template);
		});
	});
}