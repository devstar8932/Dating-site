/**
 * Created by hvardhan on 9/25/16.
 */
window.sr = ScrollReveal();

sr.reveal('.sr-perfect-match', {
    duration:600,
    scale: 0.5,
    distance: '0px'
}, 100);
sr.reveal('.sr-best-matrimonial-1', {
    duration:600,
    scale: 0.5,
    distance: '500px',
}, 100);
sr.reveal('.sr-best-matrimonial-2', {
    duration:600,
    scale: 0.5,
    distance: '500px',
}, 100);
sr.reveal('.sr-price-item', {
    duration:600,
    scale: 0.5,
    distance: '500px',
    origin:'right',
    viewOffset: { top: 0, right: 0, bottom: 200, left: 0 }
}, 100);
sr.reveal('.sr-match-slide', {
    duration:600,
    scale: 0.5,
    distance: '0px'
}, 100);

$('#header').affix({
      offset: {
          top: 800
      }
  })
