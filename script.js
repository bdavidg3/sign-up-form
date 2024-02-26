const password = document.querySelector("#pass");
const confirm = document.querySelector("#confirm");

function passCompare(){
    if(password.value !== confirm.value){
    confirm.style.backgroundColor ="#cc3333";
    }
    else{
        confirm.style.backgroundColor  ="";
    }
}

password.addEventListener("input",passCompare);
confirm.addEventListener("input",passCompare);
