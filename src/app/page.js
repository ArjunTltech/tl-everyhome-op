import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavOnePage from "./components/navbar/navOnePage";
import Partners from "./components/partners";
import AboutSlider from "./components/onePage/aboutSlider";
import Counter from "./components/counter";
import ClientOne from "./components/client/clientOne";
import Faq from "./components/faq";
import MobileApp from "./components/mobileApp";
import Footer from "./components/footer/footer";
import ScrollTop from "./components/scrollTop";
import styles from './assets/css/service.module.css';

import { MdArrowForward, AiOutlineCheckCircle, FiArrowRight } from './assets/icons/vander'

import { featureData } from "./data/mock-data";

export default function IndexOnePage() {
    return (
        <>
            <NavOnePage />
            <section className="bg-half-170 pb-lg-0 pb-md-4 d-table w-100" style={{ backgroundImage: "url('/images/bg/apps.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} id="home">
                <div className="bg-overlay bg-gradient-primary opacity-9"></div>
                <div className="container">
                    <div className="row position-relative" style={{ zIndex: '1' }}>
                        <div className="col-md-7 col-12 mt-lg-5">
                            <div className="title-heading">
                                <h1 className="heading text-white title-dark mb-4">Simplify Your Life with EveryHome</h1>
                                <p className="para-desc text-white-50">Connecting service providers, business professionals, and customers in one seamless platform.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#" className="btn btn-primary rounded-lg">Get Started Now <FiArrowRight className="fea icon-sm" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="shape-before">
                                <div className="carousel-cell"><Image src="/images/app/hero.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* <section className="pt-4">
            <div className="container">
               <Partners/>
            </div>
        </section> */}


            <section className="section overflow-hidden pb-0" id="services">



                {/* about section */}
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 order-md-1 order-2 mt-4 mt-am-0 pt-2 pt-sm-0">
                            <AboutSlider />
                        </div>

                        <div className="col-lg-7 col-md-6 order-md-2 order-1">
                            <div className="ms-lg-5">
                                <div className="section-title">
                                    <h4 className="text-primary">Who We Are ?</h4>
                                    <h3 className="title mb-4">Your all-in-one platform  <br /> for convenience and efficiency</h3>
                                    <p className="text-muted para-desc mb-0">EveryHome is a cutting-edge platform designed to simplify the way homeowners, service providers, and businesses interact. By streamlining service booking, task management, and transactions, EveryHome makes managing home and business needs effortless.</p>

                                    <ul className="list-unstyled text-muted mt-3">
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Effortlessly book and manage local services.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Save time with real-time updates and task tracking tools.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Enjoy a centralized platform for all your home and business needs.</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link href="#" className="btn btn-soft-primary rounded-sm">Learn More About EveryHome<FiArrowRight className="fea icon-sm" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Services Section */}
                <div className={`container ${styles.servicesSection}`} style={{ cursor: "pointer" }}>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h3 className="title mb-4 text-primary">
                                    Check Out Our Services
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        {featureData.map((item, index) => {
                            let Icon = item.icon
                            return (
                                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                                    <div className="card h-100 p-3 p-sm-4 rounded features features-classic feature-primary">
                                        <div className="fea-icon rounded bg-light shadow icon">
                                            <Icon className="mb-0 text-primary icon" style={{ fontSize: "1.5rem" }} />
                                        </div>

                                        <div className="content mt-4">
                                            <div
                                                className="title h5 text-dark d-block mb-3"
                                            >
                                                {item.title}
                                            </div>

                                            <p className="text-muted mb-4">{item.desc}</p>
                                        </div>
                                        {/* 
                        <Link 
                            href="/page-single-service"
                            className="mt-auto"
                        >
                            <span className="text-dark d-inline-flex align-items-center">
                                Read More 
                                <MdArrowForward className="ms-2" style={{marginTop: "2px"}}/>
                            </span>
                        </Link> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/*End Services Section */}


                <div className="container mt-100 mt-60">
                    <div className="row align-items-lg-center align-items-end">
                        <div className="col-md-6">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Designed & Built by the <br /> latest code integration</h4>
                                <p className="text-muted para-desc mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">Buy, sell, and trade on the go</h6>
                                            <p className="text-muted mt-2 mb-0">Manage your holdings from your mobile device</p>
                                        </div>
                                    </li>

                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">Take control of your wealth</h6>
                                            <p className="text-muted mt-2 mb-0">Rest assured you (and only you) have access to your funds</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-4">
                                    <Link href="#" className="btn btn-primary">Download Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="app-feature-shape position-relative">
                                <Image src='/images/crypto/hand-with-mobile.png' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section className="section" style={{ backgroundImage: "url('/images/bg/app-counter.jpg')" }}>
                <div className="bg-overlay bg-gradient-primary opacity-9"></div>
                <div className="container">
                    <Counter />
                </div>
            </section>


            {/* Testimonial section  */}
            <section className={`section  pb-0 pt-2 md:pt-5 ${styles.servicesSection}`} id="review">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">
                                    See What Our Users
                                    {/* Space on medium and above */}
                                    <span className="d-none d-md-inline"> </span> 
                                    {/* Break only on small screens */}
                                    <span className="d-md-none"><br /></span> 
                                    Are Saying
                                </h4>
                                <p className="text-muted para-desc mb-0 mx-auto">
                                    Join thousands who’ve simplified their lives with EveryHome.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ClientOne />
                </div>
                <div className="container mt-100 mt-60">
                    <Faq />
                </div>
            </section>

            {/* End Testimonial section  */}

            <section className="section" id="contact">
                <div className="container mt-100 mt-60">
                    <MobileApp />
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}