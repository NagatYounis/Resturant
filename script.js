const bars = document.querySelector('.nav .fa-bars');
const nav = document.querySelector('.nav .nav-Links');
const mark = document.querySelector(".nav .nav-Links .fa-xmark");

bars.addEventListener('click', ()=>{
    nav.classList.toggle('open');
})
mark.addEventListener('click', ()=>{
    nav.classList.remove('open');
})
const best = document.querySelectorAll('.best-image img');
console.log(best);
best.addEventListener("mouseover", () => {
    this.src = "./images/pexels-julieaagaard-2351275.jpg";
});