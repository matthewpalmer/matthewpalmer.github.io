(function() {
	function makeView() {
		var self = {};

		self.elements = {
			originalToolFields: document.getElementById('js_tool_fields_unbesmirched'),
			newToolButton: document.getElementById('js_new_tool'),
			addedTools: document.getElementById('js_tools_added'),
			currentTool: document.getElementById('js_tool_fields_transient'),
			cancelToolButton: document.getElementById('js_cancel_tool'),
		};

		self.events = {
			clickedNewToolButton: function() {},
			clickedCancelToolButton: function() {},
		};

		self._bind = function() {
			self.elements.cancelToolButton.addEventListener('click', function() {
				self.events.clickedCancelToolButton();
			});

			self.elements.newToolButton.addEventListener('click', function() {
				self.events.clickedNewToolButton();
			});
		};

		self._getFields = function() {
			return self.elements.currentTool.querySelectorAll('input, textarea') || [];
		}

		self._makeHiddenInput = function(index, field, value) {
			var hidden = document.createElement('input');
			hidden.type = 'hidden';
			hidden.name = 'tools[' + index + '][' + field + ']';
			hidden.value = value;
			return hidden;
		}

		self.render = function(state) {
			var focusFirst = false;

			if (state.currentTool) {
				self.elements.cancelToolButton.classList.toggle('hidden', false);
				self.elements.newToolButton.innerText = 'Save';
				focusFirst = true;
			} else {
				self.elements.cancelToolButton.classList.toggle('hidden', true);
				self.elements.newToolButton.innerText = 'New Tool';
			}

			if (state.currentTool) {
				for (var i = 0; i < self.elements.originalToolFields.childNodes.length; i++) {
					self.elements.currentTool.appendChild(self.elements.originalToolFields.childNodes[i].cloneNode(true));
				}
			} else {
				self.elements.currentTool.innerHTML = '';
			}

			// Reset the contents of our fields
			var fields = self._getFields();
			for (var i = 0; i < fields.length; i++) {
				fields[i].value = '';
			}

			if (state.addedTools) {
				self.elements.addedTools.innerHTML = '';

				state.addedTools.forEach(function(tool, index) {
					if (!tool.name) tool.name = 'Unnamed tool';

					var entry = document.createElement('li');
					entry.className = 'added_tool message info';
					entry.innerText = tool.name;

					entry.appendChild(self._makeHiddenInput(index, 'name', tool.name));
					entry.appendChild(self._makeHiddenInput(index, 'description', tool.description));
					entry.appendChild(self._makeHiddenInput(index, 'link', tool.link));
					entry.appendChild(self._makeHiddenInput(index, 'owner_comment', tool.owner_comment));
					entry.appendChild(self._makeHiddenInput(index, 'source', tool.source));

					self.elements.addedTools.appendChild(entry);
				})
			}

			if (focusFirst) {
				setTimeout(function() {
					var fields = self._getFields();
					if (fields && fields[0]) fields[0].focus();
				}, 100);
			}
		};

		self.fieldValues = function() {
			var fields = self._getFields();
			var obj = {};

			for (var i = 0; i < fields.length; i++) {
				obj[fields[i].name] = fields[i].value;
			}

			return obj;
		};

		// Get started
		self._bind();

		return self;
	}

	function makeController(view, model) {
		var self = {
			view: view,
			model: model
		};

		self.events = {
			toolStateChange: function() {}
		};

		self.view.events.clickedCancelToolButton = function() {
			self.model.currentTool = null;
			self.view.render(self.model);
			self.events.toolStateChange(self.model);
		};

		self.view.events.clickedNewToolButton = function() {
			if (self.model.currentTool) {
				// Button acting as save button. Add the new tool to our collection.
				var newTool = self.view.fieldValues();
				self.model.addTool(newTool);
				self.model.currentTool = null;
			} else {
				// Start a new tool
				self.model.currentTool = {};
			}

			self.view.render(self.model);
			self.events.toolStateChange(self.model);
		};

		return self;
	}

	function makeModel() {
		var self = {};

		self.currentTool = null;
		self.addedTools = [];

		self.addTool = function(tool) {
			self.addedTools.push(tool);
		};

		return self;
	}

	var toolApp = makeController(makeView(), makeModel());

	var formSubmit = document.getElementById('creator_form_submit');

	toolApp.events.toolStateChange = function(state) {
		if (state.currentTool) {
			// In the midst of editing a tool
			formSubmit.disabled = true;
		} else {
			formSubmit.disabled = false
		}
	};
})();