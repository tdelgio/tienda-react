import React from "react";

import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <div className="fixed text-sm text-gray-500 bottom-0 text-center w-full shadow-lg bg-gray-100 py-2">
      camada-16155 - ReactJS -
      <a
        href="https://github.dev/tdelgio/tienda-react"
        className="font-bold"
        aria-label="link to code"
      >
        {" "}
        <GithubIcon />
      </a>
    </div>
  );
};

export default Footer;
