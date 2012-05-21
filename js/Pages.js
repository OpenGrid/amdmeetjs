define(["backbone", "bootdata"], function (Backbone, bootdata) {
    var Pages = Backbone.Collection.extend({
        initialize : function() {
            if(bootdata != null) {
                this.reset(bootdata.data);
                bootdata = null;
            } else {
                this.url = "https://graph.facebook.com/search?q=platform&type=page";
                this.fetch();
            }
        },
        parse : function(json) {
            return json.data;
        }
    });
    return new Pages();
});