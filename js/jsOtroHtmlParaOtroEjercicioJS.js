const paises = [
    { nombre: "ARGENTINA", abreviacion: "AR", continente: "América del Sur", bandera: "🇦🇷", idioma: "Español" },
    { nombre: "AUSTRALIA", abreviacion: "AU", continente: "Oceanía", bandera: "🇦🇺", idioma: "Inglés" },
    { nombre: "BRASIL", abreviacion: "BR", continente: "América del Sur", bandera: "🇧🇷", idioma: "Portugués" },
    { nombre: "CANADÁ", abreviacion: "CA", continente: "América del Norte", bandera: "🇨🇦", idioma: "Inglés, Francés" },
    { nombre: "CHINA", abreviacion: "CN", continente: "Asia", bandera: "🇨🇳", idioma: "Chino" },
    { nombre: "COLOMBIA", abreviacion: "CO", continente: "América del Sur", bandera: "🇨🇴", idioma: "Español" },
    { nombre: "EGIPTO", abreviacion: "EG", continente: "África", bandera: "🇪🇬", idioma: "Árabe" },
    { nombre: "ESPAÑA", abreviacion: "ES", continente: "Europa", bandera: "🇪🇸", idioma: "Español" },
    { nombre: "FRANCIA", abreviacion: "FR", continente: "Europa", bandera: "🇫🇷", idioma: "Francés" },
    { nombre: "ALEMANIA", abreviacion: "DE", continente: "Europa", bandera: "🇩🇪", idioma: "Alemán" },
    { nombre: "INDIA", abreviacion: "IN", continente: "Asia", bandera: "🇮🇳", idioma: "Hindi, Inglés" },
    { nombre: "INDONESIA", abreviacion: "ID", continente: "Asia", bandera: "🇮🇩", idioma: "Indonesio" },
    { nombre: "IRLANDA", abreviacion: "IE", continente: "Europa", bandera: "🇮🇪", idioma: "Inglés, Irlandés" },
    { nombre: "ITALIA", abreviacion: "IT", continente: "Europa", bandera: "🇮🇹", idioma: "Italiano" },
    { nombre: "JAPÓN", abreviacion: "JP", continente: "Asia", bandera: "🇯🇵", idioma: "Japonés" },
    { nombre: "KENIA", abreviacion: "KE", continente: "África", bandera: "🇰🇪", idioma: "Inglés, Suajili" },
    { nombre: "MÉXICO", abreviacion: "MX", continente: "América del Norte", bandera: "🇲🇽", idioma: "Español" },
    { nombre: "MARRUECOS", abreviacion: "MA", continente: "África", bandera: "🇲🇦", idioma: "Árabe, Bereber" },
    { nombre: "NUEVA ZELANDA", abreviacion: "NZ", continente: "Oceanía", bandera: "🇳🇿", idioma: "Inglés, Maorí" },
    { nombre: "NIGERIA", abreviacion: "NG", continente: "África", bandera: "🇳🇬", idioma: "Inglés" },
    { nombre: "NORUEGA", abreviacion: "NO", continente: "Europa", bandera: "🇳🇴", idioma: "Noruego" },
    { nombre: "PAKISTÁN", abreviacion: "PK", continente: "Asia", bandera: "🇵🇰", idioma: "Urdu, Inglés" },
    { nombre: "PERÚ", abreviacion: "PE", continente: "América del Sur", bandera: "🇵🇪", idioma: "Español" },
    { nombre: "FILIPINAS", abreviacion: "PH", continente: "Asia", bandera: "🇵🇭", idioma: "Filipino, Inglés" },
    { nombre: "POLONIA", abreviacion: "PL", continente: "Europa", bandera: "🇵🇱", idioma: "Polaco" },
    { nombre: "PORTUGAL", abreviacion: "PT", continente: "Europa", bandera: "🇵🇹", idioma: "Portugués" },
    { nombre: "REINO UNIDO", abreviacion: "GB", continente: "Europa", bandera: "🇬🇧", idioma: "Inglés" },
    { nombre: "RUSIA", abreviacion: "RU", continente: "Europa/Asia", bandera: "🇷🇺", idioma: "Ruso" },
    { nombre: "ARABIA SAUDITA", abreviacion: "SA", continente: "Asia", bandera: "🇸🇦", idioma: "Árabe" },
    { nombre: "COREA DEL SUR", abreviacion: "KR", continente: "Asia", bandera: "🇰🇷", idioma: "Coreano" },
    { nombre: "SUDÁFRICA", abreviacion: "ZA", continente: "África", bandera: "🇿🇦", idioma: "Inglés, Afrikáans, Zulu" },
    { nombre: "SUECIA", abreviacion: "SE", continente: "Europa", bandera: "🇸🇪", idioma: "Sueco" },
    { nombre: "SUIZA", abreviacion: "CH", continente: "Europa", bandera: "🇨🇭", idioma: "Alemán, Francés, Italiano" },
    { nombre: "TAILANDIA", abreviacion: "TH", continente: "Asia", bandera: "🇹🇭", idioma: "Tailandés" },
    { nombre: "TURQUÍA", abreviacion: "TR", continente: "Asia/Europa", bandera: "🇹🇷", idioma: "Turco" },
    { nombre: "UCRANIA", abreviacion: "UA", continente: "Europa", bandera: "🇺🇦", idioma: "Ucraniano" },
    { nombre: "EMIRATOS ÁRABES UNIDOS", abreviacion: "AE", continente: "Asia", bandera: "🇦🇪", idioma: "Árabe" },
    { nombre: "ESTADOS UNIDOS", abreviacion: "US", continente: "América del Norte", bandera: "🇺🇸", idioma: "Inglés" },
    { nombre: "URUGUAY", abreviacion: "UY", continente: "América del Sur", bandera: "🇺🇾", idioma: "Español" },
    { nombre: "VIETNAM", abreviacion: "VN", continente: "Asia", bandera: "🇻🇳", idioma: "Vietnamita" },
    { nombre: "VENEZUELA", abreviacion: "VE", continente: "América del Sur", bandera: "🇻🇪", idioma: "Español" },
    { nombre: "CHILE", abreviacion: "CL", continente: "América del Sur", bandera: "🇨🇱", idioma: "Español" },
    { nombre: "SUDÁN", abreviacion: "SD", continente: "África", bandera: "🇸🇩", idioma: "Árabe, Inglés" },
    { nombre: "ISRAEL", abreviacion: "IL", continente: "Asia", bandera: "🇮🇱", idioma: "Hebreo, Árabe" },
    { nombre: "BANGLADESH", abreviacion: "BD", continente: "Asia", bandera: "🇧🇩", idioma: "Bengalí" },
    { nombre: "SINGAPUR", abreviacion: "SG", continente: "Asia", bandera: "🇸🇬", idioma: "Inglés, Chino, Malayo, Tamil" },
    { nombre: "GRECIA", abreviacion: "GR", continente: "Europa", bandera: "🇬🇷", idioma: "Griego" },
    { nombre: "FINLANDIA", abreviacion: "FI", continente: "Europa", bandera: "🇫🇮", idioma: "Finés, Sueco" },
    { nombre: "AUSTRIA", abreviacion: "AT", continente: "Europa", bandera: "🇦🇹", idioma: "Alemán" },
    { nombre: "BÉLGICA", abreviacion: "BE", continente: "Europa", bandera: "🇧🇪", idioma: "Holandés, Francés, Alemán" },
    { nombre: "HUNGRÍA", abreviacion: "HU", continente: "Europa", bandera: "🇭🇺", idioma: "Húngaro" }
];



const palabraIngresada = document.querySelector('#palabra');
const sectionParaAgregarDivPais = document.querySelector('.js-section-pais');

palabraIngresada.addEventListener('input', evaluarPalabraIngresada);

function evaluarPalabraIngresada() {
    const valorIngresado = palabraIngresada.value.toLowerCase();
    sectionParaAgregarDivPais.innerHTML = '';
    if (!valorIngresado) {
        sectionParaAgregarDivPais.innerHTML = '';
    } else {

        for (let i = 0; i < paises.length; i++) {
            
            if (eliminarAcentos(paises[i].nombre.toLowerCase()).includes(valorIngresado)) {
                sectionParaAgregarDivPais.innerHTML += `
                <div class="js-div-pais">
                    <p class="js-nombre">${paises[i].nombre}</p>
                    <p class="js-abreviacion ocultar">${paises[i].abreviacion}</p>
                    <p class="js-continente ocultar">${paises[i].continente}</p>
                    <p class="js-bandera">${paises[i].bandera}</p>
                    <p class="js-idioma ocultar">${paises[i].idioma}</p>
                </div>`;
            }
        }
    }
}


function eliminarAcentos(cadena) {
    return cadena.normalize("NFD").replace(/[̀-ͯ]/g, "");
}