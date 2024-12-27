const pokemones = [
    {
        "nombre": "Bulbasaur",
        "poderes": [
            {
                "nombre": "Placaje",
                "energia": 10,
                "usos": 4
            },
            {
                "nombre": "Látigo Cepa",
                "energia": 15,
                "usos": 3
            },
            {
                "nombre": "Hoja Afilada",
                "energia": 20,
                "usos": 3
            }
        ],
        "imagen": "../imagenes/bolbasaur.png",
        "idModal": "ver-bolbasaur"
    },
    {
        "nombre": "Charmander",
        "poderes": [
            {
                "nombre": "Arañazo",
                "energia": 10,
                "usos": 4
            },
            {
                "nombre": "Lanzallamas",
                "energia": 30,
                "usos": 2
            },
            {
                "nombre": "Dragoaliento",
                "energia": 25,
                "usos": 3
            }
        ],
        "imagen": "../imagenes/charmander.png",
        "idModal": "ver-charmander"
    },
    {
        "nombre": "Squartle",
        "poderes": [
            {
                "nombre": "Pistola Agua",
                "energia": 15,
                "usos": 4
            },
            {
                "nombre": "Burbuja",
                "energia": 10,
                "usos": 4
            },
            {
                "nombre": "Placaje",
                "energia": 10,
                "usos": 2
            }
        ],
        "imagen": "../imagenes/squartle.png",
        "idModal": "ver-squartle"
    },
    {
        "nombre": "Pikachu",
        "poderes": [
            {
                "nombre": "Impactrueno",
                "energia": 20,
                "usos": 3
            },
            {
                "nombre": "Ataque Rápido",
                "energia": 10,
                "usos": 4
            },
            {
                "nombre": "Bola Voltio",
                "energia": 25,
                "usos": 2
            }
        ],
        "imagen": "../imagenes/pikachu.png",
        "idModal": "ver-pikachu"

    }
];

const datosSimulados = {
    "pokemones": [
        {
            "nombre": "Bulbasaur",
            "poderes": [
                {
                    "nombre": "Placaje",
                    "energia": 10,
                    "usos": 4
                },
                {
                    "nombre": "Látigo Cepa",
                    "energia": 15,
                    "usos": 3
                },
                {
                    "nombre": "Hoja Afilada",
                    "energia": 20,
                    "usos": 3
                }
            ],
            "imagen": "../imagenes/bolbasaur.png",
            "idModal": "ver-bolbasaur"
        },
        {
            "nombre": "Charmander",
            "poderes": [
                {
                    "nombre": "Arañazo",
                    "energia": 10,
                    "usos": 4
                },
                {
                    "nombre": "Lanzallamas",
                    "energia": 30,
                    "usos": 2
                },
                {
                    "nombre": "Dragoaliento",
                    "energia": 25,
                    "usos": 3
                }
            ],
            "imagen": "../imagenes/charmander.png",
            "idModal": "ver-charmander"
        },
        {
            "nombre": "Squartle",
            "poderes": [
                {
                    "nombre": "Pistola Agua",
                    "energia": 15,
                    "usos": 4
                },
                {
                    "nombre": "Burbuja",
                    "energia": 10,
                    "usos": 4
                },
                {
                    "nombre": "Placaje",
                    "energia": 10,
                    "usos": 2
                }
            ],
            "imagen": "../imagenes/squartle.png",
            "idModal": "ver-squartle"
        },
        {
            "nombre": "Pikachu",
            "poderes": [
                {
                    "nombre": "Impactrueno",
                    "energia": 20,
                    "usos": 3
                },
                {
                    "nombre": "Ataque Rápido",
                    "energia": 10,
                    "usos": 4
                },
                {
                    "nombre": "Bola Voltio",
                    "energia": 25,
                    "usos": 2
                }
            ],
            "imagen": "../imagenes/pikachu.png",
            "idModal": "ver-pikachu"
        }
    ],
    "combates": [
    ]
};

localStorage.setItem('datos', JSON.stringify(datosSimulados));

const nodosModal = document.querySelectorAll('.js-modal-pokemon');
const btnsVerModal = document.querySelectorAll('.boton-ver-pokemon');
const btnsCerrarModal = document.querySelectorAll('.js-cerrar-modal');
const btnCombate = document.querySelector('#boton-combate');
const btnsSelector = document.querySelectorAll('.boton-selector');


let pokemonElegidoPorElUsuario = null;
let nombrePokemonElegidoPorElUsuario = null;
let pokemonElegidoPorAlAzar = null;
let nombrePokemonElegidoPorAlAzar = null;
let contador = 0;
let contadorCombates = 0;

console.log(btnCombate);
console.log(nodosModal);
console.log(btnsVerModal);

// ACOSTUMBRARME A CONSTRUIR LA FUNCION SEGUIDO DEL "addEventListener",
// YA QUE ME ESTUVEO TRAYENDO PROBLEMAS EL DECLARAR UNA FUNCION Y ABAJO CONSTRUIRLA.

