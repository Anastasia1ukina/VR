import { gsap } from "gsap";
import { animateOnScroll } from "./funcs";

const footerSection = document.querySelector('.footer');
const footerSubscription = document.querySelector('.footer__subscription');
const footerWrapper = document.querySelector('.footer__wrapper');
const breadcrumbc = document.querySelector('.architecture__breadcrumb');
const architectureIntro = document.querySelector('.architecture__intro');
const architectureTitle = document.querySelector('.architecture__title');
const architectureDate = document.querySelector('.architecture__date');
const architectureImg = document.querySelector('.architecture__img');
const architectureArticle = document.querySelector('.architecture__article');
const architectureDescription1 = document.querySelector('.architecture__description--1');
const architectureDescription2 = document.querySelector('.architecture__description--2');
const architectureDescription3 = document.querySelector('.architecture__description--3');
const architectureDescription4 = document.querySelector('.architecture__description--4');
const architectureDescription5 = document.querySelector('.architecture__description--5');
const architectureDescription6 = document.querySelector('.architecture__description--6');
const architectureDescription7 = document.querySelector('.architecture__description--7');
const architectureWrapperImg = document.querySelector('.architecture__wrapper-img');
const architectureMiniTitle = document.querySelector('.architecture__mini-title');
const architectureTags = document.querySelector('.architecture__tags');
const architectureMiniTitle2 = document.querySelector('.architecture__mini-title--second');
const architectureListContacts = document.querySelector('.architecture__list-contacts');

function gsapAnims() {
	gsap.defaults({ duration: 1, ease: 'ease' });

    animateOnScroll({
		node: architectureIntro,
		cbOnce: () => {
			gsap.set(breadcrumbc, { opacity: 0, y: '60%' });
            gsap.set(architectureIntro, { opacity: 0, x: '-50%' });
            gsap.set(architectureTitle, { opacity: 0, x: '-50%' });
            gsap.set(architectureDate, { opacity: 0, x: '-50%' });
            gsap.set(architectureImg, { opacity: 0, x: '-50%' });
            gsap.set(architectureArticle, { opacity: 0, x: '50%' });
            gsap.set(architectureWrapperImg, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription6, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription7, { opacity: 0, y: '60%' });
            gsap.set(architectureMiniTitle, { opacity: 0, y: '60%' });
            gsap.set(architectureTags, { opacity: 0, y: '60%' });
            gsap.set(architectureMiniTitle2, { opacity: 0, y: '60%' });
            gsap.set(architectureListContacts, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
				.to(breadcrumbc, { y: 0, opacity: 1 })
                .to(architectureIntro, { x: 0, opacity: 1 })
                .to(architectureTitle, { x: 0, opacity: 1 }, 1)
                .to(architectureDate, { x: 0, opacity: 1 }, 1)
                .to(architectureImg, { x: 0, opacity: 1 }, 1)
                .to(architectureArticle, { x: 0, opacity: 1 }, 1)
                .to(architectureWrapperImg, { y: 0, opacity: 1 })
                .to(architectureDescription6, { y: 0, opacity: 1 })
                .to(architectureDescription7, { y: 0, opacity: 1 })
                .to(architectureMiniTitle, { y: 0, opacity: 1 }, 4)
                .to(architectureTags, { y: 0, opacity: 1 }, 4)
                .to(architectureMiniTitle2, { y: 0, opacity: 1 }, 4)
                .to(architectureListContacts, { y: 0, opacity: 1 }, 4)
		}
	});

    animateOnScroll({
		node: architectureDescription1,
		cbOnce: () => {
            gsap.set(architectureDescription1, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription2, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription3, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription4, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription5, { opacity: 0, y: '60%' });
            gsap.set(architectureWrapperImg, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription6, { opacity: 0, y: '60%' });
            gsap.set(architectureDescription7, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
                .to(architectureDescription1, { y: 0, opacity: 1 })
                .to(architectureDescription2, { y: 0, opacity: 1 }, 0)
                .to(architectureDescription3, { y: 0, opacity: 1 }, 0)
                .to(architectureDescription4, { y: 0, opacity: 1 }, 0)
                .to(architectureDescription5, { y: 0, opacity: 1 }, 0)
                .to(architectureWrapperImg, { y: 0, opacity: 1 })
                .to(architectureDescription6, { y: 0, opacity: 1 })
                .to(architectureDescription7, { y: 0, opacity: 1 }, 3)
		}
	});

    animateOnScroll({
		node: architectureMiniTitle,
		cbOnce: () => {
            gsap.set(architectureMiniTitle, { opacity: 0, y: '60%' });
            gsap.set(architectureTags, { opacity: 0, y: '60%' });
            gsap.set(architectureMiniTitle2, { opacity: 0, y: '60%' });
            gsap.set(architectureListContacts, { opacity: 0, y: '60%' });
		},
		cb: () => {
			gsap.timeline()
                .to(architectureMiniTitle, { y: 0, opacity: 1 })
                .to(architectureTags, { y: 0, opacity: 1 }, 0)
                .to(architectureMiniTitle2, { y: 0, opacity: 1 })
                .to(architectureListContacts, { y: 0, opacity: 1 }, 1)
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
