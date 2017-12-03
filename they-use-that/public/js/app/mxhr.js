MXHR = {
	get: function(url, done) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		
		xhr.onload = function() {
			if (xhr.status === 0) {
				// Request was aborted
			} else if (xhr.status === 200) {
				done(null, xhr.responseText);
			} else {
				done(xhr.status);
			}
		};

		xhr.send();
		return xhr;
	},

	post: function(url, json, done) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", url);

		xhr.setRequestHeader("Content-Type", "application/json");
		
		xhr.onload = function() {
			if (xhr.status === 200) {
				done(null, xhr.responseText);
			} else {
				done(xhr.status, xhr.responseText);
			}
		}

		xhr.send(JSON.stringify(json));

		return xhr;
	}
};