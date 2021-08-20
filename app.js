let modal = null

const btnModalServices = document.querySelectorAll(".open_modal");
const modalbg = document.querySelector(".modal__services");
const closeBtn = document.querySelectorAll(".close_modal");

const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = "flex";
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');

}

const closeModal = function (e) {
    e.preventDefault()
    target.style.display = "none";
    target.removeAttribute('aria-modal');
    target.setAttribute('aria-hidden', 'true');
}
btnModalServices.forEach(a => {
    a.addEventListener("click", openModal)
})

/*
function launchModal(e) {
    e.preventDefault()
    modalbg.style.display = "flex";
    modalbg.removeAttribute('aria-hidden');
    modalbg.setAttribute('aria-modal', 'true');
  }


closeBtn.forEach((a) => a.addEventListener("click", closeModal));

function closeModal(e) {
    e.preventDefault()
    modalbg.style.display = "none";
    modalbg.setAttribute('aria-hidden', 'true');
    modalbg.removeAttribute('aria-modal');
   }
*/  
const ratio = 0.3333
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

const handleIntersectL = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio >= ratio) {
            entry.target.classList.add('revealL-visible')
            observerL.unobserve(entry.target)
        } 
    })  
}

const handleIntersectR = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio >= ratio) {
            entry.target.classList.add('revealR-visible')
            observerR.unobserve(entry.target)
        } 
    })  
}

const handleIntersectN = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio >= ratio) {
            entry.target.classList.add('revealN-visible')
            observerN.unobserve(entry.target)
        } 
    })  
}

const observerN = new IntersectionObserver(handleIntersectN, options);
document.querySelectorAll('[class*="revealN-"]').forEach(function (rN){

observerN.observe(rN)

})
  
const observerL = new IntersectionObserver(handleIntersectL, options);
document.querySelectorAll('[class*="revealL-"]').forEach(function (rL){

observerL.observe(rL)


})

const observerR = new IntersectionObserver(handleIntersectR, options);
document.querySelectorAll('[class*="revealR-"]').forEach(function (rR){

observerR.observe(rR)

})