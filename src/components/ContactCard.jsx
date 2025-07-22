import React from "react";
import socialLinks from "../utils/socials";

export default function ContactCard() {

  return (
    <div>
      <h3 className="mb-[24px] text-2xl text-[#ede0d4] font-semibold">
        Contact Me
      </h3>

      <ul>
        <li className="text-white text-sm my-[16px]">
          Mail:{" "}
          <a
            href="mailto:virhansda2302@gmail.com?subject=Inquiry from Geo-Helper"
            className="underline hover:text-lime-300 transition-colors"
          >
            virhansda2302@gmail.com
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-[15px] mt-[25px] sm:mt-[20px]">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            className="flex justify-center items-center h-[36px] w-[36px] rounded-[50%] bg-[#ffffff1a] hover:bg-[#ffffff33]"
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
          >
            {link.svg}
          </a>
        ))}
      </div>
    </div>
  );
}
