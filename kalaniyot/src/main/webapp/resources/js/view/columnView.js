
// Function to get the Min value in Array
		Array.min = function(array) {
		    return Math.min.apply(Math, array);
		};
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
window.ColumnView = Backbone.View.extend({

	
	colCount: 0,
	colWidth:150,
	margin:50,
	
	event: {
		"scroll":"onScroll", 
		"resize":"applyLayout",
		"cannge":"applyLayout"
		
	},
	
	initialize:function(options){
		this.model.bind("change", this.change, this);
		//this.model.bind("change", this.applyLayout, this);
		$(window).bind("resize.app", _.bind(this.resize, this))
		
	},
	
	remove: function() {
        // unbind the namespaced event (to prevent accidentally unbinding some
        // other resize events from other code in your app
        // in jQuery 1.7+ use .off(...)
        $(window).unbind("resize.app");

        // don't forget to call the original remove() function
        Backbone.View.prototype.remove.call(this);
        // could also be written as:
        // this.constructor.__super__.remove.call(this);
    }, 
    
    change:function(event){
    	
    	alert('bah');
    },
    resize:function(event){
    	this.applyLayout();
    },
	
	getNumberOfPage:function(){
		//TODO check if this correct - should be like window.document.height / window.screen.height
		return $(document).height()/$(window).height();
	},
	/**
	 * update view on user scroll
	 */
	onScroll:function() {
		 // Only check when we're not still waiting for data. 
	      if(isLoading){//TODO check if backbone has this kind of function?
	    	  return;
	      }
	        // Check if we're within 100 pixels of the bottom edge of the broser window.
	        var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
	        
	        
	        if(closeToBottom) {
	          this.model.fetch();//should be a collection but should pass parameters to fetch. page number ?
	          this.model.getData({page:this.getNumberOfPage(),ajaxSettings:{
	        	  
	        	  		succes:function (){
	        	  				that.processData();
	        	  				
	        	  				},
	        	  		error:function(){
	        	  			
	        	  			//do something on eror
	        	  		},
	          
	          }});
	        }
	      
		
	},


	/**
	 * seperates between processing data and setting layout. 
	 * why ? because updating the layout can be in many different times like resizing, reordering and etc..
	 * 
	 * @returns {el - html element?}
	 */
	processData:function() {

		//run on collection. render each on collection
		
		//throw event
		
		//create elList object
		$(this.elList).empty();
		$(this.el).empty();
		
		this.settings ={};
		_.each(this.model.models, function(data) {
			
			/*
			 * get next item on list
			 */
			this.settings.model = data; //use same setting for bull?
			

		
			
			/*
			 * render new BullItem
			 */
			this.settings.template  = "BullItemPlantView";
			
		//	$(this.elList).append(new BaseBullView(this.settings).render().el);
			$(this.el).append(new BaseBullView(this.settings).render().el);
					
					
		}, this);
		
		this.applyLayout();

		return this;
	},
	
	
	/** 
	 * add another items to list. this allows other views to add item(s) to the list 
	 */
	appendToList:function(data) {
		$(this.elList).append(data);
		
	},
	
	
	/**
	 * create el list from outside data. this allows other views to use this one 
	 */
	overWriteList:function(data) {
		$(this.elList).empty();
		$(this.elList).append(data);
		
	},
	
	render : function() {
			
			this.processData();
			
			/*
			 * use templateManager instead of loading whole templates on runtime
			 * $(this.el).html(this.template(this.model.toJSON())); 
			 */
		

			return this;
	},
        
       
    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    },
    
    
	setupBulls:function() {
	
		var blocks = [];

		
		/* get window width */
		/* get container width */
		/* get columns number */
		/* get columns gap */ 
		/* calc columns width */
		/* add thse to an empty array*/
		

		
		   var  windowWidth = $('#app-content').width();
		    
		    var colCount = Math.floor(windowWidth/(this.colWidth+this.margin*2));
		    for(var i=0;i<colCount;i++) {
		        blocks.push(this.margin);
		    }
		   return blocks;
		    
		
	},
    
    /**
     * this function applys columns alike layout
     */
	applyLayout:function(){
		

		var blocks = this.setupBulls();
		var that = this;
		$('.bull',this.el).each(function(index,value){
			//alert (index);
	        var min = Array.min(blocks);
	        var blockIndex = $.inArray(min, blocks);
	        var leftPos = that.margin+(blockIndex*(that.colWidth+that.margin));
	        $(this).css({
	            'left':leftPos+'px',
	            'top':min+'px'
	        });
	        blocks[blockIndex] = min+$(this).outerHeight()+that.margin; //this index wont be min any more...	
	    });
		
		
		/* for each block 
		 * 		find minimum height
		 * 		get index of this value 
		 * 		calculat left position
		 * 		apply css with left position and top position
		 * 		update array with new height
		 */
		
	},

});

window.BaseNavView = Backbone.View.extend({ //BaseView

        
    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }

});