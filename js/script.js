/* ===========================================
   PRODUCT DATA (You can add more)
=========================================== */
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 12000,
        image: "images/product1.jpg"
    },
    {
        id: 2,
        name: "Headphones",
        price: 1500,
        image: "images/product2.jpg"
    }
];


/* ===========================================
   DISPLAY PRODUCTS ON products.html
=========================================== */
function loadProducts() {
    const container = document.getElementById("productList");
    if (!container) return;

    products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToWishlist(${p.id})">Add to Wishlist</button>
                <button onclick="addToOrders(${p.id})">Order Now</button>
            </div>
        `;
    });
}


/* ===========================================
   VALIDATION: REGISTER FORM
=========================================== */
function validateRegister() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    const msg = document.getElementById("regMsg");

    if (name === "" || email === "" || pass === "") {
        msg.style.color = "red";
        msg.innerHTML = "All fields are required!";
        return false;
    }

    if (!email.includes("@")) {
        msg.style.color = "red";
        msg.innerHTML = "Enter a valid email!";
        return false;
    }

    if (pass.length < 6) {
        msg.style.color = "red";
        msg.innerHTML = "Password must be at least 6 characters!";
        return false;
    }

    msg.style.color = "green";
    msg.innerHTML = "Registration Successful!";
    return true;
}


/* ===========================================
   VALIDATION: LOGIN FORM
=========================================== */
function validateLogin() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    const msg = document.getElementById("loginMsg");

    if (email === "" || pass === "") {
        msg.style.color = "red";
        msg.innerHTML = "Both fields are required!";
        return false;
    }

    msg.style.color = "green";
    msg.innerHTML = "Login Successful!";
    return true;
}


/* ===========================================
   WISHLIST SYSTEM (localStorage)
=========================================== */
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(id) {
    const product = products.find(p => p.id === id);
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(product.name + " added to Wishlist!");
}

function loadWishlist() {
    const container = document.getElementById("wishlistList");
    if (!container) return;

    wishlist.forEach(p => {
        container.innerHTML += `
            <div class="page-card">
                <img src="${p.image}" width="120">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
            </div>
        `;
    });
}


/* ===========================================
   ORDERS SYSTEM
=========================================== */
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function addToOrders(id) {
    const product = products.find(p => p.id === id);
    orders.push(product);
    localStorage.setItem("orders", JSON.stringify(orders));
    alert(product.name + " added to Orders!");
}

function loadOrders() {
    const container = document.getElementById("orderList");
    if (!container) return;

    orders.forEach(p => {
        container.innerHTML += `
            <div class="page-card">
                <img src="${p.image}" width="120">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
            </div>
        `;
    });
}


/* ===========================================
   REVIEWS SYSTEM
=========================================== */
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function submitReview() {
    const name = document.getElementById("reviewName").value;
    const text = document.getElementById("reviewText").value;

    if (name === "" || text === "") {
        alert("Please fill all fields!");
        return;
    }

    const review = { name, text };
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Review submitted!");
}

function loadReviews() {
    const container = document.getElementById("reviewList");
    if (!container) return;

    reviews.forEach(r => {
        container.innerHTML += `
            <div class="page-card">
                <h3>${r.name}</h3>
                <p>${r.text}</p>
            </div>
        `;
    });
}


/* ===========================================
   CUSTOMER CARE (simple validation)
=========================================== */
function sendMessage() {
    const name = document.getElementById("ccName").value;
    const msg = document.getElementById("ccMessage").value;

    if (name === "" || msg === "") {
        alert("All fields are required!");
        return;
    }

    alert("Message sent! Our team will contact you.");
}
