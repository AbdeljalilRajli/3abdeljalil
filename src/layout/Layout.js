import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import { animation } from "../utils";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children, header, footer, singleMenu }) => {
  useEffect(() => {
    niceSelect();
    animation();
    
  }, []);
  return (
    <Fragment>   
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} />
        {children}
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
