var a  = 10
//Es5
 "My age is " +a
//Es6
 `My age is ${a}`

 //function Es5
 function add(a,b){
     return a+b
 }

  //function Es6

var add = (a,b) => { return a+b }

 add(1,2)

// method
 var add = function(a,b){
    return a+b
 }


 function isEven(vini){
    if(vini%2===0){
        console.log("number is even")
    }else{
        console.log("odd is even")
    }
 }





 var fruits = ["apple","mango","banan","orange"]

fruits.map((a)=> { console.log(a)})


var a = [2,4,6,8,6,5]
a.map((data)=>{ return data*2})


var a = [2,4,6,8,6,5]
a.filter((data)=>{
    var out;
    if(data%2==0){
        out = data
    }
    return out
})
 [2, 4, 6, 8, 6]

a.map((data)=>{
    var out;
    if(data%2==0){
        out = data
    }
    return out
})

 var test = [0,1,2,3,4]

test.map((a) => {return a*1})
test.filter((a) => {return a*1})

 
