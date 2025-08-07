let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let tastText = input.value.trim();
    if(tastText === ""){
        alert("Task cannot be empty!");
        return;
    }
    let item = document.createElement("li");
    item.innerText = tastText;
    // item.innerText = input.value;    mam ka batya hua code

    let dBtn = document.createElement("button")
    dBtn.innerText = "Delete";
    dBtn.classList.add("btn", "btn-outline-danger","delete","ms-2")

    item.appendChild(dBtn);
    ul.appendChild(item);
    input.value=""
})

ul.addEventListener("click",function(event){
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem)
        listItem.remove();
        console.log("DELETE EVENT")
    }
    
})
// let delBtns =document.querySelectorAll(".delete");
// for(dBtn of delBtns){
//     dBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }