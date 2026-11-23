var activite = document.getElementById("activite");
var pers = document.getElementById("pers");
var prix = document.getElementById("prix");
var sous = document.getElementById("sous");
var rem = document.getElementById("rem");
var total = document.getElementById("total");
var message = document.getElementById("message");

function calculerPrix() {
    var prixUnitaire = Number(activite.value);
    var nb = Number(pers.value);
    var somme = prixUnitaire * nb;
    var reduction = 0;

    if (nb >= 4) {
        reduction = somme * 0.10;
    } else {
        reduction = 0;
    }

    prix.innerHTML = prixUnitaire;
    sous.innerHTML = somme;
    rem.innerHTML = reduction;
    total.innerHTML = somme - reduction;
}

activite.addEventListener("change", calculerPrix);
pers.addEventListener("input", calculerPrix);
document.getElementById("calculer").addEventListener("click", calculerPrix);

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var date = document.getElementById("date").value;
    var ok = document.getElementById("ok").checked;
    var aujourdHui = new Date().toISOString().split("T")[0];

    if (nom == "" || prenom == "" || email == "" || telephone == "" || activite.value == "" || date == "") {
        message.innerHTML = '<div class="alert alert-danger">Remplis tous les champs obligatoires.</div>';
    } else if (date < aujourdHui) {
        message.innerHTML = '<div class="alert alert-danger">Choisis une date qui n’est pas passée.</div>';
    } else if (pers.value < 1 || pers.value > 6) {
        message.innerHTML = '<div class="alert alert-danger">Le nombre de pers doit être de 1 à 6.</div>';
    } else if (ok == false) {
        message.innerHTML = '<div class="alert alert-danger">Accepte les ok avant de valider.</div>';
    } else {
        calculerPrix();
        message.innerHTML = '<div class="alert alert-success">Simulation enregistrée localement à l’écran : zeroe réservation réelle n’a été effectuée.<br>Activité : ' + activite.options[activite.selectedIndex].text + '<br>Date : ' + date + '<br>Participants : ' + pers.value + '<br>Total : ' + total.innerHTML + ' TND</div>';
    }
});

document.getElementById("form").onreset = calculerPrix;
calculerPrix();