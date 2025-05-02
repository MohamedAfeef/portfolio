import React from 'react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

function Footer() {
  return (
    <footer className="text-center py-4 bg-dark text-white mt-auto">
      <div className="mb-3 d-flex justify-content-center gap-4">
        <a
          href="https://github.com/MohamedAfeef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-afeef-4b0457244/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://dribbble.com/mohamedAfeef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-4"
        >
          <FaDribbble />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/MohamedAfeef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-4"
        >
          <SiFrontendmentor />
        </a>
      </div>
      <p className="mb-0">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
