let colors = document.querySelectorAll(".clr");
let body=document.querySelector("body");
colors.forEach(function(colors){
    console.log(colors)

colors.addEventListener("click", function(e){
    console.log(e.target.id);
    if(e.target.id==="grey"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==="white"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==="blue"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==="yellow"){
        body.style.backgroundColor = e.target.id;
    }
})
})