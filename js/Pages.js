define(["backbone"], function (Backbone) {
    var Pages = Backbone.Collection.extend({
        initialize : function() {
            this.url = "https://graph.facebook.com/search?q=platform&type=page";
            this.fetch();
        }
    });
    return new Pages();
});