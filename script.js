/* =========================================
   🐾 AYUDA ANIMAL — DISEÑO Y2K
   ========================================= */

/* ---------- CONFIGURACIÓN GENERAL ---------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff8e8;
    color: #333;
    line-height: 1.6;
}

/* ---------- ENCABEZADO ---------- */

header {
    background: #ffffff;
    border-bottom: 3px solid #222;
    padding: 14px 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.08);
}

.logo {
    font-size: 1.7rem;
    font-weight: 900;
    color: #8b5cf6;
    text-decoration: none;
    white-space: nowrap;
}

nav {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

nav a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.95rem;
    padding: 8px 13px;
    border-radius: 20px;
    transition: 0.2s ease;
}

nav a:hover {
    background: #cbe9ff;
    transform: rotate(-2deg);
}

/* ---------- BOTONES ---------- */

button,
.btn {
    border: 3px solid #222;
    border-radius: 18px;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: 0.2s ease;
    box-shadow: 4px 4px 0 #222;
}

button:hover,
.btn:hover {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0 #222;
}

#ubicacion {
    background: #8b5cf6;
    color: white;
}

header .btn {
    background: #f05aa6;
    color: white;
}

/* ---------- HERO ---------- */

.hero {
    min-height: 570px;
    padding: 80px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background:
        radial-gradient(circle at 10% 20%, #ffd6e7 0 80px, transparent 81px),
        radial-gradient(circle at 90% 80%, #cdefd6 0 100px, transparent 101px),
        #fff8e8;
    position: relative;
    overflow: hidden;
}


.hero-text {
    max-width: 650px;
}

.hero-text h1 {
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    line-height: 0.95;
    margin-bottom: 25px;
    color: #8b5cf6;
    text-shadow: 4px 4px 0 #ffd6e7;
}

.hero-text p {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 30px;
    color: #444;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.hero-buttons .btn {
    background: #cbe9ff;
    color: #222;
}

.hero-buttons .btn:hover {
    background: #cdefd6;
}

/* ---------- IMAGEN / ILUSTRACIÓN DEL HERO ---------- */

.hero-image {
    width: 500px;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    display: block;
}

.hero-image::before {
    content: "ADOPTA • AYUDA • CUIDA";
    position: absolute;
    bottom: 18px;
    background: #fff;
    border: 3px solid #222;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 900;
}

/* ---------- SECCIONES ---------- */

section {
    padding: 80px 7%;
}

.section-title {
    text-align: center;
    margin-bottom: 45px;
}

.section-title h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: #8b5cf6;
    margin-bottom: 10px;
}

.section-title p {
    max-width: 650px;
    margin: auto;
    color: #555;
}

/* ---------- CÓMO FUNCIONA ---------- */

.como-funciona {
    background: #cbe9ff;
}

.steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 1100px;
    margin: auto;
}

.step {
    background: #fff;
    border: 3px solid #222;
    border-radius: 25px;
    padding: 30px;
    text-align: center;
    box-shadow: 7px 7px 0 #8b5cf6;
    transition: 0.2s ease;
}

.step:nth-child(2) {
    box-shadow: 7px 7px 0 #f05aa6;
}

.step:nth-child(3) {
    box-shadow: 7px 7px 0 #4f9d69;
}

.step:hover {
    transform: translateY(-8px) rotate(-1deg);
}

.step-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.step h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

/* ---------- FORMAS DE AYUDAR ---------- */

.formas-ayudar {
    background: #fff8e8;
}

.help-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 1200px;
    margin: auto;
}

.help-card {
    min-height: 260px;
    padding: 30px;
    border: 3px solid #222;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.2s ease;
}

.help-card:hover {
    transform: translateY(-8px);
}

.help-card:nth-child(1) {
    background: #ffd6e7;
    box-shadow: 7px 7px 0 #deaac4;
}

.help-card:nth-child(2) {
    background: #cdefd6;
    box-shadow: 7px 7px 0 #4f9d69;
}

.help-card:nth-child(3) {
    background: #cbe9ff;
    box-shadow: 7px 7px 0 #8b5cf6;
}

.help-card .icon {
    font-size: 3rem;
}

.help-card h3 {
    font-size: 1.7rem;
    margin: 10px 0;
}

.help-card p {
    color: #444;
}

.help-card a {
    margin-top: 20px;
    color: #222;
    font-weight: 900;
    text-decoration: none;
}

/* ---------- ANIMALES ---------- */

.animales {
    background: #f5eaff;
}

#resultados {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: auto;
}

.animal {
    background: white;
    border: 3px solid #222;
    border-radius: 25px;
    padding: 25px;
    box-shadow: 6px 6px 0 #f05aa6;
    transition: 0.2s ease;
}

.animal:nth-child(even) {
    box-shadow: 6px 6px 0 #8b5cf6;
}

.animal:hover {
    transform: translateY(-7px) rotate(1deg);
}

.animal h3 {
    color: #8b5cf6;
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.animal p {
    margin: 7px 0;
}

.animal button {
    background: #cdefd6;
    margin-top: 15px;
    width: 100%;
}

/* ---------- MENSAJE CUANDO NO HAY RESULTADOS ---------- */

#resultados:empty::before {
    content: "📍 Pulsa “Encontrar ayuda cerca de mí” para buscar animales cerca de ti.";
    display: block;
    grid-column: 1 / -1;
    text-align: center;
    background: white;
    border: 3px dashed #8b5cf6;
    border-radius: 25px;
    padding: 30px;
    font-weight: bold;
    color: #555;
}

/* ---------- LLAMADO A LA ACCIÓN ---------- */

.cta {
    background: #8b5cf6;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cta::before {
    content: "🐾";
    position: absolute;
    font-size: 12rem;
    opacity: 0.08;
    left: 5%;
    top: -40px;
}

.cta::after {
    content: "★";
    position: absolute;
    font-size: 10rem;
    opacity: 0.08;
    right: 8%;
    bottom: -50px;
}

.cta h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 15px;
}

.cta p {
    max-width: 650px;
    margin: 0 auto 25px;
    font-size: 1.1rem;
}

.cta .btn {
    background: #ffd6e7;
    color: #222;
}

/* ---------- FOOTER ---------- */

footer {
    background: #222;
    color: white;
    padding: 50px 7% 25px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: auto;
}

footer h3,
footer h4 {
    margin-bottom: 15px;
}

footer h3 {
    color: #ffd6e7;
    font-size: 1.5rem;
}

footer p {
    color: #ccc;
    max-width: 400px;
}

footer a {
    display: block;
    color: #ddd;
    text-decoration: none;
    margin: 8px 0;
}

footer a:hover {
    color: #ffd6e7;
}

.footer-bottom {
    border-top: 1px solid #555;
    margin-top: 35px;
    padding-top: 20px;
    text-align: center;
    color: #aaa;
    font-size: 0.9rem;
}

/* ---------- EFECTOS DECORATIVOS ---------- */

.card {
    position: relative;
}

.card::after {
    content: "✦";
    position: absolute;
    top: 12px;
    right: 18px;
    color: #f05aa6;
    font-size: 1.3rem;
}

/* ---------- RESPONSIVE: TABLETS ---------- */

