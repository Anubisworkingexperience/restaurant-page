function addContactInformation() {
    const info = document.createElement('div');
    const content = document.querySelector('.content');

    content.style.display = "flex";
    content.style.padding = 0;

    info.classList.add('info');
    content.appendChild(info);

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact us";
    info.appendChild(contactTitle);
}

export {addContactInformation};