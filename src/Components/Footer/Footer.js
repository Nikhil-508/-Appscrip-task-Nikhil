import React from 'react';
import { FiHeart, FiSearch, FiMail, FiPhoneCall } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { TbBrandMastercard } from "react-icons/tb";
const Footer = () => {
  return (
    <footer style={{backgroundColor:"black"}} className='text-white py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3'>
            <h5>metta muse</h5>
            <ul>
                <li><a href="#" className='text-white'>About Us</a></li>
                <li><a href="#" className='text-white'>Stories</a></li>
                <li><a href="#" className='text-white'>Artisans</a></li>
                <li><a href="#" className='text-white'>Boutiques</a></li>
                <li><a href="#" className='text-white'>Contact Us</a></li>
                <li><a href="#" className='text-white'>EU Compliances Do</a></li>
            </ul>
            <a href='mailto:customercare@mettamuse.com' className='text-white'>
              <FiMail /> customercare@mettamuse.com
            </a>
            <br />
            <a href='tel:+442211335360' className='text-white'>
              <FiPhoneCall /> +44 221 133 5360
            </a>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h5>QUICK LINKS</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#' className='text-white'>
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  PrivacyPolicy
                </a>
              </li>
              <li>
                <a href='#' className='text-white'>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h5>FOLLOW US</h5>
            <ul className='list-unstyled d-flex'>
              <li className='ms-3'>
                <a href='#' className='text-white'>
                <FaInstagram />
                </a>
              </li>
              <li className='ms-3'>
                <a href='#' className='text-white'>
                <FaLinkedin />
                </a>
              </li>
            </ul>
            <h5>metta muse ACCEPTS</h5>
            <ul>
            <li className='ms-3'>
                <a href='#' className='text-white'>
                <FaGooglePay />
                </a>
              </li>
               <li className='ms-3'>
                <a href='#' className='text-white'>
                <FaApplePay />
                </a>
              </li>
              <li className='ms-3'>
                <a href='#' className='text-white'>
                <TbBrandMastercard />
                </a>
              </li>
            </ul>

          </div>
          <div className='col-md-6 col-lg-3'>
            <h5>BE THE FIRST TO KNOW</h5>
            <p>
              Sign up for updates from metta muse
            </p>
            <form>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter your e-mail...'
                />
              </div>
              <button type='submit' className='btn btn-dark'>
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='text-center pt-4'>
        <p>&copy; 2024 metta muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;