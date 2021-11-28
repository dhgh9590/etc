const images = ["0.jpg","1.jpg","2.jpg","3.jpg"] //img폴더 안에 있는 이미지 파일 이름과 같아야 함

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");//img태그 만들기

bgImage.src = `img/${chosenImage}`; //루트 img폴더
let section = document.querySelector("#section");

document.body.appendChild(bgImage);