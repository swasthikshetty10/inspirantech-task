import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
    return (
        <section>
            <div className="project-enroll">
                <h1>Have a project ?</h1>
                <a className="btn btn-red">ENQUIRE FORM</a>


            </div>
            <footer>
                <div className="contact-us">
                    <h1>CONTACT US</h1>
                    <p>WORKING HOURS</p>
                    <p>MON-FRI: 9.00AM TO 5.00PM IST</p>
                </div>
                <div className="footer-main">
                    <div className="socials">
                        <div></div>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaTwitter />
                        <FaYoutube />

                    </div>
                    <div className="footer-fields">
                        <div>
                            <h1>QUICK LINKS</h1>
                            <a>IFLUIDS</a>
                            <a>SERVICES</a>
                            <a>INDUSTRIES</a>
                            <a>VALUES</a>
                        </div>
                        <div>
                            <h1>COMPANY</h1>
                            <a>ABOUT</a>
                            <a>PROJECT</a>
                            <a>TRAININGS</a>
                            <a>CAREER</a>
                        </div>
                        <div>
                            <p>
                                Subscribe to receive our daily updates/ projects/ newsletters

                            </p>
                            <form className="form">
                                <input name="email" placeholder="ENTER EMAIL" type="text" />
                                <a type="submit" className="btn btn-red">SUBSCRIBE</a>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer
