
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
window.BaseView = Backbone.View.extend({

    

	render : function() {
		
		
			/*
			 * use templateManager instead of loading whole templates on runtime
			 * $(this.el).html(this.template(this.model.toJSON())); 
			 */
		
			var that = this;
			TemplateManager.get(this.template, function(template) {

				//$(that.el).html(template(that.model.toJSON()));
				$(that.el).html(template());

			});
			return this;
	},
        
        
    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }

});

window.BaseNavView = BaseView.extend({

        
    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }

});