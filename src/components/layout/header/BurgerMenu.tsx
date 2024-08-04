import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import { Link as ScrollLink } from "react-scroll";

interface LinksType {
  name: string;
  link: string;
}

interface BurgerMenuProps {
  links: LinksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
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
          <div className={scss.buutons}>
            <a target="_blank" rel="noopener noreferror" href="/resume.pdf">
              resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
