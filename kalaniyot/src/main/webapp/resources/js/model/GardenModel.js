/**
 * a model for Garden 
 * 
 * @Author oak
 */  
window.BullPlant =  Backbone.Model.extend({

	status:0, // for future use
	
	
	/*
	 * default for My garden 
	 */
	
	defaults: { 
		"title":null,
		"plantImage":"rakafot.png",
		"plantName":"רקפות",
		"plantLocation":"בגלבוע",
		"plantDate":"12.12.12", // should be date serial number
		"plantPhotographer":"ישראלי מרמת השרון",
			
		
	},
	
	urlRoot : "keyword",

});
	

window.PlantCollection =  Backbone.Collection.extend({

	model : BullPlant,
	urlRoot : "keyword",
	page:0,
	
	url: function () {
		return '/plantes/page' + this.page;
	},
	

}); 