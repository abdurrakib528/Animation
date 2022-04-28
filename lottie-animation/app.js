gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById("hand");
var elem2 = document.getElementById("hand2");

LottieScrollTrigger({
    target: "#hand",
    path: "./data.json",
    speed: "+=20000",
    scrub: true,

    duration: "100%",
    pin: ".main",
    start: "center center",
    end: () => `+=${elem.offsetHeight} + 1000`,
    // markers: true,
});

LottieScrollTrigger({
    target: "#hand2",
    path: "./data.json",
    pin: ".main",
    start: "center center",
    end: () => `+=${elem2.offsetHeight} + 1000`,
    pinnedContainer: ".main",
    speed: "medium",
    scrub: true,

    // markers: true,
});

// function LottieScrollTrigger(vars) {
//     let playhead = {frame: 0},
//         target = gsap.utils.toArray(vars.target)[0],
//         speeds = {slow: "+=2000", medium: "+=20000", fast: "+=500"},
//         st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=5000", scrub: 0.5},
//         animation = lottie.loadAnimation({
//             container: target,
//             renderer: vars.renderer || "svg",
//             loop: false,
//             autoplay: false,
//             path: vars.path,
//         });
//     for (let p in vars) {
//         // let users override the ScrollTrigger defaults
//         st[p] = vars[p];
//     }
//     animation.addEventListener("DOMLoaded", function () {
//         gsap.to(playhead, {
//             frame: animation.totalFrames - 1,
//             ease: "none",
//             onUpdate: () => animation.goToAndStop(playhead.frame, true),
//             scrollTrigger: st,
//         });
//     });
// }
function LottieScrollTrigger(vars) {
    let playhead = {frame: 0},
        target = gsap.utils.toArray(vars.target)[0],
        speeds = {slow: "+=3000", medium: "+=1000", fast: "+=500"},
        st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path,
        });
    for (let p in vars) {
        // let users override the ScrollTrigger defaults
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st,
        });
        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        vars.onLoad && vars.onLoad();
    });
    return animation;
}
