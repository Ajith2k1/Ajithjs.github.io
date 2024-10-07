console.log("variables")
//==>var
var a;
var a= 10;
console.log(a);
//------------------------------//
var a= 20;
var b= 30;
console.log(a+b);
a=40;
console.log(a+b);
//-------------------------------//
//==>let
function let(){
    let a=50;
    console.log(a);
    a=60
    console.log(a);
}
let();
//----------------------//
//const//

const c=66;
console.log(c);
//---------------------------------//
//Data types//

console.log("DATA TYPES")
function dtypes(){
    let a="Ajith";
    console.log(typeof(a));

    let b=55;
    console.log(typeof(b));

    let c= true;
    console.log(typeof(c));

    let i= null;
    console.log(i);
    
let e;
console.log(typeof(e));

}

dtypes();

//--------------------------------------------------------------------------------------//
//Synchronous// 
console.log(" ----synchronous----")
function synchronous(){
    console.log("one")
    console.log("two")
    console.log("three")
    console.log("four")
    console.log("five")
    console.log("six")
    console.log("seven")
    console.log("eight")
}
synchronous();
// -------------------//

console.log("------- Asynchronous -------")
function asyn(){
function Asynchronous(){
    console.log("one")
    console.log("two")
    console.log("three")
    function four() {
        console.log("four asyn");
      }
      
      setTimeout(four, 2000);
      
    console.log("five")
    function six() {
        console.log("six asyn");
      }
      
      setTimeout(six, 2000);
      
   
    console.log("sevev")
    console.log("eight")
    console.log("nine")
}



  Asynchronous();
}
asyn();
