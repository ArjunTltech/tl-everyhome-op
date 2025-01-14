'use client'
import React, { useState } from "react";

export default function Faq() {
    let [activeIndex, setActiveIndex] = useState(1)

    let accordionData = [
        {
            id: 1,
            title: ' What services can I book through EveryHome?',
            desc: 'You can book services ranging from household maintenance to business support, covering a variety of needs.'
        },
        {
            id: 2,
            title: 'How do I track my tasks in the app?',
            desc: 'Use the task management feature to organize, assign, and monitor your tasks seamlessly within the app.'
        },
        {
            id: 3,
            title: ' Is EveryHome free to use?',
            desc: ' Yes, we offer a free basic plan, with premium options available for advanced features and additional benefits.'
        },
        {
            id: 4,
            title: 'What makes EveryHome different from other service platforms?',
            desc: ' EveryHome combines convenience, variety, and reliability, offering tailored services for both individual and business needs.'
        },
        {
            id: 5,
            title: ' How secure is my personal information on EveryHome?',
            desc: 'We prioritize your privacy with industry-standard encryption, ensuring your data is safe and secure.'
        },
        {
            id: 6,
            title: ' How does EveryHome handle refunds?',
            desc: 'EveryHome does not process payments or refunds directly. All financial transactions, including refunds, are handled between the customer and the service provider. Please contact the service provider directly for any refund-related concerns.'
        },
        {
            id: 7,
            title: ' Can I book services for multiple locations at once?',
            desc: 'Yes, our multi-location booking feature allows you to manage services across different addresses with ease.'
        },
        {
            id: 8,
            title: ' What types of professionals are available on EveryHome?',
            desc: 'We partner with certified and verified professionals for services like cleaning, repairs, business support, and more.'
        },
        {
            id: 9,
            title: ' How do I cancel or reschedule a booking?',
            desc: 'You can cancel or reschedule directly through the app, based on the service provider’s cancellation policy.'
        },
        {
            id: 10,
            title: ' Does EveryHome offer eco-friendly service options?',
            desc: 'Yes, we provide eco-conscious alternatives for many services, such as green cleaning and energy-efficient repairs.'
        },
    ]

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-3 ">Have Questions? We’ve Got Answers!</h4>
                        <p className="text-muted mx-auto para-desc mb-0">Your guide to everything you need to know about EveryHome.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10 mt-4 pt-2">
                    <div className="accordion" id="buyingquestion">
                        <div className="row">
                            <div className="col-md-6">
                                {accordionData.slice(0, 6).map((item, index) => {
                                    return (
                                        <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ?
                                                <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                    <div className="accordion-body text-muted bg-white collapsed">
                                                        {item.desc}
                                                    </div>
                                                </div> : ''
                                            }
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="col-md-6">
                                {accordionData.slice(6, 11).map((item, index) => {
                                    return (
                                        <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ?
                                                <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                    <div className="accordion-body text-muted bg-white collapsed">
                                                        {item.desc}
                                                    </div>
                                            </div> : ''
                                            }
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}