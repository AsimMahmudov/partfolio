import scss from "./Laoding.module.scss";
import { FC } from "react";

const PreLoaderDevX: FC = () => {
  return (
    <>
      <div className={scss.preLoader}>
        <p className={scss.title_loader}>
          Asim<span>05</span>
        </p>
        <span className={scss.loader}></span>
      </div>
    </>
  );
};
export default PreLoaderDevX;
