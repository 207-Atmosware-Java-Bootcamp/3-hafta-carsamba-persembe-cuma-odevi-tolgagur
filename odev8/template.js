
//ÖDEV
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay()


var showDate = document.getElementById("date");
showDate.onclick = function () {
  updateClock();
}

function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear()

  var months = ["Ocak", "Sub", "Mart", "Nisan", "May", "Haz", "Tem", "Ağus", "Eylül", "Ekim", "Kasım", "Aralık"];
  var week = ["", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
  var ids = ["dayname", "month", "daynum", "year"];

  var values = [week[dname], months[mo], dnum, yr];

  console.log(values);
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).innerText = values[i];
}

