//DOM nods
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let flag = true;




//function

function serverRunner(){
    if (flag == true){
        btn.textContent = "Stop";
        h1.textContent = "Server is running...";
        h1.style.color = "green";
        flag = false;
    }
    else{
        btn.textContent = "Start";
        h1.textContent = "Server is stopped!!!!";
        h1.style.color = "red";
        flag = true;
    }

}




