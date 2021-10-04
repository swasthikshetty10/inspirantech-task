import React, { useState } from 'react'
import './navbar.css'
import navigations from './navData'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <section className="nav">
                <div className="about">
                    <div className="about_field">
                        <span>+91 99999 99999</span>
                    </div>
                    <a className="btn btn-red">ABOUT</a>
                </div>
                <div className="nav_data">
                    {
                        navigations.map((ele) => {
                            return <Link to={ele.href}><a className="btn" >{ele.name}</a></Link>
                        })
                    }
                </div>
                <div className="buttons">
                    <a className="search"><FiSearch /></a>
                    <a className="menu_button" onClick={() => { setSidebar(!sidebar) }}>{sidebar ? <FiX /> : <FiMenu />}</a>
                </div>
            </section>
            {sidebar && <SideBar data={navigations} />}
        </>
    )
}

export default NavBar


const SideBar = ({ data }) => {
    return <div className="side_nav">
        {data.map((ele) =>
            <a className="menu_data" href={ele.href}>
                {ele.name}
            </a>)}
    </div>

}