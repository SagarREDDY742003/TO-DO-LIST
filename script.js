const inputbox = document.getElementById("inputbox");
const listcont = document.getElementById("listcont");

function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}
function showtask(){
    listcont.innerHTML = localStorage.getItem("data");
}
showtask();