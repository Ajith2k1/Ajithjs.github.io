var name = "Cricket";                              //Global Execution context

 function India(){                                    //function execution context for outer function

    var name = ["Raina","Kohli","Thala","surya"];                     //environmental record(object)

const csk ={
        bestfielder : "Raina",                                     //environmental record (declarative records)
        otherbestfielders:["Jadeja","Ruturaj","yuvi"] ,   

        king(){                                                   //function execution context for innerfunction
            console.log(this);
        },
        thala(){
            console.log(this.thala); 
          },
        };
          csk.king();           
                   csk.thala();                                   // Refers to the inner object                            
 

console.log("Outer Function(India): ",this.name); 
            
 }

India();                                                              // Refers to the global object or outer object

console.log("Global Context(bleedblue)" , this.name);