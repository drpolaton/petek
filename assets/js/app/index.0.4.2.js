// doküman yüklendiğinde
$(document).ready(function () {

    // kullanıcı giriş değişkliği yokla
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            current_user = user.uid;

            var userRef = firebase.database().ref().child("users/" + current_user);

            userRef.on("value", function (snapshot) {

                if (snapshot.val()) {

                    // kullanıcı isim ve soyismini ekranda göster
                    guncelleAtif(snapshot.val().name, snapshot.val().surname)

                }
            })
        } else {
            // giriş yapılmamış ise 'giriş yap' ekranına yönlendir
            window.location.href = "giris-yap.html";
        }
    })

})