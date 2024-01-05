console.log('sanity check')
const contactEl = document.getElementById('contact');
const navListEl = document.querySelector('.nav-list')

console.log(contactEl)

contactEl.addEventListener('submit', e => {
  e.preventDefault();
  let inputEl = contactEl.querySelector('input');
  let errorEl = inputEl.parentElement.lastElementChild;
  console.log(errorEl)
  errorEl.classList.remove('hidden');
});