import React from 'react';
import styled from 'styled-components';
import slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slider() {
    
    let settings = {
        dots: true,
        infinute: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" />
            </Wrap>
            
        </Carousel>
    )
};

const Carousel = styled(slick) `
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }
    
    // defaults to hidden in slick's css
    .slick-list {
        overflow: visible;
    }

    // left slider button disappears without this
    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        // makes box-border-color fade in and out on hover
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`;

export default Slider;