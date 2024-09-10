import { useGSAP } from '@gsap/react'
// import { hightlightsSlides } from '../Constants'
import { rightIcon, watchIcon } from '../Utils/utils'
import { Carousel } from './Carousel'
import './Highlights.css'
import { GSAPAnimation } from '../Functions/functions'

export function Highlights(){

  useGSAP(()=>{
    GSAPAnimation('.title',{opacity:1,y:0},{start:'top 90%'})
    GSAPAnimation('.link',{opacity:1,y:0,stagger:0.25},{start:'top 90%'})
  })

  return(
    <section id='highlights'>
      <div className="title-area">
        <div className="title animate-text">
          <h1 style={{color:'white'}}>Get the highlights</h1>
        </div>
        <div className="link-btn-wrapper">
          <p className="link animate-text">
            Watch the film
            <img src={watchIcon} alt="" />
          </p>
          <p className="link animate-text">
            Watch the event
            <img src={rightIcon} alt="" />
          </p>
        </div>
      </div>
      <Carousel/>
    </section>
  )
}