@media (max-width: 900px) {

    header {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding-top: 60px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-image {
        width: 320px;
        height: 280px;
    }

    .steps,
    .help-grid {
        grid-template-columns: 1fr;
        max-width: 600px;
    }

    .footer-content {
        grid-template-columns: 1fr 1fr;
    }
}

/* ---------- RESPONSIVE: CELULARES ---------- */

@media (max-width: 600px) {

    header {
        padding: 12px 4%;
    }

    .logo {
        font-size: 1.4rem;
    }

    nav {
        justify-content: center;
    }

    nav a {
        font-size: 0.85rem;
        padding: 6px 9px;
    }

    header .btn {
        display: none;
    }

    section {
        padding: 60px 5%;
    }

    .hero {
        min-height: auto;
        padding: 70px 5%;
    }

    .hero-text h1 {
        font-size: 3rem;
    }

    .hero-text p {
        font-size: 1rem;
    }

    .hero-image {
        min-width: 240px;
        width: 250px;
        height: 220px;
        font-size: 4rem;
    }

    .hero-image::before {
        font-size: 0.65rem;
    }

    button,
    .btn {
        width: 100%;
        text-align: center;
    }

    .hero-buttons {
        width: 100%;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    footer p {
        margin: auto;
    }
}
/* =========================================
   NUEVAS SECCIONES — AYUDA ANIMAL
   ========================================= */


/* ---------- TÍTULOS PEQUEÑOS ---------- */

.mini-title {
    color: #f05aa6;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-bottom: 12px;
}


/* ---------- ESTADÍSTICAS ---------- */

.stats {
    padding: 35px 7%;
    background: #222;
    color: white;

    display: grid;
    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.stat {
    text-align: center;
    padding: 15px;
}

.stat strong {
    display: block;
    color: #ffd6e7;
    font-size: 2.3rem;
    font-weight: 900;
}

.stat span {
    color: #ddd;
    font-size: 0.9rem;
}


/* ---------- SECCIÓN DE ANIMALES ---------- */

.animales-section {
    background: #fff;
}

.animal-grid {
    max-width: 1200px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.animal-card {
    background: white;

    border: 3px solid #222;
    border-radius: 30px;

    overflow: hidden;

    box-shadow:
        7px 7px 0 #8b5cf6;

    transition: 0.2s ease;
}

.animal-card:nth-child(2) {
    box-shadow:
        7px 7px 0 #f05aa6;
}

.animal-card:nth-child(3) {
    box-shadow:
        7px 7px 0 #4f9d69;
}

.animal-card:hover {
    transform:
        translateY(-8px)
        rotate(-1deg);
}


/* ---------- FOTO DEL ANIMAL ---------- */

.animal-photo {
    height: 220px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 6rem;
}

.animal-photo.pink {
    background: #ffd6e7;
}

.animal-photo.blue {
    background: #cbe9ff;
}

.animal-photo.green {
    background: #cdefd6;
}


/* ---------- INFORMACIÓN ---------- */

.animal-info {
    padding: 25px;
}

.animal-info h3 {
    font-size: 1.8rem;
    margin: 8px 0;
}

.animal-info p {
    margin: 8px 0;
    color: #555;
}

.animal-info button {
    margin-top: 15px;
    width: 100%;
    background: #ffd6e7;
}


/* ---------- ETIQUETAS ---------- */

.tag {
    display: inline-block;

    background: #8b5cf6;
    color: white;

    padding: 5px 12px;

    border-radius: 20px;

    font-size: 0.75rem;
    font-weight: 900;
}


/* ---------- INFORMACIÓN EXTRA ---------- */

.info-section {
    background: #cdefd6;
}

.info-box {
    max-width: 1000px;

    margin: 0 auto 35px;

    padding: 35px;

    background: white;

    border: 3px solid #222;
    border-radius: 30px;

    display: flex;
    align-items: center;

    gap: 30px;

    box-shadow: 8px 8px 0 #4f9d69;
}

.info-box.reverse {
    box-shadow: 8px 8px 0 #8b5cf6;
}

.info-icon {
    min-width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffd6e7;

    border: 3px solid #222;
    border-radius: 50%;

    font-size: 3rem;
}

.info-box h2 {
    color: #8b5cf6;
    margin-bottom: 10px;
}

.info-box p {
    margin: 8px 0;
    color: #555;
}


/* ---------- REFUGIOS ---------- */

.refugios {
    background: #cbe9ff;
}

.shelter-grid {
    max-width: 1100px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.shelter-card {
    background: white;

    border: 3px solid #222;
    border-radius: 25px;

    padding: 30px;

    box-shadow:
        7px 7px 0 #8b5cf6;

    transition: 0.2s ease;
}

.shelter-card:nth-child(2) {
    box-shadow:
        7px 7px 0 #f05aa6;
}

.shelter-card:nth-child(3) {
    box-shadow:
        7px 7px 0 #4f9d69;
}

.shelter-card:hover {
    transform:
        translateY(-7px);
}

.shelter-icon {
    font-size: 3rem;
}

.shelter-card h3 {
    margin: 10px 0;

    font-size: 1.4rem;
}

.shelter-card p {
    color: #555;
    margin-bottom: 10px;
}

.shelter-card span {
    display: block;

    font-weight: bold;

    margin-bottom: 15px;
}

.shelter-btn {
    background: #cdefd6;
}


/* ---------- FAQ ---------- */

.faq {
    background: #fff8e8;
}

.faq-container {
    max-width: 850px;
    margin: auto;
}

details {
    background: white;

    border: 3px solid #222;
    border-radius: 20px;

    margin-bottom: 15px;

    padding: 20px;

    box-shadow:
        5px 5px 0 #ffd6e7;
}

summary {
    cursor: pointer;

    font-weight: 900;

    font-size: 1.1rem;
}

details p {
    margin-top: 15px;
    color: #555;
}


/* =========================================
   MODAL
   ========================================= */

.modal {
    position: fixed;

    inset: 0;

    background:
        rgba(34, 34, 34, 0.65);

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 20px;

    z-index: 2000;

    opacity: 0;
    visibility: hidden;

    transition: 0.25s ease;
}

.modal.activo {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    width: 100%;
    max-width: 550px;

    max-height: 90vh;

    overflow-y: auto;

    background: #fff8e8;

    border: 4px solid #222;
    border-radius: 30px;

    padding: 35px;

    box-shadow:
        10px 10px 0 #f05aa6;

    position: relative;
}

.modal-content h2 {
    color: #8b5cf6;
    font-size: 2rem;
    margin-bottom: 8px;
}

.modal-content > p {
    margin-bottom: 25px;
    color: #555;
}


/* ---------- CERRAR MODAL ---------- */

.cerrar-modal {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 45px;
    height: 45px;

    padding: 0;

    background: #ffd6e7;

    font-size: 1.5rem;
}


/* ---------- FORMULARIO ---------- */

#formularioAnimal {
    display: flex;
    flex-direction: column;

    gap: 18px;
}

#formularioAnimal label {
    font-weight: 900;
}

#formularioAnimal input,
#formularioAnimal select,
#formularioAnimal textarea {

    width: 100%;

    margin-top: 7px;

    padding: 13px;

    border: 3px solid #222;

    border-radius: 15px;

    background: white;

    font-family: inherit;

    font-size: 1rem;

    outline: none;
}

#formularioAnimal input:focus,
#formularioAnimal select:focus,
#formularioAnimal textarea:focus {
    border-color: #8b5cf6;

    box-shadow:
        3px 3px 0 #ffd6e7;
}

#formularioAnimal button {
    background: #8b5cf6;
    color: white;
}


