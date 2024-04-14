import { createHomepage, resetContent } from "./homepage";
import './style.css';
import { resetInfoLayer, addMenuItems } from "./menu";
import { addContactInformation } from "./contact";

const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const home = document.querySelector('.home');

createHomepage();

home.addEventListener("click", (event) => {
    resetContent();
    createHomepage();
});

menu.addEventListener("click", (event) => {
    resetInfoLayer();
    addMenuItems();
});

contact.addEventListener("click", (event) => {
    resetContent();
    addContactInformation();
});

