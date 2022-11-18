
function totalWaitTime(list){
list.sort(function(a,b){return a-b})
let sum = list[0];
list.reduce(function(prev,current){
    let wait =  prev+current+2;
    sum += wait
    return wait
})
return sum
}
console.log(totalWaitTime([4,6,2]))