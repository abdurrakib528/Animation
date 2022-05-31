//*******Create come into view Lottie Animation*******************
const observeItems = document.querySelectorAll(".lottie-player");
function observeFunction(entries) {
    if (!entries[0].isIntersecting) {
        return;
    }
    entries[0].target.play();
    observer.unobserve(entries[0].target);
}
const observerOptions = {
    threshold: 0.1,
};

const observer = new IntersectionObserver(observeFunction, observerOptions);
observeItems.forEach(function (item) {
    observer.observe(item);
});
