$(document).ready(function(){ 

    let questions = $(".questions");
    let answer = $(".answer");
    let btn = $(".btn > ul > li");
    let item = $(".wrap .item");

    btn.click(function(e){
        e.preventDefault();
        let btnIndex = $(this).index();
        
        item.eq(btnIndex).fadeIn(600).siblings().css({display: "none"});
        $(this).addClass("active").siblings().removeClass("active");
    });

    questions.click(function(){
        let QueIndex = $(this).index();

        $(this).next().slideToggle().siblings(".answer").slideUp();
        $(this).toggleClass("active").siblings().removeClass("active");
        
        
    });


});