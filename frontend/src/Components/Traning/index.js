import React from 'react'
import './training.css'
import Courses from './Courses'
import { RiArrowRightSFill } from "react-icons/ri"
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
function Traning() {
    return (
        <section className="trainings">
            <div className="trainings-head">
                <div className="project-nav">
                    <a>Projects</a><a><RiArrowRightSFill /></a><a>Training 1</a>
                </div>
                <div className="training-details">
                    <h1>Training</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    <a className="btn btn-red">PRE REGISTER</a>
                    <div className="search-field" >
                        <div className="border-bottom">
                            <FiSearch /> <input placeholder="Search" />
                        </div>
                        <div className="training-dropdown">
                            <a>Industry <IoIosArrowDown /></a>
                            <a>Status <IoIosArrowDown /></a>
                            <a>Date <IoIosArrowDown /><IoIosArrowUp /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="courses-container"><Courses /></div>
        </section>
    )
}

export default Traning
