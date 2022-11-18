function sum(arr){
    let sum =0;
    for (const a of arr) {
        if (typeof a == "number"){
            sum+=a;
        }
    }
    console.log(sum)
}
let listarr = ["a", "shaqa",2,5,"dfds",6,"s"];
sum(listarr);