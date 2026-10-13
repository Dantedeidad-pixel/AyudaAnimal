const SUPABASE_URL = "https://eipxfdtlemdykdomkrku.supabase.co";

const SUPABASE_KEY = "sb_publishable_oZzjRB_M2-buW3e4phEEmg_WDRJVuDZ";

async function probarSupabase() {

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/publicaciones_animales?select=*`,
            {
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`
                }
            }
        );

        const datos = await respuesta.json();

        console.log("🐾 CONEXIÓN CON SUPABASE:", datos);

    } catch (error) {

        console.error(
            "❌ Error conectando con Supabase:",
            error
        );

    }
}

probarSupabase();
// ==========================================
// AYUDA ANIMAL - SCRIPT COMPLETO
// ==========================================


// ==========================================
// ANIMALES DE EJEMPLO
// ==========================================

const animales = [
    {
        nombre: "chiwa",
        tipo: "gato",
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
let publicacionEditandoId = null;
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

    // Limpiamos la pantalla para evitar duplicados
    resultados.innerHTML = "";


    // ==========================================
    // VOLVER A MOSTRAR LAS PUBLICACIONES
    // ==========================================

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];

    publicaciones.forEach(publicacion => {

        mostrarPublicacion(publicacion);

    });


    // ==========================================
    // MOSTRAR ANIMALES CERCANOS DE EJEMPLO
    // ==========================================

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

            <p>
                <strong>Tipo:</strong>
                ${animal.tipo}
            </p>

            <p>
                <strong>Necesita:</strong>
                ${animal.necesidad}
            </p>

            <p>
                <strong>Zona:</strong>
                ${animal.zona}
            </p>

            <p>
                📍 A ${distancia.toFixed(2)} km de ti
            </p>

            <button
                class="ayudar-btn"
                onclick="mostrarOpcionesAyuda('${animal.nombre}')"
            >
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


        // Guardamos el archivo seleccionado
        fotoAnimal.archivoSeleccionado = archivo;


        // Vista previa
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
// GUARDAR / EDITAR PUBLICACIÓN
// ==========================================

async function guardarPublicacion(publicacion) {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];


// ==========================================
// EDITAR UNA PUBLICACIÓN EXISTENTE
// ==========================================

if (publicacionEditandoId !== null) {

    const indice =
        publicaciones.findIndex(
            animal => animal.id === publicacionEditandoId
        );

    if (indice !== -1) {

        // Conservamos ID y estado
        publicacion.id =
            publicaciones[indice].id;

        publicacion.estado =
            publicaciones[indice].estado || "publicado";


        // ==========================================
        // ACTUALIZAR EN SUPABASE
        // ==========================================

        try {

            const respuesta = await fetch(
                `${SUPABASE_URL}/rest/v1/publicaciones_animales?id=eq.${publicacionEditandoId}`,
                {
                    method: "PATCH",

                    headers: {
                        "apikey": SUPABASE_KEY,
                        "Authorization": `Bearer ${SUPABASE_KEY}`,
                        "Content-Type": "application/json",
                        "Prefer": "return=representation"
                    },

                    body: JSON.stringify({

                        nombre: publicacion.nombre,
                        tipo: publicacion.tipo,
                        edad: publicacion.edad,
                        sexo: publicacion.sexo,
                        tamano: publicacion.tamano,
                        necesidad: publicacion.necesidad,
                        zona: publicacion.zona,
                        salud: publicacion.salud,
                        descripcion: publicacion.descripcion,
                        foto_url: publicacion.foto || null

                    })
                }
            );


            const resultado =
                await respuesta.json();


            if (!respuesta.ok) {

                console.error(
                    "❌ Error actualizando publicación:",
                    resultado
                );

                alert(
                    "⚠️ No se pudo actualizar la publicación en Supabase."
                );

                return;
            }


            console.log(
                "🐾 Publicación actualizada en Supabase:",
                resultado
            );


        } catch (error) {

            console.error(
                "❌ Error conectando con Supabase:",
                error
            );

            return;
        }


        // ==========================================
        // ACTUALIZAR LOCALMENTE
        // ==========================================

        publicaciones[indice] = publicacion;

        localStorage.setItem(
            "publicacionesAnimales",
            JSON.stringify(publicaciones)
        );


        actualizarEstadisticas();

        publicacionEditandoId = null;


        // Cerrar formulario

        if (modalPublicar) {
            modalPublicar.classList.remove("activo");
        }


        // Limpiar formulario

        if (formularioAnimal) {
            formularioAnimal.reset();
        }


        if (vistaPreviaFoto) {
            vistaPreviaFoto.innerHTML =
                "📷 Aquí aparecerá la foto";
        }


        // Recargar publicaciones desde Supabase

        if (typeof cargarPublicaciones === "function") {
            cargarPublicaciones();
        }


        alert(
            "✏️ ¡Publicación actualizada correctamente!"
        );

        return;
    }
}


    // ==========================================
    // CREAR UNA PUBLICACIÓN NUEVA
    // ==========================================

    publicacion.estado = "publicado";


    // ==========================================
    // GUARDAR EN SUPABASE
    // ==========================================

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/publicaciones_animales`,
            {
                method: "POST",

                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                },

                body: JSON.stringify({

                    nombre: publicacion.nombre,
                    tipo: publicacion.tipo,
                    edad: publicacion.edad,
                    sexo: publicacion.sexo,
                    tamano: publicacion.tamano,
                    necesidad: publicacion.necesidad,
                    zona: publicacion.zona,
                    salud: publicacion.salud,
                    descripcion: publicacion.descripcion,
                    foto_url: publicacion.foto || null,
                    estado: "publicado"

                })
            }
        );


        const resultado =
            await respuesta.json();


        if (!respuesta.ok) {

            console.error(
                "❌ Error guardando en Supabase:",
                resultado
            );

            alert(
                "⚠️ La publicación se guardó localmente, pero hubo un problema con la base de datos."
            );

        } else {

            console.log(
                "🐾 Publicación guardada en Supabase:",
                resultado
            );


            // ==========================================
            // USAR EL ID REAL DE SUPABASE
            // ==========================================

            if (resultado.length > 0) {

                publicacion.id =
                    resultado[0].id;

                publicacion.estado =
                    resultado[0].estado || "publicado";

            }

        }

    } catch (error) {

        console.error(
            "❌ Error de conexión con Supabase:",
            error
        );

        // Si Supabase falla, usamos un ID local
        publicacion.id = Date.now();

        alert(
            "⚠️ No se pudo conectar con Supabase. La publicación quedará guardada localmente."
        );
    }


    // ==========================================
    // GUARDAR LOCALMENTE
    // ==========================================

    publicaciones.push(publicacion);

    localStorage.setItem(
        "publicacionesAnimales",
        JSON.stringify(publicaciones)
    );


    actualizarEstadisticas();


    // Mostrar inmediatamente
    mostrarPublicacion(publicacion);


    // Cerrar formulario
    if (modalPublicar) {
        modalPublicar.classList.remove("activo");
    }


    // Limpiar formulario
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
// ESTADO DE LA PUBLICACIÓN
// ==========================================

function obtenerEstadoVisual(estado) {

    if (estado === "en_proceso") {
        return "🟡 Ayuda en proceso";
    }

    if (estado === "solucionado") {
        return "✅ Caso solucionado";
    }

    return "📢 Publicado";
}
// ==========================================
// MOSTRAR PUBLICACIÓN
// ==========================================

function mostrarPublicacion(animal) {

    const resultados =
        document.getElementById("resultados");

    if (!resultados) return;
    // Contar ayudas recibidas
const ayudas =
    JSON.parse(
        localStorage.getItem("ayudasAnimales")
    ) || [];

const ayudasAnimal =
    ayudas.filter(
        ayuda => ayuda.animal === animal.nombre
    );

const alimento =
    ayudasAnimal.filter(
        ayuda => ayuda.tipo === "🍖 Dar alimento"
    ).length;

const veterinario =
    ayudasAnimal.filter(
        ayuda => ayuda.tipo === "🏥 Ayudar con veterinario"
    ).length;

const transporte =
    ayudasAnimal.filter(
        ayuda => ayuda.tipo === "🚗 Ofrecer transporte"
    ).length;

const hogar =
    ayudasAnimal.filter(
        ayuda => ayuda.tipo === "🏠 Dar hogar temporal"
    ).length;
    // Los casos solucionados ya no aparecen
// entre los casos activos
if (animal.estado === "solucionado") {
    return;
}


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

        <p class="estado-publicacion">
    ${obtenerEstadoVisual(animal.estado)}
</p>

<div class="ayudas-registradas">

    ${alimento > 0 ? `
        <span>🍖 ${alimento} ${alimento === 1 ? "persona ofreció alimento" : "personas ofrecieron alimento"}</span>
    ` : ""}

    ${veterinario > 0 ? `
        <span>🏥 ${veterinario} ${veterinario === 1 ? "persona ofreció ayuda veterinaria" : "personas ofrecieron ayuda veterinaria"}</span>
    ` : ""}

    ${transporte > 0 ? `
        <span>🚗 ${transporte} ${transporte === 1 ? "persona ofreció transporte" : "personas ofrecieron transporte"}</span>
    ` : ""}

    ${hogar > 0 ? `
        <span>🏠 ${hogar} ${hogar === 1 ? "persona ofreció hogar temporal" : "personas ofrecieron hogar temporal"}</span>
    ` : ""}

</div>

        <div class="acciones-publicacion">

    <button
        class="ayudar-btn"
        onclick="mostrarOpcionesAyuda('${animal.nombre}')"
    >
        ❤️ Quiero ayudar
    </button>

    ${
    animal.id
    ? `
        <button
            class="opciones-btn"
            data-id="${animal.id}"
        >
            ⋮ Opciones
        </button>
    `
    : ""
}

</div>
    `;

resultados.prepend(tarjeta);


// Activar botón de opciones

const botonOpciones =
    tarjeta.querySelector(".opciones-btn");

if (botonOpciones) {

    botonOpciones.addEventListener("click", () => {

        const id =
            Number(botonOpciones.dataset.id);

        mostrarOpcionesPublicacion(id);

    });

}
}


