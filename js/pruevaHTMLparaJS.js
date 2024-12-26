function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 4);
}

const botonesSecuencia = document.querySelectorAll('.js-btn');
const botonComenzar = document.querySelector('.js-btn-comenzar');
let contadorDeEvento = 0;
let secuenciaActual = [];
let secuenciaClickeada = [];

// LOCALSTORAGE
localStorage.setItem('contadorDeEvento', contadorDeEvento);

botonComenzar.addEventListener('click', comenzarJuego);

function sumarCantidadDeJuegos() {
    let contadorDelLocal = localStorage.getItem('contadorDeEvento');
    contadorDelLocal = parseInt(contadorDelLocal);
    contadorDelLocal += 1;
    localStorage.setItem('contadorDeEvento', contadorDelLocal);
}

function comenzarJuego() {
    botonComenzar.setAttribute('disabled', 'true');

    if (obtenerContadorDeEvento() === 0) {
        setTimeout(() => {
            const primerNumeroAleatorio = generarNumeroAleatorio();
            secuenciaActual.push(primerNumeroAleatorio);
            botonesSecuencia[primerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[primerNumeroAleatorio].setAttribute('disabled', 'true');
            sumarCantidadDeJuegos();
        }, 1000);
        adivinarNumero(secuenciaActual);

    } else if (obtenerContadorDeEvento() === 1) {
        setTimeout(() => {
            const primerNumeroAleatorio = generarNumeroAleatorio();
            const segundoNumeroAleatorio = generarNumeroAleatorio();
            secuenciaActual.push(primerNumeroAleatorio, segundoNumeroAleatorio);
            botonesSecuencia[primerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[segundoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[primerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[segundoNumeroAleatorio].setAttribute('disabled', 'true');
            sumarCantidadDeJuegos();
        }, 1000);

    } else if (obtenerContadorDeEvento() === 2) {
        setTimeout(() => {
            const primerNumeroAleatorio = generarNumeroAleatorio();
            const segundoNumeroAleatorio = generarNumeroAleatorio();
            const tercerNumeroAleatorio = generarNumeroAleatorio();
            secuenciaActual.push(primerNumeroAleatorio, segundoNumeroAleatorio, tercerNumeroAleatorio);
            botonesSecuencia[primerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[segundoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[tercerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[primerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[segundoNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[tercerNumeroAleatorio].setAttribute('disabled', 'true');
            sumarCantidadDeJuegos();
        }, 1000);

    } else if (obtenerContadorDeEvento() === 3) {
        setTimeout(() => {
            const primerNumeroAleatorio = generarNumeroAleatorio();
            const segundoNumeroAleatorio = generarNumeroAleatorio();
            const tercerNumeroAleatorio = generarNumeroAleatorio();
            const cuartoNumeroAleatorio = generarNumeroAleatorio();
            secuenciaActual.push(primerNumeroAleatorio, segundoNumeroAleatorio, tercerNumeroAleatorio, cuartoNumeroAleatorio);
            botonesSecuencia[primerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[segundoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[tercerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[cuartoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[primerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[segundoNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[tercerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[cuartoNumeroAleatorio].setAttribute('disabled', 'true');
        }, 1000);

    } else {
        setTimeout(() => {
            const primerNumeroAleatorio = generarNumeroAleatorio();
            const segundoNumeroAleatorio = generarNumeroAleatorio();
            const tercerNumeroAleatorio = generarNumeroAleatorio();
            const cuartoNumeroAleatorio = generarNumeroAleatorio();
            secuenciaActual.push(primerNumeroAleatorio, segundoNumeroAleatorio, tercerNumeroAleatorio, cuartoNumeroAleatorio);
            botonesSecuencia[primerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[segundoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[tercerNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[cuartoNumeroAleatorio].removeAttribute('disabled');
            botonesSecuencia[primerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[segundoNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[tercerNumeroAleatorio].setAttribute('disabled', 'true');
            botonesSecuencia[cuartoNumeroAleatorio].setAttribute('disabled', 'true');
            sumarCantidadDeJuegos();
        }, 1000);
    }

    botonComenzar.removeAttribute('disabled');
}

function resetearJuego() {
    localStorage.setItem('contadorDeEvento', 0);
}

function obtenerContadorDeEvento() {
    let contadorDelLocal = localStorage.getItem('contadorDeEvento');
    contadorDelLocal = parseInt(contadorDelLocal, 10) || 0;
    return contadorDelLocal;
}

function numerosClickeadoPorElJugador() {
    botonesSecuencia.forEach((boton, indice) => {
        boton.addEventListener('click', () => {
            let numeroClickeado = parseInt(boton.textContent);
            secuenciaClickeada.push(numeroClickeado);
        });
    });
}

function adivinarNumero(secuenciaActual) {
    botonesSecuencia.forEach((boton) => {
        boton.removeAttribute('disabled');
    });

    for (let i = 0; i < secuenciaActual.length; i++) {
        if (secuenciaActual[i] === secuenciaClickeada[i]) {
            console.error('¡Excelente! ¡A SEGUIR JUGANDO!');
        } else {
            console.error('Secuencia incorrecta ¡A JUGAR DE NUEVO!');
            resetearJuego();
            break; // Salir del bucle si la secuencia es incorrecta
        }
    }
}
