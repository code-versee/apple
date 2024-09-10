import { useGSAP } from '@gsap/react'
import './Footer.css'
import { GSAPAnimation } from '../Functions/functions'
import { footerLinks } from '../Constants'

export function Footer(){
  return(
    <div id="footer">
      <div className="wrapper">
      <p className="gray-text">
            More ways to shop: {' '}
            <span className="link">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="link">
            other retailer
            </span>{' '}
            near you.{' '}
            <span className="link">
              Or call 000800-040-1966
            </span>
          </p>
          <div className="line">
          </div>
          <div className="copyright-section">
            <p className='gray-text'>Copright @ 2024 Apple Inc. All rights reserved.</p>
            <div className="footer-links">
              {footerLinks.map((item)=>(
                <p key={item} className='footer-link'>{item}</p>
              ))}
            </div>
          </div>
          <div className="line"></div>
          <h3 style={{textAlign:'center',fontWeight:500}} className='gray-text'>Apple-Inc</h3>
      </div>
    </div>
  )
}