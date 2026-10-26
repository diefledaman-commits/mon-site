// Gestion du panneau latéral
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    if (sidebar.style.width === "250px") {
        // Si ouvert → fermer
        sidebar.style.width = "0";
        body.classList.remove("sidebar-open");
    } else {
        // Si fermé → ouvrir
        sidebar.style.width = "250px";
        body.classList.add("sidebar-open");
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("sidebar-open");
}