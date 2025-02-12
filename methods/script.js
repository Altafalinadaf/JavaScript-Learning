//  methods are same as in java languages 
// example 

// function declration and defintions 

// method without arugument and no return type

function addSum(){
    console.log(5+9);
}

addSum();

// mwthod with arguments no return type
function addNumbers(num1,num2){
    console.log(num1+num2)
}

addNumbers(5,4)

// method with arguments and return type

function addNum(num1,num2){
    return num1+num2;
}

let add = addNum(5,19)
console.log(add)


// methods using arrow function



//method with no arguments and no return type
// now this sub is acting like a variable 
let sub=()=>{
    console.log(19-9);
}
sub()

//  we also modify the value


//method with arguments and no return type 
let sub2=(num1,num2)=>{
    console.log(num1-num2)
}
sub2(30,16)


let sub3=(num1,num2)=>{
    return num1-num2;
}

let sub3Store=sub3(79,8);
console.log(sub3Store)