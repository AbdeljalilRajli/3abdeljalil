
import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;


const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">

      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#skills">skills</a>
      </li>
      <li>
        <a href="#projects">project <sup style={{fontWeight:"100",}}>(8)</sup></a>
      </li>
      <li>
        <a href="#contact">contact</a>
      </li>
    </ul>
  );
};
