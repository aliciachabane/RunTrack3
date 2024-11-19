function jourtravaille(date) {
    const joursFeries2020 = [
        '2020-01-01', // Nouvel An
        '2020-04-13', // Lundi de Pâques
        '2020-05-01', // Fête du Travail
        '2020-05-08', // Victoire 1945
        '2020-05-21', // Ascension
        '2020-06-01', // Lundi de Pentecôte
        '2020-07-14', // Fête Nationale
        '2020-08-15', // Assomption
        '2020-11-01', // Toussaint
        '2020-11-11', // Armistice 1918
        '2020-12-25'  // Noël
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois commencent à 0
    const annee = date.getFullYear();

    const dateStr = date.toISOString().split('T')[0]; // Format YYYY-MM-DD

    if (joursFeries2020.includes(dateStr)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) { // Dimanche (0) ou Samedi (6)
        console.log(`Non, ${jour}/${mois}/${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé`);
    }
}

// Exemples d'utilisation
jourtravaille(new Date('2020-01-01')); // Jour férié
jourtravaille(new Date('2020-05-08')); // Jour férié
jourtravaille(new Date('2020-07-14')); // Jour férié
jourtravaille(new Date('2020-05-09')); // Jour travaillé
jourtravaille(new Date('2020-05-10')); // Week-