let selectedProduct = {};

function openPopup(name, price, image) {
  selectedProduct = { name, price, image };

  document.getElementById("product-name").innerText = name;
  document.getElementById("product-price").innerText = "$" + price;

  // ✅ SET IMAGE
  document.getElementById("product-image").src = image;

  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function addToCart() {
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  console.log("Added:", selectedProduct.name, color, size);

  // Special condition
  if (color === "Black" && size === "Medium") {
    console.log("Also added: Soft Winter Jacket");
  }

  closePopup();
}