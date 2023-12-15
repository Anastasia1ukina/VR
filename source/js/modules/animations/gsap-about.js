import { gsap } from "gsap";
import { animateOnScroll } from "./funcs";

const introAboutSection = document.querySelector('.intro-about');
const introAboutWrapper = document.querySelector('.intro-about__wrapper');
const aboutUsSection2 = document.querySelector('.about-us2');
const chooseAboutSection = document.querySelector('.choose-about');
const chooseIntroAbout = document.querySelector('.choose-about__intro');
const chooseTitleAbout = document.querySelector('.choose-about__title');
const chooseBgLines = document.querySelector('.choose-about__bg-lines');
const capabilities = document.querySelector('.capabilities');
const chooseAboutSection2 = document.querySelector('.choose-about2');
const teamSection = document.querySelector('.team');
const partnersSection = document.querySelector('.partners');
const partnersIntro = document.querySelector('.partners__intro');
const partnersTitle = document.querySelector('.partners__title');
const partnersImg = document.querySelector('.partners__img');
const footerSection = document.querySelector('.footer');
const footerSubscription = document.querySelector('.footer__subscription');
const footerWrapper = document.querySelector('.footer__wrapper');

function gsapAnims() {
	gsap.defaults({ duration: 1, ease: 'ease' });

	animateOnScroll({
		node: introAboutSection,
		cbOnce: () => {
			gsap.set(introAboutWrapper, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(introAboutWrapper, { y: 0, opacity: 1 })
		}
	});

    animateOnScroll({
		node: aboutUsSection2,
		cbOnce: () => {
			gsap.set(aboutUsSection2, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(aboutUsSection2, { y: 0, opacity: 1 })
		}
	});

    animateOnScroll({
		node: chooseAboutSection,
		cbOnce: () => {
			gsap.set(chooseIntroAbout, { opacity: 0, y: '60%' });
            gsap.set(chooseTitleAbout, { opacity: 0, y: '60%' });
            gsap.set(capabilities, { opacity: 0, y: '60%' });
            gsap.set(chooseBgLines, { opacity: 0, y: '0' });
		},
		cb: () => {
			gsap.timeline()
				.to(chooseIntroAbout, { y: 0, opacity: 1 })
                .to(chooseTitleAbout, { y: 0, opacity: 1 })
                .to(capabilities, { y: 0, opacity: 1 })
                .to(chooseBgLines, { y: 0, opacity: 1 }, 2)
		}
	});

    animateOnScroll({
		node: chooseAboutSection2,
		cbOnce: () => {
			gsap.set(chooseAboutSection2, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(chooseAboutSection2, { y: 0, opacity: 1 })
		}
	});

    animateOnScroll({
		node: teamSection,
		cbOnce: () => {
			gsap.set(teamSection, { opacity: 0, y: '40%' });
		},
		cb: () => {
			gsap.timeline()
				.to(teamSection, { y: 0, opacity: 1 })
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

