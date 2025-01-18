'use client';
import React, { useState } from "react";
import Link from "next/link";
import {
  TbMailStar,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  BiLogoFacebook,
  AiOutlineInstagram,
  IoIosArrowForward,
  AiOutlineYoutube,
  BsPinterest,
  AiOutlineTwitter,
  MdLocationOn, 
} from "../../assets/icons/vander";
import Newsletter from "./newsletter";
import CenteredModal from "./modal/modal";
import modalData from "../../data/modal-data";

export default function Footer({ top }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({ header: "Default Header", body: "Default Body", effectiveDate: "Latest updated Date" ,lastDate: "Last updated Date"});

  const handleShowModal = (type) => {
    const data = modalData[type]; // Fetch the data from modalData
    if (data) {
      setCurrentModalData(data); // Set modal data if it exists
    } else {
      console.warn(`Modal data for type '${type}' not found!`);
      setCurrentModalData({ header: "Error", body: "Requested content not found." });
    }
    setModalShow(true); // Show the modal
  };

  return (
    <footer className="footer bg-footer">
      {top && (
        <div className="py-4 footer-border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                  <TbMailStar className="display-5 text-white" />
                  <div className="ms-3">
                    <h5 className="fw-bold text-light mb-1">Subscribe to our newsletter</h5>
                    <p className="text-white-50 mb-0">Get the latest updates directly in your inbox.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <Link href="#" className="btn btn-primary">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container py-4">
        <div className="row">
          {/* Social Links */}
          <div className="col-lg-3 col-md-3">
            <h6 className="footer-head">Follow Us</h6>
            <ul className="list-unstyled social-icon foot-social-icon mt-3">
              <li className="list-inline-item">
                <Link href="https://www.linkedin.com/company/tltechnologiespvtltd/" target="_blank" className="rounded">
                  <AiFillLinkedin style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0" target="_blank" className="rounded">
                  <AiOutlineWhatsApp style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://www.facebook.com/tltechnologiespvtltd" target="_blank" className="rounded">
                  <BiLogoFacebook style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://www.instagram.com/tltechnologiespvtltd/" target="_blank" className="rounded">
                  <AiOutlineInstagram style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://www.youtube.com/@tltechnologiespvtltd-sangi" target="_blank" className="rounded">
                  <AiOutlineYoutube style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://in.pinterest.com/tltechnologiespvtltd/" target="_blank" className="rounded">
                  <BsPinterest style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://x.com/tl_technologies" target="_blank" className="rounded">
                  <AiOutlineTwitter style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://g.co/kgs/FfvVAaj" target="_blank" className="rounded">
                  <MdLocationOn style={{ fontSize: '1.5rem' }}/>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-3 col-md-3 mt-4 mt-md-0">
            <h6 className="footer-head">Resources</h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <Link href="#about" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> About Us
                </Link>
              </li>
              <li>
                <Link href="#Services" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> Services
                </Link>
              </li>
              <li>
                <Link href="#Features" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> Features
                </Link>
              </li>
              <li>
                <Link href="#Pricing" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> Pricing
                </Link>
              </li>
              <li>
                <Link href="#Faq" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> FAQ
                </Link>
              </li>
              <li>
                <Link href="#Contact" className="text-foot d-flex align-items-center">
                  <IoIosArrowForward className="me-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-3 mt-4 mt-md-3">
            <h6 className="footer-head">Useful Links</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowModal("termsAndConditions");
                  }}
                  className="text-foot d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <IoIosArrowForward className="me-1" /> Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowModal("privacyPolicy");
                  }}
                  className="text-foot d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <IoIosArrowForward className="me-1" /> Privacy Policy
                </a>
              </li>
              <CenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalHeader={currentModalData.header}
                modalBody={currentModalData.body}
                effectiveDate={currentModalData.effectiveDate}
                lastDate={currentModalData.lastDate}
              />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-3 mt-4 mt-md-0">
            <h6 className="footer-head">Subscribe</h6>
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="footer-bar bg-footer py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p className="mb-0 text-muted">&copy; 2025 TL Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
