import scss from "./Expirience.module.scss";
import html from "../../../assets/html-icon.webp";
import css from "../../../assets/css-icon.webp";
import scss5 from "../../../assets/scss-icon.webp";
import react from "../../../assets/react-icon.webp";
import javscript from "../../../assets/java-script-icon.webp";
import typescript from "../../../assets/type-script-icon.webp";
import git from "../../../assets/git-icon.webp";
import vite from "../../../assets/vite-icon.webp";
import redux from "../../../assets/redux-icon.webp";
import nextjs from "../../../assets/next-js-icon.webp";
import github from "../../../assets/github.png";
import figma from "../../../assets/figma.png";

import Image from "next/image";

const Expirience = () => {
  return (
    <section id="#expirience" className={scss.Expirience}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.skillText}>
            <div className={scss.line}></div>
            <h1>My skills</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.skillImages}>
            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={html} alt="" />
              </div>
              <h3>HTML</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={css} alt="" />
              </div>
              <h3>CSS</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={scss5} alt="" />
              </div>
              <h3>SCSS</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={javscript} alt="" />
              </div>
              <h3>JavaScript</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={typescript} alt="" />
              </div>
              <h3>TypeScript</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={react} alt="" />
              </div>
              <h3>React</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={redux} alt="" />
              </div>
              <h3>Redux</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={vite} alt="" />
              </div>
              <h3>Vite</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={nextjs} alt="" />
              </div>
              <h3>Next.js</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={figma} alt="" />
              </div>
              <h3>Figma</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={github} alt="" />
              </div>
              <h3>GitHub</h3>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <Image src={git} alt="" />
              </div>
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expirience;