/* ---------- RESPONSIVE ---------- */

@media (max-width: 900px) {

    .stats {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .animal-grid,
    .shelter-grid {
        grid-template-columns: 1fr;
        max-width: 600px;
    }

    .info-box {
        flex-direction: column;
        text-align: center;
    }

}


@media (max-width: 600px) {

    .stats {
        grid-template-columns: 1fr 1fr;
        padding: 25px 4%;
    }

    .stat strong {
        font-size: 1.8rem;
    }

    .info-box {
        padding: 25px;
    }

    .modal-content {
        padding: 25px;
    }

}
/* =========================
   FOTO DE PUBLICACIÓN
========================= */

.vista-previa-foto {
    width: 100%;
    height: 220px;
    margin-top: 10px;
    border: 3px dashed #8b5cf6;
    border-radius: 20px;
    background: #fff8e8;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    text-align: center;
    color: #777;
}

.vista-previa-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}


/* Foto dentro de las publicaciones */

.animal-foto-publicacion {
    width: 100%;
    height: 200px;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 15px;
}

.animal-foto-publicacion img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.animal-foto-publicacion {
    width: 100%;
    height: 200px;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 15px;
}

.animal-foto-publicacion img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.sin-foto {
    background: #cbe9ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
}
/* ==========================================
   MODAL DE AYUDA
   ========================================== */

.modal-ayuda {
    position: fixed;
    inset: 0;
    background: rgba(50, 30, 70, 0.55);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;
    padding: 20px;
}

.contenido-ayuda {
    position: relative;

    width: 100%;
    max-width: 450px;

    background: #fff8e8;
    border: 4px solid #8b5cf6;
    border-radius: 30px;

    padding: 35px;

    box-shadow: 10px 10px 0 #f05aa6;

    text-align: center;
}

.contenido-ayuda h2 {
    margin-bottom: 10px;
    color: #8b5cf6;
}

.contenido-ayuda p {
    margin-bottom: 20px;
}

.contenido-ayuda button:not(.cerrar-ayuda) {
    width: 100%;
    margin: 7px 0;

    padding: 13px;

    border: none;
    border-radius: 15px;

    background: #cbe9ff;
    color: #333;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

.contenido-ayuda button:not(.cerrar-ayuda):hover {
    transform: translateY(-3px);
    background: #ffd6e7;
}

.cerrar-ayuda {
    position: absolute;

    top: 12px;
    right: 15px;

    border: none;
    background: transparent;

    font-size: 28px;
    cursor: pointer;

    color: #8b5cf6;
}
/* ==========================================
   💗 MODAL DE ADOPCIÓN - ESTILO 2000s
   ========================================== */

.modal-adopcion {
    position: fixed;
    inset: 0;

    background: rgba(55, 25, 80, .68);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;

    padding: 20px;

    backdrop-filter: blur(5px);
}


/* 📋 VENTANA */

.contenido-adopcion {
    position: relative;

    width: 100%;
    max-width: 520px;

    max-height: 90vh;
    overflow-y: auto;

    background: white;

    border: 5px solid #7338a8;
    border-radius: 20px;

    padding: 32px;

    text-align: center;

    box-shadow:
        10px 10px 0 #ff63b6,
        -7px -7px 0 #69d7ff;
}


/* ❌ CERRAR */

.cerrar-adopcion {
    position: absolute;

    top: 12px;
    right: 12px;

    width: 40px;
    height: 40px;

    padding: 0;

    border: 3px solid #7338a8;
    border-radius: 50%;

    background: #ff63b6;

    color: white;

    font-size: 25px;
    font-weight: bold;

    cursor: pointer;

    box-shadow: 3px 3px 0 #7338a8;
}

.cerrar-adopcion:hover {
    background: #fff46b;
    color: #7338a8;
}


/* 🐾 EMOJI */

.adopcion-emoji {
    width: 145px;
    height: 145px;

    margin: 5px auto 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #ffb6e6,
            #a9e8ff
        );

    border: 5px solid white;

    outline: 4px solid #ff63b6;

    border-radius: 50%;

    font-size: 75px;

    box-shadow:
        6px 6px 0 #7338a8;
}


/* 🏠 ETIQUETA */

.contenido-adopcion .tag {
    display: inline-block;

    background: #fff46b;

    color: #7338a8;

    border: 3px solid #7338a8;

    border-radius: 10px;

    padding: 6px 12px;

    font-size: 12px;
    font-weight: bold;

    box-shadow: 3px 3px 0 #ff63b6;
}


/* 🐾 NOMBRE */

.contenido-adopcion h2 {
    font-size: 35px;

    color: #e52d91;

    margin: 15px 0 20px;

    text-shadow:
        2px 2px white,
        3px 3px #69d7ff;
}


/* 📝 INFORMACIÓN */

.contenido-adopcion p {
    text-align: left;

    margin: 10px 0;

    padding: 9px 12px;

    background: #f3eaff;

    border: 2px solid #d9caff;

    border-radius: 10px;

    line-height: 1.5;
}

.contenido-adopcion p strong {
    color: #7338a8;
}


/* 🏠 BOTÓN ADOPTAR */

.boton-adoptar {
    width: 100%;

    margin-top: 20px;

    padding: 13px;

    border: 3px solid #27734a;

    border-radius: 14px;

    background: #72f0a7;

    color: #243c2d;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    box-shadow: 0 5px 0 #27734a;

    transition: .15s;
}

.boton-adoptar:hover {
    background: #fff46b;

    transform: translateY(-3px);
}


/* ==========================================
   📝 FORMULARIO DE ADOPCIÓN
   ========================================== */

#formularioAdopcion {
    text-align: left;

    margin-top: 20px;

    padding-top: 20px;

    border-top: 3px dashed #ff63b6;
}


#formularioAdopcion label {
    display: block;

    margin-bottom: 15px;

    color: #552c91;

    font-weight: bold;
}


#formularioAdopcion input,
#formularioAdopcion select,
#formularioAdopcion textarea {
    width: 100%;

    box-sizing: border-box;

    margin-top: 7px;

    padding: 11px;

    border: 3px solid #8c6cff;

    border-radius: 12px;

    background: white;

    font-family: inherit;

    font-size: 15px;

    outline: none;
}


#formularioAdopcion input:focus,
#formularioAdopcion select:focus,
#formularioAdopcion textarea:focus {
    border-color: #ff63b6;

    box-shadow:
        0 0 0 4px rgba(255, 99, 182, .18);
}


#formularioAdopcion textarea {
    resize: vertical;
}


/* 📱 CELULAR */

@media (max-width: 600px) {

    .contenido-adopcion {
        padding: 25px 20px;
    }

    .adopcion-emoji {
        width: 120px;
        height: 120px;

        font-size: 60px;
    }

    .contenido-adopcion h2 {
        font-size: 29px;
    }

}
/* ==========================================
   MODAL DE REFUGIOS
   ========================================== */

.modal-refugio {
    position: fixed;
    inset: 0;

    background: rgba(50, 30, 70, 0.55);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;

    padding: 20px;
}

.contenido-refugio {
    position: relative;

    width: 100%;
    max-width: 500px;

    max-height: 90vh;
    overflow-y: auto;

    background: #fff8e8;

    border: 4px solid #8b5cf6;
    border-radius: 30px;

    padding: 35px;

    text-align: center;

    box-shadow: 10px 10px 0 #cdeFD6;
}

