let root = document.getElementById("root");



const STUDENTS = [
    "sana samin", 
    "arman pasyandeh", 
    "reza rahsepar", 
    "hoda rahmati", 
    "sanaz khodabande"
]




for (const student of STUDENTS) {
    let li = document.createElement("li");
    let a =student.split(" ");
    let name =a[0][0].toUpperCase()+a[0].substring(1);
    let family =a[1][0].toUpperCase()+a[0].substring(1);
    let neww = name +" "+ family

    li.textContent = neww;
    root.appendChild(li);
    
}