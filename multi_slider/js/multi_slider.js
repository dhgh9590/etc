$(document).ready(function(){


 
 // let slides = $(".slides"),
        //     slide = slides.find("li"),
        //     currenIdx = 0,
        //     slideCount = slide.length,
        //     prevBtn = $(".prev"),
        //     nextBtn = $(".next");

        let slides = document.querySelector(".slides"),
            slide = document.querySelectorAll(".slides li"),
            currenIdx = 0,
            slideCount = slide.length,
            slideWidth = 300,
            slideMargin = 30,
            prevBtn = document.querySelector(".prev"),
            nextBtn = document.querySelector(".next");


            makeClone();

            function makeClone(){
                for(let i=0; i<slideCount; i++){
                    //a.cloneNode() a요소를 그대로 복사 / a.cloneNode(true) a의 자식요소 까지 모두 복사
                    let cloneSlide = slide[i].cloneNode(true);
                    cloneSlide.classList.add("clone");
                    //a.appendChild(b) a요소의 기존의 내용의 뒤에다가 b를 추가
                    slides.appendChild(cloneSlide);
                }
                for(let i=slideCount-1; i>=0;i--){
                    let cloneSlide = slide[i].cloneNode(true);
                    cloneSlide.classList.add("clone");
                    //a.prepend(b) a요소의 기존의 내용의 앞에다가 b를 추가
                    slides.prepend(cloneSlide);
                }
                setInitialPos();
                
                setTimeout(function(){
                    slides.classList.add("animated");
                },100);
            }

            function setInitialPos(){ //추가 + 기존 + 추가 중 기존의 위치로 변경
                let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
                slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
            }

            nextBtn.addEventListener("click",function(){
                moveSlide(currenIdx + 1);
            });
            prevBtn.addEventListener("click",function(){
                moveSlide(currenIdx - 1);
            });

            function moveSlide(num){
                slides.style.left = -num * 330 + "px";
                currenIdx = num;

                if(currenIdx == slideCount || currenIdx == -slideCount){
                    setTimeout(function(){
                        slides.classList.remove('animated');
                        slides.style.left = "0px";
                        currenIdx = 0;
                    },500);
                    setTimeout(function(){
                        slides.classList.add("animated");
                    },600);

                }
            }



            // 끝나는 지점에서 1번째로 다시 이동
            // function moveSlide(num){
            //     slides.css({left: -num * 330 + "px"}); //330은 슬라이드+마진의 넓이 값
            //     currenIdx = num;
            // }

            // nextBtn.click(function(){
            //     if(currenIdx < slideCount - 3){ //보여지는 슬라이드 갯수가 3개면 slideCount에 3 / 4개면 4...
            //         moveSlide(currenIdx + 1);
                    
            //     }else{
            //         moveSlide(0);
            //     }
            // });
            // prevBtn.click(function(){
            //     if(currenIdx > 0){
            //         moveSlide(currenIdx - 1);
            //     }else{
            //         moveSlide(slideCount - 3); //보여지는 슬라이드 갯수가 3개면 slideCount에 3 / 4개면 4...
            //     }
            // });
        });
