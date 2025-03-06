//your JS code here. If required.
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    let age = document.getElementById("age").value.trim();
    let name = document.getElementById("name").value.trim();
    let btn = document.getElementById("btn");

    if(!age || !name){
        alert("Please enter valid details");
        return;
    }

    const ageNum = parseInt(age, 10);
    const ageValidation = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ageNum >=18){
                resolve(`Welcome, ${name}. You can vote.`);
            }
            else{
                reject(`Oh sorry ${name}. You aren't old enough.`)
            }
        }, 4000);
    })
    

    ageValidation
        .then(message => alert(message))
        .catch(message => alert(message));
});



