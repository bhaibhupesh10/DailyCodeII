const data = [
    {name:"Bhupesh", profession:"developer"},
    {name:"anurag", profession:"analyst"}
]

function getData(){
    setTimeout(()=>{
        let output="";
        data.forEach((item, index)=>{
            output += `<li>${ item.name}</li>`;
        });
        document.body.innerHTML = output;

    }, 2000);
}

function createData(newData, callback) {
    setTimeout(()=>{
        data.push(newData);
        callback();
    }, 1000);
}

createData({name:"bittu", Profession: "write"}, getData);

return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        data.push(newdata);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject("dkjsafl");
        }
    }, 2000)
})
