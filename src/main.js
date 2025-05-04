// Script per gestire la visibilità della sidebar menu e dell'overlay E l'header che si riduce allo scroll

document.addEventListener('DOMContentLoaded', function() {
    // --- INIZIO: Sidebar Menu ---
    const hamburgerToggles = document.querySelectorAll('.hamburger-toggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');

    if (sidebarMenu && overlay && closeSidebar) {
        if (hamburgerToggles.length > 0) {
            hamburgerToggles.forEach(function(toggle) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    sidebarMenu.classList.add('open');
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });
        }

        closeSidebar.addEventListener('click', function() {
            sidebarMenu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', function() {
            sidebarMenu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && sidebarMenu.classList.contains('open')) {
                sidebarMenu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- INIZIO: Data e Ora Live ---
    function updateLiveDateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        const timeElement = document.getElementById('last-updated');
        if (timeElement) timeElement.textContent = timeString;

        const dayNames = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
        const dateString = `${dayNames[now.getDay()]}, ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
        const dateElement = document.getElementById('current-date');
        if (dateElement) dateElement.textContent = dateString;
    }

    updateLiveDateTime();
    setInterval(updateLiveDateTime, 60000);

    // --- INIZIO: Scroll Header per mostrare logo piccolo solo su desktop ---
    const middleHeader = document.getElementById('middleHeader');
    const smallLogo = document.getElementById('small-logo');

    function handleScrollLogo() {
        if (window.innerWidth >= 992 && middleHeader && smallLogo) {
            const middleBottom = middleHeader.getBoundingClientRect().bottom;
            const shouldShowSmallLogo = middleBottom <= 0;
            smallLogo.classList.toggle('d-none', !shouldShowSmallLogo);
        } else if (smallLogo) {
            // Nasconde comunque il logo piccolo su mobile
            smallLogo.classList.add('d-none');
        }
    }

    window.addEventListener('scroll', handleScrollLogo);
    window.addEventListener('resize', handleScrollLogo);
    handleScrollLogo();

});
