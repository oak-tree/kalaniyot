/**
 * a model for definator part. note that game model should extends this model 
 * 
 * @Author oak
 */  
window.Definator =  Backbone.Model.extend({

	status:0, // for future use
	
	defaults : {
		"questionId": 1342342245000,
		"catagories": {first:"somedata",second:"anotherdata"},
		"user": "userinput",
		"status": 0,
		"txt": "soe text",
	},
	urlRoot : "keyword",

	initialize : function(parentType, parentId, innerObjectType, dbType,model) {
		this.setAttributes(parentType, parentId, innerObjectType,dbType,model);
		this.setUrls();

	},
	
	setUrls :function(){
		this.url = this.parentType + '/' + this.parentId + '/' + this.innerObjectType + 's'
	},
	
	
	/**
	 * gets the main images of current question(by id )
	 * 
	 * in: args.callback - function to run when results return
	 * 
	 * 
	 */
	getMainImages:function(args) {
		
	},
	
	/**
	 * search plant by name
	 * in: args.name - user input
	 *     args.callback - function to run when results return
	 * 
	 *  
	 */
	searchByName:function(args) {
		
		
	},
	
	/**
	 * let the user choose the search language 
	 */
	setSearchLanguage:function(args) {
		
	},
	
	/**
	 * get preview of a desire plant
	 *  
	 * @param args.plantId
	 *        args.callback
	 */
	getPlantPreview:function(args) {
		
		
	},
	 
	/**
	 * get info about a single catagory
	 * @param args.catagoryName
	 * 
	 * @returns {CatagoryObject} = {CatagoryName,CatagoryId,TotalAmount,SearchAmount}
	 */
	getCatagoryInfoByName:function(args) {
		
	},
	
	/**
	 * set search data about a single catagory in model and update the server
	 * @param args.catagoryData
	 * 		  no call back this time - views should bind model for changes
	 */
	setCatagoryInfo:function(args) {
		
	},
	
	/**
	 * @returns {catagoriesObject} = [array of CatagoryObject]
	 */
	getAllCatagories:function(){
		
	},
	
	
	
	
	/**
	 * 
	 * @param innerObjectId
	 * @param settings
	 * @returns {String}
	 */
	getPreview: function (innerObjectId, settings) {
		
		var url = this.innerObjectType +'/' + innerObjectId
		//var url = "keyword/" + this.id + "/superKeywords/remove/" + superId
		console.log('get info about this inner object ' + url);
		var self = this;
		var mustSettings = {
			url : url,
			dataType : "json",
			type : "GET"
		}
		$.extend(settings, mustSettings)

		$.ajax(settings);
		return url;
	}

	

}); 