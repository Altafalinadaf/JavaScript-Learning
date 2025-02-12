let val=[300,500,600,100,850,356];


for(let items of val){
    console.log(`the values of items are ${items}`)
    let offer=items-items/10;
    console.log(`Values with 10% discount ${offer}`)
}


// there are 3 ways of using 

console.log("3 ways of using for loops");

// 1st way of using for loop

console.log(`1st Way of using for loop`)
for(let i=0;i<val.length;i++){
    console.log(`index ${i} value is ${val[i]}`)
}


// 2nd way of using for loop

console.log(`2nd Way of using for loop`)
for(let i in val){
    console.log(`index ${i} value is ${val[i]}`)
}


// 3rd way of using for loop
console.log(`3rd way of using for loop`)

for(let i of val){
    console.log(`values are ${i}`)
}