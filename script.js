const MENU = {
  drinks: {
    title: "Drinks",
    subs: [
      { id:"hot", name:"Hot", items:[
        {n:"Espresso", p:"2"},
        {n:"Americano", p:"2.5"},
        {n:"Hot Chocolate", p:"4"},
        {n:"Cappuccino", p:"3.5"},
        {n:"Flat White", p:"3.5"},
        {n:"Macchiato", p:"2.5"},
        {n:"Caramel Macchiato", p:"4.5"},
        {n:"Latte", p:"4"},
        {n:"Spanish Latte", p:"4.5"},
        {n:"Hazelnut Latte", p:"4.5"},
        {n:"Vanilla Latte", p:"4.5"},
        {n:"Toffee Nut Latte", p:"4.5"},
        {n:"Salted Caramel Latte", p:"4.5"},
        {n:"Caramel Latte", p:"4.5"},
        {n:"Mocha", p:"5"},
        {n:"White Mocha", p:"5"},
        {n:"Rakwet Kahwe", sizes:[["Small","2.5"],["Medium","4"],["Large","6"]]}
      ]},
      { id:"cold", name:"Cold", items:[
        {n:"Iced Americano", p:"2.5"},
        {n:"Iced Cappuccino", p:"3.5"},
        {n:"Iced Flat White", p:"3.5"},
        {n:"Iced Caramel Macchiato", p:"4.5"},
        {n:"Iced Latte", p:"4"},
        {n:"Iced Spanish Latte", p:"4.5"},
        {n:"Iced Hazelnut Latte", p:"4.5"},
        {n:"Iced Vanilla Latte", p:"4.5"},
        {n:"Iced Toffee Nut", p:"4.5"},
        {n:"Iced Caramel", p:"4.5"},
        {n:"Iced Salted Caramel", p:"4.5"},
        {n:"Iced Mocha", p:"5"},
        {n:"Iced White Mocha", p:"5"},
        {n:"Coco Noir", p:"5"}
      ]},
      { id:"frappe", name:"Coffee Frappé", items:[
        {n:"Cookies and Cream", p:"5.5"},
        {n:"Caramel", p:"5.5"},
        {n:"Salted Caramel", p:"5.5"},
        {n:"Tiramisu", p:"5.5"}
      ]},
      { id:"matcha", name:"Matcha", items:[
        {n:"Matcha Tea", p:"2.5"},
        {n:"Matcha Latte", p:"4"},
        {n:"Iced Matcha Latte", p:"4"},
        {n:"Iced Strawberry Matcha", p:"5"},
        {n:"Iced Blueberry Matcha", p:"6"}
      ]},
      { id:"iced-tea", name:"Iced Tea", items:[
        {n:"Lemon", p:"3"},
        {n:"Peach", p:"3"},
        {n:"Raspberry", p:"3"}
      ]},
      { id:"smoothies", name:"Smoothies", items:[
        {n:"Berrylicious", p:"5"},
        {n:"Tropical Sip", p:"5"},
        {n:"Fruit Fusion", p:"5"}
      ]},
      { id:"milkshake", name:"Milkshake", items:[
        {n:"Strawberry", p:"6"},
        {n:"Vanilla", p:"6"},
        {n:"Chocolate", p:"6"}
      ]},
      { id:"juices", name:"Juices", items:[
        {n:"Regular Lemonade", p:"4.5"},
        {n:"Minted Lemonade", p:"4.5"},
        {n:"Fresh Orange", p:"4.5"}
      ]},
      { id:"filtered", name:"Filtered Coffee", items:[
        {n:"V60", p:"4"},
        {n:"Iced V60", p:"4"},
        {n:"French Press", p:"3"},
        {n:"Cold Brew", p:"5"}
      ]},
      { id:"nondairy", name:"Non-Dairy Milk", items:[
        {n:"Coconut", p:"1.22"},
        {n:"Almond", p:"1.22"},
        {n:"Oat", p:"1.22"}
      ]},
      { id:"tea-matte", name:"Tea & Matte", items:[
        {n:"Tea Selection", p:"2"},
        {n:"Regular Matte", p:"7"},
        {n:"Matte with Milk", p:"9"},
        {n:"Milk Refill", p:"5"}
      ]},
      { id:"beverages", name:"Beverages", items:[
        {n:"Water", p:"1"},
        {n:"Soft Drink", p:"1.66"},
        {n:"Sparkling Water", p:"1.66"}
      ]},
      { id:"shisha", name:"Shisha", items:[
        {n:"Shisha", p:"8"}
      ]}
    ]
  },
  food: {
    title: "Food",
    subs: [
      { id:"crispy", name:"Crispy", items:[
        {n:"Crispy Wrap", p:"7.5", d:"Fried chicken, lettuce, tomato, special sauce, cheddar"},
        {n:"Crispy Meal", p:"12", d:"Fries, coleslaw, cheddar, bun"}
      ]},
      { id:"appetizers", name:"Appetizers", items:[
        {n:"Chicken Loaded Fries", p:"6.5", d:"Fried chicken, fries, chips, BBQ sauce, cocktail sauce, cheddar"},
        {n:"Mozzarella Sticks", p:"5", d:"5 pieces, served with cocktail sauce"},
        {n:"Cheese Balls", p:"5", d:"6 pieces, served with cocktail sauce"},
        {n:"Fries", p:"3"},
        {n:"Curly Fries", p:"4"}
      ]},
      { id:"salads", name:"Salads", items:[
        {n:"Chicken Caesar", p:"8.5"},
        {n:"Chicken Honey Mustard", p:"8.5"},
        {n:"Tuna Italian", p:"8"},
        {n:"Tuna Mediterranean", p:"8"},
        {n:"Quinoa Salad", p:"8"}
      ]},
      { id:"burgers", name:"Burgers", note:"Served with fries", items:[
        {n:"Classic Chicken Burger", p:"7.5", d:"Grilled chicken, iceberg, tomato, pickles, cheddar, mayo"},
        {n:"Chicken Deluxe", p:"9", d:"Grilled chicken, mozzarella patty, iceberg, tomato, pickles, mayo"},
        {n:"Crispy Burger", p:"8", d:"Fried chicken, iceberg, tomato, pickles, mayo, cheddar"},
        {n:"Crispy Mozzarella Burger", p:"9", d:"Fried chicken, mozzarella patty, tomato, iceberg, pickles, mayo, BBQ sauce"},
        {n:"Classic Beef Burger", p:"8", d:"Beef patty, tomato, iceberg, pickles, cheddar, cocktail sauce"},
        {n:"Beef Royal", p:"11", d:"Beef patty, turkey, mozzarella patty, chips, tomato, iceberg, cheddar, cocktail sauce"}
      ]},
      { id:"sandwiches", name:"Sandwiches", note:"Served with fries", items:[
        {n:"Fajita", p:"9", d:"Grilled chicken, bell pepper, onions, mozzarella, avocado sauce, special sauce"},
        {n:"Philadelphia", p:"11", d:"Grilled meat, bell pepper, onions, mushrooms, mozzarella, special sauce, mayo"},
        {n:"Chicken Sub", p:"9", d:"Grilled chicken, mozzarella, lettuce, pickles, corn, mayo garlic"}
      ]}
    ],
    addOns:{ name:"Add Ons", items:[
      {n:"Cocktail Sauce", p:"1"},
      {n:"Garlic Sauce", p:"1"},
      {n:"Cheddar Cheese", p:"1"},
      {n:"Honey Mustard", p:"1"},
      {n:"BBQ Sauce", p:"1"},
      {n:"Jalapenos", p:"1"},
      {n:"Bun", p:"0.77"},
      {n:"Coleslaw", p:"1"}
    ]}
  },
  desserts: {
    title: "Desserts",
    subs: [
      { id:"special", name:"Special Desserts", items:[
        {n:"Scoop Cookies", p:"12"},
        {n:"Chocolate Bomb", p:"12"}
      ]},
      { id:"crepe", name:"Crêpe", items:[
        {n:"Classic Crêpe", p:"6", d:"Nutella"},
        {n:"Fettuccine Crêpe", p:"10"},
        {n:"Sushi Crêpe", p:"10"},
        {n:"Dubai Chocolate Crêpe", p:"12"}
      ]},
      { id:"icecream", name:"Ice Cream", items:[
        {n:"Scoop", p:"2", d:"Variety of flavours available"}
      ]},
      { id:"cakes", name:"Cakes", items:[
        {n:"Tiramisu", p:"5.5"},
        {n:"Matilda", p:"4.5"},
        {n:"Strawberry Cheesecake", p:"4.5"},
        {n:"Lotus Cheesecake", p:"4.5"},
        {n:"San Sebastian", p:"5"},
        {n:"Lemon Blueberry Cake", p:"4.5"},
        {n:"Fondant", p:"6"},
        {n:"Lazy Cake", p:"3.5"},
        {n:"Muffin", p:"3", d:"Vanilla, chocolate"}
      ]},
      { id:"cookies", name:"Cookies", items:[
        {n:"Special", p:"4.5", d:"Salted caramel, s'mores, triple chocolate"},
        {n:"Stuffed", p:"4", d:"Lotus, Nutella, Kinder, Bueno"},
        {n:"New York", p:"3"},
        {n:"Brownie", p:"3"},
        {n:"Brookies", p:"3.5"}
      ]},
      { id:"croissant", name:"Croissant", items:[
        {n:"Cheese Croissant", p:"3"},
        {n:"Chocolate Croissant", p:"3"},
        {n:"Zaatar Croissant", p:"2.5"},
        {n:"Kaakeh Croissant", p:"4", d:"Cheese"},
        {n:"Kaakeh Tradition Cheese", p:"4"},
        {n:"Tarte Pizza", p:"3.5"}
      ]},
      { id:"pastries", name:"Pastries", items:[
        {n:"Donuts", p:"2"},
        {n:"Stuffed Donuts", p:"3", d:"Lotus, Nutella, cheesecake, booster cream"},
        {n:"Cinnamon Roll", p:"4.5"}
      ]}
    ],
    addOns:{ name:"Add Ons", items:[
      {n:"Lotus", p:"1.5"},
      {n:"Pistachio", p:"2"},
      {n:"Bueno", p:"1.5"},
      {n:"Kinder", p:"1"},
      {n:"Hershey's", p:"1"},
      {n:"Oreo", p:"1"},
      {n:"Banana", p:"0.5"},
      {n:"Strawberry", p:"1.5"}
    ]}
  }
};

