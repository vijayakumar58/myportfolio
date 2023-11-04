import React from 'react'
import { FaFileAlt, FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
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
          <a></a>
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
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        GET RESUME
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
        <a href='https://drive.google.com/file/d/1Rhi9MVRnDVEnXB9gqwwNnOAxSaTcwV9h/view?usp=sharing' target='_blank'><FaFileAlt /></a>
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