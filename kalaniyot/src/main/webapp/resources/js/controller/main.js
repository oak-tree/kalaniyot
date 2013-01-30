window.Router = Backbone.Router.extend({

	
	elColumnsObjects:null, //holds the object that needs to be order in columns
	
	
	routes : {
		//"" : "home",
		"contact" : "contact",
		"about" : "about",
		"garden/:user_id" : "myGarden",
				
	//"search/full/:key":	"fullSearch"

	},

	

	initialize : function() {
		this.headerView = new HeaderView();
		this.appNavView = new AppNavView();
		this.appContantView = new AppContactView();
		
		$('#header').html(this.headerView.render().el);
		$('#app-nav').html(this.appNavView.render().el);
//		$('#app-content').html(this.appContantView.render().el);
//		$('#app-content').append(this.appContantView.render().el);
//		$('#app-content').append(this.appContantView.render().el);
//		$('#app-content').append(this.appContantView.render().el);
//		$('#app-content').append(this.appContantView.render().el);
		  
//		    $('#app-content .masonry').masonry({
//		      itemSelector: '.bool',
//		      columnWidth: 200,
//		      containerMinHeight:$('#app-content').height,
//		     // isAnimated: !Modernizr.csstransitions,
//		      isFitWidth: false
//		    });
//		    
		    
		    this.bullPlant = new BullPlant(); 
		    this.bullPlantView = new BaseBullView({model:this.bullPlant,template:"BullItemPlantView"});
		    $('#app-content').html(this.bullPlantView.render().el);
	
		

	},
	
	garden:function(userId){
		
//		var garden = New Garden({id:userId});
		
		
		if (!this.gardenView) {
			this.gradenView = new GardenView();
			this.gardenView.render();
			
		
		}
		
		garden.fetch({
			success : function(data) {
				// Note that we could also 'recycle' the same instance of
				// EmployeeFullView
				// instead of creating new instances
				$('#app-contant').html(gardenView({
					model : data
				}).render().el);
			}
		});
		
		
		
	},

	home : function() {
		// Since the home view never changes, we instantiate it and render it
		// only once
		if (!this.homeView) {
			this.homeView = new HomeView();
			this.homeView.render();
		} else {
			this.homeView.delegateEvents(); // delegate events when the view is
			// recycled
		}
		$(".app-content").html(this.homeView.el);
		this.headerView.select('home-menu');
	},

	contact : function() {
		if (!this.contactView) {
			this.contactView = new ContactView();
			this.contactView.render();
		}
		$('.app-content').html(this.contactView.el);
		this.headerView.select('contact-menu');
	},

	about : function() {
		if (!this.aboutView) {
			this.aboutView = new AboutView();
			this.aboutView.render();
		}
		$('.app-content').html(this.aboutView.el);
		this.headerView.select('about-menu');
	},



});




	app = new Router();
	Backbone.history.start();