// ==========================================
// CARGAR PUBLICACIONES AL ABRIR LA PÁGINA
// ==========================================

async function cargarPublicaciones() {

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/publicaciones_animales?select=*`,
            {
                method: "GET",

                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`
                }
            }
        );


        const publicacionesSupabase =
            await respuesta.json();


        if (!respuesta.ok) {

            console.error(
                "❌ Error cargando publicaciones:",
                publicacionesSupabase
            );

            return;
        }


        console.log(
            "🐾 Publicaciones cargadas desde Supabase:",
            publicacionesSupabase
        );


        // Convertimos los datos de Supabase
        // al formato que usa nuestra página

        publicacionesSupabase.forEach(animal => {

            const publicacion = {

                id: animal.id,

                nombre: animal.nombre,

                tipo: animal.tipo,

                edad: animal.edad,

                sexo: animal.sexo,

                tamano: animal.tamano,

                necesidad: animal.necesidad,

                zona: animal.zona,

                salud: animal.salud,

                descripcion: animal.descripcion,

                foto: animal.foto_url,

                estado: animal.estado

            };


            mostrarPublicacion(publicacion);

        });


    } catch (error) {

        console.error(
            "❌ Error conectando con Supabase:",
            error
        );

    }

}


cargarPublicaciones();
// ==========================================
// OPCIONES PARA AYUDAR
// ==========================================

function mostrarOpcionesAyuda(nombreAnimal) {

    const opciones = document.createElement("div");

    opciones.classList.add("modal-ayuda");

    opciones.innerHTML = `

        <div class="contenido-ayuda">

            <button
                class="cerrar-ayuda"
                onclick="this.parentElement.parentElement.remove()">
                ×
            </button>

            <h2>🐾 Ayudar a ${nombreAnimal}</h2>

            <p>
                ¿Cómo te gustaría ayudar?
            </p>

            <button
                onclick="mostrarFormularioAyuda('🍖 Dar alimento', '${nombreAnimal}')">
                🍖 Dar alimento
            </button>

            <button
                onclick="mostrarFormularioAyuda('🏥 Ayudar con veterinario', '${nombreAnimal}')">
                🏥 Ayudar con veterinario
            </button>

            <button
                onclick="mostrarFormularioAyuda('🚗 Ofrecer transporte', '${nombreAnimal}')">
                🚗 Ofrecer transporte
            </button>

            <button
                onclick="mostrarFormularioAyuda('🏠 Dar hogar temporal', '${nombreAnimal}')">
                🏠 Dar hogar temporal
            </button>

            <button
                onclick="mostrarCompartirCaso('${nombreAnimal}')">
                📢 Compartir el caso
            </button>

        </div>
    `;

    document.body.appendChild(opciones);
}

