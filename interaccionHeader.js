document.addEventListener("DOMContentLoaded", () => {
    let currentPath = window.location.pathname;

    document.querySelectorAll(".header-menu-link").forEach(link => {
        if (new URL(link.href).pathname === currentPath) {
            link.classList.add("activo");
        }
    });
});







