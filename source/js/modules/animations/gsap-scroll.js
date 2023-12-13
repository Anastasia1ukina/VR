import { gsap } from "gsap";
import { animateOnScroll } from "./funcs";

const capabilities = document.querySelector('.capabilities');
const introSection = document.querySelector('.intro');
const introText = document.querySelector('.intro__text');
const introImg = document.querySelector('.intro__wrapper-img');
const footerSection = document.querySelector('.footer');
const footerSubscription = document.querySelector('.footer__subscription');
const footerWrapper = document.querySelector('.footer__wrapper');
const aboutUsSection = document.querySelector('.about-us');
const serviceSection = document.querySelector('.service');
const serviceText = document.querySelector('.service__wrapper-text');
const serviceItem1 = document.querySelector('.service__item--1');
const serviceItem2 = document.querySelector('.service__item--2');
const serviceItem3 = document.querySelector('.service__item--3');
const serviceItem4 = document.querySelector('.service__item--4');
const serviceItem5 = document.querySelector('.service__item--5');
const serviceItem6 = document.querySelector('.service__item--6');
const chooseSection = document.querySelector('.choose');
const chooseText = document.querySelector('.choose__text');
const chooseImg = document.querySelector('.choose__wrapper-img');
const getStartedSection = document.querySelector('.get-started');
const pricingSection = document.querySelector('.pricing');
const pricingText = document.querySelector('.pricing__wrapper-text');
const pricingWrapper = document.querySelector('.pricing__wrapper');
const partnersSection = document.querySelector('.partners');
const partnersIntro = document.querySelector('.partners__intro');
const partnersTitle = document.querySelector('.partners__title');
const partnersImg = document.querySelector('.partners__img');


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
				.to(introImg, { x: 0, opacity: 1 }, 0)
				.to(capabilities, { y: 0, opacity: 1 })
		}
	});

	animateOnScroll({
		node: aboutUsSection,
		cbOnce: () => {
			gsap.set(aboutUsSection, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(aboutUsSection, { y: 0, opacity: 1 })
		}
	});

	animateOnScroll({
		node: serviceSection,
		cbOnce: () => {
			gsap.set(serviceText, { opacity: 0, y: '60%' });
			gsap.set(serviceItem1, { opacity: 0, y: '50%' });
			gsap.set(serviceItem2, { opacity: 0, y: '50%' });
			gsap.set(serviceItem3, { opacity: 0, y: '50%' });
			gsap.set(serviceItem4, { opacity: 0, y: '50%' });
			gsap.set(serviceItem5, { opacity: 0, y: '50%' });
			gsap.set(serviceItem6, { opacity: 0, y: '50%' });
		},
		cb: () => {
			gsap.timeline()
				.to(serviceText, { y: 0, opacity: 1 })
				.to(serviceItem1, { duration: 0.6, y: 0, opacity: 1 })
				.to(serviceItem2, { duration: 0.6, y: 0, opacity: 1 })
				.to(serviceItem3, { duration: 0.7, y: 0, opacity: 1 })
				.to(serviceItem4, { duration: 0.6, y: 0, opacity: 1 })
				.to(serviceItem5, { duration: 0.6, y: 0, opacity: 1 })
				.to(serviceItem6, { duration: 0.7, y: 0, opacity: 1 })
		}
	});

	animateOnScroll({
		node: chooseSection,
		cbOnce: () => {
            gsap.set(chooseText, { x: '-40%', opacity: 0 });
            gsap.set(chooseImg, { x: '40%', opacity: 0 });
		},
		cb: () => {
			gsap.timeline()
				.to(chooseText, { x: 0, opacity: 1 })
				.to(chooseImg, { x: 0, opacity: 1 }, 0)
		}
	});

	animateOnScroll({
		node: getStartedSection,
		cbOnce: () => {
			gsap.set(getStartedSection, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(getStartedSection, { y: 0, opacity: 1 })
		}
	});

	animateOnScroll({
		node: pricingSection,
		cbOnce: () => {
			gsap.set(pricingText, { opacity: 0, y: '60%' });
			gsap.set(pricingWrapper, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(pricingText, { y: 0, opacity: 1 })
				.to(pricingWrapper, { y: 0, opacity: 1 })
		}
	});

	animateOnScroll({
		node: partnersSection,
		cbOnce: () => {
			gsap.set(partnersIntro, { opacity: 0, y: '60%' });
			gsap.set(partnersTitle, { opacity: 0, y: '60%' });
			gsap.set(partnersImg, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(partnersIntro, { y: 0, opacity: 1 })
				.to(partnersTitle, { y: 0, opacity: 1 })
				.to(partnersImg, { y: 0, opacity: 1 })
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
