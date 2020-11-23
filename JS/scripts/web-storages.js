// var key = "product_" + new Date().getTime();

// localStorage.setItem(key, "Mouse")


// console.log(localStorage.getItem("product_1606134211236"));
// console.log(localStorage.removeItem("product_1606134211236"));

var keys = Object.keys(localStorage);

for (key of keys) {
    if (key.startsWith("product_")) {
        console.log(
            localStorage.getItem(key)
        );
    }
}


// localStorage.clear()