
// NODOS DE PRINCIPAL INTERES
const nodoDivRival = document.querySelector('.div-rival');
const nodoDivUsuario = document.querySelector('.div-usuario');

let pokemonElegidoPorElUsuario = null;
let pokemonElegidoPorElAzar = null;

const buscadorDeParametros = new URLSearchParams(window.location.search);
const nombrePokemonUsuario = buscadorDeParametros.get('pokemonElegido');
const nombrePokemonRival = buscadorDeParametros.get('pokemonRival');

// USO EL LOCAL STORAGE PARA LLAMAR A MIS POKEMONES EN DATOS
losDatosDelLocal = JSON.parse(localStorage.getItem('datos'));
const pokemonesDelLocal = losDatosDelLocal.pokemones;

//BUSCAR EL POKEMON 
pokemonesDelLocal.forEach(pokemon => {
    if (pokemonElegidoPorElUsuario == null || pokemonElegidoPorElAzar == null) {
        if (pokemon.nombre == nombrePokemonUsuario) {
            pokemonElegidoPorElUsuario = pokemon;
        } else if (pokemon.nombre == nombrePokemonRival) {
            pokemonElegidoPorElAzar = pokemon;
        } else if (nombrePokemonUsuario == nombrePokemonRival) {
            pokemonElegidoPorElAzar = pokemonElegidoPorElUsuario;
        }
    }
});

//CONSTRUIR LA PAGINA 

nodoDivRival.innerHTML = `
    <figure class="figure-combate js-figure-rival">
        <img src="${pokemonElegidoPorElAzar.imagen}">
    </figure>
        <p class="p-energia-rival">Energia: 
        <span class="js-energia-rival">100</span>
        %</p>
`;

nodoDivUsuario.innerHTML = `
<figure class="figure-combate js-figure-usuario">
    <img src="${pokemonElegidoPorElUsuario.imagen}">
</figure>
        <div class ="div-accion-usuario">
            <button class="btn-rendirse-usuario">Rendirme</button>
            <button class="btn-lanzar-poder-usuario">Lanzar poder</button>
            <dialog class="modal-poderes">
            <button class="btn-poder1 boton-poderes">${pokemonElegidoPorElUsuario.poderes[0].nombre}</button>
            <button class="btn-poder2 boton-poderes">${pokemonElegidoPorElUsuario.poderes[1].nombre}</button>
            <button class="btn-poder3 boton-poderes">${pokemonElegidoPorElUsuario.poderes[2].nombre}</button>
            </dialog>
        </div>
        <p class="p-energia-usuario">Energia: 
        <span class="js-energia-usuario">100</span>
        %</p>
`;

// NODOS A UTILIZAR 
const nodoImgRival = document.querySelector('.js-figure-rival img');
const nodoEnergiaRival = document.querySelector('.js-energia-rival');
const nodoImgUsuario = document.querySelector('.js-figure-usuario img');
const nodoEnergiaUsuario = document.querySelector('.js-energia-usuario');
const nodoBtnRendirse = document.querySelector('.btn-rendirse-usuario');
const nodoBtnLanzarPoder = document.querySelector('.btn-lanzar-poder-usuario');
const nodoModal = document.querySelector('.modal-poderes');
const nodoBtnPoder1 = document.querySelector('.btn-poder1');
const nodoBtnPoder2 = document.querySelector('.btn-poder2');
const nodoBtnPoder3 = document.querySelector('.btn-poder3');
const nodoCartelTurno = document.querySelector('.js-cartel-turno');
const nodoCartelAtaque = document.querySelector('.js-cartel-ataque');
const nodoNombrePokemonTurno = document.querySelector('.js-nombre-pokemon-de-turno');
const nodoAtaque = document.querySelector('.js-ataque');
const nodoDivCartelCombate = document.querySelector('.js-cartel-combate');
const nodoCartelCombate = document.querySelector('.js-combate');
const nodoDivCartelGanador = document.querySelector('.js-cartel-ganador');
const nodoCartelGanador = document.querySelector('.js-ganador');
let primerAtaque = null;

