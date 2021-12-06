import { gsap, Power3 } from "gsap";

const animations = () => {
    gsap.to("#settingsWrapperSection", {duration: 2, delay: 1, opacity: 1});
    gsap.to("#timer", {duration: 2, delay: 2, opacity: 1});
    gsap.to("#currentLevel", {duration: 2, delay: 2, opacity: 1});
};

const showCardsAnimation = () => {
    gsap.to(".cardWrapper", .25, {
        opacity: 1,
        repeat: 0,
        ease: "power1.inOut",
        delay: 1,
        stagger: {
            amount: 1,
            from: "top"
        }
    });
    gsap.to("#cardSignal", .25, {opacity: 1, delay: 1,});
};

const bonusTimeAnimation = (el) => {
    gsap.fromTo(el, {scaleY: 0}, {duration: .3, ease: Power3.easeInOut, scaleY: 1,transformOrigin: "center bottom", delay: .4});
};

const winLoseMessage = (wrapper, text, ...btns) => {
    gsap.to(wrapper, {duration: .5, autoAlpha: 1})
    gsap.fromTo(text, {opacity: 0}, {delay: .25, duration: 1, ease: Power3.easeInOut, opacity: 1});
    gsap.fromTo(btns, {opacity: 0, autoAlpha: 0}, {
        delay: .75,
        duration: .5,
        ease: Power3.easeInOut,
        opacity: 1,
        autoAlpha: 1
    });
};

const elementShow = (wrapper) => {
    return gsap.to(wrapper, {duration: .25, autoAlpha: 1});
};

const elementHide = (wrapper) => {
    return gsap.to(wrapper, {duration: .25, autoAlpha: 0});
};

const initialLoading = () => {
    return gsap.to("#container", {duration: .5, autoAlpha: 1, delay: 1});
};



export {animations, showCardsAnimation, bonusTimeAnimation, winLoseMessage, elementShow, elementHide, initialLoading};