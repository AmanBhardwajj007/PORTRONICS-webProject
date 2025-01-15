import React from 'react'
import '../css/index.css'
import i1 from '../image/logo/TOI.png'
import i2 from '../image/logo/TimesNow.png'
import i3 from '../image/logo/IndiaToday.png'
import i4 from '../image/logo/IndiaTV.png'
import i5 from '../image/logo/HindustanTimes.png'
import i6 from '../image/logo/NDTV.png'

export default function Press() {
  return (
    <>
        <div className="mainPress">
            <div className="pressH">
                <h1>IN THE PRESS</h1>
                <p>Places where we have been featured</p>
            </div>

            <div className="imageSec">
                <div className="firstRow">
                    <img src={i1} />
                    <img src={i2} />
                    <img src={i3} />
                </div>
                <div className="secondRow">
                    <img src={i4} />
                    <img src={i5} />
                    <img src={i6} />
                </div>
            </div>
        </div>
    </>
  )
}
