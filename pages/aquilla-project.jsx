import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectDetails = () => {
  return (
    <Layout header={2} singleMenu footer={1}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-150 rpt-150 pb-75 rel z-1"
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-9">
              <div className="section-title mt-60 mb-10">
                <span className="sub-title mb-0">Portfolio</span>
              </div>
              <h2 className="hero-title style-two mt-0 mb-30 wow fadeInUp delay-0-2s">
                 Aquilla - IT specialized recruitment agency
              </h2>
              <div className="banner-text wow fadeInUp delay-0-3s">
              Aquila takes recruitment to new heights. We are a team of passionate 
              experts dedicated to making exceptional matches between top-tier candidates 
              and ambitious companies. Our website is designed to be a seamless and powerful 
              tool for both job seekers and employers.
              </div>
            </div>
            <div className="col-lg-3 mt-90 mb-10">
              <Link legacyBehavior href="#">
                <a className="explore-more rmb-0 wow fadeInRight delay-0-2s">
                  <i className="fas fa-arrow-right" /> <span>Visit Website</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img
              src="assets/images/projects/Aquilla/Aquilla-header-mockup-min.webp"
              alt="Project-Aquilla"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information's</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5 className="project-info-title">Client</h5>
                  <p className="sub-title mb-20">Aquilla</p>
                </div>
                <div className="col">
                  <h5 className="project-info-title">Category</h5>
                  <p className="sub-title mb-20">Web Development</p>
                </div>
                <div className="col">
                  <h5 className="project-info-title">Date</h5>
                  <p className="sub-title mb-20">February 25, 2021</p>
                </div>
                <div className="col">
                  <h5 className="project-info-title">Location</h5>
                  <p className="sub-title mb-20">Casablance, Morocco</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">
              Aquila isn't your average recruitment agency. We're a team fueled by a passion 
              for connecting talented individuals with their dream careers, and ambitious companies 
              with the perfect employees.  Imagine a platform that seamlessly empowers both sides: job 
              seekers navigate a curated selection of opportunities across industries, applying with 
              ease through user-friendly forms; employers tap into a pool of pre-vetted, highly skilled 
              professionals, saving time with streamlined sourcing and management tools. But it's more 
              than a platform – it's expertise.  Our team brings years of experience and industry knowledge 
              to the table, guiding both sides with personalized attention to ensure that ambition meets opportunity.
              Aquila isn't just about filling positions, it's about crafting perfect matches, fostering successful careers, 
              and propelling businesses forward. So, whether you're a talented professional seeking your next challenge, 
              or a company looking to build a winning team, let Aquila be the wings that help you soar.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/projects/aquilla/Aquilla-gal1.webp"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/aquilla/Aquilla-gal3.webp"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/aquilla/Aquilla-gal4.webp"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/aquilla/Aquilla-gal5.webp"
                  alt="Project"
                />
              </div>
            </div>
          </div>
          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Results</h3>
            </div>
            <div className="col-lg-8">
              <div className="text">
              Aquila's website isn't just a digital storefront – it's the culmination of countless hours, 
              meticulous planning, and a relentless pursuit of excellence. Every feature, every interface element, 
              is a testament to the dedication of our team. We poured our hearts and expertise into crafting a platform 
              that empowers both job seekers and employers. The intuitive search filters and streamlined application process 
              for candidates? Meticulously designed to save them time and showcase their potential. The robust candidate 
              sourcing tools and efficient management system for employers? Years of research and development poured into making 
              recruitment efficient and effective. Aquila's website isn't just a pretty face; it's the result of tireless work, 
              built with the singular goal of making exceptional connections. It's a testament to the power of hard work, 
              a platform designed to elevate both careers and companies.
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="assets/images/projects/prev-project.jpg" alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Digital Product Design
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectDetails;
