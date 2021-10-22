$(document).ready(function(){ 

    let btn = $(".btn > ul > li");
    let cont_box = $(".cont_box");

    btn.click(function(e){
        e.preventDefault();
        let target = $(this).index();
        cont_box.eq(target).fadeIn().siblings(".cont_box").css({display:"none"});
        btn.find("a").removeClass("active");
        $(this).find("a").addClass("active");
    });


    $(".search > .text > ul > li").click(function(){
        $(this).find(".text_list").slideToggle();
    });



});