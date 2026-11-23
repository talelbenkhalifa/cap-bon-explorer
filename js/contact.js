var formulaire = document.getElementById("cf");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("msg").innerHTML = '<div class="alert alert-success mt-2">Message envoyé (simulation) !</div>';
    formulaire.reset();
});
