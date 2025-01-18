import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavOnePage from "./components/navbar/navOnePage";
import AboutSlider from "./components/onePage/aboutSlider";
import ClientOne from "./components/client/clientOne";
import Faq from "./components/faq";
import MobileApp from "./components/mobileApp";
import Footer from "./components/footer/footer";
import ScrollTop from "./components/scrollTop";
import styles from './assets/css/service.module.css';

import { MdArrowForward, AiOutlineCheckCircle, FiArrowRight } from './assets/icons/vander'

import { featureData } from "./data/mock-data";
import Pricing from "./components/pricing";
import ContactSection from "./components/contact/Contact";
import CookieManager from "./components/cookie/cookieManager";

export default function IndexOnePage() {
    return (
        <>
            <NavOnePage />
            {/* hero section */}
            <section className="bg-half-170 pb-lg-0 pb-md-4 d-table w-100" style={{ backgroundImage: "url('/images/bg/apps.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} id="home">
                <div className="bg-overlay bg-gradient-primary opacity-9"></div>
                <div className="container">
                    <div className="row position-relative" style={{ zIndex: '1' }}>
                        <div className="col-md-7 col-12 mt-lg-5">
                            <div className="title-heading">
                                <h1 className="heading text-white title-dark mb-4">Simplify Your Life with EveryHome</h1>
                                <p className="para-desc text-white-50">Connecting service providers, business professionals, and customers in one seamless platform.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="https://connect.tltechnologies.net/" className="btn btn-primary rounded-lg" target="_blank">Get Started Now <FiArrowRight className="fea icon-sm" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="shape-before">
                                <div className="carousel-cell"><Image src="/images/mock/samsung-galaxy-home.png" width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto' }} className="img-fluid" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End hero section */}
            

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <section className="section overflow-hidden pb-0" id="services">

                {/* about section */}
                <div className="container mt-100 mt-60" id="about">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 order-md-1 order-2 mt-4 mt-am-0 pt-2 pt-sm-0">
                            <AboutSlider />
                        </div>

                        <div className="col-lg-7 col-md-6 order-md-2 order-1">
                            <div className="ms-lg-5">
                                <div className="section-title">
                                    <h4 className="text-primary">Who We Are?</h4>
                                    <h3 className="title mb-4">Your all-in-one platform  <br /> for convenience and efficiency</h3>
                                    <p className="text-muted para-desc mb-0">EveryHome is a cutting-edge platform designed to simplify the way homeowners, service providers, and businesses interact. By streamlining service booking, task management, and transactions, EveryHome makes managing home and business needs effortless.</p>

                                    <ul className="list-unstyled text-muted mt-3">
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Effortlessly book and manage local services.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Save time with real-time updates and task tracking tools.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Enjoy a centralized platform for all your home and business needs.</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link href="https://connect.tltechnologies.net/" className="btn btn-soft-primary rounded-sm" target="_blank">Learn More About EveryHome<FiArrowRight className="fea icon-sm" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End about section */}


                {/* Services Section */}
                <div className={`container ${styles.servicesSection}`} style={{ cursor: "pointer" }} id="Services">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h3 className="title mb-4 ">
                                Explore Our Services
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

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/*End Services Section */}


                {/* Feature Section */}
                <div className="container mt-100 mt-60" id="Features">
                    <div className="row align-items-lg-center align-items-end">
                        <div className="col-md-6">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Discover Innovative Features <br /> Built for Modern Living</h4>
                                <p className="text-muted para-desc mb-0">Smart solutions tailored to bring ease, efficiency, and seamless management to your life.</p>

                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">Book Trusted Services</h6>
                                            <p className="text-muted mt-2 mb-0">Discover and hire professionals with ease.</p>
                                        </div>
                                    </li>

                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0"> Integrated Calendar</h6>
                                            <p className="text-muted mt-2 mb-0">Manage all your appointments in one place.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">  Location Services</h6>
                                            <p className="text-muted mt-2 mb-0"> Find nearby service providers quickly and easily.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">   Real-Time Notifications</h6>
                                            <p className="text-muted mt-2 mb-0"> Get timely updates on bookings and schedules.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex mt-4">
                                        <AiOutlineCheckCircle className="align-middle text-primary h5 mt-1" />

                                        <div className="flex-1 ms-3">
                                            <h6 className="mb-0">   User-Friendly Design</h6>
                                            <p className="text-muted mt-2 mb-0">  Navigate the app seamlessly with its intuitive interface.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="app-feature-shape position-relative">
                                <Image src='/images/mock/mockup-handmobile-2.png' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Feature Section */}

            </section >

            {/* pricing section */}
            <section id="Pricing">
                <Pricing />
            </section>
            {/*End pricing section */}


            <section className={`section  pb-0 pt-2 md:pt-5 ${styles.servicesSection}`} id="review">
                {/*  FAQ section  */}
                <div className="container mt-100 mt-60 " id="Faq" >
                    <Faq />
                </div>
                {/* End FAQ section  */}
            </section>


            {/* Testimonial Section */}
            <section className="section mt-100 mt-50" >
                <div className="bg-overlay bg-gradient-primary opacity-9"></div>
                <div className="container">
                    <div className="container mt-100 mt-60" id="Testimonial">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4 text-white">
                                        See What Our Users
                                        {/* Space on medium and above */}
                                        <span className="d-none d-md-inline"> </span>
                                        {/* Break only on small screens */}
                                        <span className="d-md-none"><br /></span>
                                        Are Saying
                                    </h4>
                                    <p className=" para-desc mb-0 mx-auto" style={{ color: "#d1d1d1" }}>
                                    Join thousands who’ve simplified their lives with EveryHome’s seamless service management.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <ClientOne />
                    </div>
                </div>
            </section>
            {/*End Testimonial Section */}


            {/* Contact Section */}
            {/* <section id="Contact">
                <ContactSection />
            </section> */}
            {/*End Contact Section */}


            {/* download section */}
            <section className="section" id="download">
                <div className="container mt-100 mt-60">
                    <MobileApp />
                </div>
            </section>
            {/*End download section */}

            <Footer />
            <CookieManager/>
            <ScrollTop />
        </>
    )
}








