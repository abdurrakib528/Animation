// //Lottie scrollTrigger JSON Object Animation with GSAP.
// gsap.registerPlugin(ScrollTrigger);

// const sliderInfo = document.querySelectorAll(".slider__info");
// const infoContainer = document.querySelector(".info__container");
// const sliderJson = document.querySelector(".slider__json");

// sliderInfo.forEach((el, i) => {
//     let tl = gsap.timeline({
//         defaults: {
//             ease: "none",
//         },
//         scrollTrigger: {
//             trigger: el,
//             start: "bottom bottom",
//             end: "+=100%",
//             scrub: true,
//         },
//     });

//     tl.to(".slider__info", { y: (-infoContainer.offsetHeight / 4) * i, duration: 3, ease: "none" }, i);

//     // Scene Enter animations
//     i != 0 && tl.from(el, { autoAlpha: (i + 5) / 100, duration: 3, ease: "none" }, i);

//     // Scene Exit animations
//     i != sliderInfo.length - 1 && tl.to(el, { autoAlpha: 1, duration: 3, ease: "none" }, i + 0.75);

//     tl.to({}, { duration: 0.3 });
// });

// LottieScrollTrigger({
//     target: ".slider__json",
//     path: "https://assets2.lottiefiles.com/packages/lf20_4ghuiyen.json",
//     scrub: true,
//     pin: ".lottie__slider__container",
//     pinSpacing: 0,
//     start: "center center",
//     speed: "medium",
//     end: "+=330%",
// });

// function LottieScrollTrigger(vars) {
//     let playhead = { frame: 0 },
//         target = gsap.utils.toArray(vars.target)[0],
//         speeds = { slow: "+=3000", medium: "+=1000", fast: "+=500" },
//         st = { trigger: target, pin: true, start: "center center", end: speeds[vars.speed] || "+=1000", scrub: true },
//         animation = lottie.loadAnimation({
//             container: target,
//             renderer: vars.renderer || "svg",
//             loop: false,
//             autoplay: false,
//             path: vars.path,
//         });
//     for (let p in vars) {
//         st[p] = vars[p];
//     }
//     animation.addEventListener("DOMLoaded", function () {
//         gsap.to(playhead, {
//             frame: animation.totalFrames - 1,
//             ease: "none",
//             onUpdate: () => {
//                 animation.goToAndStop(playhead.frame, true);
//             },
//             scrollTrigger: st,
//         });
//         // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
//         ScrollTrigger.sort();
//         ScrollTrigger.refresh();
//         vars.onLoad && vars.onLoad();
//     });
//     return animation;
// }
// //  ***************************************End Lottie ScrollTrigger animation

//Lottie scrollTrigger JSON Object Animation with GSAP.
gsap.registerPlugin(ScrollTrigger);

const sliderInfo = document.querySelectorAll(".slider__info");
const infoContainer = document.querySelector(".info__container");
const sliderJson = document.querySelector(".slider__json");

sliderInfo.forEach((el, i) => {
    let tl = gsap.timeline({
        defaults: {
            ease: "none",
        },
        scrollTrigger: {
            trigger: el,
            start: "bottom bottom",
            end: "+=80%",
            scrub: true,
        },
    });

    tl.to(".slider__info", { y: (-infoContainer.offsetHeight / 6) * i, duration: 2, ease: "none" }, i);

    // Scene Enter animations
    i != 0 && tl.from(el, { autoAlpha: (i + 5) / 100, duration: 2, ease: "none" }, i);

    // Scene Exit animations
    i != sliderInfo.length - 1 && tl.to(el, { autoAlpha: 1, duration: 2, ease: "none" }, i + 0.75);

    tl.to({}, { duration: 0.3 });
});

LottieScrollTrigger({
    target: ".slider__json",
    path: "../../CHIP_Story_BreakDown.json",
    scrub: true,
    pin: ".lottie__slider__container",
    pinSpacing: 0,
    start: "center center",
    speed: "medium",
    end: "+=330%",
});

function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: "+=3000", medium: "+=1000", fast: "+=500" },
        st = { trigger: target, pin: true, start: "center center", end: speeds[vars.speed] || "+=1000", scrub: true },
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path,
        });
    for (let p in vars) {
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => {
                animation.goToAndStop(playhead.frame, true);
            },
            scrollTrigger: st,
        });
        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
        vars.onLoad && vars.onLoad();
    });
    return animation;
}
//  ***************************************End Lottie ScrollTrigger animation
