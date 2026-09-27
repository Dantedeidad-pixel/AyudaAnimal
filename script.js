// ==========================================
// AYUDA ANIMAL - SCRIPT COMPLETO
// ==========================================


// ==========================================
// ANIMALES DE EJEMPLO
// ==========================================

const animales = [
    {
        nombre: "Luna",
        tipo: "Perro",
        necesidad: "Necesita alimento",
        zona: "Centro",
        latitud: 4.610,
        longitud: -74.081
    },

    {
        nombre: "Michi",
        tipo: "Gato",
        necesidad: "Necesita atención veterinaria",
        zona: "Norte",
        latitud: 4.620,
        longitud: -74.090
    },

    {
        nombre: "Max",
        tipo: "Perro",
        necesidad: "Busca un hogar",
        zona: "Sur",
        latitud: 4.600,
        longitud: -74.070
    }
];


// ==========================================
// UBICACIÓN
// ==========================================

const botonUbicacion = document.getElementById("ubicacion");

if (botonUbicacion) {
    botonUbicacion.addEventListener("click", obtenerUbicacion);
}


function obtenerUbicacion() {

    if (!navigator.geolocation) {
        alert("Tu navegador no permite usar la ubicación.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        ubicacionEncontrada,
        errorUbicacion
    );
}


function ubicacionEncontrada(posicion) {

    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;

    mostrarAnimales(latitud, longitud);
}


function errorUbicacion() {

    alert(
        "No pudimos obtener tu ubicación. " +
        "Asegúrate de permitir el acceso."
    );
}


// ==========================================
// MOSTRAR ANIMALES
// ==========================================

function mostrarAnimales(latitudUsuario, longitudUsuario) {

    const resultados = document.getElementById("resultados");

    if (!resultados) return;

    resultados.innerHTML = "";

    animales.forEach(animal => {

        const distancia = calcularDistancia(
            latitudUsuario,
            longitudUsuario,
            animal.latitud,
            animal.longitud
        );

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("animal");

        tarjeta.innerHTML = `
            <h3>🐾 ${animal.nombre}</h3>

            <p><strong>Tipo:</strong> ${animal.tipo}</p>

            <p><strong>Necesita:</strong> ${animal.necesidad}</p>

            <p><strong>Zona:</strong> ${animal.zona}</p>

            <p>📍 A ${distancia.toFixed(2)} km de ti</p>

            <button class="ayudar-btn">
                ❤️ Quiero ayudar
            </button>
        `;

        resultados.appendChild(tarjeta);
    });

}


// ==========================================
// DISTANCIA
// ==========================================

function calcularDistancia(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = gradosARadianes(lat2 - lat1);
    const dLon = gradosARadianes(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(gradosARadianes(lat1)) *
        Math.cos(gradosARadianes(lat2)) *
        Math.sin(dLon / 2) ** 2;

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}


// ==========================================
// MODAL
// ==========================================

const modalPublicar =
    document.getElementById("modalPublicar");

const botonPublicar =
    document.getElementById("botonPublicar");

const botonPublicar2 =
    document.getElementById("botonPublicar2");

const cerrarModal =
    document.getElementById("cerrarModal");


function abrirModal() {

    if (modalPublicar) {
        modalPublicar.classList.add("activo");
    }
}


if (botonPublicar) {
    botonPublicar.addEventListener("click", abrirModal);
}


if (botonPublicar2) {
    botonPublicar2.addEventListener("click", abrirModal);
}


if (cerrarModal) {

    cerrarModal.addEventListener("click", () => {
        modalPublicar.classList.remove("activo");
    });

}


// Cerrar haciendo clic afuera

if (modalPublicar) {

    modalPublicar.addEventListener("click", (evento) => {

        if (evento.target === modalPublicar) {
            modalPublicar.classList.remove("activo");
        }

    });

}


// ==========================================
// ELEMENTOS DEL FORMULARIO
// ==========================================

const formularioAnimal =
    document.getElementById("formularioAnimal");

const fotoAnimal =
    document.getElementById("fotoAnimal");

const vistaPreviaFoto =
    document.getElementById("vistaPreviaFoto");


// ==========================================
// PREVISUALIZAR FOTO
// ==========================================

if (fotoAnimal) {

    fotoAnimal.addEventListener("change", () => {

        const archivo = fotoAnimal.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith("image/")) {

            alert("Selecciona una imagen válida.");

            fotoAnimal.value = "";

            return;
        }

        const lector = new FileReader();

        lector.onload = (evento) => {

            if (vistaPreviaFoto) {

                vistaPreviaFoto.innerHTML = `
                    <img
                        src="${evento.target.result}"
                        alt="Vista previa"
                    >
                `;

            }

        };

        lector.readAsDataURL(archivo);

    });

}


// ==========================================
// PUBLICAR
// ==========================================

if (formularioAnimal) {

    formularioAnimal.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nombre =
            document.getElementById("nombreAnimal").value;

        const tipo =
            document.getElementById("tipoAnimal").value;

        const edad =
            document.getElementById("edadAnimal").value;

        const sexo =
            document.getElementById("sexoAnimal").value;

        const tamano =
            document.getElementById("tamanoAnimal").value;

        const necesidad =
            document.getElementById("necesidadAnimal").value;

        const zona =
            document.getElementById("zonaAnimal").value;

        const salud =
            document.getElementById("saludAnimal").value;

        const descripcion =
            document.getElementById("descripcionAnimal").value;

        const archivo =
            fotoAnimal ? fotoAnimal.files[0] : null;


        // Si tiene foto

        if (archivo) {

            const lector = new FileReader();

            lector.onload = (eventoFoto) => {

                guardarPublicacion({

                    foto: eventoFoto.target.result,

                    nombre: nombre,

                    tipo: tipo,

                    edad: edad || "No especificada",

                    sexo: sexo,

                    tamano: tamano,

                    necesidad: necesidad,

                    zona: zona || "No especificada",

                    salud: salud || "No especificada",

                    descripcion:
                        descripcion || "Sin descripción."

                });

            };

            lector.readAsDataURL(archivo);


        } else {

            guardarPublicacion({

                foto: "",

                nombre: nombre,

                tipo: tipo,

                edad: edad || "No especificada",

                sexo: sexo,

                tamano: tamano,

                necesidad: necesidad,

                zona: zona || "No especificada",

                salud: salud || "No especificada",

                descripcion:
                    descripcion || "Sin descripción."

            });

        }

    });

}