function mostrarFormularioAyuda(tipoAyuda, nombreAnimal) {

    document
        .querySelectorAll(".modal-ayuda")
        .forEach(modal => modal.remove());

    const formulario = document.createElement("div");

    formulario.classList.add("modal-ayuda");

    let contenido = "";

    if (tipoAyuda === "🍖 Dar alimento") {

        contenido = `

            <h2>🍖 Ayudar a ${nombreAnimal}</h2>

            <p>
                Cuéntanos cómo piensas ayudar con alimento.
            </p>

            <label>
                ¿Qué podrías llevar?
            </label>

            <input
                type="text"
                id="datoAyuda"
                placeholder="Ej: comida y agua"
            >

            <label>
                ¿Cuándo podrías hacerlo?
            </label>

            <input
                type="text"
                id="fechaAyuda"
                placeholder="Ej: Hoy en la tarde"
            >

            <label>
                ¿Dónde podrías entregarlo?
            </label>

            <input
                type="text"
                id="lugarAyuda"
                placeholder="Ej: Parque del barrio"
            >

        `;

    } else if (tipoAyuda === "🏥 Ayudar con veterinario") {

        contenido = `

            <h2>🏥 Ayudar a ${nombreAnimal}</h2>

            <p>
                Cuéntanos qué tipo de ayuda veterinaria puedes brindar.
            </p>

            <label>
                ¿Cómo podrías ayudar?
            </label>

            <input
                type="text"
                id="datoAyuda"
                placeholder="Ej: Llevarlo al veterinario"
            >

            <label>
                ¿Cuándo podrías hacerlo?
            </label>

            <input
                type="text"
                id="fechaAyuda"
                placeholder="Ej: Mañana"
            >

            <label>
                Información adicional
            </label>

            <textarea
                id="lugarAyuda"
                placeholder="Escribe algo que quieras aclarar..."
            ></textarea>

        `;

    } else if (tipoAyuda === "🚗 Ofrecer transporte") {

        contenido = `

            <h2>🚗 Ayudar a ${nombreAnimal}</h2>

            <p>
                Cuéntanos cómo podrías transportarlo.
            </p>

            <label>
                ¿Desde dónde podrías recogerlo?
            </label>

            <input
                type="text"
                id="datoAyuda"
                placeholder="Ej: Barrio Centro"
            >

            <label>
                ¿Hasta dónde podrías llevarlo?
            </label>

            <input
                type="text"
                id="lugarAyuda"
                placeholder="Ej: Clínica veterinaria"
            >

            <label>
                ¿Cuándo estarías disponible?
            </label>

            <input
                type="text"
                id="fechaAyuda"
                placeholder="Ej: Hoy después de las 5 PM"
            >

        `;

    } else if (tipoAyuda === "🏠 Dar hogar temporal") {

        contenido = `

            <h2>🏠 Ayudar a ${nombreAnimal}</h2>

            <p>
                Cuéntanos sobre el hogar temporal que podrías ofrecer.
            </p>

            <label>
                ¿Por cuánto tiempo podrías recibirlo?
            </label>

            <input
                type="text"
                id="datoAyuda"
                placeholder="Ej: Una semana"
            >

            <label>
                ¿Tienes otros animales?
            </label>

            <input
                type="text"
                id="lugarAyuda"
                placeholder="Ej: Sí, tengo un perro"
            >

            <label>
                Información adicional
            </label>

            <textarea
                id="fechaAyuda"
                placeholder="Cuéntanos algo más..."
            ></textarea>

        `;
    }

    formulario.innerHTML = `

        <div class="contenido-ayuda">

            <button
                class="cerrar-ayuda"
                onclick="this.parentElement.parentElement.remove()">
                ×
            </button>

            ${contenido}

            <button
                class="boton-enviar-ayuda"
                onclick="enviarPropuestaAyuda('${tipoAyuda}', '${nombreAnimal}')">
                💚 Enviar propuesta de ayuda
            </button>

        </div>

    `;

    document.body.appendChild(formulario);
}

function mostrarCompartirCaso(nombreAnimal) {

    document
        .querySelectorAll(".modal-ayuda")
        .forEach(modal => modal.remove());

    const compartir = document.createElement("div");

    compartir.classList.add("modal-ayuda");

    compartir.innerHTML = `

        <div class="contenido-ayuda">

            <button
                class="cerrar-ayuda"
                onclick="this.parentElement.parentElement.remove()">
                ×
            </button>

            <h2>📢 Compartir caso</h2>

            <p>
                Ayuda a que más personas conozcan el caso de
                <strong>${nombreAnimal}</strong> 🐾
            </p>

            <button
                onclick="compartirWhatsApp('${nombreAnimal}')">
                🟢 Compartir por WhatsApp
            </button>

            <button
                onclick="compartirFacebook('${nombreAnimal}')">
                🔵 Compartir en Facebook
            </button>

            <button
                onclick="copiarEnlaceCaso('${nombreAnimal}')">
                🔗 Copiar enlace del caso
            </button>

            <button
                onclick="compartirNativo('${nombreAnimal}')">
                📱 Más opciones para compartir
            </button>

        </div>

    `;

    document.body.appendChild(compartir);
}

function compartirWhatsApp(nombreAnimal) {

    const texto =
        `🐾 Ayuda Animal\n\n` +
        `${nombreAnimal} necesita ayuda.\n\n` +
        `Mira su caso y descubre cómo puedes ayudar. 🐶🐱`;

    const enlace =
        window.location.href;

    const mensaje =
        encodeURIComponent(
            texto + "\n\n" + enlace
        );

    window.open(
        `https://wa.me/?text=${mensaje}`,
        "_blank"
    );
}


function copiarEnlaceCaso(nombreAnimal) {

    const enlace =
        window.location.href;

    navigator.clipboard.writeText(enlace)
        .then(() => {

            alert(
                "🔗 ¡Enlace copiado!\n\n" +
                "Ya puedes pegarlo en WhatsApp, Instagram, Facebook o donde quieras compartir el caso de " +
                nombreAnimal +
                ". 🐾"
            );

        })
        .catch(() => {

            alert(
                "⚠️ No se pudo copiar automáticamente el enlace."
            );

        });
}

