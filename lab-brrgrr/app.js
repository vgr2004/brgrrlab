var pattyBtn = document.querySelector(".btn-patty");
var cheeseBtn = document.querySelector(".btn-cheese");
var tomatoBtn = document.querySelector(".btn-tomatoes");
var onionBtn = document.querySelector(".btn-onions");
var lettuceBtn = document.querySelector(".btn-lettuce");

var ingredientItems = document.getElementsByClassName("items");
var totalPriceDisplay = document.querySelector(".price-details");

var baseBunPrice = 20;

var burgerIngredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

var burgerState = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();

  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (burgerState.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (burgerState.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomatoes = document.getElementById("tomato");
  if (burgerState.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  let onions = document.getElementById("onion");
  if (burgerState.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.getElementById("lettuce");
  if (burgerState.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

pattyBtn.onclick = function () {
  burgerState.Patty = !burgerState.Patty;
  renderAll();
};

cheeseBtn.onclick = function () {
  burgerState.Cheese = !burgerState.Cheese;
  renderAll();
};

tomatoBtn.onclick = function () {
  burgerState.Tomatoes = !burgerState.Tomatoes;
  renderAll();
};

onionBtn.onclick = function () {
  burgerState.Onions = !burgerState.Onions;
  renderAll();
};

lettuceBtn.onclick = function () {
  burgerState.Lettuce = !burgerState.Lettuce;
  renderAll();
};

function renderButtons() {
  if (burgerState.Patty) {
    pattyBtn.classList.add("active");
  } else {
    pattyBtn.classList.remove("active");
  }

  if (burgerState.Cheese) {
    cheeseBtn.classList.add("active");
  } else {
    cheeseBtn.classList.remove("active");
  }

  if (burgerState.Tomatoes) {
    tomatoBtn.classList.add("active");
  } else {
    tomatoBtn.classList.remove("active");
  }

  if (burgerState.Lettuce) {
    lettuceBtn.classList.add("active");
  } else {
    lettuceBtn.classList.remove("active");
  }

  if (burgerState.Onions) {
    onionBtn.classList.add("active");
  } else {
    onionBtn.classList.remove("active");
  }
}

function renderIngredientsBoard() {
  if (burgerState.Patty) {
    ingredientItems[0].innerHTML = "Patty";
  } else {
    ingredientItems[0].innerHTML = "";
  }

  if (burgerState.Cheese) {
    ingredientItems[1].innerHTML = "Cheese";
  } else {
    ingredientItems[1].innerHTML = "";
  }

  if (burgerState.Tomatoes) {
    ingredientItems[2].innerHTML = "Tomatoes";
  } else {
    ingredientItems[2].innerHTML = "";
  }

  if (burgerState.Onions) {
    ingredientItems[3].innerHTML = "Onions";
  } else {
    ingredientItems[3].innerHTML = "";
  }

  if (burgerState.Lettuce) {
    ingredientItems[4].innerHTML = "Lettuce";
  } else {
    ingredientItems[4].innerHTML = "";
  }
}

function renderPrice() {
  let price = baseBunPrice;

  if (burgerState.Patty) {
    price += burgerIngredients.Patty;
  }
  if (burgerState.Cheese) {
    price += burgerIngredients.Cheese;
  }
  if (burgerState.Tomatoes) {
    price += burgerIngredients.Tomatoes;
  }
  if (burgerState.Onions) {
    price += burgerIngredients.Onions;
  }
  if (burgerState.Lettuce) {
    price += burgerIngredients.Lettuce;
  }

  totalPriceDisplay.innerHTML = `INR ${price}`;
}

renderAll();
