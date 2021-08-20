const animations = () => {
	gsap.to("#infoWrapper", { duration: 2, delay: 1, opacity: 1 });
	gsap.to("#divider", { duration: 2, delay: 1, opacity: 1 });
	gsap.to("#timer", { duration: 2, delay: 2, opacity: 1 });
	gsap.to("#currentLevel", { duration: 2, delay: 2, opacity: 1 });
};

export default animations;