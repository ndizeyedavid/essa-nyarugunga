import { Link } from "react-router-dom";
import Logo from "/assets/logo/Logo-lg.svg";

// icons
import Email from "/assets/icons/email.svg"
import Phone from "/assets/icons/phone.svg"
import Location from "/assets/icons/location.svg"
import Facebook from "/assets/icons/facebook.svg"
import Twitter from "/assets/icons/twitter.svg"
import LinkedIn from "/assets/icons/linkedin.svg"

export default function Footer() {
  return (
    <footer className="mt-[200px] w-full px-[50px] py-[40px] mb-10 bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-start gap-[50px] flex overflow-hidden">
      <div className="flex w-full gap-3">

        {/* LEFT SIDE✅ */}
        <div className="flex flex-col gap-[50px] ">
          {/* Logo here */}
          <div className="flex flex-col gap-[10px] w-full">
            <Link to="/"><img src={Logo} className="object-cover w-full" alt="School Logo" /></Link>
            <p className="text-text-20 text-xl font-medium leading-[30px] w-full">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>


          {/* Social address */}
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Email} />
              </span>
              <p>Hellow@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Phone} />
              </span>
              <p>+250 796 140 857</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Location} />
              </span>
              <p>Kigali, Kanombe</p>
            </div>
          </div>

        </div>

        {/* Easy Links */}
        <div className="flex justify-between w-full">

          {/* col 1 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Home</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link to="/#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Features</Link></li>
              <li><Link to="/#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Testimonials</Link></li>
              <li><Link to="/#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">FAQ</Link></li>
            </ul>
          </div>

          {/* col 2 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">About</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link to="/about#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Mission</Link></li>
              <li><Link to="/about#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Vision</Link></li>
              <li><Link to="/about#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Awards and Recognition</Link></li>
              <li><Link to="/about#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">History</Link></li>
              <li><Link to="/about#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Teachers</Link></li>
            </ul>
          </div>

          {/* col 3 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Academics</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link to="/academics#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Special Features</Link></li>
              <li><Link to="/academics#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Gallery</Link></li>
            </ul>
          </div>

          {/* col 4 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Contact Us</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link to="/contact#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Information</Link></li>
              <li><Link to="/contact#" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Map & Direction</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* semi-bottom */}
      <div className="w-full flex flex-col gap-[24px]">
        <hr className="h-[1px] w-full rounded-full border border-neutral-500" />

        <div className="flex flex-row items-center justify-between">

          {/* 💌💘💝💖💗💓 Huge thanks💌💘💝💖💗💓 */}
          <div>
            <span>Huge thanks to <Link to="https://figma.com/@praha" target="_blank" className="font-semibold text-primary-65">Pragadesh</Link> for the inspiration💖</span>
          </div>
          {/* 💌💘💝💖💗💓 Huge thanks💌💘💝💖💗💓 */}

          {/* Social links✅ */}

          {/* valid links and online icons */}
          <div className="flex flex-row items-center gap-3">
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={Twitter} alt="Facebook" />
            </Link>
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={LinkedIn} alt="Facebook" />
            </Link>
          </div>
        </div>

        <hr className="h-[1px] w-full rounded-full border border-neutral-300" />

        {/* Copyright✅ */}
        <span className="text-center text-[#646467] text-lg font-medium leading-[27px]">Copyright © 2024 <Link to="" className="font-bold hover:text-primary-70">ESSA Nyarugunga</Link>. All rights reserved.</span>

      </div>
    </footer>
  )
}