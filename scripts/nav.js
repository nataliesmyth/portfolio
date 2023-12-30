console.log('sanity check')

const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const closeNavBtn = document.querySelector('.close-nav-btn')
console.log(nav)

navToggle.addEventListener('click', () => { 

    const visibility = nav.getAttribute("data-visible");
    // console.log(visibility)
    // if nav is closed, set to open
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        closeNavBtn.classList.remove('hidden')
    } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false);
        closeNavBtn.classList.add('hidden')
    }
    console.log(navToggle.getAttribute('aria-expanded'))
})