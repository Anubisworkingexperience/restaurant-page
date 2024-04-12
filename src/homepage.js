export  function createHomepage(){
    
const info = document.createElement('div');
const content = document.querySelector('.content');

info.classList.add('info');
content.appendChild(info);

const title = document.createElement('h1');
title.textContent = "Chef Mc Kenzy restaurant";
info.appendChild(title);

const quote = document.createElement('q');
const quoteText = document.createElement('em');
quoteText.textContent = "One cannot think well, love well, sleep well, if one has not dined well.";
quote.appendChild(quoteText);
info.appendChild(quote);

const quoteAuthor = document.createElement('p');
quoteAuthor.textContent = "- Virginia Woolf";
info.appendChild(quoteAuthor);

const workingHours = document.createElement('h2');
workingHours.textContent = "Working hours";
info.appendChild(workingHours);

const hourList = document.createElement('ul');
for (let i = 0; i < 7; i++) {
    let item = document.createElement('li');
    switch(i) {
        case 0:
            item.textContent = "Sunday: 10am - 8pm";
        case 1:
            item.textContent = "Monday: 9am - 9pm";
        case 2:
            item.textContent = "Tuesday: 9am - 9pm";
        case 3:
            item.textContent = "Wednesday: 9am - 9pm";
        case 4:
            item.textContent = "Thursday: 9am - 9pm";
        case 5:
            item.textContent = "Friday: 9am - 9pm";       
        case 6:
            item.textContent = "Saturday: 10am - 8pm";     
    }
    hourList.appendChild(item);
}

info.appendChild(hourList);

const locationTitle = document.createElement('h2');
locationTitle.textContent = "Location";
info.appendChild(locationTitle);

const location = document.createElement('p');
location.textContent = "1533 Earnhardt Drive, Kentucky";
info.appendChild(location);

}