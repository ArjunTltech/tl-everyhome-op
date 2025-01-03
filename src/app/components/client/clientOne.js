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
            image:'/images/client/01.jpg',
            name:'Thomas Israel',
            desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
        },
        {
            image:'/images/client/02.jpg',
            name:'Carl Oliver',
            desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "'
        },
        {
            image:'/images/client/03.jpg',
            name:'Barbara McIntosh',
            desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."'
        },
        {
            image:'/images/client/04.jpg',
            name:'Jill Webb',
            desc:'" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."'
        },
        {
            image:'/images/client/05.jpg',
            name:'Dean Tolle',
            desc:'"There is now an abundance of readable dummy texts. These are usually used when a text is required. "'
        },
        {
            image:'/images/client/06.jpg',
            name:'Christa Smith',
            desc:'"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "'
        }
    ]

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