btnsVerModal.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const contenidoID = btn.getAttribute('id');

        // APRENDI A BUSCAR EN EL JSON

        const pokemon = pokemones.find(pokemon => pokemon.idModal === contenidoID);
        nodosModal.forEach(modal => {
            if (modal.classList.contains(pokemon.nombre) && document.querySelector(`.${pokemon.nombre} .div-modal-1`) == null ) {                
                
                const divCreado = document.createElement('div');
                divCreado.innerHTML = `
            
                        <figure class="figure-modal"><img src= ${pokemon.imagen}>
                            <figcaption class="nombre-del-pokemon">${pokemon.nombre}</figcaption>
                        </figure>
                        <div class="div-modal-detalle">
                            <p class="js-combates">Combates: </p>
                            <p class="js-combates-ganados">Combates ganados: 0</p>
                            <p class="js-combates-perdidos">Combates perdidos: 0</p>
                            <p>Poderes</p>
                            <p class="js-poder1">Nombre: ${pokemon.poderes[0].nombre} Energia: ${pokemon.poderes[0].energia} Usos: ${pokemon.poderes[0].usos}</p>
                            <p class="js-poder2">Nombre: ${pokemon.poderes[1].nombre} Energia: ${pokemon.poderes[0].energia} Usos: ${pokemon.poderes[0].usos}</p>
                            <p class="js-poder3">Nombre: ${pokemon.poderes[2].nombre} Energia: ${pokemon.poderes[0].energia} Usos: ${pokemon.poderes[0].usos}</p>
                        </div>
           `;
                divCreado.classList.add('div-modal-1');
                modal.classList.add('modal-pokemon');
                modal.appendChild(divCreado);
                modal.showModal();
            } else if (modal.classList.contains(pokemon.nombre)) { 
                
                const nodoAReordenar = document.querySelector(`.${pokemon.nombre} .div-modal-1`);
                const segundoNodoAReordenar = document.querySelector(`.${pokemon.nombre} .div-modal-2`);
                modal.appendChild(nodoAReordenar);
                modal.appendChild(segundoNodoAReordenar);
                modal.showModal(); }
        });
    });
});


btnsCerrarModal.forEach(btn => {
    btn.addEventListener('click', (e) => {
        nodosModal.forEach(modal => {
            if (modal.open) {
                modal.classList.remove('modal-pokemon');
                modal.close();
            }
        });
    });
});


btnsSelector.forEach(btn => {
    btn.addEventListener('click', (e) => {
        pokemones.forEach(pokemon => {
            if (btn.classList.contains(pokemon.nombre)) {
                pokemonElegidoPorElUsuario = pokemon;
                nombrePokemonElegidoPorElUsuario = pokemon.nombre;
                console.log(pokemonElegidoPorElUsuario);
            }
        })

        btnCombate.removeAttribute('disabled');
        btnCombate.classList.add('btn-combate');
    });
});

btnCombate.addEventListener('click', (e) => {
    const numeroRandom = Math.floor(Math.random() * 4);
    const btnPokemonElegido = btnsSelector[numeroRandom];
    pokemones.forEach(pokemon => {
        if (btnPokemonElegido.classList.contains(pokemon.nombre)) {
            //POKEMON ELEGIDO AL AZAR
            pokemonElegidoPorAlAzar = pokemon;
            nombrePokemonElegidoPorAlAzar = pokemon.nombre;
            console.log(pokemonElegidoPorAlAzar);
        }


    });
    const nuevoCombate = [{
        "combateNro": ++contador,
        "nombrePokemonUsuario": `${pokemonElegidoPorElUsuario.nombre}`,
        "nombrePokemonRival": `${pokemonElegidoPorAlAzar.nombre}`,
        "ganador": "",
        "perdedor": ""
    }];

    // OFICALMENTE APRENDISTE A USAR LOCALSTORAGE
    // CARGAR DATOS YA ES AUTOMATICO
    // TOMAR DATOS RECORDAS PRIMERO CREAR VARIABLE Y DEPUES HAY QUE AUTOMATIZAR EL JSON.PARSE()
    // HAGO IMPRESION "CONSOLE.LOG" PORQUE NO RECUERDO COMO MUESTRA EL PARSE 
    // LUEGO APRENDI A USAR EL TIPO DE JSON QUE CREE, ALMACENA OBJETOS CON ESTA SINTAXIS ' const datos = { "" : [], "" :[]...}' 
    // MODIFIQUE LOS DATOS PARSEADOS YENDO AL OBJETO QUE ME INTERESABA Y LO TRATE COMO UN ARRAY DE OBJETOS "LINEA 299"


    let losDatosDelLocal = JSON.parse(localStorage.getItem('datos'));
    console.log(losDatosDelLocal);
    console.log(nuevoCombate);

    losDatosDelLocal.combates[contadorCombates++] = nuevoCombate;

    localStorage.setItem('datos', JSON.stringify(losDatosDelLocal));

    losDatosDelLocal = JSON.parse(localStorage.getItem('datos'));
    const combatesDelLocak = losDatosDelLocal.combates;

    console.log(combatesDelLocak);

    btnCombate.setAttribute('disabled', 'true');

    // CREO LOS PARAMETROS DE LA URL 
    const parametros = new URLSearchParams({
        pokemonElegido: nombrePokemonElegidoPorElUsuario,
        pokemonRival: nombrePokemonElegidoPorAlAzar
    });

    window.location.href = `./1htmlPokemons/combatePokemon.html?${parametros.toString()}`;
});


