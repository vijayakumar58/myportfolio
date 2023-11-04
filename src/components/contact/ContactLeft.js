import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <img
      className="w-full h-64 object-cover rounded-lg mb-2"
      src={contactImg}
      alt="contactImg"
    />
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">Vijayakumar R</h3>
      <p className="text-lg font-normal text-gray-400">
        Full Stack Developer (MERN)
      </p>
      <p className="text-base text-gray-400 tracking-wide">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        ipsam autem cumque, accusantium dicta odio.
      </p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Phone: <span className="text-lightText">+91 9788737875</span>
      </p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Email: <span className="text-lightText">vijayalingam58@gmail.com</span>
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
        <MdEmail />
        </span>
        <span className="bannerIcon">
        <MdPhone />
        </span>
        <span className="bannerIcon">
        <a href='https://www.linkedin.com/in/vijayakumar-r-253265251/' target='_blank'><FaLinkedinIn /></a>
        </span>
        <span className="bannerIcon">
        <a href='https://github.com/vijayakumar58' target='_blank'><FaGithub /></a>
        </span>
      </div>
    </div>
  </div>
  )
}

export default ContactLeft