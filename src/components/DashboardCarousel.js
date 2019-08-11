import React from 'react';
import '../CSS/DashboardCarousel.css';
import { Carousel } from 'react-bootstrap';

function DashCarousel(){
    let cs = []
    for(let i=0;i<5;i++){
        cs.push(
            <Carousel.Item className="dashboard-carousel-item" key={i}>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div>
                            <img className="d-inline w-100" src="https://via.placeholder.com/800x500" alt="First slide" />
                        </div>
                    </div>
                    <div className="d-flex col-xs-12 col-md-6 flex-column justify-content-center">
                        <div className="carousel-text">
                           <p className="title">Expertise Profiles {i}</p>
                           <hr></hr>
                           <p className="desc">
                            Skill management and tracking through employee expertise profiles to showcase what they bring to the table
                           </p>
                        </div>
                    </div>
                </div>
                
            </Carousel.Item>
        )
    }
    return(
        <div className="dashboard-carousel">
            <Carousel controls={false}> {cs} </Carousel>
        </div>
    );
}

export {
    DashCarousel
}