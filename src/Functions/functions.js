import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export function GSAPAnimation(target, animationProps, scrollProps){
  gsap.to(target,{
    ...animationProps,
    scrollTrigger:{
        trigger:target,
        toggleActions:'restart none none reset',
        ...scrollProps
    }
  }
  )
}