nodoBtnRendirse.addEventListener('click', (e) => {
    window.location.href = `./practicaPokemon.html`;
});

nodoBtnLanzarPoder.addEventListener('click', (e) => {
    nodoModal.showModal();
    nodoModal.classList.add('estilo-poderes');
});

// LANZAR PODER, ANIMAR IMAGEN Y DISMINUIR ENERGIA
nodoBtnPoder1.addEventListener('click', (e) => {
    moverPokemon();
    let energiaADescontar = Number(nodoEnergiaRival.textContent) * 0.10;
    nodoEnergiaRival.textContent = parseInt(Number(nodoEnergiaRival.textContent) - energiaADescontar);
    primerAtaque = "usuario";
    nodoModal.close();
    nodoModal.classList.remove('estilo-poderes');
    combateCompleto(primerAtaque);
});

nodoBtnPoder2.addEventListener('click', (e) => {
    moverPokemon();
    let energiaADescontar = Number(nodoEnergiaRival.textContent) * 0.30;
    nodoEnergiaRival.textContent = parseInt(Number(nodoEnergiaRival.textContent) - energiaADescontar);
    primerAtaque = "usuario";
    nodoModal.close();
    nodoModal.classList.remove('estilo-poderes');
    combateCompleto(primerAtaque);
});

nodoBtnPoder3.addEventListener('click', (e) => {
    moverPokemon();
    let energiaADescontar = Number(nodoEnergiaRival.textContent) * 0.50;
    nodoEnergiaRival.textContent = parseInt(Number(nodoEnergiaRival.textContent) - energiaADescontar);
    primerAtaque = "usuario";
    nodoModal.close();
    nodoModal.classList.remove('estilo-poderes');
    combateCompleto(primerAtaque);
});

// FUNCION PARA ANIMAR IMAGEN
function moverPokemon() {
    nodoImgUsuario.classList.add('mover-imagen');
    setTimeout(() => {
        nodoImgUsuario.classList.remove('mover-imagen');
    }, 200);
};

function moverPokemonRival() {
    nodoImgRival.classList.add('mover-imagen-rival');
    setTimeout(() => {
        nodoImgRival.classList.remove('mover-imagen-rival');
    }, 200);
};


/*  Al comenzar el combate, el sistema elige al azar que pokemon comienza atacando y posteriormente los
    ataques son por turnos. Cuando es el turno de usuario, debe aparecer un mensaje con el texto “Tu turno” en
    pantalla. 

Cuando es el turno del rival, el sistema debe elegir de forma aleatoria un poder para lanzar. El primer
pokemon que llega a Energía 0% o menos, pierde.

Cuando un combate termina, se debe almacenar en el localstorage que pokemon ganó y cuál perdió para las
estadísticas de la pantalla previa.
*/

document.addEventListener('DOMContentLoaded', (e) => {
    deshabilitarBotonesUsuario();
    setTimeout(() => {
        nodoDivCartelCombate.style.opacity = '0';

        //PRIMER TURNO 
        let numeroAleatorio = generarNumeroAleatorioEntreUnoyDos();
        if (numeroAleatorio == 1) {
            primerAtaque = "rival";
            setTimeout(() => {
                atacarPokemonUsuario();
            }, 3000);

            mostrarCartelTurnoRival();
        } else {

            setTimeout(() => {
                primerAtaque = "usuario";
            }, 3000);

            mostrarCartelTurnoUsuarioYHabilitarBtns();
        }

        combateCompleto(primerAtaque);

    }, 3000);

    nodoDivCartelCombate.style.opacity = '1';




});

