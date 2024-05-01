const inputBox = document.getElementById("input-box")
const listcont=document.getElementById("list-container")

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something")
    }else{
        let li =  document.createElement("li");
        li.innerHTML=inputBox.value;
        listcont.appendChild(li);
        let x=document.createElement("span");
        x.innerHTML= "\u00d7";
        li.appendChild(x);
    }
    inputBox.value="";
    saveData();
}

listcont.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);


function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}

function showTask(){
    listcont.innerHTML=localStorage.getItem("data");
}
showTask();