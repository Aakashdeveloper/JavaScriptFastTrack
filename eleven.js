//literal Notation
var country = {
    name:'India',
    capital:'Delhi',
    population:887896
}


undefined
typeof(country)
"object"
country
{name: "India", capital: "Delhi", population: 887896}
country.name
"India"
country.capital
"Delhi"
country.lat="20.76"
"20.76"
country
{name: "India", capital: "Delhi", population: 887896, lat: "20.76"}
delete country.population
true
country
{name: "India", capital: "Delhi", lat: "20.76"}
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", lat: "20.76"}

country['name']
"India"
country['pop']=87899
87899
country
{name: "India", capital: "Mumbai", lat: "20.76", pop: 87899}


//Constructor Notation
var car = new Object()
typeof(car)
"object"
car.color="Red"
"Red"
car.brand="BMW"
"BMW"
car
{color: "Red", brand: "BMW"}


var welcome = {
    firstname:'bob',
    lastname:'Elven',
    greet: function(){
        return "Hi bob welcome back"
    }
}
