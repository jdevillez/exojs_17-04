function validerform() {
    var myField = document.getElementById('myField');
    var erreurLabel = document.getElementById('erreurlabel');

    if(myField.value == "") {
        erreurLabel.innerHTML = 'Champ vide.';
        return false;
    } else {
        erreurLabel.innerHTML = 'Envoyé';
        return false;
    }
}