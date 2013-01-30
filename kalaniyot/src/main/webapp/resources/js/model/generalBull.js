/**
 * a model for Garden 
 * 
 * @Author oak
 */  
window.MyGarden =  Backbone.Model.extend({

	status:0, // for future use
	
	
	/*
	 * default for My garden 
	 */
	
	defaults: { 
		"title":null,
		"imageSrc":null,
		"name":"חרדל צהוב",
		"location":"בגלבוע",
		"date":"12.12.12", // should be date serial number
		"photographer":"ישראלי מרמת השרון",
			
		
	},
	defaults : {
		"title":null,
		"imageSrc":null,
		"fieldName1":"plantName",
		"fieldText1":"שם הפרח"
		"fieldContent1":
		"userId": 1342342245000,
		"
		"user": "userinput",
		"status": 0,
		"txt": "soe text",
	},
	urlRoot : "keyword",

	
	
	
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