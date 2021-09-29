import React from 'react'
import engineers_bg from '../../Assets/images/engineers.jpg'
import './infopage.css'
function InfoPage() {
    return (
        <section className="info_page">
            <div className="info_sections">
                <a>Oil & Gas</a>
                <a>Petrochemical</a>
                <a>Energy</a>
                <a>Fertilizer</a>
                <a>Metals & Minerals</a>
                <a>Others</a>
            </div>
            <div className="image_section" style={{ backgroundImage: `url(${engineers_bg})` }}>
                <h1>Metals & Minerals</h1>
                <p>We present here just a few example of our most recent projects to show the diversity of our clients and partners and projects we do with them.Due to the nature of work we can not always share the details of the products.</p>
                <a className="btn btn-red">READ MORE</a>
            </div>
        </section>
    )
}

export default InfoPage
