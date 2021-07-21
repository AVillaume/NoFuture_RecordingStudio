const btnModalServices = document.querySelector(".open_modal_services");
const modalbg = document.querySelector(".modal__services");
const closeBtn = document.querySelectorAll(".close_modal");



btnModalServices.addEventListener("click", launchModal)


function launchModal() {
    modalbg.style.display = "flex";
  }


closeBtn.forEach((a) => a.addEventListener("click", closeModal));

function closeModal() {
    modalbg.style.display = "none";
   }
   
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