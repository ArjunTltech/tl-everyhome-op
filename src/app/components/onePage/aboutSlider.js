'use client'
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Slider = dynamic(() => import("react-slick"), { ssr: false })
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { aboutImg } from "../../data/mock-data"

export default function AboutSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        arrows: true,
        cssEase: "linear",
        prevArrow: <button type="button" className="slick-prev"><i className="mdi mdi-chevron-left"></i></button>,
        nextArrow: <button type="button" className="slick-next btn-primary"><i className="mdi mdi-chevron-right"></i></button>
    }

    return (
        <div className="app-feature-shape position-relative">
            <Slider {...settings}>
                {aboutImg.map((item, index) => (
                    <div key={index}>
                        <Image 
                            src={item} 
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            style={{width:'80%', height:'auto'}} 
                            className="img-fluid" 
                            alt=""
                            priority={index === 0}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}