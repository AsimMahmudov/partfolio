"use client";
import scss from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "About",
    link: "#about",
  },

  {
    name: "Skill",
    link: "#expirience",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Contacts",
    link: "#contacts",
  },
];

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={scss.homebtn}>
            <a href="https://github.com/AsimMahmudov/">
              <button>
                <BsGithub />
              </button>
            </a>
            <a href="https://www.instagram.com/asim_mah05/">
              <button>
                <GrInstagram />
              </button>
            </a>
            <a href="https://t.me/MahmudovAsim">
              <button>
                <BsTelegram />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
