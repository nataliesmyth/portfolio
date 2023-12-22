console.log('sanity check')
const contactEl = document.getElementById('contact');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navListEl = document.querySelector('.nav-list')

console.log(contactEl)

contactEl.addEventListener('submit', e => {
  e.preventDefault();
  let inputEl = contactEl.querySelector('input');
  let errorEl = inputEl.parentElement.lastElementChild;
  console.log(errorEl)
  errorEl.classList.remove('hidden');
});

hamburgerMenu.addEventListener('click', toggleNavLinks)

function toggleNavLinks() {
  navListEl.classList.remove('hidden')
  console.log('show nav links!')
}