window.HeaderView = BaseNavView.extend({

	tagName:"div",
	className:"bar bar-wide  is-top is-shade-top",
    initialize: function () {
    
    this.template = "HeaderView";
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