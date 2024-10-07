// for-loop
for (let i = 0; i < 5; i++) {
    console.log("Javascript for-loop");
}

// while-loop
let value = 3;

while (value < 10) {
    console.log(value); 
    value += 1;
}

// Do-while loop
let example = 10;

do {
    console.log(example);
    example++;
} while(example <= 15)

// For-in loop
let jsLoop ={
     Type: 'for in loop'

}
for ( let key in jsLoop){
    console.log(key + ": ", jsLoop[key]);
    }


// for-of loop
    let array = [15,30,45, 60, 75];
    for (let value of array) {
        console.log(value);
    }
    
