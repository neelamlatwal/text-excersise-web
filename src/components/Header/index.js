import React from 'react'
import "./header.css"
import Stamp from "../../assets/images/stamp.svg"

function index() {
    return (
        <header >
            <div className="header-container">
                <nav className=" row ">
                    <div className="col-md-8 ">
                        <div className='d-flex align-items-center'>
                            <div className='app-logo mr-5'>
                                <span className="logo" >Logo</span>
                            </div>
                            <ul className="nav navbar-menu">
                                <li ><span>about</span></li>
                                <li ><span>community</span></li>
                                <li ><span>location</span></li>
                                <li ><span>our menu</span></li>
                                <li ><span>recipes</span></li>


                            </ul>
                        </div>
                    </div>

                    <div className=' col-md-4 text-end '>
                        <div className='auth-menu'>
                            <ul >
                                <li className='mr-40'><span>contact</span></li>
                                <li><span>login</span></li>

                            </ul>
                        </div>

                    </div>
                </nav>
            </div>

            {/* banner of the page */}
            <div className="banner">
                <div className="banner-content">
                    <h1 className="banner-title"><span >THE BEST FOODIE</span><div className='highlight-text'>EXPERIENCE</div> </h1>
                    <p className="banner-subtitle">NOW IN LONDON</p>
                    <div className='stamp-logo'>
                        <img src={Stamp} alt="stamp" />

                    </div>

                </div>
            </div>





        </header>
    )
}

export default index