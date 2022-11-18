function howManyGift(maxBuget , gift){
return gift.sort(function(a,b){return a - b}).filter(function(item){
    return((maxBuget -= item)>=0)
}).length
}
let gift = [1,2,3,4,6,1,13]
console.log(howManyGift(20,gift))