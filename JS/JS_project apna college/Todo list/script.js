let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector(".itemList");


button.addEventListener("click",function(){

// Create a div element
// const li = document.createElement("div");





 // if(input.value!==""){


 
    let item = document.createElement("li");

// Apply CSS styles to the div element

item.style.color = "black";

item.textContent = input.value;
item.style.marginLeft="5%";
item.style.marginRight="8%";
item.style.marginTop="3px";


item.style.padding="10px";


    let inputValue = input.value.trim();
    if(inputValue!==""){

        
    // item.innerText = inputValue;
    // parentDiv.textContent=inputValue;
let delbtn = document.createElement("button");
delbtn.style.marginLeft="50%";
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

// Append the div element to the body of the document

//  ul.appendChild(parentDiv);
// document.body.appendChild(parentDiv);
// parentDiv.appendChild(ul);
ul.appendChild(item);
    // item.appendChild();
  item.appendChild(delbtn);
  input.value="";
    }
  })

ul.addEventListener("click", function(event){
   if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    
   }
})



/*by this method we cannot newly added list can only delete default added list*/

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }