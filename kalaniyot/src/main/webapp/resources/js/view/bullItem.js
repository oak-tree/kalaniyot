
/**
 * basic 'bull' item
 *  
 *  
 */
window.BaseBullView = Backbone.View.extend({

	tagName : "div",	
	className:	"bull",
	template:"BullItemBasicView",
	vent:null,
	renderingEndedEvent:null,
	
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
		
		if (this.options.vent != null)
			this.vent = this.options.vent;
		
		if (this.options.vent != null)
			this.vent = this.options.vent;
		
		if (this.options.renderingEndedEvent != null )
			this.renderingEndedEvent = this.options.renderingEndedEvent;
		
		//bind some events
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
	},

	render : function() {



		var that = this;
		TemplateManager.get(this.template, function(template) {

			$(that.el).html(template(that.model.toJSON()));
			if ((that.renderingEndedEvent != null) && ( that.vent != null )){
				that.vent.trigger(that.renderingEndedEvent);
				
				//this.vent.trigger(this.renderingEndedEvent,value);
			}
		});
		return this;
	},
	
	close : function() {
		$(this.el).unbind();
		$(this.el).empty();
	}
    

});