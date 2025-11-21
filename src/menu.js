const menuItems = [];
class MenuItem {
  constructor(name, description, price, img, type) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
    this.type = type;
  }
}
function addMenuItems(name, description, price, img, type) {
  let newMenuItem = new MenuItem(name, description, price, img, type);
  menuItems.push(newMenuItem);
}
export default function loadMenu(parentContainer) {
  const container = document.createElement("div");
  container.classList.add("card-container");
  const dishesContainer = document.createElement("div");
  dishesContainer.id = "menu-dishes-section";
  const drinkContainer = document.createElement("div");
  drinkContainer.id = "menu-drink-section";
  const dishesTitle = document.createElement("h2");
  dishesTitle.textContent = "Dishes";
  const drinkTitle = document.createElement("h2");
  drinkTitle.textContent = "Beverages";
  container.appendChild(dishesTitle);
  container.appendChild(dishesContainer);
  container.appendChild(drinkTitle);
  container.appendChild(drinkContainer);
  menuItems.forEach((menuItem) => {
    const card = createItemCard(menuItem);
    if (menuItem.type === "dishes") {
      dishesContainer.appendChild(card);
    } else if (menuItem.type === "beverage") {
      drinkContainer.appendChild(card);
    }
  });
  parentContainer.appendChild(container);
}
function createItemCard(item) {
  const div = document.createElement("div");
  if (item.type === "dishes") {
    div.classList.add("dishes-card");
  } else if (item.type === "beverage") {
    div.classList.add("beverage-card");
  }
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  const name = document.createElement("h4");
  name.textContent = item.name;
  const descripcion = document.createElement("p");
  descripcion.classList.add("description");
  descripcion.textContent = item.description;
  const price = document.createElement("p");
  price.textContent = `€${item.price}.00`;
  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(descripcion);
  div.appendChild(price);
  return div;
}
/*data */
addMenuItems(
  "Ponzu Tofu Poke Bowl",
  "Refreshing and light silken tofu marinated in citrusy ponzu, with seaweed, rice, and vegetables",
  5,
  "https://media.istockphoto.com/id/1219902291/de/foto/vegane-tofu-poke-schale-mit-reis-gurke-avocado-und-nori-grauer-hintergrund.jpg?s=2048x2048&w=is&k=20&c=zQ4m4fZ8dSb7cZt_3tnLRyIAD1lfyRViYcylHUg20Rc=",
  "dishes"
);
addMenuItems(
  "Ajvar with Grilled Vegetables",
  "Rustic but refined roasted red-pepper and eggplant relish (Ajvar) served with grilled veggies or bread",
  7,
  "https://images.pexels.com/photos/8841418/pexels-photo-8841418.jpeg?_gl=1*1dbr81d*_ga*MTM2ODY0MDkxMC4xNzYzMjI2NTE3*_ga_8JE65Q40S6*czE3NjMyMzk1NDQkbzMkZzEkdDE3NjMyMzk2MzEkajQ5JGwwJGgw",
  "dishes"
);
addMenuItems(
  "Dim Sum Bao Buns",
  "Steamed buns filled with jackfruit or mushroom, plus vegetable dumplings",
  3,
  "https://cdn.pixabay.com/photo/2021/10/31/12/37/steamed-bun-6757272_1280.jpg",
  "dishes"
);
addMenuItems(
  "Patatas Bravas",
  "Tapas-style crispy potatoes with a spicy tomato sauce and vegan aioli.",
  2,
  "https://cdn.pixabay.com/photo/2021/05/29/01/46/potatoes-6292311_1280.jpg",
  "dishes"
);
addMenuItems(
  "Falafel Platter",
  "Crispy chickpea fritters, served with hummus, tabbouleh, and pita",
  3,
  "https://cdn.pixabay.com/photo/2021/09/16/20/52/falafel-6631047_1280.jpg",
  "dishes"
);
addMenuItems(
  "Pad Thai",
  "Rice noodles, tofu, crunchy peanuts, bean sprouts, lime, all in a tamarind sauce",
  5,
  "https://cdn.pixabay.com/photo/2020/06/05/08/53/pad-thai-5262190_1280.jpg",
  "dishes"
);
addMenuItems(
  "Baba Ghanoush",
  "Roasted eggplant dip with tahini, lemon, and olive oil. Served with pitas",
  2,
  "https://images.pexels.com/photos/5191817/pexels-photo-5191817.jpeg?_gl=1*1nldifi*_ga*MTM2ODY0MDkxMC4xNzYzMjI2NTE3*_ga_8JE65Q40S6*czE3NjMyMzk1NDQkbzMkZzEkdDE3NjMyNDAxMDckajYwJGwwJGgw",
  "dishes"
);
addMenuItems(
  "Moussaka",
  "Layers of eggplant, potato and tomato sauce",
  3,
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Vegan_moussaka_%285958096924%29.jpg",
  "dishes"
);
addMenuItems(
  "Baingan Bharta",
  "A very hearty, aromatic and smoky mashed eggplant stew with tomato, onion, spices, and cilantro",
  7,
  "https://cdn.create.vista.com/api/media/medium/604782372/stock-photo-baingan-bharta-roasted-mashed-eggplant-black-bowl-dark-slate-table?token=",
  "dishes"
);
addMenuItems(
  "Cosmic Bubble Tea",
  "Tapioca pearls with almond milk or oat milk + flavored tea, served either hot or cold",
  2,
  "https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546_1280.jpg",
  "beverage"
);
addMenuItems(
  "Mint & Citrus Hibiscus Lunar Agua Fresca",
  "A light, fruity hibiscus drink with lime and fresh mint",
  2,
  "https://cdn.pixabay.com/photo/2020/06/23/08/00/tea-5331767_1280.jpg",
  "beverage"
);
addMenuItems(
  "Ginger Giovian Lemongrass Kombucha",
  "Slightly effervescent, fermented tea",
  3,
  "https://images.pexels.com/photos/5742734/pexels-photo-5742734.jpeg?_gl=1*1yh9tpv*_ga*MTM2ODY0MDkxMC4xNzYzMjI2NTE3*_ga_8JE65Q40S6*czE3NjMyMzU1MjkkbzIkZzEkdDE3NjMyMzU2NjEkajYwJGwwJGgw",
  "beverage"
);
addMenuItems(
  "Spaced Chai Via Lattea (Plant-Based)",
  "Black tea with cardamom, cinnamon, and plant-based milk (Soy / Oat / Almond / Coconut)",
  3,
  "https://cdn.pixabay.com/photo/2022/04/15/09/14/coffee-7133980_1280.jpg",
  "beverage"
);
addMenuItems(
  "Cold-Pressed Solar Wind Tropical Smoothie",
  "Blend of pineapple, mango, banana, coconut water",
  3,
  "https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg?_gl=1*15j0ttc*_ga*MTM2ODY0MDkxMC4xNzYzMjI2NTE3*_ga_8JE65Q40S6*czE3NjMyMzU1MjkkbzIkZzEkdDE3NjMyMzU3MTUkajYkbDAkaDA.",
  "beverage"
);
