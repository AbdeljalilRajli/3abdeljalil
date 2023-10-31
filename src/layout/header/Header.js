import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";
const Header = ({ header, singleMenu }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <DefaultHeader singleMenu={singleMenu} />;

    default:
      return <DefaultHeader singleMenu={singleMenu} />;
  }
};
export default Header;
