import React from 'react';
import Image from 'next/image';
import {  Instagram, InstagramIcon, LucideFacebook } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute bottom-0 left-0">
        <Image 
          src="/gradia-assets/elements/footers/radial2.svg"
          alt=""
          width={500}  // Adjust the width and height based on your image size
          height={500}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full max-w-sm">
              <div className="mb-11">
                <Image 
                  src="/logo.png"
                  alt=""
                  width={200}  // Adjust the width and height based on your image size
                  height={50}
                />
              </div>
              <div>
                <p className="mb-14 text-gray-200 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium dui convallis sagittis tempus mi viverra eget. Quisque justo, blandit orci.
                </p>
                <p className="text-gray-400 text-sm">© Copyright 2022. All Rights Reserved by Shamiso.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div className="h-full">
              <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Company</h3>
              <ul>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Artists
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div className="h-full">
              <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Support</h3>
              <ul>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Contact Info</h3>
                <ul className="mb-6">
                  <li className="mb-4 font-heading font-medium text-base text-white">
                    <a href="#" >
                        info@shamiso.com
                    </a>
                  </li>
                  <li className="font-heading font-medium text-base text-white">+1 (394) 593 1994</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center -ml-5">
                <div className="w-auto text-white p-5">
                  <a href="#">
                  <InstagramIcon />
                  </a>
                </div>
                <div className="w-auto p-5 text-white">
                  <a href="#">
                    <LucideFacebook />
                  </a>
                </div>
                <div className="w-auto p-5 text-white">
                  <a href="#">
                  <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
