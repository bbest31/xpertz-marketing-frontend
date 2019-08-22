import React from 'react';
import '../CSS/DashboardCarousel.css';
import { Carousel } from 'react-bootstrap';

function DashCarousel(){
    let cs = []
    //for(let i=0;i<5;i++){
        cs.push(
            <Carousel.Item className="dashboard-carousel-item" key="0">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div>
                            <img className="d-inline w-100 slider_image" src={window.location.origin +"/images/slide1.png"} alt="First slide" />
                            {/* https://via.placeholder.com/800x500 */}
                        </div>
                    </div>
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div className="carousel-text">
                           <p className="title">Expertise Profiles</p>
                           <hr></hr>
                           <p className="desc">
                            Skill management and tracking through employee expertise profiles to showcase what they bring to the table
                           </p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );

        cs.push(
            <Carousel.Item className="dashboard-carousel-item" key="0">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div>
                            <img className="d-inline w-100 slider_image" src={window.location.origin +"/images/slide2.png"} alt="First slide" />
                            {/* https://via.placeholder.com/800x500 */}
                        </div>
                    </div>
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div className="carousel-text">
                           <p className="title">Skill Based Search</p>
                           <hr></hr>
                           <p className="desc">
                           Find others to collaborate with faster by seraching for colleagues based on expertise
                           </p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );

        cs.push(
            <Carousel.Item className="dashboard-carousel-item" key="0">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div>
                            <img className="d-inline w-100 slider_image" src={window.location.origin +"/images/slide3.png"} alt="First slide" />
                            {/* https://via.placeholder.com/800x500 */}
                        </div>
                    </div>
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div className="carousel-text">
                           <p className="title">Skill Validation</p>
                           <hr></hr>
                           <p className="desc">
                           Peer-to-peer recognition system to validate collaborative efforts and gain ranks towards your expertise
                           </p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );

        cs.push(
            <Carousel.Item className="dashboard-carousel-item" key="0">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div>
                            <img className="d-inline w-100 slider_image" src={window.location.origin +"/images/slide4.png"} alt="First slide" />
                            {/* https://via.placeholder.com/800x500 */}
                        </div>
                    </div>
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div className="carousel-text">
                           <p className="title">Valuable Insights</p>
                           <hr></hr>
                           <p className="desc">
                           Insights into your skill set economy of to make data driven decisions for hiring, project assignment and investing in your staff
                           </p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );
    //}
    return(
        <div className="dashboard-carousel">
            <Carousel controls={false}> {cs} </Carousel>
        </div>
    );
}

export {
    DashCarousel
}