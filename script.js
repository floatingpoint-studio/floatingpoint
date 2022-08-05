const menuBtn = document.querySelector('.menu-btn');
const navbox = document.getElementById('navshow')
let menuOpen = false;
menuBtn.addEventListener('click', () => {

  if(!menuOpen) {
    navbox.classList.add('show')
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbox.classList.remove('show')
    menuOpen = false;
  }
});