
var rightToTry = 4;
var errorLogin = [];
var emailBlock = [];


function adminFunction() {
    var dbUserEmail = document.getElementById("email").value;
    var dbUserPassword = document.getElementById("password").value;

    if (dbUserEmail == "deneme@gmail.com" && dbUserPassword == "root") {
        alert("Giriş başarılı.");

        window.location.href = "/admin.html";
        return false;
    } else if (!(rightToTry == 0)) {
        alert("Giriş bilgileriniz hatalı. " + rightToTry + " hakkınız kaldı.");
        rightToTry--;
        console.log(rightToTry);

        errorLogin.push({
            email: dbUserEmail,
            password: dbUserPassword
        })

        console.log(errorLogin);
    } else {
        alert("deneme hakkınız bitti : " + "admin@gmail.com" + " adlı mail kitlendi.");
        


        emailBlock.push({
            email: "deneme@gmail.com",
            password: "user"
        })

    
        
        console.log("bloglist : " + emailBlock);

        console.log(dbUserEmail + " " + dbUserPassword);

        errorLogin.push({
            email: dbUserEmail,
            password: dbUserPassword
        })

        console.log(errorLogin);
    }
}

 

//ÖDEV
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay()