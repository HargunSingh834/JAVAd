// immidiately invoked function expressions (IIFE)
// syntx----------------->()()
(function code(){
    console.log('my name is');
    
})();                  //  also but below is imp.....when we use IIFE with arrow func we use; at the the end of IIFE func exp
                    //when we use two IIFE function we use ;
( (name)=>{
    console.log(`my name is ${name}`);
    
})('hargun')
