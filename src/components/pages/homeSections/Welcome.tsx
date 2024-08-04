"use client";
import scss from "./Welcome.module.scss";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import avatarka from "../../../assets/avatarka.jpg";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.homeText}>
            <h4>Hi, my name is</h4>
            <h1>Asim Mahmudov</h1>
            <h2>
              I'M A{" "}
              <span>
                <Typewriter
                  words={["FRONT-END DEVELOPER"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products in Kyrgyzstan.
            </p>
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
          <div className={scss.homeImages}>
            {/* <img
              src="https://i.pinimg.com/736x/6a/66/25/6a662564553c1ee7990313d0677100e9.jpg"
              alt=""
            /> */}
            <Image src={avatarka} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
