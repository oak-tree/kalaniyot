/**
 * a model for definator part. note that game model should extends this model 
 * 
 * @Author oak
 */  
window.MyGarden =  Backbone.Model.extend({

	status:0, // for future use
	
	defaults : {
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