function estPremier(nombre) {
    if (nombre <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Nombre divisible, donc pas premier
        }
    }
    return true; // Nombre est premier
}

function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Retourne la somme des deux nombres premiers
    }
    return false; // Au moins un des nombres n'est pas premier
}

// Exemples d'utilisation
console.log(sommenombrespremiers(5, 7)); // 12
console.log(sommenombrespremiers(4, 7)); // false
console.log(sommenombrespremiers(11, 13)); // 24