.cerrar-refugio {
    position: absolute;

    top: 10px;
    right: 15px;

    border: none;
    background: transparent;

    font-size: 30px;

    color: #8b5cf6;

    cursor: pointer;
}

.refugio-emoji {
    font-size: 75px;
    margin-bottom: 10px;
}

.contenido-refugio h2 {
    color: #8b5cf6;
    font-size: 30px;
    margin: 12px 0;
}

.contenido-refugio > p {
    line-height: 1.6;
}

.datos-refugio {
    margin-top: 20px;

    padding: 15px;

    background: #cbe9ff;

    border-radius: 18px;

    text-align: left;
}

.datos-refugio p {
    margin: 12px 0;
}

.boton-ayudar-refugio {
    width: 100%;

    margin-top: 20px;

    padding: 14px;

    border: none;
    border-radius: 18px;

    background: #f05aa6;

    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

.boton-ayudar-refugio:hover {
    transform: translateY(-3px);
}
/* ==========================================
   BUSCADOR Y FILTROS
   ========================================== */

.filtros-animales {
    width: 100%;
    max-width: 1000px;

    margin: 25px auto 30px;

    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
}

.buscador {
    display: flex;
    align-items: center;

    background: white;

    border: 3px solid #cbe9ff;
    border-radius: 18px;

    padding: 0 14px;

    min-width: 280px;
}

.buscador span {
    font-size: 20px;
}

.buscador input {
    width: 100%;

    border: none;
    outline: none;

    padding: 13px 10px;

    font-family: inherit;
    font-size: 15px;

    background: transparent;
}

.filtros-animales select {
    padding: 13px 15px;

    border: 3px solid #cbe9ff;
    border-radius: 18px;

    background: white;

    font-family: inherit;
    font-size: 15px;

    cursor: pointer;
}

#limpiarFiltros {
    padding: 13px 18px;

    border: none;
    border-radius: 18px;

    background: #ffd6e7;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

#limpiarFiltros:hover {
    transform: translateY(-2px);
    background: #f05aa6;
    color: white;
}
.sin-resultados {
    width: 100%;

    padding: 40px 20px;

    text-align: center;

    background: #fff8e8;

    border: 3px dashed #8b5cf6;

    border-radius: 25px;

    margin-top: 20px;
}

.sin-resultados div {
    font-size: 50px;
}

.sin-resultados h3 {
    color: #8b5cf6;
    margin: 10px 0;
}
/* ==========================================
   OPCIONES DE PUBLICACIÓN
   ========================================== */

