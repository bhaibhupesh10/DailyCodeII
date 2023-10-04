const btns = document.querySelectorAll("button");
    const dogs = document.querySelectorAll("img");
const follows = document.querySelectorAll("h5");

document.querySelectorAll("follow")
for(btn of btns){
        btn.addEventListener("click", ()=> {
            console.log("you clicked on button");
        });
    }

for(dog of dogs){
    dog.addEventListener("click", ()=>{
    console.log("you clicked on imagges")
});
}

for(follow of h5){
    follow.addEventListener("click", ()=>{
        console.log("you clicked on follow");
    });
}