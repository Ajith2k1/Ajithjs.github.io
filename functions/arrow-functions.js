
//Arrow Functions
//Single statement


let addNumer = (x,y) => x + y;
let square = x => x * x;
let msgUser =() =>console.log("This is without parameters Arrow function");
msgUser();

// Multiple Statements


const calculateSum = (a, b) => {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum;
};

let result = calculateSum(5, 7); // output: The sum of 5 and 7 is 12
console.log(result); // output: 12



//Arrow function with callback
setTimeout(()=>
    {console.log("callback");
       },4000
)

// Returning an object 
const playerDetails =()=>({name:"Suresh Raina",no:"03",batting:"Left hand"})


console.log(square(2)); // Output: 
console.log(addNumer(24,12));
