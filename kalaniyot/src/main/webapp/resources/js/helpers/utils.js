// The Template Loader. Used to asynchronously load templates located in separate .html files
window.utils = {

	displayValidationErrors : function(messages) {
		for ( var key in messages) {
			if (messages.hasOwnProperty(key)) {
				this.addValidationError(key, messages[key]);
			}
		}
		this.showAlert('Warning!', 'Fix validation errors and try again',
				'alert-warning');
	},

	addValidationError : function(field, message) {
		var controlGroup = $('#' + field).parent().parent();
		controlGroup.addClass('error');
		$('.help-inline', controlGroup).html(message);
	},

	removeValidationError : function(field) {
		var controlGroup = $('#' + field).parent().parent();
		controlGroup.removeClass('error');
		$('.help-inline', controlGroup).html('');
	},

	showAlert : function(title, text, klass) {
		$('.alert').removeClass(
				"alert-error alert-warning alert-success alert-info");
		$('.alert').addClass(klass);
		$('.alert').html('<strong>' + title + '</strong> ' + text);
		$('.alert').show();
	},

	hideAlert : function() {
		$('.alert').hide();
	},

	saveAndExit : function() {
		$('.save').html('save and exit');
	}
};

TemplateManager = {
	templates : {},

	get : function(id, callback) {
		var template = this.templates[id];

		if (template) {
			callback(template);

		} else {

			var that = this;
			$.get("resources/tpl/" + id + ".html", function(template) {
				var $tmpl = _.template(template);
				that.templates[id] = $tmpl
				callback($tmpl);
			});

		}

	}

};

function capitaliseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

