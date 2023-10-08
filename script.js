const inputField=document.querySelector("#input-field");
const addBtn=document.querySelector("#btn");
const unorderedList=document.querySelector("#todo-list") ;

addBtn.addEventListener("click",run); 

function run(){
  const newListItem =document.createElement("li");
  newListItem.innerHTML=inputField.value;
  unorderedList.appendChild(newListItem)
  inputField.value=""
  newListItem.addEventListener("click",()=>{
    newListItem.style.textDecoration='line-through';
  });
  newListItem.addEventListener("dblclick",()=>{
  unorderedList.removeChild(newListItem)
    
  });
};


