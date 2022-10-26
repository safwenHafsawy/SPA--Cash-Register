const pathToImages = "http://localhost:5050/static/imgs";
const availableDrinks = [
  ["Latte", pathToImages.concat("/drinks/latte.jpg"), 5.5],
  ["Espresso", pathToImages.concat("/drinks/espresso.jpg"), 3],
  ["Tea", pathToImages.concat("/drinks/tea.jpg") , 2.5],
  ["Milk Shake", pathToImages.concat("/drinks/milkshake.jpg"), 7],
  ["Cappuccino", pathToImages.concat("/drinks/cappuccino.jpg"), 6.5],
];

const availableFoods = [
  ["Burger", pathToImages.concat("/food/burger.jpg"), 10],
  ["Burrito", pathToImages.concat("/food/burrito.jpg"), 11.5],
  ["French Fries", pathToImages.concat("/food/fries.jpg"), 5],
  ["Kebab", pathToImages.concat("/food/kebab.jpg"), 9],
  ["Pancake", pathToImages.concat("/food/pancake.jpg"), 9],
  ["Pizza", pathToImages.concat("/food/pizza.jpg"), 13],
  ["Ramen", pathToImages.concat("/food/ramen.jpg"), 10.5],
  ["Taco", pathToImages.concat("/food/taco.jpg"), 8.5],
  ["Waffle", pathToImages.concat("/food/waffle.jpg"), 10],
];

const availableDivers = [
  ["Chicha", pathToImages.concat("/diverse/chicha.jpg"), 8],
];

const categoryMenu = `
<div id="category__menu">
    <h3 id="category_header">Please Select a category</h3>
    <div id="cards">
        <div id="drinks" class="card_category 1" data-menu>
            <h3 class="card__header 1" data-link data-menu>Drinks</h3>
            <svg class="card__img 1"  viewBox="-10 -5 40 40" fill="#ffd3cf" data-menu><path d="M13 20h-7c-2.174-3.004-4-6.284-4-12h15c0 5.667-1.88 9.089-4 12zm5.119-10c-.057.701-.141 1.367-.252 2h1.549c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.275-1.143 5.847-4.509 6.143-7.766h-3.881zm-1.119 12h-15v2h15v-2zm-3.06-19.614c-.416 1.702-3.07 2.477-3.983 4.614-.088-1.846 1.107-3.031 1.75-3.93 1.045-1.465-.537-2.267-1.633-1.171-.188.187-.38.435-.573.756-.193-.322-.386-.57-.573-.757-1.089-1.09-2.664-.294-1.658 1.137.635.903 1.863 2.095 1.775 3.965-.914-2.137-3.567-2.912-3.984-4.614-.355-1.445.928-2.386 2.29-2.386.793 0 1.613.32 2.15 1.045.537-.725 1.357-1.045 2.15-1.045 1.362 0 2.644.941 2.289 2.386z"/></svg>
        </div>
        <div id="Food" class="card_category 2" data-menu>
            <h3 class="card__header 2" data-menu>Food</h3>
            <svg class="card__img 2" viewBox="-10 -5 40 40" fill-rule="evenodd" clip-rule="evenodd" fill="#ffd3cf" data-menu><path d="M23 19c.37 1.981-.544 3.99-3 4-4.611.019-11.389 0-16 0-2.492 0-3.348-1.976-3-4h22zm-.465-1c-.007 0-21.142-.002-21.17-.006-.764-.068-1.365-.711-1.365-1.494s.601-1.426 1.365-1.494c.028-.004 2.116-.006 2.116-.006 2.37.017 2.852 2.006 4.019 2 1.167-.006 1.781-1.976 3.965-2h11.07c.812.019 1.465.684 1.465 1.5s-.653 1.481-1.465 1.5zm-2.07-7h2.07c.812.019 1.465.684 1.465 1.5s-.653 1.481-1.465 1.5c-.007 0-21.142-.002-21.17-.006-.764-.068-1.365-.711-1.365-1.494s.601-1.426 1.365-1.494c.028-.004 11.116-.006 11.116-.006 2.37.017 2.852 2.006 4.019 2 1.167-.006 1.781-1.976 3.965-2zm2.535-1h-22c0-3.989 4.377-8 11-8s11 4.011 11 8zm-11.5-4c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-12 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-2-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm3-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm6 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm3 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-6-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z"/></svg>
        </div>
        <div id="Divers" class="card_category 3" data-menu>
            <h3 class="card__header 3" data-menu>Diverse</h3>
            <svg class="card__img 3" viewBox="-10 -5 40 40" fill="#ffd3cf" data-menu><path d="M8 21v3h-6v-3h6zm8 0v3h6v-3h-6zm6-21v19h-6v-3h-8v3h-6v-19h6v4h8v-4h6zm-9 7h-2v6h2v-6z"/></svg>
        </div>
    </div>
</div>
`;

const template = (availableItems) => {
  return `
    <div id="menu">
        <h3 id="menu__header">What are you going to have today ?</h3>
        <div id="cards">
        ${availableItems
          .map((ele) => {
            return `
                <div id="${ele[0]}" class="menu__card" data-price="${ele[2]}">
                    <h3 class="card__header">${ele[0]}</h3>
                    <img class="card__img" src="${ele[1]}" alt = "${ele[0]}">
                </div>    
                    `;
          })
          .join(" ")}
        </div>
        <div class="order_check">
            <button class="check_btn">Check Order</button>
        </div>
    </div>
    `;
};

const foodMenu = template(availableDrinks);

const drinksMenu = template(availableFoods);

const diversMenu = template(availableDivers);

export default [categoryMenu, foodMenu, drinksMenu, diversMenu];
