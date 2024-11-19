function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true; // L'année est bisextile
    }
    return false; // L'année n'est pas bisextile
}

// Exemple d'utilisation
console.log(bisextile(2024)); // true
console.log(bisextile(1900)); // false
console.log(bisextile(2000)); 
