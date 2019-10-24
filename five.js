console.log("hiii")
VM204:1 hiii
undefined
alert("hii")
undefined
confirm("do you want to leave")
true
confirm("do you want to leave")
false
var useranswer = confirm("do you want to leave")
undefined
useranswer
true
prompt("tell me your name")
"aakash"


var a = 10
undefined
a+a
20
a-a
0
a*a
100
a/a
1
10%2
0
10%3
1
2%3
2
4%3
1
9%10
9
10%9
1


var a = 10
if(a%2==0){
    console.log("number is even")
}else {
    console.log("number is odd")
}

// Luck game
var comp = Math.floor(Math.random()*(10-1))+1
console.log(comp)
var user = prompt("Enter number bewteen 1to 10")
if(comp == user){
    console.log("User Win")
}else{
    console.log("User loose")
}

var user = prompt("Enter number bewteen 1to 10")

if(comp == user){
    console.log("User Win")
}else if(comp > 10){
    console.log("Wrong by comp")
}
else{
    console.log("User loose")
}

//ternery operator
var a = 10

a >10 ? "hiii":"bie"

