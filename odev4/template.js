//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

var username = window.prompt("kullanıcı adi")
var pass1 = prompt("şifre");
var pass2 = prompt("sifreyi tekrar giriniz");

 
//valid işlemleri
function valid() {
    while (!(pass1 ==  pass2)) {
        alert("birinci şifre ile ikinci şifre uyumsuz.")
        pass1 = prompt("yanlış şifre.");
        pass2 = prompt("sifreyi tekrar giriniz.");
    }

    if(pass1==null && pass2==null)
        return false;
    else{
        return true;
    }
}
 //giriş doğru ise karşılayacak mesaj
function loginPrint() {
    document.writeln("Başarılı " + username + ".");
}
 // err mesajı
function loginErr() {
    document.writeln("geçersiz sifre");
}

 //duruma göre ekrana yazdırılan cıktı
function write() {
    return valid() === true ? loginPrint():loginErr();
}

write();