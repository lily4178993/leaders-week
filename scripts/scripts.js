/**
 * Implement the user interactions: link, mobile menu
 */
const menuIcon = document.getElementById('menu-icon');
const menuBox = document.getElementById('menu-box');
menuIcon.onclick = () => {
  /**
   * Toggle action --> Add / remove class element 'menu-open'
   * when menu icon (hamberger / close button) clicked
   */
  menuBox.classList.toggle('menu-open');

  if (menuBox.classList.contains('menu-open')) {
    menuIcon.src = 'images/close.png';
  } else {
    menuIcon.src = 'images/menu.png';
  }
};