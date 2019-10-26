var a = ["apple","mango", "banana"]
a[0]

for(i=0;i<=10;i++){
    console.log(i)
}


var a = ["apple","mango", "banana"]
for(i=0;i<a.length;i++){
    console.log(a[i])
}

var i =0
while(i<10){
    console.log(i)
    i++;
}


var i =0
do{
    console.log(i)
    i++;
}
while(i<10)


var city = [['delhi','mumbai','pune'],
            ["Haug",'Amsterdam','Rottadam'],
            ['Zurich','Davos','Zenser']]


for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++){
        if(i==0){
            console.log(`City of India is ${city[i][j]}`)
        } else if(i==1){
            console.log('City of Netherlands is '+city[i][j])
        } else {
            console.log('City of Switzerland is '+city[i][j])
        }
    }
}


