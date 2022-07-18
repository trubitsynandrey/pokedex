import React, { useState } from 'react'
import { ArrowCarouselLeft } from 'src/icons/ArrowCarouselLeft'
import styled from 'styled-components'
import { usePokeContext } from '../PokeContext'
import { PokemonCarouselCard } from './PokemonCarouselCard'
import Slider, { Settings } from "react-slick";
import { ArrowRight } from 'src/icons/ArrowRight'
import { breakpoints } from 'src/styles/breakpoints'

const CarouselWrapper = styled.div`
    & .slick-track {
        height: 200px;
        margin-top: 20px;
    }
    & .slick-list {
        margin-left: 80px;
        margin-right: 80px;
    }
    & .slick-slide.slick-active.slick-current div {
        opacity: 1;
    }
    & .slick-arrow.slick-next:before {
        content: "";
    }
    & .slick-arrow.slick-prev:before {
        content: "";
    }
    @media (max-width: ${breakpoints.sm}) {
        /* & [aria-hidden="true"] {
        opacity: 0;
        } */
        & .slick-list {
        margin-left: 60px;
        margin-right: 60px;
    }
    }
    

`

const LeftIconWrapper = styled.div`
    cursor: pointer;
    height: 60px;
    left: 0px;
`

const RightIconWrapper = styled.div`
    cursor: pointer;
    height: 60px;
    right: 10px;
    display: flex;
`

interface CarouselProps {
    setSlide: React.Dispatch<React.SetStateAction<number>>,
}


export const Carousel = ({setSlide}: CarouselProps) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 150,
        slidesToShow: 6,
        arrows: true,
        slidesToScroll: 3,
        beforeChange: (curr, next) => {
            setSlide(next)
        },
        focusOnSelect: true,
        initialSlide: 0,
        prevArrow: <LeftIconWrapper><ArrowCarouselLeft /></LeftIconWrapper>,
        nextArrow: <RightIconWrapper><ArrowRight /></RightIconWrapper>,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            }
        ]
    };
    const { data } = usePokeContext()
    return (
        <CarouselWrapper>
            <Slider {...settings}>
                {data.map(item => {
                    const src = item?.sprites?.other.dream_world.front_default
                    return <PokemonCarouselCard src={src} name={item.name} />
                })}
            </Slider>
        </CarouselWrapper>
    )
}

