import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

function index() {
    return (
        <footer >
            <div className='container '>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className="col-md-3">
                                <h3 >SECTION 1</h3>
                                <ul className="list-unstyled footer-nav">
                                    <li><a href="#">Subsection </a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 >SECTION 2</h3>
                                <ul className="list-unstyled footer-nav">
                                    <li><a href="#">Subsection </a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 >SECTION 3</h3>
                                <ul className="list-unstyled footer-nav">
                                    <li><a href="#">Subsection </a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>

                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 >SECTION 4</h3>
                                <ul className="list-unstyled footer-nav">
                                    <li><a href="#">Subsection </a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>
                                    <li><a href="#">Subsection</a></li>

                                </ul>
                            </div>

                        </div>
                        <div className='bottom-text'>
                            <h6>
                                2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
                            </h6>

                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='logo-text'>
                            THIS IS THE <div className='font62'>LOGO</div>

                        </div>

                    </div>


                </div>

            </div>


        </footer>

    )
}

export default index