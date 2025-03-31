const dropdown = document.querySelector(".navbar .container .menu_links .menu_item .dropdown ");
const dropdownParent = dropdown.parentElement;

// Show the dropdown
dropdownParent.addEventListener("mouseover", () => {
    dropdown.classList.add("show");
});

// Hide the dropdown
dropdownParent.addEventListener("mouseout", (event) => {
    if (
        !dropdown.contains(event.relatedTarget) &&
        !dropdownParent.contains(event.relatedTarget)
    ) {
        dropdown.classList.remove("show");
    }
    dropdown.style.backdropFilter = "blur(15px) !important";
});


const toggleVerticaMenu = document.querySelector(".navbar .vertical_menu .toggle_menu i");
const verticalMenu = document.querySelector(".navbar .vertical_menu .menu_links");

// Toggle Vertical menu
toggleVerticaMenu.addEventListener("click", () => {
    verticalMenu.classList.toggle("display_none");
    verticalMenu.classList.toggle("open");
    if (toggleVerticaMenu.classList.contains("fa-bars")) {
        toggleVerticaMenu.classList.remove("fa-bars");
        toggleVerticaMenu.classList.add("fa-xmark");
        toggleVerticaMenu.style.borderRadius = ".5rem .5rem 0 0";
    } else {
        toggleVerticaMenu.classList.remove("fa-xmark");
        toggleVerticaMenu.classList.add("fa-bars");
        toggleVerticaMenu.style.borderRadius = ".5rem";
    }
});
// Close Vertical menu when clicking outside of it
document.addEventListener("click", (e) => {
    if (!verticalMenu.contains(e.target) && !toggleVerticaMenu.contains(e.target)) {
        verticalMenu.classList.add("display_none");
    }
});

// sub menu in mobile version

//toggle submenu for mobile view
const subMenu = document.querySelector(".vertical_menu .menu_links .menu_item .sub_menu");
const subMenuToggle = subMenu.previousElementSibling;
const flitcha = document.querySelector(".vertical_menu .menu_links .menu_item .fa-caret-down");

subMenuToggle.addEventListener("click", () => {
    subMenu.classList.toggle("show");
    flitcha.classList.toggle("fa-caret-up");
    flitcha.classList.toggle("fa-caret-down");
})