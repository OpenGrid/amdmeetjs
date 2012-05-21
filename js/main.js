require.config({
    paths : {
        backbone    : "libs/backbone",
        jquery      : "libs/jquery",
        underscore  : "libs/underscore"
    }
});
require(["Pages"], function(pages){
    console.log(pages);
});
