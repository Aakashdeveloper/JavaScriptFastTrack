function add(a,b){
    return a+b
}
add(1,2)


function isEven(a){
    if(a%2==0){
        console.log("number is even")
    }else {
        console.log("number is odd")
    }
}


isEven(3)

//Method
var isEven = function(a){
    if(a%2==0){
        console.log("number is even")
    }else {
        console.log("number is odd")
    }
}



var isEven = (a) => {
    if(a%2==0){
        console.log("number is even")
    }else {
        console.log("number is odd")
    }
}


isEven(10)