"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import Loading from "../../loading/Loading";
import PreLoaderDevX from "../../loading/Loading";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={scss.LayoutPage}>
      {loading ? (
        <>
          <PreLoaderDevX />
        </>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LayoutPage;
