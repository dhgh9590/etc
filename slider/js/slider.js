$(document).ready(function(){ 
    
    let container = $(".slider"),
    slideGroup = container.find(".slide_list"),// find로 변수를 잡을 경우 더 빠르게 찾음
    slides = slideGroup.find(".slide"),              // 슬라이더 
    nav = container.find(".slider_nav"),          // 슬라이더 좌우 화살표 
    indicator = container.find(".indicator"),        // 슬라이더 닷을 감싸는 부모
    slideCount = slides.length,                      // 슬라이더 갯수 
    indicatorHtml = "",                              // 슬라이더 닷 : 몇개가 들어올지 모르니 빈값으로 지정
    currentIndex = 0,                                // 현재 어디를 보고 있는지 구분  
    duration = 500,                                  // 애니메이트 시간 
    easing = 'easeInOutExpo',                        // 애니메이트 이징 
    interval = 3500,                                 // 슬라이드 나타나는 시간 
    timer;                                           // 마우스가 오버되면 멈춤

    //슬라이드를 가로로 배열
    //slides 마다 할일
    //console.log(slides)

    slides.each(function(i){                                // each 메소드는 slides마다 할 일  i(i는 index 같은말) 매개변수는 순번을 가지고 옴 순번은 0부터 시작
        let newLeft = i * 100 + "%";                        // i가 순번이니 0,1,2,3... 곱하기 100 + "%"를 써주면 0번째는 0%,1번째는 100% 2번째는 200% 이런식으로 진행 
        $(this).css({left:newLeft});                        // slides를 this로 받고 this마다 css left 속성의 값을 변수 newLeft로 지정
        indicatorHtml += '<a href="">'+ (i+1) + '</a>'      // indicatorHtml 안에 a태그 + i매개변수가 0부터 시작이니 1부터 시작되게 하려면 i+1 해줘야함
        //console.log(indicatorHtml);

    });//slides.each

    // A.text(B); a요소의 b의 내용을 글씨 형태로 추가(교체)
    // A.html(B); a요소의 b의 내용을 html 형태로 추가(교체)
    indicator.html(indicatorHtml);

    // 슬라이드 이동 함수
    function goToSlide(index){
        // i = 0 left:0% , i = 1 left:-100% , i = 2 left:-200%
        slideGroup.animate({left: -100*index  + "%"}, duration);
        currentIndex = index;
        //console.log(currentIndex);

        updateNav();// 처음인지 마지막인지 검사 해주는 함수
    }//goToSlide

    function updateNav(){
        let navPrev = nav.find(".prev");
        let navNext = nav.find(".next");
        /* 처음과 끝에 도착하면 좌우버튼X
        if(currentIndex == 0){
            navPrev.addClass("disabled");
        }else{
            navPrev.removeClass("disabled");
        }
        
        if(currentIndex == slideCount - 1){
            navNext.addClass("disabled")
        }else{
            navNext.removeClass("disabled")
        }
        */


        //class에 active 추가 하기
        indicator.find("a").eq(currentIndex).addClass("active").siblings().removeClass("active"); //indicator의 a에 active 추가
        slides.eq(currentIndex).addClass("active").siblings().removeClass("active"); //slides에 active 추가
    }//updateNav

    //인디케이터로 이동하기
    indicator.find("a").click(function(e){
        e.preventDefault();
        let idx = $(this).index();
        //console.log(idx);
        goToSlide(idx);
    });

    //좌우 버튼으로 이동하기
    nav.find("a").click(function(e){
        e.preventDefault();
        if($(this).hasClass("prev")){
            if(currentIndex > 0){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(slideCount - 1);
            }
        }else{
            if(currentIndex < slideCount - 1){
                goToSlide(currentIndex + 1);
            }else{
                goToSlide(0);
            }
        }
    });
    

    //자동 슬라이드 함수
    function startTimer(){
        //일정시간 마다 할일
        //setInterval(할일,시간) / 멈추는 법 clearInterval(이름)
        timer = setInterval(function(){
            let nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        },interval);
    }
    startTimer();

    function stopTimer(){
        clearInterval(timer);
    }

    container.mouseenter(function(){
        stopTimer();
    })
    .mouseleave(function(){
        startTimer();
    });

    goToSlide(0);







    
});
