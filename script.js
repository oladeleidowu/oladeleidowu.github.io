const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const navs = document.querySelectorAll('.inner-menu .pages li');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.classList.toggle('no-scroll')
});

navs.forEach((nav) => {
    nav.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.classList.remove('open');
        document.body.classList.toggle('no-scroll')
    })
})