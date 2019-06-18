import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="slick-bg">
                <Slider {...settings}>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img1.jpg" width={800} height={400} />
                    </div>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img2.jpg" width={800} height={400} />
                    </div>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img3.jpg" width={800} height={400} />
                    </div>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img1.jpg" width={800} height={400} />
                    </div>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img2.jpg" width={800} height={400} />
                    </div>
                    <div className="top-slick">
                        <img alt="900x500" src="/src/assets/images/img3.jpg" width={800} height={400} />
                    </div>
                </Slider>
            </div>
        );
    }
}