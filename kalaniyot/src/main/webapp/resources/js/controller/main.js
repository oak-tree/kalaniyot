window.Router = Backbone.Router.extend({

	routes : {
		"" : "home",
		"contact" : "contact",
		"about" : "about",
		"mygarden" : "myGarden",
				
	//"search/full/:key":	"fullSearch"

	},

	

	initialize : function() {
		this.headerView = new HeaderView();
		this.appNavView = new AppNavView();
		this.appContantView = new AppContactView();
		
		$('#header').html(this.headerView.render().el);
		$('#app-nav').html(this.appNavView.render().el);
		$('#app-content').html(this.appContantView.render().el);
		$('#app-content').append(this.appContantView.render().el);
		$('#app-content').append(this.appContantView.render().el);
		$('#app-content').append(this.appContantView.render().el);
		$('#app-content').append(this.appContantView.render().el);
		  
		    $('#app-content .masonry').masonry({
		      itemSelector: '.bool',
		      columnWidth: 200,
		      containerMinHeight:$('#app-content').height,
		     // isAnimated: !Modernizr.csstransitions,
		      isFitWidth: false
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
		$(".app-contant").html(this.homeView.el);
		this.headerView.select('home-menu');
	},

	contact : function() {
		if (!this.contactView) {
			this.contactView = new ContactView();
			this.contactView.render();
		}
		$('.app-contant').html(this.contactView.el);
		this.headerView.select('contact-menu');
	},

	about : function() {
		if (!this.aboutView) {
			this.aboutView = new AboutView();
			this.aboutView.render();
		}
		$('.app-contant').html(this.aboutView.el);
		this.headerView.select('about-menu');
	},



});




	app = new Router();
	Backbone.history.start();


