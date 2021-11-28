const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = []; //newTodo 입력값 배열로 저장

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//로컬스토리이제 배열로 저장
}

function deleteToDo(event){
    const li = event.target.parentElement;//클릭한 녀석의 부모(li)를 가지고 옴
    li.remove();//li 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");//문서에 li생성
    li.id = newTodo.id;
    const span = document.createElement("span");//문서에 span생성
    const button = document.createElement("button");//문서에 button생성
    button.innerText = "❌";//버튼에 X 텍스트 입력
    button.addEventListener("click",deleteToDo);//버튼 클릭 이벤트
    li.appendChild(span);//li의 자식으로 span 넣기
    li.appendChild(button);//li의 자식으로 button 넣기
    span.innerText = newTodo.text;//span에 newTodo에 입력되는 값을 가지고 옴
    toDoList.appendChild(li);//toDoList의 자식으로 li 넣기
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value; //벨류 변수 지정
    toDoInput.value = "";//toDoInput 벨류 빈값
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);//toDos에 배열로 newTodoObj 입력값을 넣어줌
    paintToDo(newTodoObj);//paintToDo 함수 실행 값으로 newTodo 받아옴
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}