function renderItem(item){
  const dataName = (item.n + " " + (item.d||"")).toLowerCase();
  if(item.sizes){
    return `<div class="item-row sizes-row" data-name="${dataName}">
      <div class="item-row-top"><span class="item-name">${item.n}</span></div>
      <div class="size-list">
        ${item.sizes.map(s => `<div class="size-pair"><span class="size-label">${s[0]}</span><span class="size-price">$${s[1]}</span></div>`).join("")}
      </div>
    </div>`;
  }
  return `<div class="item-row" data-name="${dataName}">
    <div class="item-row-top">
      <span class="item-name">${item.n}</span>
      <span class="item-dots"></span>
      <span class="item-price">$${item.p}</span>
    </div>
    ${item.d ? `<div class="item-desc">${item.d}</div>` : ""}
  </div>`;
}

function renderAddonRow(item){
  return `<div class="addon-row" data-name="${item.n.toLowerCase()}">
    <span class="addon-name">${item.n}</span>
    <span class="addon-price">$${item.p}</span>
  </div>`;
}

function renderSub(sub){
  return `<div class="subcategory" id="${sub.id}">
    <div class="sub-header">
      <h3>${sub.name}</h3>
      ${sub.note ? `<span class="sub-note">${sub.note}</span>` : ""}
    </div>
    <div class="items-grid">
      ${sub.items.map(renderItem).join("")}
    </div>
  </div>`;
}

