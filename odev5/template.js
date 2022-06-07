//ÖDEV
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin
//etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin
// eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

// random 
var number = Math.floor(Math.random() * 10 + 1);
console.log(`tahmin edilecek syı ${number}`);
var count = 1;
var arr = [];


// sayının bulunmasını sağlayan fonksiyon
function find() {
    var numberFind = document.getElementById("numberFind").value;

    //girişin sayı olup olmadığını kontrol eden işlem
    while (isNaN(numberFind)) {
        
        alert("Giriş değeriniz sayı olmalı");
        var numberFind = prompt("Sayı giriniz..");
    }

    //sayı eşitse yapılacak işlemler
    if (number == numberFind) {

        alert(`Tahmin başarılı tebrikler! ${count} adımda buldunuz.`);

        console.log("Tahmin edilen sayılar : ");
        console.log(arr);

    } else if (number < numberFind) {
//sayı büyükse yapılacak işlemler
        alert("Sayı aşağıda kaldı. ");
//hatalı girişlerin kaydı tutulan yer
        arr.push({
            number: numberFind,
            count: count,
        });

        count = count + 1;

        console.log(`Tahmin edilen sayılar :`);
        console.log(arr);

    } else {
//sayı küçükse yapılacak işlemler
        alert("Sayı yukarıda kaldı. ");
//hatalı girişlerin kaydı tutulan yer

        arr.push({
            number: numberFind,
            count: count,
        });

        count = count + 1;

        console.log(`Tahmin edilen sayılar : `);
        console.log(arr);
    }
}