// <======================================== NOTES START ==============================================>

//     Libraries used: 
//     - **Bootstrap**: For CSS and responsive design.
//     - **React Icons**: For easily accessible icons.
//     - **React Hook Form**: For form management and validation.
//     - **Prisma**: For database management and migrations.
//     - **React Bootstrap**: For reusable and customizable UI components.
//     - **Yup**: For schema validation.
   
//     Refer to the official documentation of the mentioned libraries before making changes in the code.
   
//     To run the code:
//     1. Clone the repository using:
//        ```bash
//        git clone https://github.com/<username>/<repository>.git
//        ```
//     2. Navigate to the project directory:
//        ```bash
//        cd everyhome
//        ```
//     3. Install dependencies:
//        ```bash
//        npm install
//        ```
//     4. Run the development server:
//        ```bash
//        npm run dev
//        ```
//     5. Open your browser and navigate to `http://localhost:3000`.
   
//     Created Date: 10-Jan-2025 || Created By: Arjun N || Module: 1 ||
//     Modified Date: - || Modified By: - || Module: 1 ||
//     Modified Date: - || Modified By: - || Module: 1 ||
   
//     Technical Summary (Pre-setups):
//     - Created Date/By: Arjun N
//     - Domain: 
//     - Hosting: Vercel
//     - SSL: Cloudflare
   
//     Phase Summary:
//     - Created Date/By: Arjun N  
//     - Phase 1: Setups || Initial configurations, environment, and library setup.
//     - Phase 2: Development/Main Page Creation || Feature implementation and main page design.
//     - Phase 3: Production || Deployment, testing, and final production readiness.
   
//     Library Versions:
//     - **Bootstrap**: 5.3.3
//     - **React Icons**: 4.12.0
//     - **React Hook Form**: 7.54.2
//     - **Prisma**: 6.2.0
//     - **React Bootstrap**: 2.10.7
//     - **Yup**: 1.6.1
   
//     Known Issues:
//     - None at this time.
   
//    <======================================== NOTES END ==============================================>
   