// function jhnM(){
//     console.log("you r lucky")
//     console.log("Funny Man ")
// }
// jhnM()
// // <----------------------------------------------------------->

// function doublrIt(num){
//     var result=num*2;
//     console.log(result)
// }
// doublrIt(2)
// doublrIt(20)
// doublrIt(200)
// //<--------------------------------------------------------------------->
// function values(value){
//     var rest=value*2;
//     return rest;
// }
// var first= values(5)
// var second=values(9)
// var resul= first+second;
// console.log(resul)

// //<--------------------------------------------------------------------->
// function add(num1,num2){
//     var adding= num1+num2;
//     return adding
// }
// var sum =add(15,20)
// console.log(sum)

// // arrow function 
// const arrowFunction = (a,b)=>{
//     console.log(a+b)
// }
// arrowFunction(5,2)
// // arrow mul
// const arrowMul=(a,b)=>{
//     console.log(a*b)
// }
// arrowMul(2,2)
// // arrow div
// const arrowDiv=(a,b)=>{console.log(a/b)}
// arrowDiv(10,3)

// function vaiol(vawel){
//     vawel="a,e,i,o,u"
//     console.log(vawel)
// }
// vaiol();

//<<-------------------------------------------------------->>//
function countVowel(str){
    let count=0;
    for(const char of str){
        if(
            char==="a" || 
            char==="e" || 
            char==="i" || 
            char==="o" || 
            char==="u"
    ){
        count++;
    }
console.log(count)
}
}

