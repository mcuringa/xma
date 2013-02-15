/*
xma.js
Version: 0.1
Author: matthew x. curinga @mxc
Author URL: http://matt.curinga.com
Github: https://github.com/mcuringa/xma

*/

//vertically assign elements within vmid
function vmid()
{
    var h = $(window).height();
    $(".vmid").each(function() {
        console.log(h)
        var dif = h -$(this).height();
        var m = Math.round(dif/2);
        console.log(m);
        $(this).css("margin-top", "" + m + "px");});
}

//dynamically set the section height to be the height of the viewport
function sectionHeight()
{
    $("section").css("min-height", "" + $(window).height() + "px");
}

//call the sectionHeight() function when the page loads
//also, bind it to the window resize event, so that the height
//is reset if the browser window is resized
$(function() {
    sectionHeight();
    vmid();
    $(window).bind('resize', sectionHeight);
    $(window).bind('resize', vmid);
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
