const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const offerTrack = document.getElementById('offer-track');
const pauseButton = document.getElementById('pause-offers');
pauseButton.addEventListener('click', () => {
  const paused = offerTrack.classList.toggle('paused');
  pauseButton.textContent = paused ? '▶' : 'Ⅱ';
  pauseButton.setAttribute('aria-label', paused ? 'Retomar ofertas' : 'Pausar ofertas');
  pauseButton.title = paused ? 'Retomar ofertas' : 'Pausar ofertas';
});

// Duplica os cards para criar uma faixa contínua sem um salto visual.
[...offerTrack.children].forEach(card => {
  const clone = card.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  offerTrack.appendChild(clone);
});

const video = document.getElementById('market-video');
const placeholder = document.getElementById('video-placeholder');
video.addEventListener('loadeddata', () => placeholder.hidden = true);
video.addEventListener('error', () => placeholder.hidden = false);
