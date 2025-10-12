const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

const hamburgerMenu = document.querySelector('#hamburger-menu')
document.addEventListener('click', function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar .navbar-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('highlight');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('highlight');
    }
  });
});