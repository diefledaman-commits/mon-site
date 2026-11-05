// Gestion du panneau latéral (compatible avec le CSS mobile-menu / backdrop)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar") || document.querySelector(".mobile-menu");
    const backdrop = document.querySelector(".backdrop");
    const body = document.body;

    if (!sidebar) return;

    // On vérifie si la classe "open" est présente
    const isOpen = sidebar.classList.contains("open");

    if (isOpen) {
        closeSidebar();
    } else {
        sidebar.classList.add("open");
        if (backdrop) backdrop.classList.add("open");
        body.classList.add("sidebar-open");
    }
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar") || document.querySelector(".mobile-menu");
    const backdrop = document.querySelector(".backdrop");
    const body = document.body;

    if (sidebar) sidebar.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    body.classList.remove("sidebar-open");
}
