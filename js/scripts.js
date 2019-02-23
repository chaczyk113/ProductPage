
window.addEventListener('resize', function () {
    resize_product_img();
    resize_description_img();
    move_dropdown();
    restoreMenu();

});


window.onload = function (){
    resize_product_img();
    resize_description_img();
    move_dropdown();
    var text = "This is unoficial and not comercial training copy of laboratoriumbioton.pl product webpage."
    alert(text);
};

function alertMessage() {
    var text = "This is unoficial and not comercial training copy of <a href='http://laboratoriumbioton.pl'>laboratoriumbioton.pl</a> product webpage."
    alert(text);
}

function resize_product_img() {
    var img = document.getElementById('product-img');
    var height = img.clientHeight;
    var w = window.innerWidth;

    if (w <= 1260) {
        document.getElementById("product-img").style.bottom = -(height / 2) + "px";
        document.querySelector(".product p").style.paddingBottom = (height / 2) + "px";
        document.querySelector(".product").style.marginBottom = ((height / 2) - 30) + "px";
    }
    else {
        document.getElementById("product-img").style.bottom = "";
        document.querySelector(".product p").style.paddingBottom = "";
        document.querySelector(".product").style.marginBottom = "";
    }
}

function resize_description_img() {
    var img = document.getElementById('description-img');
    var height = img.clientHeight;
    var w = window.innerWidth;
    var box = document.querySelector(".description-box");
    if (w <= 1260) {
        document.getElementById("description-img").style.marginTop = ((550 - height) / 9) + "px";
        var box_height = box.clientHeight;
        document.querySelector(".description").style.height = box_height + "px";
    }
    else {
        document.getElementById("description-img").style.marginTop = "";
        document.querySelector(".description").style.height = "";
    }

}

function move_dropdown() {
    var w = window.innerWidth;
    if (w < 1650) {
        document.querySelector(".dropdown-list").style.left = (-385 - (1650 - w) / 2) + "px";
    }
    else {
        document.querySelector(".dropdown-list").style.left = "";
    }
}

function showMenu() {
    var menuList = document.querySelector(".top-menu-links");
    var menuButton = document.getElementById("menu-button");
    var menuBar = document.querySelector("nav");
    var menuLogo = document.querySelector(".logo img");

    // console.log(menuList.style.display);
    if (menuList.style.display == "flex") {
        menuList.style.display = "none";
        menuButton.innerHTML = "MENU";
		menuButton.classList.remove("button-black");
        menuBar.classList.remove("bg-drop-menu");
        menuLogo.src = "../images/logo-white.png"
    }
    else {
        menuList.style.display = "flex";
        menuButton.innerHTML = "ZAMKNIJ";
        menuBar.classList.add("bg-drop-menu");
        menuLogo.src = "../images/logo.png"
		menuButton.classList.add("button-black");
    }
}

function restoreMenu() {
    var menuList = document.querySelector(".top-menu-links");
    var menuButton = document.getElementById("menu-button");
    var menuBar = document.querySelector("nav");
    var menuLogo = document.querySelector(".logo img");

    var w = window.innerWidth;
    if (w > 1260) {
        menuList.style.display = "";
        menuButton.innerHTML = "MENU";
		menuButton.classList.remove("button-black");
        menuBar.classList.remove("bg-drop-menu");
        menuLogo.src = "../images/logo-white.png"
    }
}