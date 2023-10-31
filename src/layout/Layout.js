import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
const Layout = ({ children, header, footer, singleMenu }) => {
  useEffect(() => {
    niceSelect();
    animation();
    sidebarClick();
  }, []);
  return (
    <Fragment>   
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} />
        <SideBar />
        {children}
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
