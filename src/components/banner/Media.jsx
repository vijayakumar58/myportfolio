import React from 'react'
import { FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Find me in
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
        <MdEmail />
        </span>
        <span className="bannerIcon">
        <MdPhone />
        </span>
        <span className="bannerIcon">
        <FaLinkedinIn />
        </span>
        <span className="bannerIcon">
        <FaGithub />
        </span>
      </div>
    </div>
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        BEST SKILL ON
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
        <DiMongodb />
        </span>
        <span className="bannerIcon">
          <SiExpress />
        </span>
        <span className="bannerIcon">
        <FaReact />
        </span>
        <span className="bannerIcon">
          <FaNodeJs />
        </span>
      </div>
    </div>
  </div>
  )
}

export default Media