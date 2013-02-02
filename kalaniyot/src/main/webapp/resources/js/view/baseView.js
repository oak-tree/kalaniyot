
/*
 *   $(function(){
    
    $('#container').masonry({
      itemSelector: '.box',
      columnWidth: 200,
     // isAnimated: !Modernizr.csstransitions,
      isFitWidth: true
    });
    
  });
 */

/**
 * view to setup main layout 
 * this view allows 1. fetch collection, bulls according to data and apply layout 
 * 					2. insert data manually and apply layout 
 */
window.BaseView = Backbone.View.extend({

    
	event: {
		"scroll":"onScroll", 
		"resize":"applyLayout",
		
	},
	
	initialize:function(options){
		//this.model.bind("change", this.render, this);
		//this.model.bind("change", this.applyLayout, this);
		if (options.template != null)
			this.template = this.options.template;
		
		
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

window.BaseNavView = BaseView.extend({ //BaseView

        
    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }

});