.modal-opciones {
    position: fixed;
    inset: 0;
    background: rgba(50, 30, 70, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    padding: 20px;
}

.contenido-opciones {
    position: relative;
    width: 100%;
    max-width: 450px;
    background: #fff8e8;
    border: 4px solid #8b5cf6;
    border-radius: 30px;
    padding: 35px;
    text-align: center;
    box-shadow: 10px 10px 0 #f05aa6;
}

.contenido-opciones h2 {
    color: #8b5cf6;
    margin-bottom: 10px;
}

.contenido-opciones p {
    margin-bottom: 20px;
}

.contenido-opciones button:not(.cerrar-opciones) {
    width: 100%;
    margin: 7px 0;
    padding: 13px;
    border: none;
    border-radius: 15px;
    background: #cbe9ff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

.contenido-opciones button:not(.cerrar-opciones):hover {
    transform: translateY(-3px);
    background: #ffd6e7;
}

.contenido-opciones .boton-eliminar {
    background: #ffb3b3;
}

.contenido-opciones .boton-eliminar:hover {
    background: #f05aa6;
    color: white;
}

.cerrar-opciones {
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    background: transparent;
    font-size: 30px;
    color: #8b5cf6;
    cursor: pointer;
}
/* =========================================
   🐾 AYUDA ANIMAL — ESTILO WEB 2000s
   ========================================= */

body {
    background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,.35) 2px, transparent 3px),
        radial-gradient(circle at 80% 70%, rgba(255,255,255,.25) 2px, transparent 3px),
        linear-gradient(135deg, #ffb6e6, #a9e8ff 45%, #c8ffb0);
    background-size: 35px 35px, 45px 45px, auto;
    font-family: "Trebuchet MS", Arial, sans-serif;
    color: #302044;
}

/* CONTENEDOR GENERAL */

main {
    max-width: 1200px;
    margin: 25px auto;
    padding: 20px;
}

/* HEADER */

header {
    background: linear-gradient(135deg, #ff5db1, #8c6cff);
    border: 5px solid white;
    border-radius: 25px;
    box-shadow:
        0 8px 0 #552c91,
        0 12px 25px rgba(65, 30, 100, .3);
    padding: 18px 25px;
    position: relative;
    overflow: hidden;
}

header::before {
    content: "★ ✦ 🐾 ✧ ♥ ✦ 🐾 ★";
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 22px;
    opacity: .75;
}

header h1 {
    color: white;
    font-size: 38px;
    text-shadow:
        3px 3px 0 #552c91,
        5px 5px 0 rgba(255,255,255,.5);
}

/* NAVEGACIÓN */

nav a {
    display: inline-block;
    background: #fff;
    color: #7338a8;
    padding: 10px 17px;
    margin: 5px;
    border-radius: 30px;
    border: 3px solid #7338a8;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 4px 0 #7338a8;
    transition: .15s;
}

nav a:hover {
    transform: rotate(-3deg) translateY(-3px);
    background: #fff46b;
}

/* BOTONES */

button {
    border: 3px solid #4b2377;
    border-radius: 18px;
    padding: 11px 18px;
    font-family: inherit;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 0 #4b2377;
    transition: .15s;
}

button:hover {
    transform: translateY(-3px) rotate(-1deg);
}

/* HERO */

.hero {
    background: rgba(255,255,255,.9);
    border: 5px solid #ff63b6;
    border-radius: 30px;
    padding: 35px;
    margin: 30px 0;
    box-shadow:
        8px 8px 0 #69d7ff,
        0 12px 30px rgba(70,40,100,.2);
    position: relative;
}

.hero::after {
    content: "🐾 ✨ 🐶 🐱 ✨ 🐾";
    position: absolute;
    bottom: 12px;
    right: 20px;
    font-size: 25px;
}

.hero h2 {
    color: #e52d91;
    font-size: 42px;
    text-shadow: 2px 2px white;
}

/* TARJETAS */

.animal,
.card,
.formas-ayuda-card {
    background: rgba(255,255,255,.94);
    border: 4px solid #8c6cff;
    border-radius: 22px;
    box-shadow:
        6px 6px 0 #ff70bd,
        0 10px 20px rgba(60,40,90,.18);
    transition: .2s;
}

.animal:hover,
.card:hover,
.formas-ayuda-card:hover {
    transform: translateY(-7px) rotate(.5deg);
}

/* PUBLICACIONES */

.animal {
    padding: 20px;
    position: relative;
}

.animal::before {
    content: "🐾";
    position: absolute;
    top: -15px;
    left: -12px;
    background: #fff46b;
    border: 3px solid #7338a8;
    border-radius: 50%;
    padding: 7px;
    transform: rotate(-12deg);
}

.animal h3 {
    color: #e52d91;
    font-size: 25px;
}

/* BOTÓN QUIERO AYUDAR */

.ayudar-btn {
    background: #72f0a7;
    color: #243c2d;
    border-color: #27734a;
    box-shadow: 0 5px 0 #27734a;
}

.ayudar-btn:hover {
    background: #fff46b;
}

/* BOTÓN OPCIONES */

.opciones-btn {
    background: #b9a5ff;
    color: #39205f;
}

/* SECCIONES */

section {
    margin: 35px 0;
}

section h2 {
    display: inline-block;
    background: #fff46b;
    padding: 10px 20px;
    border: 4px solid #7338a8;
    border-radius: 15px;
    transform: rotate(-1deg);
    box-shadow: 5px 5px 0 #ff63b6;
}

/* INPUTS */

input,
select,
textarea {
    border: 3px solid #8c6cff;
    border-radius: 14px;
    padding: 11px;
    font-family: inherit;
    background: #fff;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #ff5db1;
    box-shadow: 0 0 0 4px rgba(255,93,177,.2);
}

/* FOOTER */

footer {
    background: #4b2377;
    color: white;
    border-radius: 25px 25px 0 0;
    border: 5px solid white;
    padding: 25px;
    text-align: center;
    box-shadow: 0 -5px 0 #ff63b6;
}

/* DETALLES DECORATIVOS */

h1::selection,
h2::selection,
h3::selection {
    background: #fff46b;
    color: #7338a8;
}
/* =========================================
   PORTAL 2000s
   ========================================= */

.portal-destacado {
    margin: 40px auto;
    padding: 30px;
    max-width: 1100px;

    background: rgba(255,255,255,.92);

    border: 5px solid #7338a8;
    border-radius: 30px;

    box-shadow:
        10px 10px 0 #ff63b6,
        -8px -8px 0 #69d7ff,
        0 15px 35px rgba(50,30,80,.2);
}

.portal-titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    text-align: center;
}

.portal-titulo h2 {
    margin: 0;
    background: none;
    border: none;
    box-shadow: none;

    color: #e52d91;

    font-size: 34px;

    transform: rotate(-1deg);

    text-shadow:
        3px 3px white,
        5px 5px #69d7ff;
}

.portal-titulo span {
    font-size: 35px;
}

.portal-subtitulo {
    text-align: center;
    font-size: 17px;
    max-width: 700px;
    margin: 15px auto 30px;
}


/* COLUMNAS */

.portal-columnas {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


/* CAJAS */

.portal-caja {
    position: relative;

    padding: 22px;

    background: white;

    border: 4px solid #8c6cff;

    border-radius: 20px;

    text-align: center;

    box-shadow:
        6px 6px 0 #ff70bd;

    transition: .2s;
}

.portal-caja:nth-child(2) {
    transform: rotate(1deg);
}

.portal-caja:nth-child(3) {
    transform: rotate(-1deg);
}

.portal-caja:hover {
    transform:
        translateY(-8px)
        rotate(0deg);
}


/* STICKERS */

.portal-sticker {
    display: inline-block;

    background: #fff46b;

    border: 3px solid #7338a8;

    border-radius: 12px;

    padding: 6px 10px;

    font-size: 13px;

    font-weight: bold;

    transform: rotate(-3deg);

    margin-bottom: 10px;
}


.portal-caja h3 {
    color: #7338a8;
    font-size: 21px;
}


/* ANIMAL */

.portal-animal-imagen {
    width: 120px;
    height: 120px;

    margin: 15px auto;

    display: flex;

    align-items: center;
    justify-content: center;

    font-size: 60px;

    background:
        linear-gradient(
            135deg,
            #a9e8ff,
            #ffb6e6
        );

    border: 5px solid white;

    outline: 4px solid #ff63b6;

    border-radius: 50%;

    box-shadow:
        5px 5px 0 #7338a8;
}


/* LISTA */

.portal-caja ul {
    list-style: none;
    padding: 0;

    text-align: left;
}

.portal-caja li {
    padding: 7px;

    background: #f3eaff;

    margin: 6px 0;

    border-radius: 10px;
}


/* BOTONES DEL PORTAL */

.portal-caja button {
    background: #ff63b6;

    color: white;

    border-color: #7338a8;

    margin-top: 10px;
}

.portal-caja button:hover {
    background: #fff46b;
    color: #7338a8;
}


/* RESPONSIVE */

@media (max-width: 800px) {

    .portal-columnas {
        grid-template-columns: 1fr;
    }

}
/* =========================================
   🐾 MENÚ WEB 2000s
   ========================================= */

.menu-2000 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    margin-top: 15px;
    padding: 12px;

    background: rgba(255, 255, 255, .75);

    border: 4px solid white;
    border-radius: 20px;

    box-shadow:
        inset 0 0 0 3px #ff63b6,
        5px 5px 0 #552c91;
}

.menu-2000 a {
    position: relative;

    display: inline-block;

    padding: 10px 17px;

    background: linear-gradient(
        180deg,
        #ffffff,
        #d9caff
    );

    color: #552c91;

    border: 3px solid #7338a8;
    border-radius: 12px;

    font-size: 15px;
    font-weight: bold;

    text-decoration: none;

    box-shadow:
        0 4px 0 #7338a8;

    transition: .15s;
}

/* Brillito del botón */

.menu-2000 a::before {
    content: "✦";

    position: absolute;

    top: -10px;
    right: -7px;

    font-size: 16px;

    color: #ff63b6;
}

/* Hover */

.menu-2000 a:hover {
    background: #fff46b;

    transform:
        translateY(-4px)
        rotate(-2deg);

    box-shadow:
        0 7px 0 #7338a8;
}

/* Botón presionado */

.menu-2000 a:active {
    transform: translateY(2px);

    box-shadow:
        0 2px 0 #7338a8;
}
/* =========================================
   🐾 TARJETAS DE ANIMALES - ESTILO 2000s
   ========================================= */

.animal {
    position: relative;
    overflow: visible;

    background: #fff;
    border: 4px solid #7338a8;
    border-radius: 8px;

    padding: 18px;

    box-shadow:
        8px 8px 0 #ff63b6,
        0 0 0 5px white;

    transition: .2s;
}

/* Tarjetas inclinadas como fotos pegadas */

.animal:nth-child(odd) {
    transform: rotate(-1.5deg);
}

.animal:nth-child(even) {
    transform: rotate(1.5deg);
}

.animal:hover {
    transform:
        translateY(-8px)
        rotate(0deg)
        scale(1.02);

    z-index: 5;

    box-shadow:
        10px 10px 0 #69d7ff,
        0 0 0 5px white;
}


/* ⭐ Etiqueta de la tarjeta */

.animal::before {
    content: "★ NUEVO CASO ★";

    position: absolute;

    top: -15px;
    left: 15px;

    background: #fff46b;

    color: #7338a8;

    border: 3px solid #7338a8;
    border-radius: 5px;

    padding: 5px 9px;

    font-size: 11px;
    font-weight: bold;

    transform: rotate(-5deg);

    box-shadow: 3px 3px 0 #ff63b6;

    z-index: 3;
}


/* 🐾 Nombre del animal */

.animal h3 {
    display: inline-block;

    background: #ffb6e6;

    color: #552c91;

    padding: 7px 12px;

    border: 3px solid #7338a8;
    border-radius: 10px;

    font-size: 24px;

    transform: rotate(-1deg);

    margin-top: 5px;
}


/* 📸 Fotos */

.animal-foto-publicacion {
    position: relative;

    background: #fff;

    padding: 8px;

    border: 4px solid white;

    outline: 3px solid #8c6cff;

    box-shadow: 5px 5px 0 #69d7ff;

    transform: rotate(1deg);

    margin: 15px auto 20px;

    max-width: 280px;
}

.animal-foto-publicacion img {
    display: block;

    width: 100%;
    height: auto;

    border-radius: 3px;
}


/* 📝 Información */

.animal p {
    line-height: 1.5;
}


/* 🟣 Estado */

.estado-publicacion {
    display: inline-block;

    background: #d9caff;

    color: #552c91;

    border: 2px solid #7338a8;

    border-radius: 12px;

    padding: 5px 10px;

    font-size: 12px;
    font-weight: bold;

    margin-bottom: 10px;
}


/* 🐾 Zona / necesidad */

.animal strong {
    color: #e52d91;
}


/* 🎀 Botones de acciones */

.acciones-publicacion {
    display: flex;

    flex-wrap: wrap;

    gap: 10px;

    margin-top: 18px;
}

.acciones-publicacion button {
    font-size: 13px;
}


/* 💚 Botón ayudar */

.animal .ayudar-btn {
    background: #72f0a7;

    color: #243c2d;

    border: 3px solid #27734a;

    box-shadow: 0 4px 0 #27734a;
}

.animal .ayudar-btn:hover {
    background: #fff46b;
}


/* ⋮ Opciones */

.animal .opciones-btn {
    background: #d9caff;

    color: #552c91;

    border: 3px solid #7338a8;

    box-shadow: 0 4px 0 #7338a8;
}


/* 💚 Ayudas registradas */

.ayudas-registradas,
.propuestas-ayuda {
    margin-top: 15px;

    padding: 12px;

    background: #f3eaff;

    border: 3px dashed #ff63b6;

    border-radius: 12px;
}


/* Cada propuesta */

.propuesta-ayuda {
    background: white;

    border: 2px solid #69d7ff;

    border-radius: 10px;

    padding: 10px;

    margin-top: 8px;
}


/* ✨ Decoración */

.animal::after {
    content: "✦ 🐾 ✦";

    position: absolute;

    right: 10px;
    bottom: -13px;

    background: #ff63b6;

    color: white;

    border: 3px solid #7338a8;

    border-radius: 10px;

    padding: 3px 8px;

    font-size: 12px;

    transform: rotate(4deg);

    box-shadow: 3px 3px 0 #7338a8;
}


/* 📱 Adaptación */

@media (max-width: 600px) {

    .animal {
        transform: none !important;
    }

    .animal:hover {
        transform: translateY(-5px) !important;
    }

    .animal-foto-publicacion {
        max-width: 100%;
    }

    .acciones-publicacion {
        flex-direction: column;
    }

    .acciones-publicacion button {
        width: 100%;
    }
}
/* =========================================
   🐾 TARJETAS RECTAS
   ========================================= */

.animal,
.animal:nth-child(odd),
.animal:nth-child(even) {
    transform: none;
}

.animal:hover {
    transform: translateY(-8px) scale(1.02);
    z-index: 5;
}
/* =========================================
   💗 ADOPCIÓN - PORTAL 2000s
   ========================================= */

#adoptar {
    position: relative;
    padding: 35px 25px;
    margin-top: 50px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.96),
            rgba(255,230,247,.95)
        );

    border: 5px solid #7338a8;
    border-radius: 28px;

    box-shadow:
        9px 9px 0 #69d7ff,
        0 15px 30px rgba(70,40,100,.18);

    overflow: hidden;
}


