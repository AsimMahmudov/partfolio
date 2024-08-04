import scss from "./Work.module.scss";
// import { FaArrowDownLong } from "react-icons/fa6";
import { HiMiniArrowLongDown } from "react-icons/hi2";
import tochki from "../../../assets/tochki.png";
import Image from "next/image";
import jordan from "../../../assets/jordan.png";
import colda from "../../../assets/colda.png";
import temir from "../../../assets/insatgrampro.png";

const Work = () => {
  return (
    <section id="#work" className={scss.Work}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}>
            <div className={scss.workImg}>
              {/* <img
                src="https://i.pinimg.com/564x/f3/68/56/f36856789b42c2f53b5eb61f5b632661.jpg"
                alt=""
              /> */}
              <Image src={jordan} alt="" />
            </div>
            <div className={scss.workText}>
              <h1>Jordan</h1>
              <p>store website</p>
            </div>
          </div>

          <div className={scss.box2}>
            <div className={scss.workImg}>
              {/* <img
                src="https://i.pinimg.com/564x/da/ae/69/daae698235e302514074d477c7a3a73a.jpg"
                alt=""
              /> */}
              <Image src={colda} alt="" />
            </div>
            <div className={scss.workText}>
              <div className={scss.tochkiimg}>
                <Image src={tochki} alt="" />
              </div>

              <div className={scss.boxwork}>
                <div className={scss.arrow}>
                  <h1>
                    <HiMiniArrowLongDown />
                  </h1>
                </div>

                <div className={scss.text}>
                  <h1>Call of Duty</h1>
                  <p>game website</p>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.box3}>
            <div className={scss.workImg}>
              {/* <img
                src="https://i.pinimg.com/564x/f8/d6/7f/f8d67f3fe74e2e63283c82ec3af5ad64.jpg"
                alt=""
              /> */}
              <Image src={temir} alt="" />
              <div className={scss.text}>
                <h1>Instagram</h1>
                <p>social network site</p>
              </div>
            </div>
            <div className={scss.workText}>
              <div className={scss.tochkiimg}>
                <Image src={tochki} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
