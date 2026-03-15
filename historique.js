/*****************************************************
 * FONCTION : afficherCommandes()
 * Affiche toutes les commandes enregistrées
 *****************************************************/
function afficherCommandes() {

    // 1️⃣ Récupérer les commandes
    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    // 2️⃣ Sélectionner la div
    let div = document.getElementById("listeCommandes");

    // 3️⃣ Vider l'affichage
    div.innerHTML = "";

    // 4️⃣ Si aucune commande
    if (commandes.length === 0) {
        div.innerHTML = "📭 Aucune commande enregistrée.";
        return;
    }

    // 5️⃣ Afficher chaque commande
    commandes.forEach((cmd, index) => {

        div.innerHTML += `
            <div class="commande">
                <strong>🧾 Commande ${index + 1}</strong><br>
                Client : ${cmd.nom}<br>
                Adresse : ${cmd.adresse}<br>
                Produit : ${cmd.produit}<br>
                Quantité : ${cmd.qte}<br>
                Prix unitaire : ${cmd.prix} DH<br>
                Total : <strong>${cmd.total} DH</strong><br><br>

                <button onclick="modifierCommande(${index})">✏ Modifier</button>
                <button onclick="supprimerCommande(${index})">🗑 Supprimer</button>
            </div>
        `;
    });
}


/*****************************************************
 * SUPPRIMER UNE COMMANDE
 *****************************************************/
function supprimerCommande(index) {

    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    if (confirm("Voulez-vous vraiment supprimer cette commande ?")) {

        commandes.splice(index, 1);

        localStorage.setItem("commandes", JSON.stringify(commandes));

        afficherCommandes();
    }
}


/*****************************************************
 * MODIFIER UNE COMMANDE
 *****************************************************/
function modifierCommande(index) {

    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    let cmd = commandes[index];

    let nouveauNom = prompt("Modifier le nom :", cmd.nom);
    let nouvelleAdresse = prompt("Modifier l'adresse :", cmd.adresse);
    let nouvelleQte = parseInt(prompt("Modifier la quantité :", cmd.qte));

    if (
        nouveauNom !== null &&
        nouvelleAdresse !== null &&
        !isNaN(nouvelleQte) &&
        nouvelleQte > 0
    ) {

        cmd.nom = nouveauNom;
        cmd.adresse = nouvelleAdresse;
        cmd.qte = nouvelleQte;

        // recalcul du total
        cmd.total = cmd.prix * nouvelleQte;

        localStorage.setItem("commandes", JSON.stringify(commandes));

        afficherCommandes();
    }
}


/*****************************************************
 * CHARGEMENT AUTOMATIQUE
 *****************************************************/
window.onload = afficherCommandes;
