import {sayHello} from './test2';
import * as pageManager from 'page-manager';

export function bootstrap(router: Sammy.Application) {
	sayHello();
	
	router.get('#/moduleTS', (context) => {
		require(['text!./moduleTS.html', 'text!./moduleTS.css'], (template, style) => {
			pageManager.render(template, style);
		});
	});
}