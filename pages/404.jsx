import ErrorNotFound from "@/src/components/ErrorNotFound";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const E404 = () => {
  return (
    <Layout>
      <section
        className="error-section pt-150 rpt-180 pb-60 rpb-20 rel z-1"
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-15 wow fadeInRight delay-0-2s">
                <h1>OPPS!</h1>
                <div className="section-title mb-50 rmb-35">
                  <h2>This Page Can't Be Found</h2>
                </div>
                <Link legacyBehavior href="https://www.3abdeljalil.com/">
                  <a className="theme-btn style-two">
                    Go to Home <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
               <ErrorNotFound />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 Error Section End */}
    </Layout>
  );
};
export default E404;
