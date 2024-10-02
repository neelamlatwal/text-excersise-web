import React from 'react'
import "./contact.css"

function index() {
    return (
        <div className='contact-us padding-60'>
            <div className='container'>


                <div className='row padding-40'>

                    <div className='col-md-6'>
                        <div className='contact-left-section'>
                            <h4 >COLLABORATE <span className='highlight-line-through'>WITH US</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. <br className='mb-5' />Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>


                        </div>

                    </div>
                    <div className='col-md-6'>
                        <form className='contact-form'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label for="name">name </label>
                                        <input type="text" id="name" className="form-control" placeholder='name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label for="email">surname </label>
                                        <input type="email" id="email" className="form-control" placeholder='surname' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label for="email">phone </label>
                                        <input type="email" id="email" className="form-control" placeholder='phone' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label for="email">email address </label>
                                        <input type="email" id="email" className="form-control" placeholder='email' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label for="email">experience </label>
                                        <input type="email" id="email" className="form-control" placeholder='select' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label for="email">where did you hear about us </label>
                                        <input type="email" id="email" className="form-control" placeholder='select' />
                                    </div>
                                </div>

                            </div>

                            <div className='form-btn'>
                                <button type="submit" className=" btn-primary send-btn">Send</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default index