window.AboutView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing About View');
//        this.template = templates['Contact'];
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});