async function enviarPropuestaAyuda(tipoAyuda, nombreAnimal) {

    const dato =
        document.getElementById("datoAyuda")?.value.trim() || "";

    const fecha =
        document.getElementById("fechaAyuda")?.value.trim() || "";

    const lugar =
        document.getElementById("lugarAyuda")?.value.trim() || "";

    if (!dato && !fecha && !lugar) {

        alert(
            "🐾 Cuéntanos al menos un poco sobre cómo piensas ayudar."
        );

        return;
    }

    // Guardar también localmente
    const ayudas =
        JSON.parse(
            localStorage.getItem("ayudasAnimales")
        ) || [];

    const nuevaAyuda = {

        animal: nombreAnimal,

        tipo: tipoAyuda,

        informacion: dato,

        fechaAyuda: fecha,

        lugar: lugar,

        fechaRegistro:
            new Date().toLocaleString()

    };

    ayudas.push(nuevaAyuda);

    localStorage.setItem(
        "ayudasAnimales",
        JSON.stringify(ayudas)
    );


    // 💾 Guardar propuesta en Supabase

    try {

        const respuesta =
            await fetch(
                `${SUPABASE_URL}/rest/v1/ayudas_animales`,
                {
                    method: "POST",

                    headers: {
                        "apikey": SUPABASE_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_KEY}`,

                        "Content-Type":
                            "application/json",

                        "Prefer":
                            "return=representation"
                    },

                    body: JSON.stringify({

                        animal_nombre:
                            nombreAnimal,

                        tipo_ayuda:
                            tipoAyuda,

                        informacion:
                            dato,

                        fecha_ayuda:
                            fecha,

                        lugar:
                            lugar

                    })
                }
            );


        const resultado =
            await respuesta.json();


        if (!respuesta.ok) {

            console.error(
                "❌ Error guardando propuesta:",
                resultado
            );

            alert(
                "⚠️ La propuesta quedó guardada en este navegador, pero no se pudo guardar en la base de datos."
            );

        } else {

            console.log(
                "💚 Propuesta guardada en Supabase:",
                resultado
            );

        }

    } catch (error) {

        console.error(
            "❌ Error conectando con Supabase:",
            error
        );

        alert(
            "⚠️ No se pudo conectar con la base de datos."
        );
    }


    // Mostrar la propuesta inmediatamente

    const tarjetas =
        document.querySelectorAll(".animal");


    tarjetas.forEach(tarjeta => {

        const titulo =
            tarjeta.querySelector("h3");

        if (!titulo) return;


        if (
            titulo.textContent
                .toLowerCase()
                .includes(
                    nombreAnimal.toLowerCase()
                )
        ) {

            let propuestas =
                tarjeta.querySelector(
                    ".propuestas-ayuda"
                );


            if (!propuestas) {

                propuestas =
                    document.createElement("div");

                propuestas.classList.add(
                    "propuestas-ayuda"
                );

                tarjeta.appendChild(
                    propuestas
                );
            }


            const propuesta =
                document.createElement("div");

            propuesta.classList.add(
                "propuesta-ayuda"
            );


            propuesta.innerHTML = `

                <strong>
                    ${tipoAyuda}
                </strong>

                ${
                    dato
                    ? `<p>📝 ${dato}</p>`
                    : ""
                }

                ${
                    fecha
                    ? `<p>📅 ${fecha}</p>`
                    : ""
                }

                ${
                    lugar
                    ? `<p>📍 ${lugar}</p>`
                    : ""
                }

            `;


            propuestas.appendChild(
                propuesta
            );
        }

    });


    // Cerrar ventana

    document
        .querySelectorAll(".modal-ayuda")
        .forEach(
            modal => modal.remove()
        );


    alert(
        "💚 ¡Gracias por querer ayudar a " +
        nombreAnimal +
        "!\n\n" +
        "Tu propuesta quedó registrada."
    );
}


// ==========================================
// SELECCIONAR FORMA DE AYUDA
// ==========================================

function seleccionarAyuda(tipoAyuda, nombreAnimal) {

    // Guardar la ayuda
    const ayudas =
        JSON.parse(
            localStorage.getItem("ayudasAnimales")
        ) || [];

    ayudas.push({
        animal: nombreAnimal,
        tipo: tipoAyuda,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem(
        "ayudasAnimales",
        JSON.stringify(ayudas)
    );


    // Contar cuántas personas han ofrecido esta ayuda
    const cantidad =
        ayudas.filter(
            ayuda =>
                ayuda.animal === nombreAnimal &&
                ayuda.tipo === tipoAyuda
        ).length;


    // Buscar la tarjeta del animal
    const tarjetas =
        document.querySelectorAll(".animal");

    tarjetas.forEach(tarjeta => {

        const titulo =
            tarjeta.querySelector("h3");

        if (!titulo) return;


        // Comprobar que sea el animal correcto
        if (
            titulo.textContent
                .toLowerCase()
                .includes(nombreAnimal.toLowerCase())
        ) {

            // Buscar si ya existe el mensaje
            let mensaje =
                tarjeta.querySelector(".ayuda-registrada");


            // Si no existe, crearlo
            if (!mensaje) {

                mensaje =
                    document.createElement("div");

                mensaje.classList.add(
                    "ayuda-registrada"
                );

                tarjeta.appendChild(mensaje);
            }


            // Mostrar la ayuda
            mensaje.textContent =
                tipoAyuda +
                " · " +
                cantidad +
                (
                    cantidad === 1
                        ? " persona ayudando"
                        : " personas ayudando"
                );

        }

    });


    // Cerrar la ventana de opciones
    document
        .querySelectorAll(".modal-ayuda")
        .forEach(modal => modal.remove());


    alert(
        "🐾 ¡Gracias por ayudar a " +
        nombreAnimal +
        "!\n\n" +
        tipoAyuda +
        "\n\n" +
        "Tu ayuda quedó registrada. 💗"
    );

}
// ==========================================
// INFORMACIÓN DE ADOPCIÓN
// ==========================================

const botonesAnimal = document.querySelectorAll(".info-animal");

const informacionAnimales = {

    "chiwa": {
        nombre: "Chiwa",
        emoji: "🐈",
        edad: "1 año",
        sexo: "Hembra",
        tamaño: "Pequeña",
        salud: "Buen estado de salud",
        personalidad: "Tranquila y cariñosa",
        historia: "Chiwa busca una familia responsable que pueda darle un hogar estable y mucho cariño."
    },

    "Michi": {
        nombre: "Michi",
        emoji: "🐱",
        edad: "1 año",
        sexo: "No especificado",
        tamaño: "Pequeño",
        salud: "Necesita atención veterinaria",
        personalidad: "Curioso y juguetón",
        historia: "Michi está buscando una familia responsable que pueda cuidarlo y darle un hogar seguro."
    },

    "Max": {
        nombre: "Max",
        emoji: "🐶",
        edad: "3 años",
        sexo: "Macho",
        tamaño: "Mediano",
        salud: "No especificada",
        personalidad: "Cariñoso y activo",
        historia: "Max necesita un hogar donde pueda recibir atención, cuidados y mucho cariño."
    }

};


botonesAnimal.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.animal;

        const animal = informacionAnimales[nombre];

        if (!animal) return;

        mostrarInformacionAnimal(animal);

    });

});


function mostrarInformacionAnimal(animal) {

    const modal = document.createElement("div");

    modal.classList.add("modal-adopcion");

    modal.innerHTML = `

        <div class="contenido-adopcion">

            <button class="cerrar-adopcion">
                ×
            </button>

            <div class="adopcion-emoji">
                ${animal.emoji}
            </div>

            <span class="tag">
                🏠 En adopción
            </span>

            <h2>${animal.nombre}</h2>

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
                ${animal.tamaño}
            </p>

            <p>
                <strong>🩺 Salud:</strong>
                ${animal.salud}
            </p>

            <p>
                <strong>💗 Personalidad:</strong>
                ${animal.personalidad}
            </p>

            <p>
                <strong>📖 Historia:</strong>
                ${animal.historia}
            </p>

            <button class="boton-adoptar">
                🏠 Quiero adoptar a ${animal.nombre}
            </button>

        </div>
    `;


    document.body.appendChild(modal);


    // Cerrar botón

    modal.querySelector(".cerrar-adopcion")
        .addEventListener("click", () => {

            modal.remove();

        });


    // Cerrar haciendo clic afuera

    modal.addEventListener("click", (evento) => {

        if (evento.target === modal) {

            modal.remove();

        }

    });


    // Botón de adoptar

  modal.querySelector(".boton-adoptar")
    .addEventListener("click", () => {

        modal.remove();

        mostrarFormularioAdopcion(animal);

    });
}
// ==========================================
// FORMULARIO DE ADOPCIÓN
// ==========================================

function mostrarFormularioAdopcion(animal) {

    const modal = document.createElement("div");

    modal.classList.add("modal-adopcion");

    modal.innerHTML = `

        <div class="contenido-adopcion">

            <button class="cerrar-adopcion">
                ×
            </button>

            <div class="adopcion-emoji">
                ${animal.emoji}
            </div>

            <h2>Quiero adoptar a ${animal.nombre}</h2>

            <p>
                Cuéntanos un poco sobre ti para conocer tu solicitud.
            </p>

            <form id="formularioAdopcion">

                <label>
                    👤 Tu nombre
                    <input
                        type="text"
                        id="nombreAdoptante"
                        required
                    >
                </label>

                <label>
                    🎂 Tu edad
                    <input
                        type="number"
                        id="edadAdoptante"
                        min="1"
                        required
                    >
                </label>

                <label>
                    📱 Teléfono o medio de contacto
                    <input
                        type="text"
                        id="contactoAdoptante"
                        required
                    >
                </label>

                <label>
                    📍 Ciudad o zona
                    <input
                        type="text"
                        id="zonaAdoptante"
                        required
                    >
                </label>

                <label>
                    🏠 ¿Dónde viviría el animal?
                    <select id="viviendaAdoptante" required>

                        <option value="">
                            Selecciona una opción
                        </option>

                        <option value="Casa">
                            🏡 Casa
                        </option>

                        <option value="Apartamento">
                            🏢 Apartamento
                        </option>

                        <option value="Otro">
                            🏠 Otro
                        </option>

                    </select>
                </label>

                <label>
                    🐾 ¿Tienes otros animales?
                    <select id="otrosAnimales" required>

                        <option value="">
                            Selecciona una opción
                        </option>

                        <option value="Si">
                            Sí
                        </option>

                        <option value="No">
                            No
                        </option>

                    </select>
                </label>

                <label>
                    💗 ¿Por qué quieres adoptar a ${animal.nombre}?

                    <textarea
                        id="motivoAdopcion"
                        rows="4"
                        required
                    ></textarea>

                </label>

                <button
                    type="submit"
                    class="boton-adoptar"
                >
                    🐾 Enviar solicitud
                </button>

            </form>

        </div>
    `;

    document.body.appendChild(modal);


    // CERRAR

    modal.querySelector(".cerrar-adopcion")
        .addEventListener("click", () => {

            modal.remove();

        });


    // CERRAR AL HACER CLIC AFUERA

    modal.addEventListener("click", (evento) => {

        if (evento.target === modal) {

            modal.remove();

        }

    });


    // ENVIAR SOLICITUD

    const formulario =
        modal.querySelector("#formularioAdopcion");


    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();


        const solicitud = {

            animal: animal.nombre,

            nombre:
                document.getElementById("nombreAdoptante").value,

            edad:
                document.getElementById("edadAdoptante").value,

            contacto:
                document.getElementById("contactoAdoptante").value,

            zona:
                document.getElementById("zonaAdoptante").value,

            vivienda:
                document.getElementById("viviendaAdoptante").value,

            otrosAnimales:
                document.getElementById("otrosAnimales").value,

            motivo:
                document.getElementById("motivoAdopcion").value,

            fecha: new Date().toLocaleString()

        };


        const solicitudes =
            JSON.parse(
                localStorage.getItem("solicitudesAdopcion")
            ) || [];


        solicitudes.push(solicitud);


        localStorage.setItem(
            "solicitudesAdopcion",
            JSON.stringify(solicitudes)
        );


        modal.remove();


        alert(
            "🐾 ¡Solicitud enviada!\n\n" +
            "Tu solicitud para adoptar a " +
            animal.nombre +
            " quedó guardada."
        );

    });

}
// ==========================================
// INFORMACIÓN DE REFUGIOS
// ==========================================

const botonesRefugio = document.querySelectorAll(".refugio-btn");

const informacionRefugios = {

    "Huellitas de Esperanza": {
        nombre: "Huellitas de Esperanza",
        emoji: "🏠",
        ubicacion: "Zona urbana",
        animales: "Perros y gatos",
        horario: "Lunes a sábado · 8:00 a.m. - 5:00 p.m.",
        contacto: "Contacto disponible próximamente",
        descripcion:
            "Refugio dedicado al cuidado temporal de perros y gatos rescatados que necesitan protección, alimento y atención."
    },

    "Patitas Unidas": {
        nombre: "Patitas Unidas",
        emoji: "🐾",
        ubicacion: "Cerca de tu zona",
        animales: "Perros y gatos rescatados",
        horario: "Lunes a domingo · 9:00 a.m. - 6:00 p.m.",
        contacto: "Contacto disponible próximamente",
        descripcion:
            "Organización dedicada al rescate de animales y a encontrar familias responsables para ellos."
    },

    "Un Hogar para Todos": {
        nombre: "Un Hogar para Todos",
        emoji: "❤️",
        ubicacion: "Zona metropolitana",
        animales: "Perros y gatos",
        horario: "Martes a domingo · 9:00 a.m. - 4:00 p.m.",
        contacto: "Contacto disponible próximamente",
        descripcion:
            "Espacio de apoyo para animales que necesitan un hogar temporal mientras encuentran una familia."
    }

};


botonesRefugio.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.refugio;

        const refugio = informacionRefugios[nombre];

        if (!refugio) return;

        mostrarInformacionRefugio(refugio);

    });

});


function mostrarInformacionRefugio(refugio) {

    const modal = document.createElement("div");

    modal.classList.add("modal-refugio");

    modal.innerHTML = `

        <div class="contenido-refugio">

            <button class="cerrar-refugio">
                ×
            </button>

            <div class="refugio-emoji">
                ${refugio.emoji}
            </div>

            <span class="tag">
                🏠 Refugio
            </span>

            <h2>${refugio.nombre}</h2>

            <p>
                ${refugio.descripcion}
            </p>

            <div class="datos-refugio">

                <p>
                    📍 <strong>Ubicación:</strong>
                    ${refugio.ubicacion}
                </p>

                <p>
                    🐾 <strong>Animales:</strong>
                    ${refugio.animales}
                </p>

                <p>
                    🕐 <strong>Horario:</strong>
                    ${refugio.horario}
                </p>

                <p>
                    📞 <strong>Contacto:</strong>
                    ${refugio.contacto}
                </p>

            </div>

            <button class="boton-ayudar-refugio">
                💗 Quiero ayudar a este refugio
            </button>

        </div>
    `;

    document.body.appendChild(modal);


    // CERRAR

    modal.querySelector(".cerrar-refugio")
        .addEventListener("click", () => {

            modal.remove();

        });


    // CERRAR AL HACER CLIC AFUERA

    modal.addEventListener("click", (evento) => {

        if (evento.target === modal) {

            modal.remove();

        }

    });


    // BOTÓN AYUDAR

    modal.querySelector(".boton-ayudar-refugio")
        .addEventListener("click", () => {

            alert(
                "🐾 ¡Gracias por querer ayudar!\n\n" +
                "Más adelante podremos agregar opciones como " +
                "donar alimento, ofrecer transporte o ayudar con recursos."
            );

        });

}
// ==========================================
// BUSCAR Y FILTRAR ANIMALES
// ==========================================

const buscarAnimal =
    document.getElementById("buscarAnimal");

const filtroTipo =
    document.getElementById("filtroTipo");

const filtroNecesidad =
    document.getElementById("filtroNecesidad");

const limpiarFiltros =
    document.getElementById("limpiarFiltros");


// ==========================================
// CREAR LISTA GENERAL DE ANIMALES
// ==========================================

function obtenerTodosLosAnimales() {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];


    // Convertimos los animales de ejemplo
    // al mismo formato que las publicaciones

    const animalesEjemplo = animales.map(animal => {

        return {

            id: "ejemplo-" + animal.nombre,

            nombre: animal.nombre,

            tipo: animal.tipo,

            edad: "No especificada",

            sexo: "No especificado",

            tamano: "No especificado",

            necesidad: animal.necesidad,

            zona: animal.zona,

            salud: "No especificada",

            descripcion:
                "Este es un animal de ejemplo para probar la página.",

            foto: "",

            ejemplo: true,

            latitud: animal.latitud,

            longitud: animal.longitud

        };

    });


    // Unimos ejemplos + publicaciones reales

    return [
        ...animalesEjemplo,
        ...publicaciones
    ];

}


// ==========================================
// APLICAR FILTROS
// ==========================================

function aplicarFiltros() {

    const texto =
        buscarAnimal
            ? buscarAnimal.value.toLowerCase().trim()
            : "";

    const tipo =
        filtroTipo
            ? filtroTipo.value.toLowerCase()
            : "todos";

    const necesidad =
        filtroNecesidad
            ? filtroNecesidad.value.toLowerCase()
            : "todas";


    const todosLosAnimales =
        obtenerTodosLosAnimales();


    const animalesFiltrados =
        todosLosAnimales.filter(animal => {

            const nombre =
                (animal.nombre || "").toLowerCase();

            const zona =
                (animal.zona || "").toLowerCase();

            const tipoAnimal =
                (animal.tipo || "").toLowerCase();

            const necesidadAnimal =
                (animal.necesidad || "").toLowerCase();


            // ==================================
            // BUSCADOR
            // ==================================

            const coincideTexto =
                texto === "" ||
                nombre.includes(texto) ||
                zona.includes(texto) ||
                tipoAnimal.includes(texto) ||
                necesidadAnimal.includes(texto);


            // ==================================
            // FILTRO DE TIPO
            // ==================================

            const coincideTipo =
                tipo === "todos" ||
                tipoAnimal === tipo;


            // ==================================
            // FILTRO DE NECESIDAD
            // ==================================

            let coincideNecesidad = true;


            if (necesidad === "alimento") {

                coincideNecesidad =
                    necesidadAnimal.includes("alimento");

            }


            if (necesidad === "veterinario") {

                coincideNecesidad =
                    necesidadAnimal.includes("veterinaria") ||
                    necesidadAnimal.includes("veterinario");

            }


            if (necesidad === "hogar") {

                coincideNecesidad =
                    necesidadAnimal.includes("hogar");

            }


            return (
                coincideTexto &&
                coincideTipo &&
                coincideNecesidad
            );

        });


    mostrarResultadosFiltrados(animalesFiltrados);

}


// ==========================================
// MOSTRAR RESULTADOS FILTRADOS
// ==========================================

function mostrarResultadosFiltrados(animalesFiltrados) {

    const resultados =
        document.getElementById("resultados");

    if (!resultados) return;


    resultados.innerHTML = "";


    if (animalesFiltrados.length === 0) {

        resultados.innerHTML = `

            <div class="sin-resultados">

                <div>🐾</div>

                <h3>No encontramos animales</h3>

                <p>
                    Intenta cambiar la búsqueda o los filtros.
                </p>

            </div>

        `;

        return;

    }


    animalesFiltrados.forEach(animal => {

        // ==================================
        // ANIMALES DE EJEMPLO
        // ==================================

        if (animal.ejemplo) {

            mostrarAnimalEjemplo(animal);

        }

        // ==================================
        // PUBLICACIONES REALES
        // ==================================

        else {

            mostrarPublicacion(animal);

        }

    });

}


// ==========================================
// MOSTRAR ANIMAL DE EJEMPLO
// ==========================================

function mostrarAnimalEjemplo(animal) {

    const resultados =
        document.getElementById("resultados");

    if (!resultados) return;


    const tarjeta =
        document.createElement("div");

    tarjeta.classList.add("animal");


    tarjeta.innerHTML = `

        <div class="sin-foto animal-foto-publicacion">
            🐾
        </div>

        <span class="tag">
            Ejemplo
        </span>

        <h3>
            🐾 ${animal.nombre}
        </h3>

        <p>
            <strong>🐾 Tipo:</strong>
            ${animal.tipo}
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
            ℹ️ Este animal es solo un ejemplo
            para probar el funcionamiento de la página.
        </p>

        <button
            class="ayudar-btn"
            onclick="mostrarOpcionesAyuda('${animal.nombre}')"
        >
            ❤️ Quiero ayudar
        </button>

    `;


    resultados.appendChild(tarjeta);

}


// ==========================================
// EVENTOS DEL BUSCADOR
// ==========================================

if (buscarAnimal) {

    buscarAnimal.addEventListener(
        "input",
        aplicarFiltros
    );

}


if (filtroTipo) {

    filtroTipo.addEventListener(
        "change",
        aplicarFiltros
    );

}


if (filtroNecesidad) {

    filtroNecesidad.addEventListener(
        "change",
        aplicarFiltros
    );

}


if (limpiarFiltros) {

    limpiarFiltros.addEventListener(
        "click",
        () => {

            if (buscarAnimal) {
                buscarAnimal.value = "";
            }

            if (filtroTipo) {
                filtroTipo.value = "todos";
            }

            if (filtroNecesidad) {
                filtroNecesidad.value = "todas";
            }

            aplicarFiltros();

        }
    );

}
// ==========================================
// OPCIONES DE PUBLICACIÓN
// ==========================================

function mostrarOpcionesPublicacion(id) {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];

    let animal =
        publicaciones.find(
            publicacion => publicacion.id === id
        );

    /*
    Si la publicación viene de Supabase
    y todavía no existe en localStorage,
    buscamos la tarjeta que corresponde al ID.
    */

    if (!animal) {

        const tarjeta =
            document.querySelector(
                `.opciones-btn[data-id="${id}"]`
            );

        if (!tarjeta) {
            console.log(
                "❌ No se encontró la publicación:",
                id
            );
            return;
        }

        const tarjetaAnimal =
            tarjeta.closest(".animal");

        if (!tarjetaAnimal) return;

        const nombre =
            tarjetaAnimal.querySelector("h3");

        animal = {
            id: id,
            nombre: nombre
                ? nombre.textContent.replace("🐾", "").trim()
                : "este animal"
        };
    }

    const opciones =
        document.createElement("div");

    opciones.classList.add("modal-opciones");

    opciones.innerHTML = `

        <div class="contenido-opciones">

            <button
                class="cerrar-opciones"
                onclick="this.parentElement.parentElement.remove()">
                ×
            </button>

            <h2>⚙️ Opciones de ${animal.nombre}</h2>

            <p>
                ¿Qué quieres hacer con esta publicación?
            </p>

            <button
                onclick="cambiarEstadoPublicacion(${id}, 'en_proceso')">
                🟡 Marcar como ayuda en proceso
            </button>

            <button
                onclick="cambiarEstadoPublicacion(${id}, 'solucionado')">
                ✅ Marcar como solucionado
            </button>

            <button
                onclick="editarPublicacion(${id})">
                ✏️ Editar publicación
            </button>

            <button
                onclick="eliminarPublicacion(${id})">
                🗑️ Eliminar publicación
            </button>

        </div>
    `;

    document.body.appendChild(opciones);
}
async function cambiarEstadoPublicacion(id, nuevoEstado) {

    // ==========================================
    // ACTUALIZAR LOCALMENTE
    // ==========================================

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];

    const animal =
        publicaciones.find(
            publicacion => publicacion.id === id
        );

    if (animal) {
        animal.estado = nuevoEstado;

        localStorage.setItem(
            "publicacionesAnimales",
            JSON.stringify(publicaciones)
        );
    }


    // ==========================================
    // ACTUALIZAR EN SUPABASE
    // ==========================================

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/publicaciones_animales?id=eq.${id}`,
            {
                method: "PATCH",

                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                },

                body: JSON.stringify({
                    estado: nuevoEstado
                })
            }
        );


        const resultado =
            await respuesta.json();


        if (!respuesta.ok) {

            console.error(
                "❌ Error actualizando estado en Supabase:",
                resultado
            );

            alert(
                "⚠️ El estado cambió localmente, pero no se pudo actualizar en la base de datos."
            );

        } else {

            console.log(
                "🐾 Estado actualizado en Supabase:",
                resultado
            );

        }

    } catch (error) {

        console.error(
            "❌ Error conectando con Supabase:",
            error
        );

    }


    // ==========================================
    // CERRAR MENÚ
    // ==========================================

    document
        .querySelectorAll(".modal-opciones")
        .forEach(modal => modal.remove());


    // ==========================================
    // ACTUALIZAR LA PANTALLA
    // ==========================================

    const resultados =
        document.getElementById("resultados");

    if (resultados) {

        resultados.innerHTML = "";

        cargarPublicaciones();

    }


    // ==========================================
    // MENSAJE
    // ==========================================

    if (nuevoEstado === "en_proceso") {

        alert(
            "🟡 La publicación ahora aparece como ayuda en proceso."
        );

    }


    if (nuevoEstado === "solucionado") {

        alert(
            "🎉 ¡Caso solucionado!\n\n" +
            "Gracias por ayudar a que este animal esté mejor. 🐾"
        );

    }

}
async function eliminarPublicacion(id) {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];


    const animal =
        publicaciones.find(
            publicacion => publicacion.id === id
        );


    if (!animal) {

        console.log(
            "❌ No se encontró la publicación:",
            id
        );

        return;
    }


    // ==========================================
    // CONFIRMAR ELIMINACIÓN
    // ==========================================

    const confirmar =
        confirm(
            "¿Seguro que quieres eliminar la publicación de " +
            animal.nombre +
            "?\n\nEsta acción no se puede deshacer."
        );


    if (!confirmar) return;


    // ==========================================
    // ELIMINAR DE SUPABASE
    // ==========================================

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/publicaciones_animales?id=eq.${id}`,
            {
                method: "DELETE",

                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Prefer": "return=representation"
                }
            }
        );


        const resultado =
            await respuesta.json();


        if (!respuesta.ok) {

            console.error(
                "❌ Error eliminando de Supabase:",
                resultado
            );

            alert(
                "⚠️ No se pudo eliminar la publicación de la base de datos."
            );

            return;
        }


        console.log(
            "🗑️ Publicación eliminada de Supabase:",
            resultado
        );


    } catch (error) {

        console.error(
            "❌ Error conectando con Supabase:",
            error
        );

        alert(
            "⚠️ No se pudo conectar con Supabase."
        );

        return;
    }


    // ==========================================
    // ELIMINAR LOCALMENTE
    // ==========================================

    const nuevasPublicaciones =
        publicaciones.filter(
            publicacion => publicacion.id !== id
        );


    localStorage.setItem(
        "publicacionesAnimales",
        JSON.stringify(nuevasPublicaciones)
    );


    // ==========================================
    // CERRAR MENÚ
    // ==========================================

    document
        .querySelectorAll(".modal-opciones")
        .forEach(modal => modal.remove());


    // ==========================================
    // ACTUALIZAR PANTALLA
    // ==========================================

    const resultados =
        document.getElementById("resultados");


    if (resultados) {

        resultados.innerHTML = "";

        cargarPublicaciones();

    }


    actualizarEstadisticas();


    alert(
        "🗑️ La publicación de " +
        animal.nombre +
        " fue eliminada correctamente."
    );

}
async function editarPublicacion(id) {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];

    // Buscar primero en localStorage
    let animal =
        publicaciones.find(
            publicacion => publicacion.id === id
        );


    // Si no está localmente, buscarlo en Supabase
    if (!animal) {

        try {

            const respuesta = await fetch(
                `${SUPABASE_URL}/rest/v1/publicaciones_animales?id=eq.${id}&select=*`,
                {
                    method: "GET",

                    headers: {
                        "apikey": SUPABASE_KEY,
                        "Authorization": `Bearer ${SUPABASE_KEY}`
                    }
                }
            );


            const resultado =
                await respuesta.json();


            if (!respuesta.ok) {

                console.error(
                    "❌ Error buscando publicación:",
                    resultado
                );

                return;
            }


            if (resultado.length === 0) {

                console.log(
                    "❌ No se encontró la publicación:",
                    id
                );

                return;
            }


            const datos = resultado[0];


            animal = {
                id: datos.id,
                nombre: datos.nombre,
                tipo: datos.tipo,
                edad: datos.edad,
                sexo: datos.sexo,
                tamano: datos.tamano,
                necesidad: datos.necesidad,
                zona: datos.zona,
                salud: datos.salud,
                descripcion: datos.descripcion,
                foto: datos.foto_url,
                estado: datos.estado
            };


            // Guardarla también localmente
            publicaciones.push(animal);

            localStorage.setItem(
                "publicacionesAnimales",
                JSON.stringify(publicaciones)
            );

        } catch (error) {

            console.error(
                "❌ Error conectando con Supabase:",
                error
            );

            return;
        }
    }


    // ==========================================
    // GUARDAR QUÉ PUBLICACIÓN ESTAMOS EDITANDO
    // ==========================================

    publicacionEditandoId = id;


    // Cerrar menú de opciones

    const modalOpciones =
        document.querySelector(".modal-opciones");

    if (modalOpciones) {
        modalOpciones.remove();
    }


    // Abrir formulario

    const modalPublicar =
        document.getElementById("modalPublicar");

    if (modalPublicar) {
        modalPublicar.classList.add("activo");
    }


    // ==========================================
    // RELLENAR FORMULARIO
    // ==========================================

    document.getElementById("nombreAnimal").value =
        animal.nombre || "";

    document.getElementById("tipoAnimal").value =
        animal.tipo || "";

    document.getElementById("edadAnimal").value =
        animal.edad || "";

    document.getElementById("sexoAnimal").value =
        animal.sexo || "";

    document.getElementById("tamanoAnimal").value =
        animal.tamano || "";

    document.getElementById("necesidadAnimal").value =
        animal.necesidad || "";

    document.getElementById("zonaAnimal").value =
        animal.zona || "";

    document.getElementById("saludAnimal").value =
        animal.salud || "";

    document.getElementById("descripcionAnimal").value =
        animal.descripcion || "";

}
// ==========================================
// ESTADÍSTICAS DE AYUDA ANIMAL
// ==========================================

function actualizarEstadisticas() {

    const publicaciones =
        JSON.parse(
            localStorage.getItem("publicacionesAnimales")
        ) || [];

    const solicitudes =
        JSON.parse(
            localStorage.getItem("solicitudesAdopcion")
        ) || [];


    // Casos solucionados
    const solucionados =
        publicaciones.filter(
            animal => animal.estado === "solucionado"
        ).length;


    // Casos que siguen activos
    const activos =
        publicaciones.filter(
            animal => animal.estado !== "solucionado"
        ).length;


    // Solicitudes de adopción
    const adopciones =
        solicitudes.length;


    // Buscar elementos de las estadísticas
    const contadorSolucionados =
        document.getElementById("contadorSolucionados");

    const contadorActivos =
        document.getElementById("contadorActivos");

    const contadorAdopciones =
        document.getElementById("contadorAdopciones");


    // Actualizar números
    if (contadorSolucionados) {
        contadorSolucionados.textContent =
            solucionados;
    }

    if (contadorActivos) {
        contadorActivos.textContent =
            activos;
    }

    if (contadorAdopciones) {
        contadorAdopciones.textContent =
            adopciones;
    }

}
actualizarEstadisticas();

console.log("🐾 SCRIPT DE AYUDA ANIMAL CARGADO");
