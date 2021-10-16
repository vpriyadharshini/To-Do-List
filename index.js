let addToDoButton=document.getElementById("addToDo");//id of btn
let ToDoContainer=document.getElementById("ToDoItems");//id of div
let inputField=document.getElementById("inputField");//id of input

addToDoButton.addEventListener('click',()=>{ //adding eventListener
var EachItem=document.createElement('li') //Getting Each Elements
EachItem.classList.add('para-styling');
EachItem.innerText=inputField.value;//getting value from input field
ToDoContainer.appendChild(EachItem);//appending the item's value in para in div
inputField.value="";
var breakElement=document.createElement('br');
ToDoContainer.appendChild(breakElement)
//adding eventListener to items when clicked
EachItem.addEventListener('click',()=>{
    EachItem.style.textDecoration="line-through";
})
//Removing Child
EachItem.addEventListener('dblclick',()=>{
    ToDoContainer.removeChild(EachItem);// removing items from Container
})

})

//Current Day,month
const date=new Date();
const CurrentDay=date.getUTCDay();
var updated;
const CurrentMonth=date.getMonth();
switch(CurrentDay){
    case 0:
        updated="Sunday";
         break;

    case 1:
        updated="Monday";
        break;
    case 2:
        updated="Tuesday";
        break;
    case 3:
        updated="Wednesday";
        break;
    case 4:
        updated="Thursday";
        break;
    case 5:
        updated="Friday";
        break;
    case 6:
       updated="Saturday";
      break;
}
switch(CurrentMonth){
    case 0:
        updatedMonth="January";
         break;

    case 1:
        updatedMonth="Feburary";
        break;
    case 2:
        updatedMonth="March";
        break;
    case 3:
        updatedMonth="April";
        break;
    case 4:
        updatedMonth="May";
        break;
    case 5:
        updatedMonth="June";
        break;
    case 6:
        updatedMonth="July";
        break;
    case 7:
        updatedMonth="August";
        break;
    case 8:
        updatedMonth="September";
        break;
    case 9:
        updatedMonth="October";
        break;
    case 10:
        updatedMonth="November";
        break;
    case 11:
        updatedMonth="December";
        break;
}
document.getElementById("day").innerHTML =updated+","+" "+updatedMonth+" "+date.getDate();
