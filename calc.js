function calc(oprt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    var flag
    if(isNaN(a)== false && isNaN(b)== false){
        flag=true
        if(oprt === 'add'){
            out = parseInt(a)+parseInt(b)  
        }else{
            out = parseInt(a)-parseInt(b)  
        }
    }else{
        out="Plese enter valid value"
    }
      
    document.getElementById('output').innerText= `Output is ${out}`
    document.getElementById('output').style.color= flag?"green":"red"
}




/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseInt(a)+parseInt(b)
    document.getElementById('output').innerText= `Output is ${out}`

}

function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseInt(a)-parseInt(b)
    document.getElementById('output').innerText= `Output is ${out}`

}*/