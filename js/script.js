document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments HTML par leurs ID
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('backdrop');

    // Fonction d'ouverture
    function openMenu() {
        if (mobileMenu) mobileMenu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        document.body.style.overflow = 'hidden'; // Bloque le défilement arrière-plan sur Android/iOS
    }

    // Fonction de fermeture
    function closeAll() {
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.body.style.overflow = ''; // Rétablit le défilement
    }

    // Événements d'ouverture et de fermeture
    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeAll);
    if (backdrop) backdrop.addEventListener('click', closeAll);

    // Fermeture automatique lors d'un clic sur un lien de la navigation
    const mobileLinks = document.querySelectorAll('.mobile-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeAll);
    });
});
