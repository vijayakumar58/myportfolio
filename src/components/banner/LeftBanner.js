import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Professional Coder.", "Website Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vijayakumar R</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a continuous learner with a passion for exploring new technologies and techniques to improve my skills.
          {/* As a MERN-Full stack developer with no prior work experience, I have a strong foundation in web development and a passion for creating dynamic, user-friendly web applications. I have proficiency in the MERN stack, which includes MongoDB, Express, React, and Node.js. 
          In my education and personal projects, I have developed skills in front-end development, including HTML, CSS, JavaScript, React, and Redux. I am also proficient in back-end development, including Node.js, Express, and MongoDB.
          I have experience in creating RESTful APIs, designing and implementing databases, and deploying applications to cloud platforms like Heroku and AWS. I have also worked with Git and GitHub for version control and collaboration.
          I am a fast learner and eager to expand my skill set, always staying up-to-date with the latest web development trends and technologies. I am a team player, with excellent communication skills and a positive attitude.
          Overall, I am excited to bring my skills and enthusiasm to a MERN-Full stack developer role and contribute to the success of the organization. */}
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  )
}

export default LeftBanner