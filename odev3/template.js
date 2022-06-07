//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?
// kullanıcıdan sayı alınan yer
var x= prompt("Sayı giriniz..");

// kontrol
 while((isNaN(x))){
    alert("Giriş değeriniz sayı olmalı");
    var x= prompt("Sayı giriniz..");
}

 
// pozitif ve negatif kontrolünün yapıldığı yer
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