var entreprenuership = document.getElementById('entrepreneurship');
var ent_blog = document.getElementById('ent_blog');
var economics = document.getElementById("economics");
var eco_blog = document.getElementById('eco_blog');

var finance = document.getElementById("finance");
var fin_blog = document.getElementById('fin_blog');


window.onscroll = function() {
    console.log("Onscroll");
    if (checkVisible(entreprenuership)) {
        console.log(ent_blog);

        $(ent_blog).addClass('blog_catvisible');
    } else if ($(ent_blog).hasClass("blog_catvisible"))
        $(ent_blog).removeClass("blog_catvisible");

    if (checkVisible(economics)) {
        console.log("Economics");
        $(eco_blog).addClass("blog_catvisible");
    } else if ($(eco_blog).hasClass("blog_catvisible")) {
        $(eco_blog).removeClass("blog_catvisible");
    }

    if (checkVisible(finance)) {
        console.log("Finance");
        $(fin_blog).addClass("blog_catvisible");
    } else if ($(fin_blog).hasClass("blog_catvisible")) {
        $(fin_blog).removeClass("blog_catvisible");
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}