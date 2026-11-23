var rech = document.getElementById("rech");
var cat = document.getElementById("cat");
var cartes = document.getElementsByClassName("activity");
var nb = document.getElementById("nb");
var zero = document.getElementById("zero");

function chercher() {
    var mot = rech.value.toLowerCase();
    var categorie = cat.value;
    var nombre = 0;

    for (var i = 0; i < cartes.length; i++) {
        var texte = cartes[i].innerText.toLowerCase();

        if (texte.includes(mot) && (categorie == "Toutes" || texte.includes(categorie.toLowerCase()))) {
            cartes[i].style.display = "";
            nombre++;
        } else {
            cartes[i].style.display = "none";
        }
    }

    nb.innerHTML = nombre + " activité(s)";

    if (nombre == 0) {
        zero.style.display = "block";
    } else {
        zero.style.display = "none";
    }
}

function details(id) {
    var nom = "";
    var description = "";
    var prix = "";

    if (id == "A01") {
        nom = "Découverte de la médina";
        description = "Découvre la médina de Nabeul et ses rues. Visite les boutiques et découvre la culture tunisienne.";
        prix = "20";
    } else if (id == "A02") {
        nom = "Atelier d'initiation à la poterie";
        description = "Découvre la poterie avec un artisan. Utilise l'argile et fabrique un petit objet.";
        prix = "35";
    } else if (id == "A03") {
        nom = "Parcours découverte de Kerkouane";
        description = "Visite le site de Kerkouane et découvre son histoire et ses ruines.";
        prix = "30";
    } else if (id == "A04") {
        nom = "Randonnée découverte";
        description = "Marche dans la nature et profite des paysages du Cap Bon.";
        prix = "25";
    } else if (id == "A05") {
        nom = "Circuit du littoral";
        description = "Découvre les plages et les paysages de Kélibia.";
        prix = "40";
    } else if (id == "A06") {
        nom = "Peinture sur céramique";
        description = "Peins une céramique avec tes couleurs préférées.";
        prix = "25";
    } else if (id == "A07") {
        nom = "Découverte d'un marché local";
        description = "Visite un marché et découvre les produits locaux.";
        prix = "15";
    } else if (id == "A08") {
        nom = "Promenade photographique";
        description = "Promène-toi à Hammamet et prends de belles photos.";
        prix = "30";
    }

    document.getElementById("tit").innerHTML = nom;
    document.getElementById("desc").innerHTML = description;
    document.getElementById("prixM").innerHTML = prix;

    var fenetre = new bootstrap.Modal(document.getElementById("mod"));
    fenetre.show();
}