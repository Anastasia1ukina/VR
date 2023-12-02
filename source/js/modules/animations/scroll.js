import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


const scrollAnimation = () => {
    console.log('here')
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animation", {
        scrollTrigger: ".animation", // start the animation when ".box" enters the viewport (once)
        x: 0,
        y: 0,
        duration: 2
    });
}

export { scrollAnimation }