function renderSection(key, data){
  const subNavLinks = data.subs.map(s => `<a href="#${s.id}" class="pill">${s.name}</a>`).join("");
  const addOnPill = data.addOns ? `<a href="#${key}-addons" class="pill">Add Ons</a>` : "";
  const subsHtml = data.subs.map(renderSub).join("");
  const addOnsHtml = data.addOns ? `
    <div class="subcategory addons-section" id="${key}-addons">
      <div class="sub-header"><h3>${data.addOns.name}</h3></div>
      <div class="addons-card">
        ${data.addOns.items.map(renderAddonRow).join("")}
      </div>
    </div>` : "";
  return `
  <section id="${key}" class="menu-section">
    <div class="watermark">${data.title}</div>
    <div class="section-inner">
      <h2 class="section-title">${data.title}</h2>
      <div class="sub-nav">${subNavLinks}${addOnPill}</div>
      ${subsHtml}
      ${addOnsHtml}
    </div>
  </section>`;
}

document.getElementById("menu-root").innerHTML =
  renderSection("drinks", MENU.drinks) +
  renderSection("food", MENU.food) +
  renderSection("desserts", MENU.desserts);

document.getElementById("year").textContent = new Date().getFullYear();

const searchToggle = document.getElementById("searchToggle");
const searchWrap = document.getElementById("searchWrap");
const searchInput = document.getElementById("searchInput");
searchToggle.addEventListener("click", () => {
  searchWrap.classList.toggle("open");
  if(searchWrap.classList.contains("open")){ searchInput.focus(); }
  else { searchInput.value=""; filterMenu(""); }
});

function filterMenu(rawQuery){
  const q = rawQuery.trim().toLowerCase();
  const noResults = document.getElementById("noResults");
  let anyVisible = false;
  document.querySelectorAll(".subcategory").forEach(sub => {
    let subVisible = false;
    sub.querySelectorAll(".item-row, .addon-row").forEach(row => {
      const name = row.dataset.name || "";
      const match = !q || name.includes(q);
      row.style.display = match ? "" : "none";
      if(match) subVisible = true;
    });
    sub.style.display = subVisible ? "" : "none";
    if(subVisible) anyVisible = true;
  });
  document.querySelectorAll(".menu-section").forEach(sec => {
    const hasVisibleSub = [...sec.querySelectorAll(".subcategory")].some(s => s.style.display !== "none");
    sec.style.display = (!q || hasVisibleSub) ? "" : "none";
  });
  noResults.style.display = (q && !anyVisible) ? "block" : "none";
}
searchInput.addEventListener("input", (e) => filterMenu(e.target.value));

const navLinks = document.querySelectorAll(".nav-links a[data-nav]");
const sections = document.querySelectorAll(".menu-section");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if(active) active.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(s => navObserver.observe(s));