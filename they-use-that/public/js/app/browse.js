(function() {
	var form = document.getElementById('js_search_bar');

	var queryParameters = window.location.search
		.substring(1)
		.split('&')
		.reduce(function(obj, parameter) {
			var key = parameter.split('=')[0];
			var value = parameter.split('=')[1];
			obj[key] = value;
			return obj;
		}, {});

	Object.keys(queryParameters)
		.forEach(function(key) {
			form.querySelector('*[name="' + key + '"]').value = queryParameters[key];
		});
})();
