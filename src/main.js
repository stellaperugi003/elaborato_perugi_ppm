// Script per gestire la visibilità della sidebar menu e dell'overlay
document.addEventListener('DOMContentLoaded', function() {
    // Usa querySelectorAll per trovare *tutti* gli elementi con la classe 'hamburger-toggle'
    const hamburgerToggles = document.querySelectorAll('.hamburger-toggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');
    // Controlla se gli elementi fondamentali (sidebar, overlay, close button) esistono
    if (sidebarMenu && overlay && closeSidebar) {
        // Itera su *tutti* i pulsanti hamburger trovati e aggiungi il listener a ciascuno
        if (hamburgerToggles.length > 0) {
            hamburgerToggles.forEach(function(toggle) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault(); // Impedisce il comportamento predefinito del link
                    console.log("Click hamburger rilevato su un pulsante."); // Log utile per debugging
                    sidebarMenu.classList.add('open'); // Aggiunge la classe 'open' per mostrare la sidebar
                    overlay.classList.add('active'); // Aggiunge la classe 'active' per mostrare l'overlay
                });
            });
        } else {
            console.error("Errore: Nessun elemento con classe '.hamburger-toggle' trovato nel DOM.");
        }
        // Gestisce il click sul pulsante di chiusura della sidebar
        closeSidebar.addEventListener('click', function() {
            console.log("Click chiusura sidebar rilevato."); // Log utile per debugging
            sidebarMenu.classList.remove('open'); // Rimuove la classe 'open' per nascondere la sidebar
            overlay.classList.remove('active'); // Rimuove la classe 'active' per nascondere l'overlay
        });
        // Gestisce il click sull'overlay (area scura esterna) per chiudere la sidebar
        overlay.addEventListener('click', function() {
            console.log("Click overlay rilevato."); // Log utile per debugging
            sidebarMenu.classList.remove('open'); // Rimuove la classe 'open'
            overlay.classList.remove('active'); // Rimuove la classe 'active'
        });
    } else {
        console.error("Errore: Elementi necessari per il menu sidebar non trovati (sidebarMenu, overlay, closeSidebar). Assicurati che gli ID e le classi in HTML e JS siano corretti.");
        if (!sidebarMenu) console.error("#sidebarMenu non trovato");
        if (!overlay) console.error("#overlay non trovato");
        if (!closeSidebar) console.error("#closeSidebar non trovato");
    }
});