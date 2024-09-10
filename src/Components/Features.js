import './Features.css'
import { exploreOne, exploreTwo, exploreVideo } from "../Utils/utils";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { GSAPAnimation } from '../Functions/functions';
gsap.registerPlugin(ScrollTrigger)

export function Features(){
  const videoRef = useRef()

  useGSAP(()=>{
    gsap.to('#explore-video',{
      scrollTrigger:{
        trigger:'#explore-video',
        toggleActions:'play pause reverse reset'
      },
      onComplete:()=>{
        videoRef.current.play()
      }
    })
  })

  useGSAP(()=>{
    gsap.to('.img-wrapper img',{
      opacity:1,
      scale:1.3,
      scrollTrigger:{
        trigger:'#explore-video',
        toggleActions:'restart reverse restart reset',
        start:'top 50%',
        scrub:5.5
      }
    })
  })

  useGSAP(()=>{
    GSAPAnimation('#explore-title',{opacity:1,transform:'translateY(0)'},{start:'top 95%'})
    GSAPAnimation('#explore-subtitle',{opacity:1,transform:'translateY(0)'},{start:'top 95%'})
    GSAPAnimation('.single-wrapper',{opacity:1,transform:'translateY(0)',stagger:0.2},{start:'top 100%'})
  },[])

  return (
    <section id="features">
      <div className="wrapper">
        <h1 id='explore-title'>Explore the story</h1>
        <h2 id='explore-subtitle'>IPhone <br />Forged in <br /> Titanium.</h2>
        <div className="grid-wrapper">
          <video id='explore-video' playsInline={true} ref={videoRef} preload='none'  autoPlay muted>
            <source  src={exploreVideo} />
          </video>
          <div className="img-wrapper">
            <img src={exploreOne} alt="" />
          </div>
          <div className="img-wrapper">
            <img src={exploreTwo} alt="" />
          </div>
        </div>
        <div className="feature-text-wrapper">
          <div className="single-wrapper">
            <p>
                iPhone 15 Pro is {' '}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium design
                  </span>,
                  using the same alloy that spacecrafts use for missions to Mars.
            </p>
          </div>
          <div className="single-wrapper">
            <p>
            Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                  <span className="text-white">
                  lightest Pro models ever.
                  </span>,
                  You'll notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}