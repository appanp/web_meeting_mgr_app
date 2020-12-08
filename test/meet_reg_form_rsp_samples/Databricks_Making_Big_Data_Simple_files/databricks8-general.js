$(document).ready(function(){
 var getImageSrc = $('.banner_bg img').attr('src');
 $('.banner').css('background-image', 'url(' + getImageSrc + ')');
 $('.banner_bg').remove();

  $(".set-bg").each(function(){
        var a=$(this).find(".get-bg img").attr("src");
        $(this).css("background-image","url("+a+")")
    }); 
});
