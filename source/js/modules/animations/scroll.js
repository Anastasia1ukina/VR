import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animation", {
        scrollTrigger: ".animation", 
        x: 0,
        y: 0,
        duration: 2
    });
}

export { scrollAnimation }