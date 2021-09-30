import React from 'react'
import idea_image from '../../Assets/images/idea.png'
import idea_image2 from '../../Assets/images/idea2.png'
import './whyus.css'
function WhyUS() {
    return (
        <div className="why_us">

            <div>
                <h2>ㅤ</h2>
                <img src={idea_image} />
                <h3>A Global Network</h3>

            </div>
            <div>
                <h2><span>Why</span> <span className="style_text2">Us</span></h2>
                <img src={idea_image} />
                <h3>Commitment</h3>

            </div>
            <div>
                <h2>ㅤ</h2>
                <img src={idea_image2} />
                <h3>Trusted Partnership</h3>
            </div>


        </div>
    )
}

export default WhyUS
