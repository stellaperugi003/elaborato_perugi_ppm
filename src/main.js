// Script per gestire la visibilità della sidebar menu e dell'overlay
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');

    if (hamburgerToggle && sidebarMenu && overlay && closeSidebar) {
        // Gestisce il click sul pulsante hamburger
        hamburgerToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Impedisce il comportamento predefinito del link (es. scorrere in alto)
            sidebarMenu.classList.add('open'); // Aggiunge la classe 'open' per mostrare la sidebar
            overlay.classList.add('active'); // Aggiunge la classe 'active' per mostrare l'overlay
        });
        // Gestisce il click sul pulsante di chiusura della sidebar
        closeSidebar.addEventListener('click', function() {
            sidebarMenu.classList.remove('open'); // Rimuove la classe 'open' per nascondere la sidebar
            overlay.classList.remove('active'); // Rimuove la classe 'active' per nascondere l'overlay
        });
        // Gestisce il click sull'overlay (area scura esterna) per chiudere la sidebar
        overlay.addEventListener('click', function() {
            sidebarMenu.classList.remove('open'); // Rimuove la classe 'open'
            overlay.classList.remove('active'); // Rimuove la classe 'active'
        });
        // Rimosso l'event listener resize che chiudeva automaticamente su schermi larghi,
        // dato che il toggle è ora sempre visibile.
    } else {
        console.error("Errore: Elementi necessari per il menu sidebar non trovati. Assicurati che gli ID e le classi in HTML e JS siano corretti.");
    }
});