const menuBtn = document.querySelector('.menu-btn');
const navbox = document.getElementById('navshow')
const navbar = document.getElementById('navcolour')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navbox.classList.add('show');
    menuBtn.classList.add('open');
    navbar.classList.add('green');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbox.classList.remove('show');
    navbar.classList.remove('green');
    menuOpen = false;
  }
});
