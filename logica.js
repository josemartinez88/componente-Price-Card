let btonPriceCard = document.getElementById("btnDown");
let btnLogin = document.getElementsByClassName("login")[0];
let loginDesplegable = document.getElementsByClassName("loginDesplegable")[0];
let desplegable3 = document.getElementById("desplegable3");
let paisDesplegable = document.getElementsByClassName("paisDesplegable")[0];
let desplegable = document.getElementById("desplegable");
let productosMenu = document.getElementsByClassName("productosMenu")[0];
let menuMobile = document.getElementsByClassName("menuMobile")[0];
let menuDesplegableMobile = document.getElementsByClassName("menuDesplegableMobile")[0];
let cerrar = document.getElementById("cerrar");
let overflow = document.getElementsByClassName("overflow-container")[0];





btnLogin.addEventListener("mouseover", mostrarMenu);
btnLogin.addEventListener("mouseout", esconderMenu);
loginDesplegable.addEventListener("mouseover", mostrarMenu);
loginDesplegable.addEventListener("mouseout", esconderMenu);
desplegable3.addEventListener("mouseover", mostrarMenuPaises);
desplegable3.addEventListener("mouseout", esconderMenuPaises);
desplegable.addEventListener("mouseover", mostrarMenuProductos);
desplegable.addEventListener("mouseout", esconderMenuProductos);
menuMobile.addEventListener("click", mostrarMenuMobile);
cerrar.addEventListener("click", esconderMenuMobile);




// Bloquear el scroll
function bloquearScroll() {
    window.addEventListener('wheel', prevenirScroll, { passive: false });
    window.addEventListener('touchmove', prevenirScroll, { passive: false });
}

function prevenirScroll(e) {
    e.preventDefault();
}

// Desbloquear el scroll
function desbloquearScroll() {
    window.removeEventListener('wheel', prevenirScroll);
    window.removeEventListener('touchmove', prevenirScroll);
}





function mostrarMenu(){
    loginDesplegable.classList.remove("inactive");
}
function esconderMenu(){
    loginDesplegable.classList.add("inactive");
}
function mostrarMenuPaises(){
    paisDesplegable.classList.remove("inactive");
}
function esconderMenuPaises(){
    paisDesplegable.classList.add("inactive");
}
function mostrarMenuProductos(){
    productosMenu.classList.remove("inactive");
}
function esconderMenuProductos(){
    productosMenu.classList.add("inactive");
}
function mostrarMenuMobile(){
    menuDesplegableMobile.classList.remove("inactive");
    overflow.classList.remove("inactive");
    bloquearScroll();
}
function esconderMenuMobile(){
    menuDesplegableMobile.classList.add("inactive");
    overflow.classList.add("inactive");
    desbloquearScroll();
}





function comprar(){
    window.open("https://www.siigo.com/precios-siigo/", "_blank");
}

function contacto(){
    window.open("https://api.whatsapp.com/send?phone=573016321817&text=Hola%20M%C3%A1sterting,%20recib%C3%AD%20tu%20cotizaci%C3%B3n%20por%20email%20y%20estoy%20interesad@,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20servicio", "_blank");
}

