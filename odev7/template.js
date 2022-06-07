
//ÖDEV
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay()


function updateClock(){

  //date oluşturulur
    var now = new Date();
    // date bilgilerinin parçalanması
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "ÖÖ";

        //test
        console.log( "dname = " + now.getDay()+
        " mo = " + now.getMonth()+
        " dnum =" +now.getDate()+
        " yr =" +now.getFullYear()+
        " hou ="+ now.getHours()+
       "  min ="+ now.getMinutes()+
        " sec ="+ now.getSeconds())

        // öö ve ös olarak ayrılması için 12 saate göre koşulların kontrolü
        if(hou >= 12){
          pe = "ÖS";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        //gelen verileri iki karakter olarak ayarlanmasını sağlanıyor
        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }


        // gelen verilere göre karşılık gelecek değerlerin tutulması
        var months = ["Ocak", "Sub", "Mart", "Nisan", "May", "Haz", "Tem", "Ağus", "Eylül", "Ekim", "Kasım", "Aralık"];
        var week = ["","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period","title"];
        var history = [
            "1523 - İsveç Bağımsızlık Savaşı sonucunda İsveç Krallığı bağımsızlığını ilan etti.",
            " 1808 - Joseph Bonaparte, İspanya Kralı oldu.",
            "1976 - Boris Volinov ve Vitali Jolobov ekibinden oluşan Soyuz 21 uzay aracı yolculuğuna başladı.",
            "1985 - Aleksey Pajitnov tarafından tasarlanan Tetris oyunu yayınlandı.",
           " 2012 - Venüs geçişi olarak adlandırılan astronomik olay gerçekleşti.",
           "1976 - Boris Volinov ve Vitali Jolobov ekibinden oluşan Soyuz 21 uzay aracı yolculuğuna başladı.",
           "1985 - Aleksey Pajitnov tarafından tasarlanan Tetris oyunu yayınlandı.",
          " 2012 - Venüs geçişi olarak adlandırılan astronomik olay gerçekleşti."];
           console.log(history)
        var values = [week[dname], months[mo], dnum , yr, hou.pad(2), min.pad(2), sec.pad(2), pe,history[dnum]];

        console.log(values);

        // burada ids ye karşılık gelen değlerin yazılmasını sağlar
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  //burada fonksiyonun ne kadar süre ile yenileyeceğini gösterir
  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }