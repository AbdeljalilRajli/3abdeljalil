import Link from "next/link";

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="main-footer rel z-1 slug-footer"
      id="contact"
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-12 text-lg-center">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="https://github.com/AbdeljalilRajli" target="_blank">
                  <i className="fab fa-github" /> <span>GITHUB</span>
                </a>
                <a href="https://www.linkedin.com/in/abdeljalil-r-02b3a91b3/" target="_blank">
                  <i className="fab fa-linkedin" /> <span>LINKEDIN</span>
                </a>
                <a href="https://twitter.com/RajliAbdel42519" target="_blank">
                  <i className="fab fa-twitter" /> <span>TWITTER</span>
                </a>
                <a href="https://www.behance.net/3abdeljalil" target="_blank">
                  <i className="fab fa-behance" /> <span>BEHANCE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="contact">
          <div className="col-lg-12">
            <div className="pt-80 pb-60" style={{ textAlign: "center" }}>
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <span>GET IN TOUCH</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three phone-number"
                  href="mailto:rajli.contact@gmail.com"
                >
                  rajli.contact@gmail.com <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright © {currentYear},{" "}
                  <Link legacyBehavior href="/">
                    <a>Abdeljalil Rajli</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
