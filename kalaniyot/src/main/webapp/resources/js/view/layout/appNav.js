window.AppNavView = BaseNavView.extend({
	tagName : "div",
	className : "app-nav is-centered",

	initialize : function() {
		this.template = "AppNavView";
	},
	
	render : function() {

		var that = this;
		TemplateManager.get(this.template, function(template) {

			// $(that.el).html(template(that.model.toJSON()));
			$(that.el).html(template());
			
			
		});
		
		return this;
	},
             
	


});

window.AppContactView =  BaseView.extend({
	tagName : "div",
	//className : "masonry",

	initialize : function() {
		this.template = "AppContantView";
	},
	render : function() {

		var that = this;
		TemplateManager.get(this.template, function(template) {

			// $(that.el).html(template(that.model.toJSON()));
			$(that.el).html(template());
			
			
		});
		
		return this;
	},
          

	

});
