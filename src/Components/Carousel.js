import { useGSAP } from '@gsap/react'
import { hightlightsSlides } from '../Constants'
import './Carousel.css'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { replayIcon } from '../Utils/utils';

gsap.registerPlugin(ScrollTrigger)

export function Carousel(){ 
  const [video,setVideo] = useState({
    isPlaying:false,
    videoId:0,
    hasEnded:true
  });
  
  const {isPlaying, videoId,hasEnded} = video;
  const [loadedData,setLoadedData] = useState([])
  const videoRef = useRef([])
  const videoDivRef = useRef([])
  const videoSpanRef = useRef([])

  useGSAP(()=>{
    gsap.to('.slider',{
        transform:`translateX(-${100*videoId}%)`
    })

    gsap.to('#video',{
        scrollTrigger:{
          trigger:'#video',
          toggleActions:'restart reverse restart reverse',
          start:'top 65%',
          end:'bottom top'
        },
        onComplete:()=>setVideo((cur)=>({
          ...cur,isPlaying:true
        }))
    })

    },[videoId])


   useEffect(()=>{
    let curProgress = 0
    let span =videoSpanRef.current
    if(isPlaying){
      let animation = gsap.to(span[videoId],{
        onUpdate:()=>{
          let progress = Math.ceil(animation.progress() *100)

          if(progress !== curProgress){
            curProgress = progress
          }
          gsap.to(videoDivRef.current[videoId],{
            width:'58px',
          })

          gsap.to(span[videoId],{
            width:curProgress +  5 + "%",
            backgroundColor:'white'
          })
        },
        onComplete:()=>{
          gsap.to(videoDivRef.current[videoId],{
            width:'12px'
          })
          gsap.to(span[videoId],{
            backgroundColor:'#c5c5c8',
            width:0,
          })
        },
        // duration:hightlightsSlides[videoId].videoDuration
      })

      function animationUpdate(){
        return animation.progress(videoRef.current[videoId ].currentTime / hightlightsSlides[videoId].videoDuration)
      }

      if(isPlaying){
        gsap.ticker.add(animationUpdate)
      }
      else{
        gsap.ticker.remove(animationUpdate)
      }

    }

   },[videoId,isPlaying]) 

  useEffect(()=>{
    if(loadedData.length > 3){
      if(!isPlaying){
        videoRef.current[videoId].pause()
      }
      else{
        videoRef.current[videoId].play()
      }
    }

  },[videoId,loadedData,isPlaying])

  function updateData(dta,index){
    setLoadedData((cur)=>[...cur,dta])
  }

  function shiftVideo(type,index){
    switch (type){
      case 'playNext':
        setVideo((cur)=>({
          ...cur,videoId:index+1
        }))
        break;

        case 'wasLast':
          setVideo((cur)=>({
            ...cur,videoId:0
          }))
          break;

          default:
            return video;
    }
  }

  return(
    <>
    <div className="slider-wrapper">
      {hightlightsSlides.map((slide, index)=>(
        <div key={index} className="slider">
          <div className="video-wrapper">
            <video id='video'  preload='auto' muted playsInline={true}
                         ref={(el)=>{videoRef.current[index]=el}}
                         onLoadedMetadata={(dta)=>updateData(dta, index)} 
                         onEnded={()=> {setVideo((cur)=>{cur.hasEnded = true}); index<3 ? shiftVideo('playNext',index) : shiftVideo('wasLast',index)}}
            >
              <source  src={slide.video}/>
            </video>
          </div>
          <div className="text-wrapper">
            {slide.textLists.map((text)=>(
                <h1 key={text} >{text}</h1>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="videoNav">
      <div className="wrapper">
        {videoRef.current.map((_,index)=>(
          <div  key={index} className="dots" ref={(e)=>(videoDivRef.current[index]=e)}>
            <span ref={(el)=>videoSpanRef.current[index]=el} className='progress'></span>
          </div>
        ))}
      </div>
      <button><img src={replayIcon} alt="" /></button>
    </div>
    </>
  )
}