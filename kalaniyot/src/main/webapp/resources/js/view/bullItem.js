
/**
 * basic 'bull' item
 *  
 *  
 */
window.BaseBullView = Backbone.View.extend({

	tagName : "div",	
	className:	"bull",
	template:"BullItemBasicView",
    
	
	event: {
		"click .image":"onImageClick",
		"click .name" :"onNameClick",
		"click .txt" :"nTxtClick",		
		
	},

	onImageClick:function() {
		alert('this function should be overwritten');
	},
	
	onNameClick:function(){
		alert('this function should be overwritten');	
	},
	
	onTxtClick:function(){
		alert('this function should be overwritten');
		
	},
	
	initialize : function(options) {
		
		//allow changing template from outside 
		if (this.options.template != null )
			this.template = this.options.template;
		
		//bind some events
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
	},

	render : function() {



		var that = this;
		TemplateManager.get(this.template, function(template) {

			$(that.el).html(template(that.model.toJSON()));

		});
		return this;
	},
	
	close : function() {
		$(this.el).unbind();
		$(this.el).empty();
	}
    

});