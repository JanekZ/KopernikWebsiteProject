const allBtn = document.getElementById('all');
const ucznBtn = document.getElementById('dlaUczniow');
const kandBtn = document.getElementById('dlaKand');
const matBtn = document.getElementById('dlaMatur');

allBtn.addEventListener('click', function(){
    allBtn.classList.add('selected');
    ucznBtn.classList.remove('selected');
    kandBtn.classList.remove('selected');
    matBtn.classList.remove('selected');
})

ucznBtn.addEventListener('click', function(){
    allBtn.classList.remove('selected');
    ucznBtn.classList.add('selected');
    kandBtn.classList.remove('selected');
    matBtn.classList.remove('selected');
})

kandBtn.addEventListener('click', function(){
    allBtn.classList.remove('selected');
    ucznBtn.classList.remove('selected');
    kandBtn.classList.add('selected');
    matBtn.classList.remove('selected');
})

matBtn.addEventListener('click', function(){
    allBtn.classList.remove('selected');
    ucznBtn.classList.remove('selected');
    kandBtn.classList.remove('selected');
    matBtn.classList.add('selected');
})