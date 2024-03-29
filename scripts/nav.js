console.log('sanity check')

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const closeNavBtn = document.querySelector('.close-nav-btn');
let navLink = document.querySelectorAll('.nav-link');
console.log(navLink)

navToggle.addEventListener('click', () => { 

    const visibility = nav.getAttribute("data-visible");
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        closeNavBtn.classList.remove('hidden')
    } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false);
    }
    console.log(navToggle.getAttribute('aria-expanded'))
});

for (let i = 0; i <= navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    })
}

