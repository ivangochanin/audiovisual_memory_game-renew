const animations = () => {
	gsap.to("#infoWrapper", { duration: 2, delay: 1, opacity: 1 });
	gsap.to("#divider", { duration: 2, delay: 1, opacity: 1 });
	gsap.to("#timer", { duration: 2, delay: 2, opacity: 1 });
	gsap.to("#currentLevel", { duration: 2, delay: 2, opacity: 1 });
};

const showCardsAnimation = () => {
	gsap.to(".cardWrapper", .25, {
		opacity: 1,
		yoyo: true, 
		repeat: 0, 
		ease: "power1.inOut",
		delay:1,
		stagger: {
			amount: 1, 
			from: "top"
		}
	});
}

const winMessageMessage = () => {

}

const loseMessageMessage = () => {
	
}

export {animations, showCardsAnimation};