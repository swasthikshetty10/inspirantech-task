import React from 'react'
import media_image1 from '../../Assets/images/news1.png'
import media_image2 from '../../Assets/images/media2.png'
import media_image3 from '../../Assets/images/engineers.jpg'

import './newsandpost.css'
function NewsAndPost() {
    return (
        <div className="newsandpost">
            <div></div>
            <p>People talk us in</p>
            <h1>News and Media</h1>
            <div>
                <div>
                    <img src={media_image1} />
                    <h3>DATE: XXX YYY ZZZ</h3>
                    <p>Project Description 2 lines Project description 2 line</p>
                </div>
                <div>
                    <img src={media_image2} />
                    <h3>DATE: XXX YYY ZZZ</h3>
                    <p>Project Description 2 lines Project description 2 line</p>

                </div>
                <div>
                    <img src={media_image3} />
                    <h3>DATE: XXX YYY ZZZ</h3>
                    <p>Project Description 2 lines Project description 2 line</p>
                </div>
            </div>
            <div className="enroll">

            </div>
        </div>
    )
}

export default NewsAndPost
