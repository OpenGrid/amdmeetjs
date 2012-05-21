define(["backbone"], function (Backbone) {
    var Pages = Backbone.Collection.extend({
        initialize : function() {
            this.url = "https://graph.facebook.com/search?q=platform&type=page";
            this.fetch();
        },
        parse : function(json) {
            return json.data;
        }
    });
    return new Pages();
});