//ÖDEV
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin
//etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin
// eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

// random value generated
var number = Math.floor(Math.random() * 10 + 1);
console.log(`tahmin edilecek syı ${number}`);
var count = 1;
var arr = [];

function find() {
    var numberFind = document.getElementById("numberFind").value;

    while (isNaN(numberFind)) {
        
        alert("Giriş değeriniz sayı olmalı");
        var numberFind = prompt("Sayı giriniz..");
    }

    if (number == numberFind) {

        alert(`Tahmin başarılı tebrikler! ${count} adımda buldunuz.`);

        console.log("Tahmin edilen sayılar : ");
        console.log(arr);

    } else if (number < numberFind) {

        alert("Sayı aşağıda kaldı. ");

        arr.push({
            number: numberFind,
            count: count,
        });

        count = count + 1;

        console.log(`Tahmin edilen sayılar :`);
        console.log(arr);

    } else {

        alert("Sayı yukarıda kaldı. ");

        arr.push({
            number: numberFind,
            count: count,
        });

        count = count + 1;

        console.log(`Tahmin edilen sayılar : `);
        console.log(arr);
    }
}
