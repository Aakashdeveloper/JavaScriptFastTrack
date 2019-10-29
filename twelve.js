var welcome = {
    firstname:'bob',
    lastname:'Elven',
    greet: function(){
        return `Hi ${this.firstname} ${this.lastname} welcome back`
    }
}



var a = 10
var b = "my age is "+a  => "my age is 10"
var c = `My age is ${a}` => "my age is 10"

var city = [
    {name:'delhi', country:'India'},
    {name:'helsinki', country:'Finalnd'},
    {name:'London', country:'England'}
]

city[0].name

function calc(){
    this.sum = function(a,b){return a+b},
    this.sub = function(a,b){return a-b}
}


var mycal = new calc()
mycal.sum(1,2)


function calc(){
    this.sum = function(a,b){return a+b},
    this.sub = function(a,b){return a-b}
}


var mycal = new calc()
mycal.sum(1,2)
3
mycal.sub(4,2)
2
var testcal = new calc()
undefined
testcal.sub(3,1)
2

