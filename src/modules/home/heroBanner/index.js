import React from 'react'
import './heroBanner.scss'
import { mainBlock1, mainBlock2, mainBlock3, mainBlock4, mainBlock5, mainBlock6 } from '../../../assets/images/image'
import UploadIco from '../../../assets/images/svg/uploadIco'

export default function HeroBanner() {
  return (
    <section>
      <div className="container">
        <div className="main-block">
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock1} alt="mainBlock1" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock2} alt="mainBlock2" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock3} alt="mainBlock3" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock4} alt="mainBlock4" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock5} alt="mainBlock5" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
          <div className="block-div">
            <div className="block-div-image">
              <img src={mainBlock6} alt="mainBlock6" />
              <div className="upload">
                <UploadIco />
              </div>
            </div>
            <div className="block-div-text">
              <h3>Stay in Prince’s Purple Rain house</h3>
              <p>Hosted by Wendy and Lisa</p>
              <span>Coming September</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
