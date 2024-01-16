function Palindroma(parola) {
    const parolaPulita = parola.toLowerCase().replace(/\s/g, '');

    return parolaPulita === parolaPulita.split('').reverse().join('');
}

const inputUtente = prompt('Inserisci una parola:');

if (Palindroma(inputUtente)) {
    console.log(`La parola "${inputUtente}" è palindroma.`);
} else {
    console.log(`La parola "${inputUtente}" non è palindroma.`);
}
