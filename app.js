/*const menuElt = document.querySelector('.topbar');

(function () {
var onScroll = function () {
    if (menuElt.getBoundingClientRect().top < 0) {
        menuElt.classList.add('fixed')
    }
}
window.addEventListener('scroll', onScroll)

})()*/

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