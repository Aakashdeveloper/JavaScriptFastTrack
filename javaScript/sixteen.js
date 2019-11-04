function language(name,country){
    this.name= name;
    this.country = country
}

var hindi = new language('Hindi','India')
/////////////////////////////////////

class geo{
    constructor(lat,long){
        this.lat=lat;
        this.long=long
    }
}


class language2 extends geo{ 
    constructor(name,country,lat,long){
        super(lat,long)
        this.name= name;
         this.country = country
    }
}

class language{ 
    constructor(name,country){
        this.name= name;
         this.country = country
    }
}


var English = new language('English','England')