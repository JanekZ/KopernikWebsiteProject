const openBtn = document.querySelector(".menu");
const exitBtn = document.querySelector(".img_ham");
const sideNav = document.querySelector('.side_nav');

openBtn.addEventListener('click', function(){
    sideNav.classList.remove('hide_side_nav');
    sideNav.classList.add('.show_side_nav');
})

exitBtn.addEventListener('click', function(){
    sideNav.classList.remove('.show_side_nav');
    sideNav.classList.add('hide_side_nav');
})