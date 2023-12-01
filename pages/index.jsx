
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Index4OnePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout header={2} singleMenu footer={1}>
      {/* Hero Section Start */}
      <section
        id="home"
        className="hero-area-four pt-250 rpt-120 pb-220 rpb-10 rel z-1"
      >
        <div className="container container-1620 rel z-1">
          <div className="hero-four-content rel mt-50 text-center">
            <h1>
              <span className="marquee-wrap">
                <span className="marquee-inner one">
                  <span>Hello, I’m Abdeljalil</span> Rajli
                </span>
                <span className="marquee-inner one">
                  <span>Hello, I’m Abdeljalil</span> Rajli
                </span>
                <span className="marquee-insner one">
                  <span>Hello, I’m Abdeljalil</span> Rajli
                </span>
              </span>
              <span className="marquee-wrap">
                <span className="marquee-inner two">
                  Frontend <span> Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Frontend <span> Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Frontend <span> Developer.</span>
                </span>
              </span>
              <span className="marquee-wrap">
                <span className="marquee-inner three">
                  <span>Many Years </span> Of Experience
                </span>
                <span className="marquee-inner three">
                  <span>Many Years </span> Of Experience
                </span>
                <span className="marquee-inner three">
                  <span>Many Years </span> Of Experience
                </span>
              </span>
            </h1>
            
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape one"
            src="assets/images/hero/hero-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/hero/hero-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <motion.section ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} id="about" className="about-area rel z-1">
        <div className="container-fluid">
          <div className="about-four-wrap py-0 mb-40 rpy-10">
            <div className="container container-1290">
              <div className="row gap-70 align-items-center">
                <div className="col-lg-12">
                  <div className="about-four-content rmb-55 wow fadeInUp delay-0-2s">
                    <div className="section-title mb-25">
                      <span className="sub-title mb-15">About Me</span>
                      <h2>Experienced <br></br>Frontend Developer</h2>
                    </div>
                      <p>
                      As a dedicated frontend developer, I am passionate about crafting digital experiences 
                      that blend aesthetics with functionality. With a keen eye for design and a strong foundation 
                      in web technologies, I bring creativity and technical expertise to every project I undertake. 
                      My journey in the world of web development has equipped me with the skills to turn ideas into 
                      user-friendly, visually captivating, and responsive websites.<br></br><br></br>
                      I thrive on transforming concepts into interactive, dynamic, and user-centric web applications. 
                      My commitment to staying up-to-date with the latest industry trends and technologies allows me 
                      to create websites that not only look outstanding but also provide a seamless user experience.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* About Us Area end */}

      {/* My Skills Area start */}
      <section className="my-skills-area rel z-1" id="skills">
        <div className="container pt-40 pb-40 container-1290">
          <div className="row gap-20 justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="my-skill-content pt-10 rmb-5 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">
                    My Skills &amp; Experience
                  </span>
                  <h2>Creating Engaging Web Experience</h2>
                </div>
                <p>
                As a frontend developer, I possess a diverse set of skills that enable me to create 
                captivating and seamless user experiences. With a deep understanding of modern web 
                technologies and a passion for clean code, I strive to deliver high-quality solutions 
                that align with the latest industry standards. Here are some of my core skills : 
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="my-skill-images wow fadeInRight delay-0-2s" style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}>
                <div className="skill-item wow fadeInUp delay-0-35s">
                  <img src="assets/images/skills/HTML.png" alt="Skill Icon" />
                  <span className="text">HTML</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-40s">
                  <img src="assets/images/skills/CSS.png" alt="Skill Icon" />
                  <span className="text">CSS</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-45s">
                  <img src="assets/images/skills/JavaScript.png" alt="Skill Icon" />
                  <span className="text">JavaScript</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-50s">
                  <img src="assets/images/skills/React.png" alt="Skill Icon" />
                  <span className="text">React</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-55s">
                  <img src="assets/images/skills/NextJs.png" alt="Skill Icon" />
                  <span className="text">Next.js</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-60s">
                  <img src="assets/images/skills/NodeJs.png" alt="Skill Icon" />
                  <span className="text">node.js</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-65s">
                  <img src="assets/images/skills/PHP.png" alt="Skill Icon" />
                  <span className="text">PHP</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-70s">
                  <img src="assets/images/skills/MySql.png" alt="Skill Icon" />
                  <span className="text">MySql</span>
                </div>
                <div className="skill-item wow fadeInRight delay-0-75s">
                  <img
                    src="assets/images/skills/WordPress.png"
                    alt="Skill Icon"
                  />
                  <span className="text">WordPress</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/Git.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Git</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/Drupal.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Drupal</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/Bootstrap.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Bootstrap</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/TailwindCSS.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Skills Area end */}

      {/* Project Timeline-two Area start */}
      <section
        id="projects"
        className="project-timeline-two-area pt-60 pb-60 rpt-20 rel z-1"
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Lat’s Look Our Recent Project Gallery</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 text-lg-end">
              <Link legacyBehavior href="#">
                <a className="explore-more rmb-50 wow fadeInRight delay-0-2s">
                  <i className="fas fa-arrow-right" /> <span>Explore more</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">01</span>
                <h4>
                  <Link legacyBehavior href="https://www.aquilla.io/">
                    <a>Aquilla - IT specialized recruitment agency</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/Aquilla-Mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">02</span>
                <h4>
                  <Link legacyBehavior href="#">
                    <a>Drink-B Energy drink store Figma Template</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/DRINK-B-Mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">03</span>
                <h4>
                  <Link legacyBehavior href="https://glowink.be/">
                    <a>Glowin'k - Permanent make-up & hair loss solutions</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/glowink-mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">04</span>
                <h4>
                  <Link legacyBehavior href="https://www.para-organica.ma/">
                    <a>Para Organica - Online non-prescription pharmacy</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/Para-organica-Mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">05</span>
                <h4>
                  <Link legacyBehavior href="https://rajli.tech/">
                    <a>21thirteen - Abdeljalil Rajli NestJs Portfolio</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/2113-portfolio.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">06</span>
                <h4>
                  <Link legacyBehavior href="https://www.helloeve.ma/">
                    <a>HelloEve - accessories & jewelries store online</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/helloeve-mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline Two Area end */}
      {/* Headline area start
      <div className="headline-area bgc-primary py-40 rpy-25">
        <div className="container-fluid">
          <div className="headline-wrap-two">
            <span className="marquee-wrap">
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
       Headline Area end */}
      {/* Headline area start */}
      <div className="headline-area rel z-1 move-top-two">
        <div className="container-fluid">
          <div className="headline-text style-three marquee pb-60">
            <span>
              <span>turns coffee into code . turns coffee into code . turns coffee into code . turns coffee into code . turns coffee into code</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
    </Layout>
  );
};
export default Index4OnePage;
