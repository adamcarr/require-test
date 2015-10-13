define(['jquery'], function ($) {
	return {
		render: function (content, style) {
			$('#style').html('<style scoped>' + style + '</style>');
			$('#container').html(content);
		}
	};
});