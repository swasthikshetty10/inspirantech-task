import React from 'react'
import idea_image from '../../Assets/images/idea.png'
import idea_image2 from '../../Assets/images/idea2.png'
import './whyus.css'
function WhyUS({ trainings }) {
    return (
        <div className={trainings ? "why_us add_value" : "why_us"}>
            <h2 className="mobile-title"><span>{trainings ? "Our Added" : "Why"}</span> <span className="style_text2">{trainings ? "Value" : "Us"}</span></h2>
            <div>

                <h2>ㅤ</h2>
                <img src={idea_image} />
                <h3>A Global Network</h3>

            </div>
            <div>
                <h2><span>{trainings ? "Our Added" : "Why"}</span> <span className="style_text2">{trainings ? "Value" : "Us"}</span></h2>
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
