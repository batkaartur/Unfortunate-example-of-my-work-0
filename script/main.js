$(document).ready(function(){
    $(".btn").click(function(){
      
      
      $(this).prev().removeClass("mtext");
    $(this).remove();
      
   });
    
    $(".disabled").click(function(){
        alert("Страница в разработке");
    });
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
/*$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 
 });
 });*/
    $(window).scroll(function () {
12
            if ($(this).scrollTop() > 100) {
13
                $('#up').fadeIn();
14
            } else {
15
                $('#up').fadeOut();
16
            }
17
        });
    $("#up").click(function(){

$("body").animate({"scrollTop":0},"slow");
});
    $("a[href^='#']").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    return false;
  });
})