function combateCompleto(primerAtaque) {
    let energiaRival = Number(nodoEnergiaRival.textContent);
    let energiaUsuario = Number(nodoEnergiaUsuario.textContent);
    let ganador = null;
    if (energiaRival > 0 && energiaUsuario > 0) {
        if (primerAtaque == "rival") {

            setTimeout(() => {
                primerAtaque = "usuario";
                debugger;
                combateCompleto();
            }, 3000);
            mostrarCartelTurnoUsuarioYHabilitarBtns();

        } else if (primerAtaque == "usuario") {
            setTimeout(() => {
                primerAtaque = "rival";
                atacarPokemonUsuario();
                debugger;
                combateCompleto();
            }, 3000);
            mostrarCartelTurnoRival();
        }
    }

    else if (energiaRival <= 0) {
        ganador = "usuario";
        mostrarCartelGanador(ganador);
    } else if (energiaUsuario <= 0) {
        ganador = "rival";
        mostrarCartelGanador(ganador);
    }
}

function atacarPokemonUsuario() {
    let poderAUtilizar = generarNumeroAleatorioEntreUnoyTres();
    let energiaADescontar = 0;
    switch (poderAUtilizar) {
        case 1:

            setTimeout(() => {
                nodoCartelAtaque.style.opacity = '0';
                energiaADescontar = Number(nodoEnergiaUsuario.textContent) * 0.10;
                nodoEnergiaUsuario.textContent = parseInt(Number(nodoEnergiaUsuario.textContent) - energiaADescontar);

            }, 3000);
            moverPokemonRival();
            nodoAtaque.textContent = pokemonElegidoPorElAzar.poderes[0].nombre;
            nodoCartelAtaque.style.opacity = '1';
            break;
        case 2:
            setTimeout(() => {

                nodoCartelAtaque.style.opacity = '0';

                energiaADescontar = Number(nodoEnergiaUsuario.textContent) * 0.30;
                nodoEnergiaUsuario.textContent = parseInt(Number(nodoEnergiaUsuario.textContent) - energiaADescontar);


            }, 3000);
            moverPokemonRival();
            nodoAtaque.textContent = pokemonElegidoPorElAzar.poderes[1].nombre;
            nodoCartelAtaque.style.opacity = '1';
            break;
        case 3:
            setTimeout(() => {

                nodoCartelAtaque.style.opacity = '0';

                energiaADescontar = Number(nodoEnergiaUsuario.textContent) * 0.50;
                nodoEnergiaUsuario.textContent = parseInt(Number(nodoEnergiaUsuario.textContent) - energiaADescontar);

            }, 3000);
            moverPokemonRival();
            nodoAtaque.textContent = pokemonElegidoPorElAzar.poderes[2].nombre;
            nodoCartelAtaque.style.opacity = '1';


            break;
        default:
            break;
    }

}

function generarNumeroAleatorioEntreUnoyTres() {
    return Math.floor(Math.random() * 3) + 1;
}

function mostrarCartelTurnoRival() {
    nodoNombrePokemonTurno.textContent = nombrePokemonRival;
    setTimeout(() => {
        nodoCartelTurno.style.opacity = '0';
    }, 2000);
    nodoCartelTurno.style.opacity = '1';
}

function mostrarCartelGanador(ganador) {
    if (ganador == "usuario") {
        nodoCartelGanador.textContent = nombrePokemonUsuario;
    } else {
        nodoCartelGanador.textContent = nombrePokemonRival;
    }
    setTimeout(() => {
        nodoDivCartelGanador.style.opacity = '0';
    }, 2000);
    nodoDivCartelGanador.style.opacity = '1';
}

function mostrarCartelTurnoUsuarioYHabilitarBtns() {
    nodoNombrePokemonTurno.textContent = nombrePokemonUsuario;
    setTimeout(() => {
        nodoCartelTurno.style.opacity = '0';
    }, 2000);
    nodoCartelTurno.style.opacity = '1';
    habilitarBotonesUsuario();
}

function habilitarBotonesUsuario() {
    nodoBtnRendirse.removeAttribute('disabled');
    nodoBtnLanzarPoder.removeAttribute('disabled');
}

function deshabilitarBotonesUsuario() {
    nodoBtnRendirse.setAttribute('disabled', 'true');
    nodoBtnLanzarPoder.setAttribute('disabled', 'true');
}

function generarNumeroAleatorioEntreUnoyDos() {
    return Math.floor(Math.random() * 2) + 1;
}


