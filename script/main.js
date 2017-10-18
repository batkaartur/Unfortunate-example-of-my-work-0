$(document).ready(function(){
    $(".rz").click(function(){
        $(this).prev().slideToggle("slow");
        $(this).fadeToggle("slow");
        $(this).next().fadeToggle("slow");
    });
     $(".sv").click(function(){
          $(this).prev().prev().slideToggle("slow");
        $(this).fadeToggle("slow");
        $(this).prev().fadeToggle("slow");
    });
     
                    
    
    
    $(".disabled").click(function(){
        alert("Страница в разработке");
    });
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

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
