var firstName = "Ajith";
var lastName ="pandiyan";
var fullName = firstName+lastName;

function getdata(){
    let firstNumber = 10;
    let lastNumber= 20;   
    
    console.log(fullName);
    console.log(firstNumber+lastNumber)

}
getdata();


// ///Global execution context

// // Creation Phase 
 
     globalExecutionContext: {
       LexicalEnvironment: {
         EnvironmentRecord:  {
            type: "declarative",
             firstName: undefined,
             lastName: undefined,
           
           }
         
         outer:"null"
         ThisBinding: "global object or window object"
          },
          VariableEnvironment: {
            EnvironmentRecord:  {
               type: "declarative",
                fullName: undefined,
                
              }
            
            outer:"null"
            ThisBinding: "global object or window object"
             },

         }
    

        //   // EXECUTION PHASE 

              globalExecutionContext: {
                LexicalEnvironment: {
                  EnvironmentRecord:  {
                     type: "declarative",
                      firstName: 'Ajith',
                      lastName: 'pandiyan',
                    
                    },
                  
                  outer:"null"
                  ThisBinding: "global object or window object"
                   },
                   VariableEnvironment: {
                     EnvironmentRecord:  {
                        type: "declarative",
                         fullName: 'firstname+lastName' ,
                         
                       }
                     
                     outer:"null"
                     ThisBinding: "global object or window object"
                      },
         
                  }



// ///     Function execution context

    // // Creation Phase 

      FunctionExecutionContext: {
        LexicalEnvironment: {
          EnvironmentRecord:  {
             type: "declarative",
              firstNumber: undefined,
              lastNumber: undefined,
            
            }
          
          outer:"Global Execution context"
          ThisBinding: getdata()
           },
           VariableEnvironment: {
             EnvironmentRecord:  {
                type: "object",
            
                 
               }
             
             outer:"Global Execution context"
             ThisBinding: getdata()
              },
 
          }
     
 
     // // EXECUTION PHASE 
 
           
         FunctionExecutionContext: {
                 LexicalEnvironment: {
                   EnvironmentRecord:  {
                      type: "declarative",
                      firstNumber: '10',
                      lastNumber: '20',
                     
                     },
                   
                   outer:"Global Execution context"
                   ThisBinding: getdata()
                    },
                    VariableEnvironment: {
                      EnvironmentRecord:  {
                         type: "object",
                          
                        }
                      
                      outer:"Global Execution context"
                      ThisBinding: getdata()
                       }
          
                   }
