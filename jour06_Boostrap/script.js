
// Lien Accueil ver la plateforme
document.querySelector('.nav-link[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://laplateforme.io';
});

// Bouton de la carte papillon pour afficher une modale :

document.querySelector('.btn-papillon').addEventListener('click', function() {
    alert('Achat de papillon confirmé !');
});

// Bouton Rebooter le Monde pour changer le texte du jumbotron :

function rebooterLeMonde() {
    document.getElementById("texte").innerHTML = "Le monde a été rebooté ! 🌍";
};

// Rendre un élément de la liste groupée actif :
document.querySelectorAll('.list-group-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.list-group-item').forEach(function(el) {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Progression de la progress bar :

document.querySelector('.btn-progress-left').addEventListener('click', function() {
    const progressBar = document.querySelector('.progress-bar');
    let width = parseInt(progressBar.style.width);
    if (width > 0) {
        progressBar.style.width = (width - 10) + '%';
    }
});

document.querySelector('.btn-progress-right').addEventListener('click', function() {
    const progressBar = document.querySelector('.progress-bar');
    let width = parseInt(progressBar.style.width);
    if (width < 100) {
        progressBar.style.width = (width + 10) + '%';
    }
});

// Affichage d’une modale avec les touches D, G et C :
document.addEventListener('keydown', function(event) {
    const keys = ['d', 'g', 'c'];
    let pressedKeys = [];

    document.addEventListener('keydown', function(event) {
        if (keys.includes(event.key.toLowerCase())) {
            pressedKeys.push(event.key.toLowerCase());
            if (pressedKeys.join('') === 'dgc') {
                alert('Informations du formulaire : ...');
                pressedKeys = [];
            }
        } else {
            pressedKeys = [];
        }
    });
});

// Validation du formulaire et changement de couleur du spinner :
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        const spinner = document.querySelector('.spinner-border');
        const colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        spinner.className = 'spinner-border ' + randomColor;
    }
});
