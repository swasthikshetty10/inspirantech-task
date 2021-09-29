import React from 'react'
import './landingpage.css'
import background from '../../Assets/images/wirefram_bg.jpg'
import indian_oil from '../../Assets/images/indian_oil.png'
import bharat_petroleum from '../../Assets/images/bharat_petroleum.png'
import gail from '../../Assets/images/gail.png'
import hindustan_petroleum from '../../Assets/images/hindustan_petroleum.png'

function LandingPage() {
    return (
        <section className="landing_page" style={{ backgroundImage: `url(${background})` }}>
            <div className="info">
                <h1>We build Engineering Practices</h1>
                <h1 className="style_text">of the future</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <a className="btn btn-red">PROJECTS</a>
            </div>
            <div className="global_leaders">
                <p>We server global leaders</p>
                <div>
                    <img src={indian_oil} />
                    <img src={bharat_petroleum} />
                    <img src={hindustan_petroleum} />
                    <img src={gail} />
                </div>
            </div>

        </section>
    )
}

export default LandingPage
