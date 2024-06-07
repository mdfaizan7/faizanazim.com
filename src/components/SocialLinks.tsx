"use client";

import React from "react";
import {
  DevIcon,
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon
} from "./common/Icons";

const SOCIAL_LINK_DATA = [
  {
    name: "Github",
    link: "https://github.com/mdfaizan7",
    icon: GithubIcon
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mdfaizan7/",
    icon: LinkedInIcon
  },
  {
    name: "G-Mail",
    link: "mailto:faizaanazim@gmail.com",
    icon: GmailIcon
  },
  {
    name: "Dev.to",
    link: "https://dev.to/mdfaizan7",
    icon: DevIcon
  },
  {
    name: "X",
    link: "https://x.com/md_faizan7",
    icon: XIcon
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/md.faizanazim/",
    icon: InstagramIcon
  }
];

const SocialLinks = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {SOCIAL_LINK_DATA.map((it) => (
        <li className="mr-5" key={it.link}>
          <a
            className="block hover:text-slate-200 transition-all hover:scale-[115%]"
            href={it.link}
            target="_blank"
            rel="noreferrer noopener"
            title={it.name}
          >
            <span className="sr-only">{it.name}</span>
            <it.icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
