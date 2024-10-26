let btonPriceCard = document.getElementById("btnDown");
let btnLogin = document.getElementsByClassName("login")[0];
let loginDesplegable = document.getElementsByClassName("loginDesplegable")[0];


btnLogin.addEventListener("mouseover", mostrarMenu);
btnLogin.addEventListener("mouseout", esconderMenu);
loginDesplegable.addEventListener("mouseover", mostrarMenu);
loginDesplegable.addEventListener("mouseout", esconderMenu);

function mostrarMenu(){
    loginDesplegable.classList.remove("inactive");
}
function esconderMenu(){
    loginDesplegable.classList.add("inactive");
}







function comprar(){
    window.open("https://www.siigo.com/precios-siigo/", "_blank");
}

function contacto(){
    window.open("https://api.whatsapp.com/send?phone=573016321817&text=Hola%20M%C3%A1sterting,%20recib%C3%AD%20tu%20cotizaci%C3%B3n%20por%20email%20y%20estoy%20interesad@,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20servicio", "_blank");
}

