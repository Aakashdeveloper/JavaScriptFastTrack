var a = 10

var a => declare a variable
a => assign the value


var => redecalre as well as reassign
let => cannot redeclare but we can reassign
const=> cannot redecalare nor reassign


/////////////////
a = 10

add(a)

function add(a){
    return a+a
}

var a


////
var a;
a = 10
function add(a){
    return a+a
}
add(a)

var a = 10
function add(){
    console.log("a inside>>>>",a)
    var b = "hii"
    return a+a
}
console.log("a ouside>>>>",a)
console.log("b outside>>>>",b)



function * loop(){
    for(i=0;i<10;i++){
       yield i
    }
}