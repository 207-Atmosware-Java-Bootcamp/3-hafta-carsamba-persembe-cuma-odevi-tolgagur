//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

var x= prompt("x değerini giriniz.");

 while((isNaN(x))){
    alert("Girdiğiniz sayı olmalı");
    var x= prompt("x değerini giriniz.");
}


var k= prompt("k değerini giriniz.");
 while((isNaN(k))){
    alert("Girdiğiniz sayı olmalı");
    var k= prompt("Dizi boyutunu giriniz.");
}

function calculate(){

    return (3*x) + (4*k);
}

console.log(calculate());

document.write(calculate());