/* ✨ Decoración de fondo */

#adoptar::before {
    content: "♥  ✦  🐾  ✦  ♥  🐾  ✦";

    position: absolute;

    top: 8px;
    right: 20px;

    color: #ff63b6;

    font-size: 20px;

    opacity: .7;
}


/* 🏠 Título */

#adoptar .section-title {
    text-align: center;

    max-width: 750px;

    margin: 0 auto 35px;
}


/* Mini título */

#adoptar .mini-title {
    display: inline-block;

    background: #fff46b;

    color: #7338a8;

    border: 3px solid #7338a8;
    border-radius: 10px;

    padding: 7px 13px;

    font-size: 13px;
    font-weight: bold;

    box-shadow: 4px 4px 0 #ff63b6;

    transform: rotate(-1deg);
}


/* Título principal */

#adoptar .section-title h2 {
    display: block;

    margin: 15px 0 10px;

    background: none;

    border: none;

    box-shadow: none;

    color: #e52d91;

    font-size: 36px;

    transform: none;

    text-shadow:
        3px 3px white,
        5px 5px #69d7ff;
}


/* Descripción */

#adoptar .section-title > p:last-child {
    font-size: 16px;

    max-width: 600px;

    margin: auto;

    line-height: 1.6;
}


/* =========================================
   🐶 TARJETAS
   ========================================= */

#adoptar .animal-grid {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;

    align-items: stretch;
}


#adoptar .animal-card {
    position: relative;

    display: flex;
    flex-direction: column;

    background: white;

    border: 4px solid #7338a8;

    border-radius: 15px;

    overflow: hidden;

    box-shadow:
        7px 7px 0 #ff63b6;

    transition: .2s;
}


#adoptar .animal-card:hover {
    transform: translateY(-9px);

    box-shadow:
        9px 9px 0 #69d7ff;
}


/* 💗 Etiqueta */

#adoptar .animal-card::before {
    content: "💗 EN ADOPCIÓN";

    position: absolute;

    top: 12px;
    left: 12px;

    z-index: 3;

    background: #ff63b6;

    color: white;

    border: 3px solid #7338a8;
    border-radius: 8px;

    padding: 5px 9px;

    font-size: 11px;
    font-weight: bold;

    box-shadow: 3px 3px 0 #7338a8;
}


/* =========================================
   📸 FOTOS
   ========================================= */

#adoptar .animal-photo {
    height: 230px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 12px;

    border-bottom: 4px solid #7338a8;

    font-size: 80px;
}


/* Fondos */

#adoptar .animal-photo.pink {
    background:
        linear-gradient(
            135deg,
            #ffb6e6,
            #ffd9f0
        );
}

#adoptar .animal-photo.blue {
    background:
        linear-gradient(
            135deg,
            #a9e8ff,
            #d8f7ff
        );
}

#adoptar .animal-photo.green {
    background:
        linear-gradient(
            135deg,
            #c8ffb0,
            #e8ffd9
        );
}


/* Fotos reales */

#adoptar .animal-photo img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    border: 4px solid white;

    border-radius: 8px;

    box-shadow:
        3px 3px 0 #7338a8;
}


/* =========================================
   📝 INFORMACIÓN
   ========================================= */

#adoptar .animal-info {
    display: flex;

    flex-direction: column;

    flex: 1;

    padding: 20px;
}


#adoptar .animal-info .tag {
    align-self: flex-start;

    background: #d9caff;

    color: #552c91;

    border: 2px solid #7338a8;

    border-radius: 10px;

    padding: 4px 9px;

    font-size: 11px;

    font-weight: bold;
}


#adoptar .animal-info h3 {
    margin: 12px 0 5px;

    color: #e52d91;

    font-size: 28px;
}


