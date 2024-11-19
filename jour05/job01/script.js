// prend l'id('inscription) de mon form le relie au bouton submit 
// grace a la function qui prend en parametre (event) 
// par defaut et valide mon Id("inscription")

document.getElementById('inscription').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    validateInscription(); // Appelle la fonction de validation du formulaire d'inscription
});

document.getElementById('connexion').addEventListener('submit',
function(event){
    event.preventDefault();
    validateConnexion();
});

//fonction qui  prend les champs de mon formulaire inscription

function validateInscription(){

let nom=document.getElementById('nom').value;
let prenom=document.getElementById('prenom').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let adress=document.getElementById('adress').value;
let codepostal=document.getElementById('codepostal').value;

// recupere les elements erreurs pour chaque champ
let nomError=document.getElementById('nomError');
let prenomError=document.getElementById('prenomError');
let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');
let adressError=document.getElementById('adressError');
let codepostalError=document.getElementById('codepostalError');

// verifie si les champs sont vide
if(nom.trim()===''){
    nomError.textContent ='Email invalide';
}

if (prenom.trim() === '') {
    prenomError.textContent = 'Le prénom est requis';
}

// verifie si l'email est valide
if (!validateEmail(email)) {
    emailError.textContent = 'Email invalide';
}

// Vérifie si le mot de passe contient au moins 6 caractères
if (password.length < 6) {
    passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères';
}


if (adresse.trim() === '') {
    adresseError.textContent = 'L\'adresse est requise';
}


if (!validatePostalCode(codepostal)) {
    codepostalError.textContent = 'Code postal invalide';
}
}

//Fonctions pour valider avec une expression régulière
function validateEmail(email) {
let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

function validatePostalCode(codepostal) {
let re = /^[0-9]{5}$/;
return re.test(codepostal);
}







