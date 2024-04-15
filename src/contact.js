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

    function createContact(contactItemText, contactItemPhoneText) {        
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
        if (contactItemText === "Customer service") {
            contactContainer.classList.add("first-contact-container");
        }

        for (let i = 0; i < 3; i++) {
            let contactItem = document.createElement('p');
            contactItem.classList.add('contact-item');
            switch(i) {
                case 0:
                    contactItem.textContent = contactItemText;
                    break;
                case 1:
                    contactItem.textContent = contactItemPhoneText;
                    break;
                case 2:
                    contactItem.textContent = contactItemText.split(" ")[0].toLowerCase() + "MK" + "example@com";
                    break;
            }
            contactContainer.appendChild(contactItem);
        }
        info.appendChild(contactContainer);
    }

    createContact("Customer service", "1-234-567-20-07");
    createContact("Development department", "1-234-567-20-08");
    createContact("Business & cooperation", "1-234-567-20-09");
}

export {addContactInformation};