#adoptar .animal-info p {
    line-height: 1.5;

    margin: 7px 0;
}


/* 💗 Botón */

#adoptar .info-animal {
    width: 100%;

    margin-top: auto;
    padding: 11px;

    background: #72f0a7;

    color: #243c2d;

    border: 3px solid #27734a;

    border-radius: 14px;

    box-shadow: 0 4px 0 #27734a;
}


#adoptar .info-animal:hover {
    background: #fff46b;

    transform:
        translateY(-3px)
        rotate(-1deg);
}


/* 📱 Responsive */

@media (max-width: 850px) {

    #adoptar .animal-grid {
        grid-template-columns: 1fr;
    }

    #adoptar .animal-card {
        max-width: 500px;

        width: 100%;

        margin: auto;
    }

    #adoptar .section-title h2 {
        font-size: 29px;
    }
}
/* =========================================================
   🐾 AYUDA ANIMAL
   ESTILO PORTAL JUVENIL 2000s
   SECCIONES RESTANTES
   ========================================================= */


/* =========================================================
   📊 ESTADÍSTICAS
   ========================================================= */

.stats {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

    margin: 35px 0;

    padding: 20px;

    background: rgba(255,255,255,.9);

    border: 4px solid #7338a8;

    border-radius: 20px;

    box-shadow:
        7px 7px 0 #ff63b6;
}


.stat {
    position: relative;

    padding: 18px 12px;

    text-align: center;

    background: #f3eaff;

    border: 3px solid #8c6cff;

    border-radius: 15px;

    box-shadow: 4px 4px 0 #69d7ff;
}


.stat strong {
    display: block;

    color: #e52d91;

    font-size: 32px;

    text-shadow:
        2px 2px white;
}


.stat span {
    display: block;

    margin-top: 5px;

    color: #552c91;

    font-size: 13px;

    font-weight: bold;
}


/* =========================================================
   📍 CÓMO FUNCIONA
   ========================================================= */

.como-funciona {
    padding: 35px 25px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.95),
            rgba(210,245,255,.9)
        );

    border: 5px solid #69d7ff;

    border-radius: 25px;

    box-shadow:
        8px 8px 0 #7338a8;
}


.steps {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;

    margin-top: 30px;
}


.step {
    position: relative;

    padding: 25px 20px;

    background: white;

    border: 4px solid #8c6cff;

    border-radius: 18px;

    text-align: center;

    box-shadow:
        6px 6px 0 #ff70bd;

    transition: .2s;
}


.step:hover {
    transform: translateY(-7px);

    box-shadow:
        8px 8px 0 #69d7ff;
}


.step-icon {
    width: 75px;
    height: 75px;

    margin: 0 auto 15px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #fff46b;

    border: 4px solid #7338a8;

    border-radius: 50%;

    font-size: 35px;

    box-shadow:
        4px 4px 0 #ff63b6;
}


.step h3 {
    color: #e52d91;

    font-size: 21px;
}


.step p {
    line-height: 1.5;
}


/* =========================================================
   💚 FORMAS DE AYUDAR
   ========================================================= */

.formas-ayudar {
    padding: 35px 25px;

    background: rgba(255,255,255,.9);

    border: 5px solid #ff63b6;

    border-radius: 25px;

    box-shadow:
        -7px 7px 0 #69d7ff;
}


.help-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 22px;

    margin-top: 30px;
}


.help-card {
    position: relative;

    padding: 22px;

    background: white;

    border: 4px solid #7338a8;

    border-radius: 18px;

    box-shadow:
        6px 6px 0 #fff46b;

    transition: .2s;
}


.help-card:hover {
    transform: translateY(-7px);

    box-shadow:
        8px 8px 0 #ff63b6;
}


.help-card .icon {
    width: 60px;
    height: 60px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 12px;

    background: #a9e8ff;

    border: 3px solid #7338a8;

    border-radius: 15px;

    font-size: 30px;
}


.help-card h3 {
    color: #e52d91;

    margin-bottom: 8px;
}


.help-card p {
    line-height: 1.5;
}


.help-card a {
    display: inline-block;

    margin-top: 12px;

    padding: 7px 11px;

    background: #d9caff;

    color: #552c91;

    border: 2px solid #7338a8;

    border-radius: 9px;

    font-weight: bold;

    text-decoration: none;
}


.help-card a:hover {
    background: #fff46b;
}


/* =========================================================
   🆘 ANIMALES EN LA CALLE
   ========================================================= */

#calle {
    padding: 35px 25px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.96),
            rgba(255,240,250,.95)
        );

    border: 5px solid #7338a8;

    border-radius: 28px;

    box-shadow:
        9px 9px 0 #ff63b6;
}


/* 🔎 FILTROS */

.filtros-animales {
    display: flex;

    flex-wrap: wrap;

    align-items: center;

    gap: 12px;

    margin: 25px 0;

    padding: 15px;

    background: #f3eaff;

    border: 3px dashed #8c6cff;

    border-radius: 15px;
}


.buscador {
    display: flex;

    align-items: center;

    flex: 1;

    min-width: 220px;

    background: white;

    border: 3px solid #8c6cff;

    border-radius: 12px;

    padding: 0 10px;
}


.buscador span {
    font-size: 18px;
}


.buscador input {
    flex: 1;

    border: none;

    outline: none;

    box-shadow: none;

    background: transparent;
}


.filtros-animales select {
    min-width: 170px;
}


#limpiarFiltros {
    background: #ffb6e6;

    color: #552c91;

    border-color: #7338a8;
}


/* Resultados */

#resultados {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;

    margin-top: 25px;
}


/* =========================================================
   🥣 BLOQUES DE INFORMACIÓN
   ========================================================= */

.info-section {
    display: flex;

    flex-direction: column;

    gap: 25px;

    margin: 45px 0;
}


.info-box {
    display: flex;

    align-items: center;

    gap: 25px;

    padding: 30px;

    background: white;

    border: 4px solid #69d7ff;

    border-radius: 20px;

    box-shadow:
        7px 7px 0 #ff63b6;
}


.info-box.reverse {
    border-color: #ff63b6;

    box-shadow:
        -7px 7px 0 #69d7ff;
}


.info-icon {
    min-width: 90px;
    height: 90px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #fff46b;

    border: 4px solid #7338a8;

    border-radius: 50%;

    font-size: 42px;

    box-shadow:
        4px 4px 0 #7338a8;
}


.info-box h2 {
    background: none;

    border: none;

    box-shadow: none;

    padding: 0;

    margin: 0 0 10px;

    color: #e52d91;

    transform: none;
}


.info-box p {
    line-height: 1.6;
}


/* =========================================================
   🏠 REFUGIOS
   ========================================================= */

.refugios {
    padding: 35px 25px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.95),
            rgba(220,255,220,.9)
        );

    border: 5px solid #72f0a7;

    border-radius: 28px;

    box-shadow:
        8px 8px 0 #7338a8;
}


.shelter-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;

    margin-top: 30px;
}


.shelter-card {
    position: relative;

    padding: 25px;

    background: white;

    border: 4px solid #7338a8;

    border-radius: 18px;

    text-align: center;

    box-shadow:
        6px 6px 0 #69d7ff;

    transition: .2s;
}


.shelter-card:hover {
    transform: translateY(-8px);

    box-shadow:
        8px 8px 0 #ff63b6;
}


