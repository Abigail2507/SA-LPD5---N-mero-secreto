function solicitarNumero() {
    let numero = prompt("Intenta adivinar el número secreto (entre 1 y 100):");

    while (!esNumeroValido(numero)) {
        console.error("Error: Debes ingresar un número válido entre 1 y 100.");
        numero = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
    }

    return parseInt(numero);
}

function esNumeroValido(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 100;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function proporcionarPista(numero, numeroSecreto) {
    if (numero < numeroSecreto) {
        console.log("El número secreto es mayor que " + numero);
    } else {
        console.log("El número secreto es menor que " + numero);
    }
}

function jugarAdivinaNumero() {
    const numeroSecreto = generarNumeroSecreto();
    let intentos = [];

    while (true) {
        let intento = solicitarNumero();
        intentos.push(intento);

        if (intento === numeroSecreto) {
            return { acertado: true, intentos: intentos };
        } else {
            console.log("El número secreto es incorrecto, intentanlo nuevamente.");
            proporcionarPista(intento, numeroSecreto);
        }
    }
}

function mostrarMensaje(mensaje) {
    console.log(mensaje); 
}

function iniciarJuego() {
    const resultado = jugarAdivinaNumero();

    if (resultado.acertado) {
        mostrarMensaje("Bien, adivinaste el número secreto!");
    } else {
        mostrarMensaje("No lograste adivinar el número secreto.");
    }

    mostrarMensaje("El número secreto era " + resultado.intentos[resultado.intentos.length - 1]);
    mostrarMensaje("Lista de números introducidos: " + resultado.intentos.join(", "));
}

iniciarJuego();
