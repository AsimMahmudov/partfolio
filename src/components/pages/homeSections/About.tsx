import Image from "next/image";
import scss from "./About.module.scss";
// import AboutImg1 from "../../../assets/PFO_ Assault On Regional Banks (NYSE_PFO).jpeg";
import AboutImg1 from "../../../assets/Future world.jpeg";

// import AboutImg1 from "../../../assets/Снимок экрана от 2024-07-31 06-07-32.png";
import { Link as ScrollLink } from "react-scroll";
import AboutImg2 from "../../../assets/_-removebg-preview.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const links = [
  {
    name: "Contact me",
    link: "#contacts",
  },
];

const About = () => {
  return (
    <section id="#about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.AboutImages}>
            <Image className={scss.AboutImg2} src={AboutImg2} alt="" />
            <Image className={scss.AboutImg1} src={AboutImg1} alt="" />
          </div>

          <div className={scss.AboutText}>
            <div className={scss.text_h1_icon}>
              <div className={scss.text_h1}>
                <h1>About</h1>
                <h1 className={scss.me}>me</h1>
              </div>
              <div className={scss.icons}>
                <h2>
                  <HiArrowNarrowRight />
                </h2>
              </div>
            </div>

            <p>
              Hello! My name is Asim, and I love creating things that live on
              the internet. My interest in web development started back in 2023
              when I decided to try creating websites for acquaintances. It
              turned out that it brings me pleasure and taught me a lot!
            </p>

            {/* <button> */}
            {links.map((item, index) => (
              <button key={index}>
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
              </button>
            ))}
            {/* </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
