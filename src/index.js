import { createHomepage } from "./homepage";
import './style.css';
import { resetInfoLayer, addMenuItems } from "./menu";

const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const home = document.querySelector('.home');

createHomepage();

home.addEventListener("click", (event) => {
    createHomepage();
});

menu.addEventListener("click", (event) => {
    resetInfoLayer();
    addMenuItems();
});

contact.addEventListener("click", (event) => {
    console.log("contact clicked");
});

