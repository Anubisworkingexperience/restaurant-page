function resetInfoLayer() {
    console.log('reset');
    const info = document.querySelector('.info');
    const content = document.querySelector('.content');
    content.style.display = "block";
    content.style.padding = "30px";
    content.removeChild(info);
}

function addMenuItems() {
    console.log("Adding menu items");
    const cardContainer = document.createElement('div');
    const content = document.querySelector('.content');
    const chooseCategory = document.createElement('select');
    const chooseCategoryLabel = document.createElement('label');
    const menuTitle = document.createElement('h1');

    menuTitle.textContent = "Menu";
    menuTitle.style.fontSize = "3.5rem";
    menuTitle.style.textAlign = "center";
    content.appendChild(menuTitle);

    chooseCategory.id = "category-select";

    chooseCategoryLabel.for = "category-select";
    chooseCategoryLabel.textContent = "Sort items by: ";
    chooseCategoryLabel.style.fontSize = "1.5rem";

    content.appendChild(chooseCategoryLabel);
    content.appendChild(chooseCategory);
    
    cardContainer.classList.add('card-container');
    content.appendChild(cardContainer);

    //title, description, price, time category, type category
    const menuItemsTitles = ["Chocolate chip and bacon pancakes", "Carrot cake waffles", "Cranberry pistachio baked oatmeal",
    "Breakfast tortilla", "Red, white, and blueberry yogurt parfaits", "Roasted chili tomato soup",
    "Iced nectarine green tea", "Polish sausage sandwiches", "Creamy tomato soup", 
    "Asian chicken salad", "Fettuccine with asparagus, bacon, and lemon", 
    "Baked General Tso's chicken", "Hearty homemade chicken noodle soup",
    "Maple cranberry braised pork", "Turkey and dumpling soup", "Blueberry popsicles",
    "Strawberry lime coconut water slushie", "Watermelon, feta, and black olive salad",
    "Braised lamb chops with potatoes, peas, and cumin",
    "Moroccan chicken salad"];

    const menuItemsDescription = ["Shrove Tuesday, or Pancake Tuesday, is celebrated around the world on the day before Ash Wednesday. Consuming pancakes is one of many 'mardi gras' (Fat Tuesday) traditions of feasting before the fasting season of Lent begins.",
    "A plate of these carrot cake apricot waffles with honey cream cheese topping are the perfect way to celebrate National Waffle Day on Aug. 24 with a sweet start at breakfast.",
    "Facing a cold winter morning will feel easier after a bowl of warm baked oatmeal.",
    "A simple basted egg on a tortilla with a side of sliced avocado will jump-start your morning the right way.",
    "Kick off the holiday weekend with a Fourth of July themed breakfast of red, white, and blue.",
    "After recovering from turkey leftovers, a bowl of spicy tomato soup will hit the spot.",
    "Cool off your Fourth of July party with a tall glass of fruity iced tea.",
    "The melting pot of American cuisine in Chicago is a reminder that every American has an ancestor who was an immigrant.",
    "A creamy, creamless tomato soup from America's Test Kitchen.", "This salad tastes light and bright with the flavor of fresh herbs and a satisfying crunch of roasted peanuts.",
    "Slender, fresh asparagus teams up with lemon, bacon, and Parmesan for a bold pasta dish that tastes like spring.", 
    "Instead of fried, this General Tso's chicken is breaded and then baked.", 
    "A roux base gives this chicken noodle soup a creamy and flavorful base.",
    "Slow-cooked pork simmered with onion, garlic, carrot, and cranberries.",
    "This economical yet delicious soup utilizes leftover turkey stuffing to make perfect dumplings.",
    "Quick! Before summer ends enjoy this fast, frozen blueberry treat flavored with maple syrup and coconut milk.",
    "Try this refreshing summer drink. With only three ingredients, it's a breeze to make.",
    "Sweet flavors mingle with salty and tangy in this refreshing summer salad.",
    "Cumin, turmeric, and chili powder give this quick, one-pot meal of braised lamb chops with potatoes and peas a delicious Indian twist.",
    "Chicken salad works great for almost any occasion, especially dinner on a hot day. Spice up your chicken salad with Greek yogurt, Moroccan flavors, herbs, apricots, and carrots. "];

    const menuItemsPrices = ["5", "3.5", "3", "2", "2.5", "5", "1", "2.5", "3", "3.5", "5", "4.5",
    "3.5", "3.5", "3", "4", "2", "3.5", "5", "4"];

    const menuItemsTimeCategories = ["Breakfast", "Breakfast", "Breakfast", "Breakfast", "Breakfast", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch",
    "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Lunch", "Lunch", "Breakfast", "Lunch",
    "Lunch"];

    const menuItemsTypeCategories = ["Dessert", "Dessert", "Main-course", "Main-course", "Dessert", "Soup", "Snack", "Snack", "Soup", "Salad",
    "Main-course", "Snack", "Soup", "Main-course", "Soup", "Dessert", "Snack", "Salad", "Main-course",
    "Salad"];

    for (let i = 0; i < 20; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "20px";
        card.style.fontSize = "1.2rem";
        card.style.border = "1.2rem ridge rgba(255, 204, 0, .6)";
        cardContainer.appendChild(card);

        let itemTitle = document.createElement('h2');
        itemTitle.textContent = menuItemsTitles[i];
        itemTitle.style.margin = 0;
        card.appendChild(itemTitle);

        let itemDescription = document.createElement('div');
        itemDescription.textContent = menuItemsDescription[i];
        card.appendChild(itemDescription);

        let itemPrice = document.createElement('div');
        itemPrice.textContent = menuItemsPrices[i] + "$";
        card.appendChild(itemPrice);

        let itemTime = document.createElement('div');
        itemTime.textContent = menuItemsTimeCategories[i];
        card.appendChild(itemTime);

        let itemType = document.createElement('div');
        itemType.textContent = menuItemsTypeCategories[i];
        card.appendChild(itemType);
    }
}

export {resetInfoLayer, addMenuItems};