.shelter-icon {
    width: 80px;
    height: 80px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin: 0 auto 15px;

    background: #ffb6e6;

    border: 4px solid #7338a8;

    border-radius: 50%;

    font-size: 38px;

    box-shadow:
        4px 4px 0 #fff46b;
}


.shelter-card h3 {
    color: #e52d91;

    font-size: 21px;
}


.shelter-card p {
    line-height: 1.5;
}


.shelter-card span {
    display: block;

    margin: 15px 0;

    padding: 7px;

    background: #f3eaff;

    border-radius: 9px;

    color: #552c91;

    font-size: 13px;

    font-weight: bold;
}


.refugio-btn {
    width: 100%;

    background: #72f0a7;

    color: #243c2d;

    border-color: #27734a;

    box-shadow:
        0 4px 0 #27734a;
}


.refugio-btn:hover {
    background: #fff46b;
}


/* =========================================================
   💬 PREGUNTAS FRECUENTES
   ========================================================= */

.faq {
    padding: 35px 25px;

    background: rgba(255,255,255,.9);

    border: 5px solid #8c6cff;

    border-radius: 25px;

    box-shadow:
        8px 8px 0 #ff63b6;
}


.faq-container {
    max-width: 850px;

    margin: 30px auto 0;
}


.faq details {
    margin-bottom: 12px;

    background: white;

    border: 3px solid #7338a8;

    border-radius: 12px;

    overflow: hidden;

    box-shadow:
        4px 4px 0 #69d7ff;
}


.faq summary {
    padding: 15px;

    cursor: pointer;

    color: #552c91;

    font-weight: bold;

    list-style: none;
}


.faq summary::before {
    content: "✦ ";

    color: #ff63b6;
}


.faq details[open] summary {
    background: #fff46b;
}


.faq details p {
    margin: 0;

    padding: 15px;

    line-height: 1.6;

    background: #f8f3ff;
}


/* =========================================================
   📢 CTA
   ========================================================= */

.cta {
    position: relative;

    margin: 50px 0;

    padding: 45px 30px;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            #ff63b6,
            #8c6cff
        );

    border: 5px solid white;

    border-radius: 25px;

    box-shadow:
        8px 8px 0 #552c91;
}


.cta h2 {
    background: none;

    border: none;

    box-shadow: none;

    padding: 0;

    color: white;

    font-size: 32px;

    text-shadow:
        3px 3px 0 #552c91;

    transform: none;
}


.cta p {
    max-width: 650px;

    margin: 15px auto 25px;

    color: white;

    line-height: 1.6;
}


.cta .btn {
    display: inline-block;

    background: #fff46b;

    color: #552c91;

    border: 3px solid #7338a8;

    box-shadow:
        0 5px 0 #7338a8;
}


/* =========================================================
   🦶 FOOTER
   ========================================================= */

footer {
    margin-top: 50px;

    background:
        linear-gradient(
            135deg,
            #4b2377,
            #7338a8
        );

    color: white;

    border-radius: 25px 25px 0 0;

    border: 5px solid white;

    padding: 35px 25px 15px;

    box-shadow:
        0 -6px 0 #ff63b6;
}


.footer-content {
    display: grid;

    grid-template-columns:
        2fr 1fr 1fr;

    gap: 35px;

    max-width: 1100px;

    margin: auto;
}


.footer-content h3 {
    color: #fff46b;

    font-size: 24px;
}


.footer-content h4 {
    color: #ffb6e6;

    font-size: 17px;
}


.footer-content p {
    line-height: 1.6;
}


.footer-content a {
    display: block;

    margin: 8px 0;

    color: white;

    text-decoration: none;
}


.footer-content a:hover {
    color: #fff46b;

    text-decoration: underline;
}


.footer-bottom {
    margin-top: 30px;

    padding-top: 15px;

    border-top: 2px dashed rgba(255,255,255,.5);

    text-align: center;
}


/* =========================================================
   📱 RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

    .stats {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .steps,
    .help-grid,
    .shelter-grid,
    #resultados {
        grid-template-columns: 1fr 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr 1fr;
    }
}


@media (max-width: 600px) {

    .stats,
    .steps,
    .help-grid,
    .shelter-grid,
    #resultados {
        grid-template-columns: 1fr;
    }

    .filtros-animales {
        flex-direction: column;
        align-items: stretch;
    }

    .buscador {
        width: auto;
    }

    .filtros-animales select,
    #limpiarFiltros {
        width: 100%;
    }

    .info-box {
        flex-direction: column;

        text-align: center;
    }

    .footer-content {
        grid-template-columns: 1fr;

        text-align: center;
    }

}
/* =========================================================
   ✨ ÚLTIMO AJUSTE VISUAL — TARJETAS RECTAS
   ========================================================= */

/* Nada de tarjetas inclinadas */
.portal-caja,
.portal-caja:nth-child(2),
.portal-caja:nth-child(3),
.animal-card,
.shelter-card,
.help-card,
.step,
.stat,
.info-box,
.animal {
    transform: none;
}

/* Hover: solo levantarse, sin girarse */
.portal-caja:hover,
.animal-card:hover,
.shelter-card:hover,
.help-card:hover,
.step:hover,
.animal:hover {
    transform: translateY(-7px) scale(1.01);
}

/* También dejamos rectos los títulos */
section h2,
#adoptar .mini-title,
#adoptar .section-title h2,
.portal-titulo h2,
.info-box h2,
.cta h2 {
    transform: none;
}

/* Botones sin girarse */
button:hover,
.info-animal:hover,
.portal-caja button:hover {
    transform: translateY(-3px);
}

/* =========================================================
   🐾 FOTOS DE ADOPCIÓN
   ========================================================= */

#adoptar .animal-photo {
    position: relative;
    overflow: hidden;
}

#adoptar .animal-photo::after {
    content: "🐾";
    position: absolute;
    right: 12px;
    bottom: 10px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff46b;
    border: 3px solid #7338a8;
    border-radius: 50%;
    font-size: 20px;
    box-shadow: 3px 3px 0 #ff63b6;
}

/* =========================================================
   🏠 REFUGIOS — BOTONES MÁS BONITOS
   ========================================================= */

.refugio-btn {
    transition: .15s;
}

.refugio-btn:active,
.info-animal:active,
.portal-caja button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #7338a8;
}

/* =========================================================
   🔎 BUSCADOR
   ========================================================= */

.buscador:focus-within {
    border-color: #ff63b6;
    box-shadow: 0 0 0 4px rgba(255,99,182,.18);
}

/* =========================================================
   ✨ SEPARADORES DECORATIVOS
   ========================================================= */

.section-title {
    position: relative;
}

.section-title::after {
    content: "✦ 🐾 ✦";
    display: block;
    margin-top: 12px;
    color: #ff63b6;
    font-size: 18px;
    letter-spacing: 5px;
}

/* =========================================================
   📱 MÓVIL
   ========================================================= */

@media (max-width: 600px) {

    .portal-destacado,
    #adoptar,
    #calle,
    .refugios,
    .faq,
    .formas-ayudar,
    .como-funciona {
        padding: 25px 18px;
    }

    .portal-titulo {
        gap: 8px;
    }

    .portal-titulo h2 {
        font-size: 25px;
    }

    .hero {
        padding: 25px 20px;
    }

    .hero h1 {
        font-size: 32px;
    }
}
