import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <div className="w-full h-[410px] pt-7 bg-[#101323] mt-150 md:flex-nowrap ">
      <div className="flex justify-between pr-16 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-auto">
          <h1 className="text-white text-2xl font-bold pl-16">
            Get Your 30-day Free Trial
          </h1>
          <p className="text-[#94969C] text-sm mt-1 pl-16">
            Join over 4,000 users already growing with our company.
          </p>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button className="bg-[#7030F1] text-white py-2 px-3 rounded">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-17 text-[#94969C] text-sm pr-16 border-[#1F242F]">
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h1 className="text-[#7030F1] text-2xl pl-16">Logo</h1>
          <p className="text-[#94969C] mt-4 pl-16">
            Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos, fugiat!
          </p>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul>
            <li>product</li>
            <li>Overview</li>
            <li>features</li>
            <li>pricing</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul>
            <li>Service</li>
            <li>Category1</li>
            <li>Category2</li>
            <li>Category3</li>
            <li>category4</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Terms of services</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul>
            <li>Blog</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorial</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-between p-15 text-sm text-[#94969C] mt-11 md:w-auto mb-6 md:mb-0">
        <div>
          <p>@2025 company name. All Rights Reserved</p>
        </div>
        <div className="flex space-x-3 mt-1 text-[#94969C]">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-2xl cursor-pointer hover:text-[#7030F1]"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-2xl cursor-pointer hover:text-[#7030F1]"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-2xl cursor-pointer hover:text-[#7030F1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
