//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var x= prompt("Derece giriniz..");

 while((isNaN(x))){
    alert("Giriş değeriniz sayı olmalı");
    var x= prompt("Derece giriniz..");
}

 

function toFahrenhayta(){

    return (x*1.8)+32;
}

console.log(toFahrenhayta());

document.write("Fahrenhayta cinsinden " + toFahrenhayta() + "F");