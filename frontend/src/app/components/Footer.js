"use client"
import React from "react";
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="footer-box bg-themeblue text-textcolortheme">
      <div className="content max-w-7xl mx-auto flex justify-between items-start flex-wrap gap-8 w-full py-7">
        <section className="w-[30%]">
          <h2 className="text-xl font-bold">QUANTUM MIND</h2>
          <p className="mt-2 text-lg">
            Empowering businesses with next-gen AI solutions. Connect with us to
            build smarter applications.
          </p>
        </section>
        <section className="w-[20%]">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-lg">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/templates" className="hover:underline">Templates</a></li>
          </ul>
        </section>
        <section className="w-[20%]">
          <h4 className="text-lg font-semibold mb-2">Policies</h4>
          <ul className="space-y-2 text-lg">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </section>
        <section className="w-[25%]">
          <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
          <div className="flex items-center gap-2 text-lg">
            <PhoneFillIcon/>
            <span>+91 8452034160</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-lg">
            <EmailFillIcon/>
            <span>info@quantummind.solutions</span>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
            </a>
          </div>
          </section>
      </div>
      <div className="text-center text-sm mt-8 font-semibold">
        &copy; {new Date().getFullYear()} QUANTUM MIND. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
