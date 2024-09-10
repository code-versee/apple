import { useRef } from "react";
import { chipImg,  frameImg, nekkiVideo } from "../Utils/utils";
import './ExtraFeatures.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { GSAPAnimation } from "../Functions/functions";
gsap.registerPlugin(ScrollTrigger)


export function ExtraFeatures(){
  const videoRef = useRef();
  const backdropVideoRef = useRef()

  useGSAP(()=>{
    gsap.to('#frame-video',{
      scrollTrigger:{
        trigger:'#frame-video',
        toggleAttribute:'play reverse restart reset',
        start:'top 65%'
      },
      onComplete:()=>{
        videoRef.current.play()
      },
    })

    gsap.to('#backdrop-video',{
      scrollTrigger:{
        trigger:'#frame-video',
        toggleAttribute:'play reverse restart reset',
        start:'top 65%'
      },
      onComplete:()=>{
        backdropVideoRef.current.play()
      },
    })

    gsap.from('.chip-img',{
      scale:1.5,
      ease:'power1.in',
      scrollTrigger:{
        trigger:'.chip-img',
        toggleActions:'restart reverse none reset',
        start:'top 85%'
      }
    })

    GSAPAnimation('.text-wrapper .animate-text',{opacity:1,y:0,stagger:0.32},{start:'top 85%'})
    GSAPAnimation('.video-source .animate-text',{opacity:1,y:0,stagger:0.32},{start:'top 85%'})
    GSAPAnimation('.video-source.animate-text',{opacity:1,y:0,stagger:0.32},{start:'top 85%'})
    GSAPAnimation('.bottom-text-wrapper .animate-text',{opacity:1,y:0,stagger:0.32},{start:'top 85%'})
    GSAPAnimation('.frame-wrapper',{scale:0.85,y:'-20%',rotationX:40},{start:'top 60%',scrub:2.5})
  })

  return (
    <div id="extra-features">
      <div className="wrapper">
        <div className="text-img-wrapper">
          <div className="chip-img-wrapper">
            <img className="chip-img" src={chipImg} alt="" />
          </div>
        <div className="text-wrapper">
          <h2 className="animate-text"> A17 Pro chip.
            <br /> A monster win for gaming.</h2>
          <p className="animate-text">It's here. The biggest redesign in the history of Apple GPUs.</p>
        </div>
        </div>
        
        <div className="frame-wrapper">
          <img className="frame-img" src={frameImg} alt="" />
          <video id="frame-video" playsInline={true} preload="none" muted autoPlay ref={videoRef}>
            <source  src={nekkiVideo} type="video/mp4" />
          </video>
          <video id="backdrop-video" playsInline={true} preload="none" muted autoPlay ref={backdropVideoRef}>
            <source  src={nekkiVideo} type="video/mp4" />
          </video>
        </div>
        <p className="video-source animate-text text-white">Nekki: Spline & Shadow Fight Arena.</p>
        <div className="bottom-text-wrapper">
        <div className="left">
                  <p className="animate-text gray-text">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="animate-text gray-text">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="right animate-text">
                <p className="text-white">New</p>
                <p className="lg-text text-white">Pro-class GPU</p>
                <p className="text-white">with 6 cores</p>
              </div>
        </div>
      </div>
    </div>
  )
}