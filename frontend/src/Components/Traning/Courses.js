import React from 'react'
import './courses.css'
import background from '../../Assets/images/engineers.jpg'
function Courses() {
    return (
        <section className="courses" >
            <div className="grid-wrapper">
                <div className="grid-card">
                    <div className="industry-status">
                        <a>INDUSTRY</a>
                        <a>STATUS</a>
                    </div>
                    <div className="course-card" >
                        <img src={background} />
                        <div>
                            <div className="course-details">
                                <p>HAZOP Leadership Training For Engineers</p>
                                <a className="btn btn-gray">PRE-BOOK</a>
                            </div>
                            <h4>PRICE:FREE</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="industry-status">
                        <a>INDUSTRY</a>
                        <a>STATUS</a>
                    </div>
                    <div className="course-card" >
                        <img src={background} />
                        <div>
                            <div className="course-details">
                                <p>HAZOP Leadership Training For Engineers</p>
                                <a className="btn btn-gray">PRE-BOOK</a>
                            </div>
                            <h4>PRICE:FREE</h4>
                        </div>
                    </div>
                </div>

                <div className="grid-card">
                    <div className="industry-status">
                        <a>INDUSTRY</a>
                        <a>STATUS</a>
                    </div>
                    <div className="course-card" >
                        <img src={background} />
                        <div>
                            <div className="course-details">
                                <p>HAZOP Leadership Training For Engineers</p>
                                <a className="btn btn-gray">PRE-BOOK</a>
                            </div>
                            <h4>PRICE:FREE</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="industry-status">
                        <a>INDUSTRY</a>
                        <a>STATUS</a>
                    </div>
                    <div className="course-card" >
                        <img src={background} />
                        <div>
                            <div className="course-details">
                                <p>HAZOP Leadership Training For Engineers</p>
                                <a className="btn btn-gray">PRE-BOOK</a>
                            </div>
                            <h4>PRICE:FREE</h4>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Courses
