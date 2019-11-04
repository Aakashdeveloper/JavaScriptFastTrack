var person = {
    fullName: function(city, country){
        return this.firstname+" "+this.lastname+" "+city+" "+country
    }
}


var john = {
    firstname: 'john',
    lastname: 'Doe'
}

person.fullName.call(john,'London','England')

person.fullName.apply(john,['London','England'])

person.fullName.call(john,['London','England'])