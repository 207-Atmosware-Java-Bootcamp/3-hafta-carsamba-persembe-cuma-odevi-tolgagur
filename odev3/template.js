//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var x= prompt("Sayı giriniz..");

 while((isNaN(x))){
    alert("Giriş değeriniz sayı olmalı");
    var x= prompt("Sayı giriniz..");
}

 

function isPositive(){

    if(x >0)
        return "pozitiftir.";
    else if(x < 0)
        return "negatiftir.";
    else
        return " nötrdür.";

}

console.log(isPositive());

document.write(x + " sayısı " + isPositive());