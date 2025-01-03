'use client'
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Slider = dynamic(() => import("react-slick"), { ssr: false })
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ClientOne({ bgWhite }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    const clientsData = [
        {
            image: '/images/client/01.jpg',
            name: 'Ramesh P',
            desc: `Finding local service providers has never been this easy. EveryHome is a lifesaver!`
        },
        {
            image: '/images/client/02.jpg',
            name: 'Priya S',
            desc: `Managing my appointments and tasks is now effortless. Highly recommend it!`
        },
        {
            image: '/images/person.png',
            name: 'Sibin Thomas',
            desc: `EveryHome helped me organize my home projects seamlessly. I can’t imagine going back!`
        }
    ];
    

    return (
        <div className="row">
            <div className="col-12">
                <Slider {...settings}>
                    {clientsData.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className={`${bgWhite ? 'bg-white shadow' : ''} card border-0 text-center`}>
                                <div className="card-body">
                                    <Image 
                                        src={item.image} 
                                        width={65} 
                                        height={65} 
                                        className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" 
                                        alt=""
                                    />
                                    <p className="text-muted mt-4">{item.desc}</p>
                                    <h6 className="text-primary">- {item.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}