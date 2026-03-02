const inputbox = document.querySelector("#inputbox");
const listContainer = document.querySelector("#list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("plz enter the value");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    savdata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savdata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savdata();
    }
}, false);

function savdata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();