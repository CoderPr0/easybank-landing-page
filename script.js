window.addEventListener('scroll', function () {
    let nav = this.document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    
    nav.classList.toggle('scrolling-active', windowPosition);
})


const body = document.querySelector('body')
const check = document.getElementById('nav-menu')
const checkBtn = document.querySelector('.nav-menu')

checkBtn.addEventListener('click', ()=>{
    if(check.checked === false){
        body.setAttribute('style', 'overflow: hidden')
    }else{
        body.setAttribute('style', 'overflow: scroll')
    }
})