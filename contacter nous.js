function envoyer() {
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;

    if (nom == "" || email == "" || tel == "" || message == "") {
        document.getElementById("resultat").innerHTML =
        "Veuillez remplir tous les champs !"
    } else {
        document.getElementById("resultat").innerHTML =
            "Merci " + nom + ", votre message a été envoyé avec succès ✔️";
    }
}
