/*****************************************************
 *            GESTION DES COMMANDES (ORDER)
 *****************************************************/

/*****************************************************
 * PRIX DES PRODUITS
 *****************************************************/
const prixProduits = {
    "Sushi": 50,
    "Pizza": 40,
    "Burger": 30
};


/*****************************************************
 * METTRE À JOUR LE PRIX AUTOMATIQUEMENT
 *****************************************************/
function updatePrix() {

    let produit = document.getElementById("produit").value;
    document.getElementById("prix").innerHTML = prixProduits[produit];
}


/*****************************************************
 * VALIDER ET ENREGISTRER LA COMMANDE
 *****************************************************/
function livrer() {

    // Récupération des données
    let nom = document.getElementById("nom").value.trim();
    let adresse = document.getElementById("adresse").value.trim();
    let produit = document.getElementById("produit").value;
    let qte = parseInt(document.getElementById("qte").value);

    let pu = prixProduits[produit];

    // Vérification des champs
    if (nom === "" || adresse === "" || isNaN(qte) || qte <= 0) {
        document.getElementById("resultat").innerHTML =
            "❌ Veuillez remplir tous les champs correctement";
        return;
    }

    // Calcul du total
    let total = pu * qte;

    /*****************************************************
     * RÉCUPÉRER LES COMMANDES EXISTANTES
     *****************************************************/
    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    /*****************************************************
     * CRÉER UNE NOUVELLE COMMANDE
     *****************************************************/
    let nouvelleCommande = {
        nom: nom,
        adresse: adresse,
        produit: produit,
        qte: qte,
        prix: pu,
        total: total
    };

    /*****************************************************
     * AJOUTER AU TABLEAU
     *****************************************************/
    commandes.push(nouvelleCommande);

    /*****************************************************
     * SAUVEGARDER DANS LOCALSTORAGE
     *****************************************************/
    localStorage.setItem("commandes", JSON.stringify(commandes));

    // Message de confirmation
    document.getElementById("resultat").innerHTML =
        "✅ Vous avez effectué une commande avec succès !";

    // Réinitialiser formulaire
    document.getElementById("nom").value = "";
    document.getElementById("adresse").value = "";
    document.getElementById("qte").value = "";

    updatePrix();
}


/*****************************************************
 * INITIALISATION PAGE
 *****************************************************/
window.onload = function () {
    updatePrix();
};