// ==========================================
// GUARDAR PUBLICACIÓN
// ==========================================

function guardarPublicacion(publicacion) {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];


    publicacion.id = Date.now();


    publicaciones.push(publicacion);


    localStorage.setItem(
        "publicacionesAnimales",
        JSON.stringify(publicaciones)
    );


    // Mostrar inmediatamente

    mostrarPublicacion(publicacion);


    // Cerrar

    if (modalPublicar) {
        modalPublicar.classList.remove("activo");
    }


    // Limpiar

    if (formularioAnimal) {
        formularioAnimal.reset();
    }


    if (vistaPreviaFoto) {
        vistaPreviaFoto.innerHTML =
            "📷 Aquí aparecerá la foto";
    }


    alert("🐾 ¡Animal publicado correctamente!");

}


// ==========================================
// MOSTRAR PUBLICACIÓN
// ==========================================

function mostrarPublicacion(animal) {

    const resultados =
        document.getElementById("resultados");

    if (!resultados) return;


    const tarjeta =
        document.createElement("div");

    tarjeta.classList.add("animal");


    let fotoHTML = "";


    if (animal.foto) {

        fotoHTML = `
            <div class="animal-foto-publicacion">
                <img
                    src="${animal.foto}"
                    alt="Foto de ${animal.nombre}"
                >
            </div>
        `;

    } else {

        fotoHTML = `
            <div class="animal-foto-publicacion sin-foto">
                🐾
            </div>
        `;

    }


    tarjeta.innerHTML = `

        ${fotoHTML}

        <h3>🐾 ${animal.nombre}</h3>

        <p>
            <strong>🐾 Tipo:</strong>
            ${animal.tipo}
        </p>

        <p>
            <strong>🎂 Edad:</strong>
            ${animal.edad}
        </p>

        <p>
            <strong>⚧️ Sexo:</strong>
            ${animal.sexo}
        </p>

        <p>
            <strong>📏 Tamaño:</strong>
            ${animal.tamano}
        </p>

        <p>
            <strong>❤️ Necesita:</strong>
            ${animal.necesidad}
        </p>

        <p>
            <strong>📍 Zona:</strong>
            ${animal.zona}
        </p>

        <p>
            <strong>🩺 Salud:</strong>
            ${animal.salud}
        </p>

        <p>
            <strong>📝 Historia:</strong>
            ${animal.descripcion}
        </p>

        <p>
            📢 Publicado recientemente
        </p>

        <button class="ayudar-btn">
            ❤️ Quiero ayudar
        </button>
    `;


    resultados.prepend(tarjeta);
}


// ==========================================
// CARGAR PUBLICACIONES AL ABRIR LA PÁGINA
// ==========================================

function cargarPublicaciones() {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];


    publicaciones.forEach(publicacion => {

        mostrarPublicacion(publicacion);

    });

}


cargarPublicaciones();