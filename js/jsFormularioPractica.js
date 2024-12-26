
//FORMULARIO
const nodoFormulario = document.querySelector('.js-form-practica');
console.log(nodoFormulario);

//NODOS
const nodoUsuario = document.querySelector('#usuario');
console.log(nodoUsuario);

const nodoClave = document.querySelector('#clave');
console.log(nodoClave);

const nodoEmail = document.querySelector('#email');
console.log(nodoEmail);

const nodoMensajeError = document.querySelector('.mensaje-error');
const nodoMensajeRegistroExitoso = document.querySelector('.registro-exitoso');

nodoFormulario.addEventListener('submit', validarFormulario)

function validarFormulario(evento) {
    evento.preventDefault();

    nodoMensajeError.textContent = '';

    if (nodoUsuario.value.length < 8) {
        console.log(nodoUsuario.value);
        nodoMensajeError.textContent = 'El usuario debe tener al menos 8 caracteres';
    } else if (!contraseniaValida(nodoClave)) {
        console.log(nodoClave.value);
        nodoMensajeError.textContent = 'La clave debe contener 1 caracter especial y al menos 4 caracteres numericos';
    } else {
        //IMPORTANTISIMO, QUEDA REVISAR COMO MANEJO LA TRANSFERENCIA DE DATOS POR URL
        evento.target.submit();
        nodoMensajeRegistroExitoso.textContent='Registro exitoso'}

}

// CONVIERTO NODOCLAVE EN UN ARRAY PORQUE ES UN INPUT Y TENGO "VALUE", SINO NO ME DEJA RECORRERLO COMO UN ARRAY. 

function contraseniaValida(nodoClave){
    let contadorDeCaracteresNumericos = 0;
    let contadorDeCaracteresAlfabeticos = 0;
    let contadorDeCaracteresEspeciales = 0;
    const valorClave = nodoClave.value;
    const arrayClave = Array.from(valorClave);

    arrayClave.forEach(caracter => {
        if (esCaracterEspecial(caracter)) {
            contadorDeCaracteresEspeciales++;
        } else if (isNaN(caracter)) {
            contadorDeCaracteresAlfabeticos++;
        } else {
            contadorDeCaracteresNumericos++;
        } 
    });

    return contadorDeCaracteresNumericos >= 4 && contadorDeCaracteresAlfabeticos >= 4 && contadorDeCaracteresEspeciales >= 1;
}

function esCaracterEspecial(caracter) {
    const expresionRegular = /[^a-zA-Z0-9]/;
    return expresionRegular.test(caracter);
}

// NODO BOTON

const nodoBoton = document.querySelector('.js-btn-practica');
nodoBoton.addEventListener('click',eliminarCamposInputDelForm)

function eliminarCamposInputDelForm() {
    nodoClave.value = '';
    nodoUsuario.value = '';
    nodoEmail.value = '';
}
