import { gsap } from "gsap";
import { animateOnScroll } from "./funcs";

const capabilities = document.querySelector('.capabilities');
const introSection = document.querySelector('.intro');
const introText = document.querySelector('.intro__text');
const introImg = document.querySelector('.intro__wrapper-img');
const footerSection = document.querySelector('.footer');
const footerSubscription = document.querySelector('.footer__subscription');
const footerWrapper = document.querySelector('.footer__wrapper');


function gsapAnims() {
	gsap.defaults({ duration: 1, ease: 'ease' });

	animateOnScroll({
		node: introSection,
		cbOnce: () => {
            gsap.set(introText, { x: '-40%', opacity: 0 });
            gsap.set(introImg, { x: '40%', opacity: 0 });
			gsap.set(capabilities, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
                .to(introText, { x: 0, opacity: 1 })
                .to(introImg, { x: 0, opacity: 1 })
				.to(capabilities, { y: 0, opacity: 1 })
		}
	});

    animateOnScroll({
		node: footerSection,
		cbOnce: () => {
			gsap.set(footerSubscription, { opacity: 0, y: '60%' });
            gsap.set(footerWrapper, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(footerSubscription, { y: 0, opacity: 1 })
                .to(footerWrapper, { y: 0, opacity: 1 })
		}
	});
}

export { gsapAnims };
