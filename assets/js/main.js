'use strict';

// Navigation is visible in the HTML. Collapse it only after this enhancement runs.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (menuButton && navigation) {
  const smallScreen = window.matchMedia('(max-width: 640px)');

  function setExpanded(expanded) {
    menuButton.setAttribute('aria-expanded', String(expanded));
    navigation.hidden = !expanded;
  }

  function syncNavigation() {
    // Preserve keyboard focus when a resize hides the focused control or link.
    if (!smallScreen.matches && document.activeElement === menuButton) {
      navigation.hidden = false;
      navigation.querySelector('a').focus();
    }
    menuButton.hidden = !smallScreen.matches;
    if (smallScreen.matches && navigation.contains(document.activeElement)) {
      menuButton.focus();
    }
    setExpanded(!smallScreen.matches);
  }

  menuButton.addEventListener('click', () => {
    setExpanded(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && smallScreen.matches && !navigation.hidden) {
      setExpanded(false);
      menuButton.focus();
    }
  });

  smallScreen.addEventListener('change', syncNavigation);
  syncNavigation();
}
