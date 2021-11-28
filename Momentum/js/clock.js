const clock = document.getElementById("clock");
        

function getClock(){
    const date = new Date();
    const hours =  String(date.getHours()).padStart(2,"0"); //padStart는 글자가 2자리수가 아니면 앞에 0을 추가해줌 // padEnd는 반대 //값이 문자여야만 사용 가능 // String사용으로 문자로 변경
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);