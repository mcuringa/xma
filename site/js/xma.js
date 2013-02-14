/*
xma.js
Version: 0.1
Author: matthew x. curinga @mxc
Author URL: http://matt.curinga.com
Github: https://github.com/mcuringa/xma

*/


//dynamically set the section height to be the height of the viewport
function sectionHeight()
{
    $("section").css("min-height", "" + $(window).height());
}

$(function() {
    sectionHeight();
    $(window).bind('resize', sectionHeight);
});

$(function()
{
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash;
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});
