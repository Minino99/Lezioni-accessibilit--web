// Selettori widget
const accessibilityBtn = document.getElementById('accessibilityBtn');
const accessibilityMenu = document.getElementById('accessibilityMenu');

// Selettori pulsanti del menu
const increaseTextBtn = document.getElementById('increaseTextBtn');
const stopAnimationsBtn = document.getElementById('stopAnimationsBtn');
const hideImagesBtn = document.getElementById('hideImagesBtn');

// Stato del menu (aperto/chiuso)
let menuOpen = false;

/**
 * Funzione per aprire il menu:
 * - Imposta display block
 * - Aggiorna aria-hidden, aria-expanded
 * - Sposta il focus sul primo pulsante del menu
 */
function openMenu() {
  menuOpen = true;
  accessibilityMenu.style.display = 'flex';
  accessibilityMenu.setAttribute('aria-hidden', 'false');
  accessibilityBtn.setAttribute('aria-expanded', 'true');
  // Sposta il focus sul primo elemento interattivo del menu
  increaseTextBtn.focus();
}

/**
 * Funzione per chiudere il menu:
 * - Imposta display none
 * - Aggiorna aria-hidden, aria-expanded
 * - Ritorna il focus sul pulsante principale
 */
function closeMenu() {
  menuOpen = false;
  accessibilityMenu.style.display = 'none';
  accessibilityMenu.setAttribute('aria-hidden', 'true');
  accessibilityBtn.setAttribute('aria-expanded', 'false');
  // Ritorna il focus al pulsante di apertura
  accessibilityBtn.focus();
}

// Evento click sul pulsante “apribile”
accessibilityBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Chiudere il menu con ESC se aperto
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) {
    closeMenu();
  }
});

// Funzionalità: Aumenta Testo
increaseTextBtn.addEventListener('click', () => {
  document.body.classList.toggle('large-text');
  // Se desideri chiudere subito il menu dopo l’azione, decommenta:
  // closeMenu();
});

// Funzionalità: Ferma Animazioni
stopAnimationsBtn.addEventListener('click', () => {
  document.body.classList.toggle('stop-animations');
  // closeMenu();
});

// Funzionalità: Nascondi Immagini
hideImagesBtn.addEventListener('click', () => {
  document.body.classList.toggle('hide-images');
  // closeMenu();
});
