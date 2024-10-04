// let globalVar = "Global Variable";

function parentFunction() {
    let parentVar = "Parent Variable";
    
    function childFunction1() {
        let childVar1 = "Child 1 Variable";
        
        function childFunction2() {
            let childVar2 = "Child 2 Variable";
            
            function childFunction3() {
                let childVar3 = "Child 3 Variable";
                
                function childFunction4() {
                    let childVar4 = "Child 4 Variable";
                    
                    function childFunction5() {
                        let childVar5 = "Child 5 Variable";
                        
                        // Here is where the variable lookup happens
                        console.log(childVar5); // Found in local scope
                        console.log(childVar4); // Found in childFunction4's scope
                        console.log(childVar3); // Found in childFunction3's scope
                        console.log(childVar2); // Found in childFunction2's scope
                        console.log(childVar1); // Found in childFunction1's scope
                        console.log(parentVar); // Found in parentFunction's scope
                        console.log(globalVar); // Found in global scope
                    }
                    
                    childFunction5(); // Execute the innermost function
                }
                
                childFunction4();
            }
            
            childFunction3();
        }
        
        childFunction2();
    }
    
    childFunction1();
}

parentFunction();
