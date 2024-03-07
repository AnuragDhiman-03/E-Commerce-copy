import { shoes } from "./data.js";

function addToCart(data) {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    const cart = JSON.parse(getCart);
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.setItem("cart", JSON.stringify([data]));
  }
}

function displayShoes() {
  const shoesContainer = document.getElementById("shoesContainer");
  shoesContainer.innerHTML = "";

  shoes.forEach((shoe) => {
    const shoeDiv = document.createElement("div");
    shoeDiv.classList.add("product text-center col-lg-3 col-md-4 col-12");
    shoeDiv.innerHTML = `
			<img src="${shoe.image}" alt="${shoe.name}" />
			<h3>${shoe.name}</h3>
			<p>${shoe.price}</p>

			<button onclick="addToCart()">Add to Cart</button>
			<img class="img-fluid mb-3" src="Photo/fourthimage.webp" alt="">
			<div class="star">
				<i class="fa-regular fa-star"></i>
				<i class="fa-regular fa-star"></i>
				<i class="fa-regular fa-star"></i>
				<i class="fa-regular fa-star"></i>
				<i class="fa-regular fa-star"></i>
			</div>
			<h5 class="p-name">Sports Boots</h5>
			<h4 class="p-price">Rs 6999</h4>
			<button id=${shoe.id} class="buy-btn">Add to cart</button>
			<h5></h5>
		`;
    const addToCartButton = shoeDiv.querySelector(shoe.id);
    addToCartButton.addEventListener("click", () => {
      addToCart(shoe.id);
    });
    shoesContainer.appendChild(shoeDiv);
  });
}

// cart =  [id, id, id, id]
// delete(id)
