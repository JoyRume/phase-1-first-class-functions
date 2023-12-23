function receivesAFunction (callback){
     callback()
}

function returnsANamedFunction (){
    return function namedFunction(){
        console.log("returns a named function")
    }
}


const returnsAnAnonymousFunction= () =>{
    return ()=>{ console.log("returns anonymous function");
   }}

//function returnsAnAnonymousFunction(){
 //   return function (){
   // console.log("returns anonymous function")
    //}
//}
