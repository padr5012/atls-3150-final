// hide "pricing" link popup that for some reason starts at the bottom of the page
document.getElementById('pum-1412').style.display='none';
document.getElementById('pum-1171').style.display='none';

// Added a keyboard escape from the popup mobile menu
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){
    const menu = document.querySelector('.zyth-modern-menu-content');
    if (menu.getBoundingClientRect().height === 0) return; // if the menu is already closed, return.
    // Otherwise vvvv
    document.querySelector('.zyth-modern-menu-close').click(); // close the menu
    document.querySelector('.zyth-mobile-menu-button').focus();
  }
});




