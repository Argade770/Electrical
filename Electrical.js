// ================= CART =================

let cartCount = 0;

function addCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");
}


// ================= SHOW CART =================

function showCart() {

    if (cartCount == 0) {

        alert("Your cart is empty!");

    } else {

        alert("You have " + cartCount + " product(s) in your cart.");

    }

}


// ================= SEARCH =================

function searchProduct() {

    let search = document.getElementById("searchBox").value;

    if (search.trim() == "") {

        alert("Please enter product name");

    } else {

        alert("Searching for: " + search);

    }

}


// ================= SHOP NOW =================

function shopNow() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= OFFER =================

function grabOffer() {

    alert("🎉 Congratulations! 30% OFF offer applied.");

}


// ================= ENTER KEY SEARCH =================

document.getElementById("searchBox").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        searchProduct();

    }

});