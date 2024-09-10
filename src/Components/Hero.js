import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { heroVideo, smallHeroVideo } from '../Utils/utils'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { GSAPAnimation } from '../Functions/functions'
gsap.registerPlugin(ScrollTrigger)

export function Hero(){
  const[video, setVideo] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  )

  const videoRef = useRef()

  useGSAP(()=>{
    gsap.to('#hero-video',{
      scrollTrigger:{
        trigger:'#hero-video',
        toggleActions:'play pause reverse restart',
        start:'bottom 5%'
      },
      onComplete:()=>{
        videoRef.current.play()
      }
    })
    GSAPAnimation('.hero-title',{opacity:1,y:0,delay:1,duration:1},{start:'top 85%'})
    GSAPAnimation('.CTA',{opacity:1,y:0,delay:1.45},{start:'top 95%'})
  })

  function alterVideo(){
    if(window.innerWidth < 760){
      setVideo(smallHeroVideo)
    }
    else{
      setVideo(heroVideo)
    }
  }

  useEffect(function(){
    window.addEventListener('resize',alterVideo)

    return function(){
      window.removeEventListener('resize',alterVideo)
    }
  },[])

  return(
    <section className='hero-section'>
      <h1 className='hero-title animate-text'>IPhone 15 Pro</h1>
      <video id='hero-video' ref={videoRef} autoPlay playsInline={true} muted key={video}>
        <source src={video} type='video/mp4'/>
      </video>
      <div className="CTA animate-text">
        <button>Buy Now</button>
        <p>For $199 per Month</p>
      </div>
    </section>
  )
}