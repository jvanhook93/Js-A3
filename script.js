let id=0;
function addList(){
  let listName = document.getElementById(`listName`).value;
  if(listName === ""){
    alert("Please type in a memo.");
  }else{
  displayList(listName);
  document.getElementById(`listName`).value="";
  }
}
function deleteList(id){
  document.getElementById(id).remove();

}
function displayList(list){

  document.getElementById(`report-list`).innerHTML+= `
  <li id="${id}"> 
  <div> ${list}</div> 
  <button onclick="deleteList(${id})"><i class="fa-solid fa-trash-can"></i></button> 
  </li>`;

}