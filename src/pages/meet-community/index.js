import React from 'react'
import "./meet-community.css"
// import Image from "../../assets"

function index() {
    return (

        <div className='meet-community padding-60'>
            <div className='container'>
                <div className='community-list-section'>
                    <div className='row'>
                        <div className='col-md-6 flex-end'>
                            <div className='left-text-holder float-end'>
                                <h1 className='heading'>
                                    MEET OUR <span className='line-text'>COMMUNITY</span>
                                </h1>
                                <button className='btn-primary know-more-btn'>KNOW MORE</button>
                                <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='right-image-holder mt-50'>
                                <div className='white-block image-box'>
                                    <img src={require('../../assets/images/img-1.png')}
                                        alt="food" />
                                    <div className='social-icon'>
                                        <img src={require('../../assets/images/instagram-btn.png')}
                                            alt="instagram" />
                                    </div>

                                </div>
                                <div className='white-block card-text'>
                                    <h4>@buzzfeedfood</h4>
                                    <p>It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto</p>
                                    <div className="card-footer-action">

                                        <div className=" card-icons card-comment ">
                                            <img src={require('../../assets/images/comment.png')} height={12} width={12} alt="comment" />
                                            60
                                        </div>
                                        <div className=" card-icons">
                                            <img src={require('../../assets/images/heart.png')}
                                                height={12}
                                                width={12}
                                                alt="heart" />
                                            14.7K

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='right-image-holder'>
                                <div className='white-block card-text'>
                                    <h4>@love_food</h4>
                                    <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
                                        dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood</p>
                                    <div className="card-footer-action">

                                        <div className=" card-icons card-comment ">
                                            <img src={require('../../assets/images/comment.png')} height={12} width={12} alt="comment" />
                                            60
                                        </div>
                                        <div className=" card-icons">
                                            <img src={require('../../assets/images/heart.png')}
                                                height={12}
                                                width={12}
                                                alt="heart" />
                                            14.7K

                                        </div>


                                    </div>

                                </div>
                                <div className='white-block image-box'>
                                    <img src={require('../../assets/images/img-2.png')}
                                        alt="food" />
                                    <div className='social-icon'>
                                        <img src={require('../../assets/images/instagram-btn.png')}
                                            alt="instagram" />
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='col-md-6'>
                        </div>
                        <div className='col-md-6 '>
                            <div className='left-text-holder bottom-text-holder'>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='right-image-holder'>
                                <div className='white-block card-text'>
                                    <h4>@buzzfeedfood</h4>
                                    <p>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
                                    <div className="card-footer-action">

                                        <div className=" card-icons card-comment ">
                                            <img src={require('../../assets/images/comment.png')} height={12} width={12} alt="comment" />
                                            60
                                        </div>
                                        <div className=" card-icons">
                                            <img src={require('../../assets/images/heart.png')}
                                                height={12}
                                                width={12}
                                                alt="heart" />
                                            14.7K

                                        </div>


                                    </div>

                                </div>
                                <div className='white-block image-box'>
                                    <img src={require('../../assets/images/img-3.png')}
                                        alt="food" />
                                    <div className='social-icon'>
                                        <img src={require('../../assets/images/instagram-btn.png')}
                                            alt="instagram" />
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default index