import React, { Component } from "react";
import Slider from "react-slick";
import InputGroup from "react-bootstrap/es/InputGroup";
import {Button} from "react-bootstrap";
import Glyphicon from "react-bootstrap/es/Glyphicon";


export default function ProductSlider (props) {

    const { data } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const card = data && data.map((item, i) =>{
        return(
            <div className="slider-item" key={i}>
                <div><img src={item.image} /></div>
                <div className="item-detail">
                    <div className="item-name"><span>{item.name}</span></div>
                    <div><span>Rs.{item.price}</span></div>
                    <div>
                        <div className='cart-card-action'>
                            <InputGroup>
                                <Button>-</Button>
                                <InputGroup.Addon>{item.quantity}</InputGroup.Addon>
                                <Button>+</Button>&nbsp;
                                <Button><Glyphicon glyph="trash" /></Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="slick-container">
            <Slider {...settings}>
                {card}
            </Slider>
        </div>
    )
}