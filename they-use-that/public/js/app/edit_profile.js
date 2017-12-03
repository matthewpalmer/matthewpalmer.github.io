(function() {
	var xhr;

	var NEW_TOOL_TEMPORARY_SLUG = 'NEW_TOOL_TEMP_iuy&fd$yUYFUDNjek9778$fda&8fd';
	var NEW_TOOL_PREFIX = '';

	var submitButton = document.getElementById('js_tool_submit');
	var lastToolSlug;

	function getField(field) {
		return document.querySelector('#js_add_tool *[name="' + field + '"]');
	}

	function fieldsToObj(fields) {
		var obj = {};
		fields.forEach(function(field) {
			obj[field] = getField(field).value;
		})
		return obj;
	}

	function bindErrorDisplay() {
		var invalidEls = document.querySelectorAll('#js_add_tool .invalid-input');

		for (var i = 0; i < invalidEls.length; i++) {
			invalidEls[i].addEventListener('focus', function(e) {
				e.target.classList.toggle('invalid-input', false);
			})
		}
	}

	submitButton.addEventListener('click', function(e) {
		e.preventDefault();

		var path = window.location.pathname.split('/');
		var slug = path[path.length - 2];
		
		var thingFields = [ "name", "description", "link" ];
		var profileThingFields = ["owner_comment", "source" ];

		var thing = fieldsToObj(thingFields);

		if (lastToolSlug && lastToolSlug !== NEW_TOOL_TEMPORARY_SLUG) {
			thing.slug = lastToolSlug;
		}

		var profile_thing = fieldsToObj(profileThingFields);

		MXHR.post('/api/v1/profile_things', 
			{ profile: slug, profile_thing: profile_thing, thing: thing }, 
			function(err, data) {
				if (err) {
					data = JSON.parse(data);
					
					if (data.invalid_fields) {
						data.invalid_fields.forEach(function(field) {
							var fieldEl = getField(field);
							if (!fieldEl || fieldEl.classList.contains('hidden')) return;
							fieldEl.classList.toggle('invalid-input', true);
						})

						bindErrorDisplay();
					}
				}
		})
	})
	
	function possibleNewTool(term) {
		return {
			slug: NEW_TOOL_TEMPORARY_SLUG,
			name: NEW_TOOL_PREFIX + term
		}
	}

	function getToolDetailElements() {
		return document.querySelectorAll('.js_new_tool_info')
	}

	function showToolDetails(on) {
		var elements = getToolDetailElements();
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.toggle('hidden', !on);
		}
	}

	function clearToolDetails() {
		var elements = getToolDetailElements();

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			element.value = '';
			element.disabled = false;
			element.classList.toggle('invalid-input', false);
		}
	}

	function fillToolDetails(tool) {
		var elements = getToolDetailElements();
		var fields = Object.keys(tool);

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var fieldIndex = fields.indexOf(element.getAttribute('name'));
			if (fieldIndex === -1) {
				element.value = '';
				element.disabled = false;
				continue;
			};

			element.value = tool[fields[fieldIndex]];
			element.disabled = true;
		}
	}

	var model = {};
	var lastResponse = [];

	var ac = new autoComplete({
	    selector: '#js_tool_search',
	    minChars: 1,
	    defaultToFirst: true,
	    source: function(term, response){
	        try { xhr.abort(); } catch(e){}
	        xhr = MXHR.get('/api/v1/things?name=' + term, function(err, data) {
	        	var json = JSON.parse(data);
	        	json.push(possibleNewTool(term));

	        	lastResponse = json;
	        	response(lastResponse);
	        });
	    },
	    onSelect: function(event, term, item) {
	    	console.log('selected', event, term, item);
	    	var slug = item.getAttribute('data-slug');
	    	lastToolSlug = slug;
	    	if (!slug) return;

	    	var tool = lastResponse.filter(function(result) { return result.slug === slug })[0];
	    	if (!tool) return;

	    	var nextField;
	    	if (tool.slug !== NEW_TOOL_TEMPORARY_SLUG) {
	    		showToolDetails(true);
	    		fillToolDetails(tool);
	    		nextField = document.getElementById('js_owner_comment');
	    	} else {
	    		showToolDetails(true);
	    		fillToolDetails({});
	    		nextField = getToolDetailElements()[0];
	    	}

	    	setTimeout(function() {
	    		nextField.focus();
	    	}, 100);
	    },
	    renderItem: function (item, search){
	        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
	        return '<div class="autocomplete-suggestion" data-slug="' + item.slug + '" data-val="' + item.name + '">' + item.name.replace(re, "<b>$1</b>") + '</div>';
	    }
	});

})();
