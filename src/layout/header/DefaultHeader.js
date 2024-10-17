import Link from "next/link";
import Nav from "./Nav";
import styles from './availabledot.module.css'

const Header = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                  <img
                    src="/assets/images/logos/abdeljalil-main-logo.png" // Note the leading slash for an absolute path
                    alt="Logo"
                    title="Logo"
                  />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>

            <div className="menu-btns ms-lg-auto">

              {/*------ Glowing Dot-----------*/}
              <div className={styles.AvailableBox}>
                <span className={styles.AvailableText}>Available</span>
                <div class={styles.loading_dots}>
                  <div class={styles.loading_dots_dot}></div>
                </div>
              </div>
              {/*------ Glowing Dot-----------*/}
              
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header;
