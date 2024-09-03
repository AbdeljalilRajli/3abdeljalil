
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

  const [active, setActive] = useState("collapse0");
  return (
    <Layout header={2} singleMenu footer={1}>
      
      <section
        id="home"
        className="hero-area-four pt-150 rpt-120 pb-120 rpb-50 rel z-1"
      >
        <div className="hero-four-content container container-1290 rel z-1">
          <div className="row gap-20 justify-content-between align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-section_title1">FULLSTACK</h1>
              <h1 className="hero-section_title2">DEVELOPER</h1>
              <p>Enthusiastic full-stack developer with expertise in crafting both 
              user-facing interfaces and robust back-end systems.</p>
            </div>
            <div className="col-lg-6">
              <img className="hero_img shadowfilter" src="assets/images/hero/code-illustration 2.png" alt="Code-illustration" />
            </div>
          </div>
          <div className="cta-row">
            <a href="#about">
              <button className="btn">
                <img className="arrow-down" src="assets/images/icons/down-arrow.svg" alt="arrow-down-icon" />
              </button>
            </a>
          </div>
        </div>
        
      </section>
      {/* Hero Section Start 
      <section
        id="home"
        className="hero-area-four pt-250 rpt-120 pb-220 rpb-50 rel z-1"
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
                  Full Stack <span> Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Full Stack <span> Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Full Stack <span> Developer.</span>
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
      </section> */}
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
                      <h2>Experienced <br></br>Full Stack Developer</h2>
                    </div>
                      <p>
                      As a dedicated full-stack developer, I am passionate about crafting digital experiences 
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

      {/* Skills Area Start */}
      <section className="skills-area pt-100 pb-80 rpt-10 rel z-1" id="skills">
        <div className="container container-1590">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                    My Skills &amp; Experience
                  </span>
                <h2>Creating Engaging Web Experience</h2>
              </div>
            </div>
          </div>
          <div className="skills-wrap wow fadeInUp delay-0-2s">
            <div className="skill-item">
              <img src="assets/images/skills/HTML.png" alt="Skill Icon" />
              <span className="text">HTML</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/CSS.png" alt="Skill Icon" />
              <span className="text">CSS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/JavaScript.png" alt="Skill Icon" />
              <span className="text">JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/React.png" alt="Skill Icon" />
                <span className="text">React</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/NextJs.png" alt="Skill Icon" />
              <span className="text">Next.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/NodeJs.png" alt="Skill Icon" />
              <span className="text">node.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/PHP.png" alt="Skill Icon" />
                <span className="text">PHP</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/MySql.png" alt="Skill Icon" />
              <span className="text">MySql</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/WordPress.png" alt="Skill Icon" />
              <span className="text">WordPress</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/Git.png" alt="Skill Icon" />
              <span className="text">Git</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/Drupal.png" alt="Skill Icon" />
              <span className="text">Drupal</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/Bt.png" alt="Skill Icon" />
                <span className="text">Bootstrap</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/TailwindCSS.png" alt="Skill Icon" />
              <span className="text">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area End */}

      {/* My Old Skills Area start 
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
                As a Full Stack developer, I possess a diverse set of skills that enable me to create 
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
                    src="assets/images/skills/Bt.png"
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
       My Old Skills Area end */}

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
                <h2>Let’s Look Our Recent Project Gallery</h2>
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
                  <Link legacyBehavior href="https://www.aquilla.3abdeljalil.website/">
                    <a target="_blank">Aquilla - IT specialized recruitment agency</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/Aquilla-Mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://www.aquilla.3abdeljalil.website/" target="_blank">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">02</span>
                <h4>
                  <Link legacyBehavior href="https://fuerzastudios.com/">
                    <a target="_blank">Fuerza Studios - Daylight studio in Cuijk</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/fuerza-mockup-portfolio.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#" target="_blank">
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
                    <a target="_blank">Glowin'k - Permanent make-up & hair loss solutions</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/glowink-mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://glowink.be/" target="_blank">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">04</span>
                <h4>
                  <Link legacyBehavior href="https://www.organica.iboostmorocco.com/">
                    <a target="_blank">Para Organica - Online non-prescription pharmacy</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/Para-organica-Mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://www.organica.iboostmorocco.com/" target="_blank">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">05</span>
                <h4>
                  <Link legacyBehavior href="https://www.3abdeljalil.com/">
                    <a target="_blank">Abdeljalil Rajli -  Personal Portfolio using NextJs</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/My-portfolio-mockup-min.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://www.3abdeljalil.com/" target="_blank">
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
                    <a target="_blank">HelloEve - Accessories & jewelries store online</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/helloeve-mockup.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://www.helloeve.ma/" target="_blank">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">07</span>
                <h4>
                  <Link legacyBehavior href="https://www.medical-hospitality-morocco.com/">
                    <a target="_blank">Medical Hospitality Morocco - Plastic Surgery Morocco</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/medicak-hospitality-morocco.webp"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="https://www.medical-hospitality-morocco.com/" target="_blank">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">08</span>
                <h4>
                  <Link legacyBehavior href="#">
                    <a>Drink-B Energy drink store - Figma Template</a>
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
          </div>
        </div>
      </section>
      {/* Project Timeline Two Area end */}
      
      {/* Headline area start */}
      <div className="headline-area rel z-1 move-top-two">
        <div className="container-fluid">
          <div className="headline-text style-three marquee pb-60">
            <span>
              <span className="coffee-bean-text">
                turns c<svg width="140px" height="140px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="#A57939"></ellipse> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 64C35.9846 64 35.981 63.9785 35.9956 63.9736C44.4605 61.1397 50.792 49.7143 50.792 36.0508C50.792 22.3796 44.4534 10.9491 35.9814 8.1232C35.9134 8.10052 35.9283 8 36 8C46.4934 8 55 20.536 55 36C55 51.464 46.4934 64 36 64Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M35.9956 63.9736L36.3131 64.9218L35.9956 63.9736ZM49.792 36.0508C49.792 42.734 48.2426 48.841 45.6871 53.6002C43.1261 58.3698 39.5986 61.7128 35.6781 63.0253L36.3131 64.9218C40.8575 63.4004 44.7282 59.6138 47.4492 54.5463C50.1758 49.4684 51.792 43.031 51.792 36.0508H49.792ZM35.665 9.07182C39.5885 10.3805 43.1193 13.7226 45.6829 18.4933C48.2408 23.2536 49.792 29.3638 49.792 36.0508H51.792C51.792 29.0666 50.174 22.6259 47.4446 17.5467C44.7209 12.4778 40.8463 8.69175 36.2978 7.17458L35.665 9.07182ZM36 9C40.8166 9 45.2921 11.8765 48.6076 16.7625C51.9193 21.643 54 28.4415 54 36H56C56 28.0945 53.8274 20.893 50.2625 15.6395C46.7013 10.3915 41.6769 7 36 7V9ZM54 36C54 43.5585 51.9193 50.357 48.6076 55.2375C45.2921 60.1235 40.8166 63 36 63V65C41.6769 65 46.7013 61.6085 50.2625 56.3605C53.8274 51.107 56 43.9055 56 36H54ZM36.2978 7.17458C36.7904 7.3389 36.9844 7.82089 36.9272 8.20152C36.8694 8.58686 36.5324 9 36 9V7C35.3959 7 35.0156 7.4634 34.9494 7.90467C34.8839 8.34123 35.1043 8.88483 35.665 9.07182L36.2978 7.17458ZM35.6781 63.0253C34.553 63.402 34.8885 65 36 65V63C37.0808 63 37.409 64.5549 36.3131 64.9218L35.6781 63.0253Z"></path> </g> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 60.9996C36 60.9996 30 49.8067 30 35.9996C30 22.2397 35.9591 11.0761 35.9998 11C35.9711 11.0538 33 16.6294 33 23.4996C33 30.4032 36 35.9996 36 35.9996C36 35.9996 39 41.596 39 48.4996C39 55.4032 36 60.9996 36 60.9996Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M36 60.9996L35.1186 61.4721C35.2928 61.7969 35.6314 61.9996 36 61.9996C36.3686 61.9996 36.7072 61.7969 36.8814 61.4721L36 60.9996ZM35.9998 11L36.8817 11.4713C37.142 10.9843 36.9583 10.3785 36.4713 10.1181C35.9843 9.85776 35.3785 10.0414 35.118 10.5283L35.9998 11ZM36 35.9996L36.8814 35.5271L36 35.9996ZM29 35.9996C29 43.0422 30.529 49.4021 32.0508 53.992C32.8126 56.2896 33.575 58.1509 34.1488 59.4413C34.4357 60.0866 34.6757 60.5897 34.8451 60.9336C34.9299 61.1056 34.997 61.2379 35.0435 61.3283C35.0668 61.3735 35.085 61.4083 35.0976 61.4323C35.1039 61.4443 35.1089 61.4537 35.1124 61.4603C35.1142 61.4636 35.1156 61.4663 35.1166 61.4682C35.1171 61.4692 35.1176 61.47 35.1179 61.4707C35.1181 61.471 35.1183 61.4713 35.1183 61.4715C35.1185 61.4718 35.1186 61.4721 36 60.9996C36.8814 60.5271 36.8815 60.5273 36.8815 60.5275C36.8815 60.5275 36.8816 60.5275 36.8816 60.5275C36.8815 60.5275 36.8814 60.5273 36.8812 60.5269C36.8808 60.5261 36.88 60.5247 36.8789 60.5226C36.8767 60.5183 36.873 60.5114 36.868 60.5018C36.8579 60.4827 36.8424 60.4529 36.8217 60.4128C36.7804 60.3325 36.7186 60.2108 36.6392 60.0498C36.4806 59.7277 36.2518 59.2484 35.9762 58.6287C35.425 57.3889 34.6874 55.589 33.9492 53.3626C32.471 48.9042 31 42.7641 31 35.9996L29 35.9996ZM35.118 10.5283C35.0545 10.6471 29 21.9887 29 35.9996L31 35.9996C31 22.4906 36.8636 11.5052 36.8816 11.4717L35.118 10.5283ZM34 23.4996C34 20.2029 34.714 17.201 35.4387 15.0073C36.1623 12.8167 36.8861 11.4631 36.8817 11.4713L35.1178 10.5286C35.0663 10.6251 32 16.3787 32 23.4996L34 23.4996ZM36 35.9996C36.8814 35.5271 36.8815 35.5273 36.8816 35.5275C36.8816 35.5276 36.8817 35.5277 36.8817 35.5278C36.8818 35.5279 36.8818 35.5279 36.8818 35.5279C36.8817 35.5278 36.8815 35.5274 36.8811 35.5266C36.8803 35.5251 36.8788 35.5223 36.8766 35.5181C36.8722 35.5097 36.8651 35.4961 36.8554 35.4773C36.836 35.4397 36.8065 35.3815 36.7681 35.3037C36.6915 35.1481 36.5799 34.9145 36.445 34.611C36.175 34.0037 35.8124 33.1192 35.4492 32.0237C34.721 29.8274 34 26.8124 34 23.4996L32 23.4996C32 27.0904 32.779 30.3253 33.5508 32.6531C33.9376 33.8198 34.325 34.7658 34.6175 35.4236C34.7638 35.7527 34.8866 36.0101 34.974 36.1876C35.0178 36.2763 35.0527 36.3451 35.0772 36.3928C35.0895 36.4167 35.0993 36.4353 35.1062 36.4486C35.1097 36.4552 35.1125 36.4605 35.1146 36.4644C35.1156 36.4664 35.1165 36.468 35.1172 36.4693C35.1175 36.4699 35.1178 36.4704 35.118 36.4709C35.1182 36.4711 35.1183 36.4714 35.1184 36.4716C35.1185 36.4718 35.1186 36.4721 36 35.9996ZM36 35.9996C35.1186 36.4721 35.1185 36.4719 35.1184 36.4717C35.1184 36.4716 35.1183 36.4715 35.1183 36.4714C35.1182 36.4713 35.1182 36.4713 35.1182 36.4713C35.1183 36.4714 35.1185 36.4718 35.1189 36.4726C35.1197 36.4741 35.1212 36.4769 35.1234 36.4811C35.1278 36.4895 35.1349 36.5031 35.1446 36.5219C35.164 36.5595 35.1935 36.6177 35.2319 36.6955C35.3085 36.8511 35.4201 37.0847 35.555 37.3882C35.825 37.9955 36.1876 38.88 36.5508 39.9755C37.279 42.1718 38 45.1868 38 48.4996L40 48.4996C40 44.9088 39.221 41.6739 38.4492 39.3461C38.0624 38.1795 37.675 37.2334 37.3825 36.5756C37.2362 36.2465 37.1134 35.9891 37.026 35.8116C36.9822 35.7229 36.9474 35.6541 36.9228 35.6064C36.9105 35.5825 36.9008 35.5639 36.8938 35.5506C36.8903 35.544 36.8875 35.5387 36.8854 35.5348C36.8844 35.5328 36.8835 35.5312 36.8829 35.5299C36.8825 35.5293 36.8822 35.5288 36.882 35.5283C36.8818 35.5281 36.8817 35.5278 36.8816 35.5277C36.8815 35.5274 36.8814 35.5271 36 35.9996ZM38 48.4996C38 51.8124 37.279 54.8274 36.5508 57.0237C36.1876 58.1192 35.825 59.0037 35.555 59.611C35.4201 59.9145 35.3085 60.1481 35.2319 60.3037C35.1935 60.3815 35.164 60.4397 35.1446 60.4773C35.1349 60.4961 35.1278 60.5097 35.1234 60.5181C35.1212 60.5223 35.1197 60.5251 35.1189 60.5266C35.1185 60.5274 35.1183 60.5278 35.1182 60.5279C35.1182 60.5279 35.1182 60.5279 35.1183 60.5278C35.1183 60.5277 35.1184 60.5276 35.1184 60.5275C35.1185 60.5273 35.1186 60.5271 36 60.9996C36.8814 61.4721 36.8815 61.4718 36.8816 61.4716C36.8817 61.4714 36.8818 61.4711 36.882 61.4709C36.8822 61.4704 36.8825 61.4699 36.8829 61.4693C36.8835 61.468 36.8844 61.4664 36.8854 61.4644C36.8875 61.4605 36.8903 61.4552 36.8938 61.4486C36.9007 61.4353 36.9105 61.4167 36.9228 61.3928C36.9473 61.3451 36.9822 61.2763 37.026 61.1876C37.1134 61.0101 37.2362 60.7527 37.3825 60.4236C37.675 59.7658 38.0624 58.8198 38.4492 57.6531C39.221 55.3253 40 52.0904 40 48.4996L38 48.4996Z"></path> </g> </g> <g id="line"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000000" stroke-width="2"></ellipse> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 33 30.4036 33 23.5C33 16.5964 36 11 36 11"></path> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 39 41.5964 39 48.5C39 55.4036 36 61 36 61"></path> </g> </g></svg>ffee into code . 
                turns c<svg width="140px" height="140px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="#A57939"></ellipse> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 64C35.9846 64 35.981 63.9785 35.9956 63.9736C44.4605 61.1397 50.792 49.7143 50.792 36.0508C50.792 22.3796 44.4534 10.9491 35.9814 8.1232C35.9134 8.10052 35.9283 8 36 8C46.4934 8 55 20.536 55 36C55 51.464 46.4934 64 36 64Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M35.9956 63.9736L36.3131 64.9218L35.9956 63.9736ZM49.792 36.0508C49.792 42.734 48.2426 48.841 45.6871 53.6002C43.1261 58.3698 39.5986 61.7128 35.6781 63.0253L36.3131 64.9218C40.8575 63.4004 44.7282 59.6138 47.4492 54.5463C50.1758 49.4684 51.792 43.031 51.792 36.0508H49.792ZM35.665 9.07182C39.5885 10.3805 43.1193 13.7226 45.6829 18.4933C48.2408 23.2536 49.792 29.3638 49.792 36.0508H51.792C51.792 29.0666 50.174 22.6259 47.4446 17.5467C44.7209 12.4778 40.8463 8.69175 36.2978 7.17458L35.665 9.07182ZM36 9C40.8166 9 45.2921 11.8765 48.6076 16.7625C51.9193 21.643 54 28.4415 54 36H56C56 28.0945 53.8274 20.893 50.2625 15.6395C46.7013 10.3915 41.6769 7 36 7V9ZM54 36C54 43.5585 51.9193 50.357 48.6076 55.2375C45.2921 60.1235 40.8166 63 36 63V65C41.6769 65 46.7013 61.6085 50.2625 56.3605C53.8274 51.107 56 43.9055 56 36H54ZM36.2978 7.17458C36.7904 7.3389 36.9844 7.82089 36.9272 8.20152C36.8694 8.58686 36.5324 9 36 9V7C35.3959 7 35.0156 7.4634 34.9494 7.90467C34.8839 8.34123 35.1043 8.88483 35.665 9.07182L36.2978 7.17458ZM35.6781 63.0253C34.553 63.402 34.8885 65 36 65V63C37.0808 63 37.409 64.5549 36.3131 64.9218L35.6781 63.0253Z"></path> </g> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 60.9996C36 60.9996 30 49.8067 30 35.9996C30 22.2397 35.9591 11.0761 35.9998 11C35.9711 11.0538 33 16.6294 33 23.4996C33 30.4032 36 35.9996 36 35.9996C36 35.9996 39 41.596 39 48.4996C39 55.4032 36 60.9996 36 60.9996Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M36 60.9996L35.1186 61.4721C35.2928 61.7969 35.6314 61.9996 36 61.9996C36.3686 61.9996 36.7072 61.7969 36.8814 61.4721L36 60.9996ZM35.9998 11L36.8817 11.4713C37.142 10.9843 36.9583 10.3785 36.4713 10.1181C35.9843 9.85776 35.3785 10.0414 35.118 10.5283L35.9998 11ZM36 35.9996L36.8814 35.5271L36 35.9996ZM29 35.9996C29 43.0422 30.529 49.4021 32.0508 53.992C32.8126 56.2896 33.575 58.1509 34.1488 59.4413C34.4357 60.0866 34.6757 60.5897 34.8451 60.9336C34.9299 61.1056 34.997 61.2379 35.0435 61.3283C35.0668 61.3735 35.085 61.4083 35.0976 61.4323C35.1039 61.4443 35.1089 61.4537 35.1124 61.4603C35.1142 61.4636 35.1156 61.4663 35.1166 61.4682C35.1171 61.4692 35.1176 61.47 35.1179 61.4707C35.1181 61.471 35.1183 61.4713 35.1183 61.4715C35.1185 61.4718 35.1186 61.4721 36 60.9996C36.8814 60.5271 36.8815 60.5273 36.8815 60.5275C36.8815 60.5275 36.8816 60.5275 36.8816 60.5275C36.8815 60.5275 36.8814 60.5273 36.8812 60.5269C36.8808 60.5261 36.88 60.5247 36.8789 60.5226C36.8767 60.5183 36.873 60.5114 36.868 60.5018C36.8579 60.4827 36.8424 60.4529 36.8217 60.4128C36.7804 60.3325 36.7186 60.2108 36.6392 60.0498C36.4806 59.7277 36.2518 59.2484 35.9762 58.6287C35.425 57.3889 34.6874 55.589 33.9492 53.3626C32.471 48.9042 31 42.7641 31 35.9996L29 35.9996ZM35.118 10.5283C35.0545 10.6471 29 21.9887 29 35.9996L31 35.9996C31 22.4906 36.8636 11.5052 36.8816 11.4717L35.118 10.5283ZM34 23.4996C34 20.2029 34.714 17.201 35.4387 15.0073C36.1623 12.8167 36.8861 11.4631 36.8817 11.4713L35.1178 10.5286C35.0663 10.6251 32 16.3787 32 23.4996L34 23.4996ZM36 35.9996C36.8814 35.5271 36.8815 35.5273 36.8816 35.5275C36.8816 35.5276 36.8817 35.5277 36.8817 35.5278C36.8818 35.5279 36.8818 35.5279 36.8818 35.5279C36.8817 35.5278 36.8815 35.5274 36.8811 35.5266C36.8803 35.5251 36.8788 35.5223 36.8766 35.5181C36.8722 35.5097 36.8651 35.4961 36.8554 35.4773C36.836 35.4397 36.8065 35.3815 36.7681 35.3037C36.6915 35.1481 36.5799 34.9145 36.445 34.611C36.175 34.0037 35.8124 33.1192 35.4492 32.0237C34.721 29.8274 34 26.8124 34 23.4996L32 23.4996C32 27.0904 32.779 30.3253 33.5508 32.6531C33.9376 33.8198 34.325 34.7658 34.6175 35.4236C34.7638 35.7527 34.8866 36.0101 34.974 36.1876C35.0178 36.2763 35.0527 36.3451 35.0772 36.3928C35.0895 36.4167 35.0993 36.4353 35.1062 36.4486C35.1097 36.4552 35.1125 36.4605 35.1146 36.4644C35.1156 36.4664 35.1165 36.468 35.1172 36.4693C35.1175 36.4699 35.1178 36.4704 35.118 36.4709C35.1182 36.4711 35.1183 36.4714 35.1184 36.4716C35.1185 36.4718 35.1186 36.4721 36 35.9996ZM36 35.9996C35.1186 36.4721 35.1185 36.4719 35.1184 36.4717C35.1184 36.4716 35.1183 36.4715 35.1183 36.4714C35.1182 36.4713 35.1182 36.4713 35.1182 36.4713C35.1183 36.4714 35.1185 36.4718 35.1189 36.4726C35.1197 36.4741 35.1212 36.4769 35.1234 36.4811C35.1278 36.4895 35.1349 36.5031 35.1446 36.5219C35.164 36.5595 35.1935 36.6177 35.2319 36.6955C35.3085 36.8511 35.4201 37.0847 35.555 37.3882C35.825 37.9955 36.1876 38.88 36.5508 39.9755C37.279 42.1718 38 45.1868 38 48.4996L40 48.4996C40 44.9088 39.221 41.6739 38.4492 39.3461C38.0624 38.1795 37.675 37.2334 37.3825 36.5756C37.2362 36.2465 37.1134 35.9891 37.026 35.8116C36.9822 35.7229 36.9474 35.6541 36.9228 35.6064C36.9105 35.5825 36.9008 35.5639 36.8938 35.5506C36.8903 35.544 36.8875 35.5387 36.8854 35.5348C36.8844 35.5328 36.8835 35.5312 36.8829 35.5299C36.8825 35.5293 36.8822 35.5288 36.882 35.5283C36.8818 35.5281 36.8817 35.5278 36.8816 35.5277C36.8815 35.5274 36.8814 35.5271 36 35.9996ZM38 48.4996C38 51.8124 37.279 54.8274 36.5508 57.0237C36.1876 58.1192 35.825 59.0037 35.555 59.611C35.4201 59.9145 35.3085 60.1481 35.2319 60.3037C35.1935 60.3815 35.164 60.4397 35.1446 60.4773C35.1349 60.4961 35.1278 60.5097 35.1234 60.5181C35.1212 60.5223 35.1197 60.5251 35.1189 60.5266C35.1185 60.5274 35.1183 60.5278 35.1182 60.5279C35.1182 60.5279 35.1182 60.5279 35.1183 60.5278C35.1183 60.5277 35.1184 60.5276 35.1184 60.5275C35.1185 60.5273 35.1186 60.5271 36 60.9996C36.8814 61.4721 36.8815 61.4718 36.8816 61.4716C36.8817 61.4714 36.8818 61.4711 36.882 61.4709C36.8822 61.4704 36.8825 61.4699 36.8829 61.4693C36.8835 61.468 36.8844 61.4664 36.8854 61.4644C36.8875 61.4605 36.8903 61.4552 36.8938 61.4486C36.9007 61.4353 36.9105 61.4167 36.9228 61.3928C36.9473 61.3451 36.9822 61.2763 37.026 61.1876C37.1134 61.0101 37.2362 60.7527 37.3825 60.4236C37.675 59.7658 38.0624 58.8198 38.4492 57.6531C39.221 55.3253 40 52.0904 40 48.4996L38 48.4996Z"></path> </g> </g> <g id="line"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000000" stroke-width="2"></ellipse> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 33 30.4036 33 23.5C33 16.5964 36 11 36 11"></path> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 39 41.5964 39 48.5C39 55.4036 36 61 36 61"></path> </g> </g></svg>ffee into code . 
                turns c<svg width="140px" height="140px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="#A57939"></ellipse> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 64C35.9846 64 35.981 63.9785 35.9956 63.9736C44.4605 61.1397 50.792 49.7143 50.792 36.0508C50.792 22.3796 44.4534 10.9491 35.9814 8.1232C35.9134 8.10052 35.9283 8 36 8C46.4934 8 55 20.536 55 36C55 51.464 46.4934 64 36 64Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M35.9956 63.9736L36.3131 64.9218L35.9956 63.9736ZM49.792 36.0508C49.792 42.734 48.2426 48.841 45.6871 53.6002C43.1261 58.3698 39.5986 61.7128 35.6781 63.0253L36.3131 64.9218C40.8575 63.4004 44.7282 59.6138 47.4492 54.5463C50.1758 49.4684 51.792 43.031 51.792 36.0508H49.792ZM35.665 9.07182C39.5885 10.3805 43.1193 13.7226 45.6829 18.4933C48.2408 23.2536 49.792 29.3638 49.792 36.0508H51.792C51.792 29.0666 50.174 22.6259 47.4446 17.5467C44.7209 12.4778 40.8463 8.69175 36.2978 7.17458L35.665 9.07182ZM36 9C40.8166 9 45.2921 11.8765 48.6076 16.7625C51.9193 21.643 54 28.4415 54 36H56C56 28.0945 53.8274 20.893 50.2625 15.6395C46.7013 10.3915 41.6769 7 36 7V9ZM54 36C54 43.5585 51.9193 50.357 48.6076 55.2375C45.2921 60.1235 40.8166 63 36 63V65C41.6769 65 46.7013 61.6085 50.2625 56.3605C53.8274 51.107 56 43.9055 56 36H54ZM36.2978 7.17458C36.7904 7.3389 36.9844 7.82089 36.9272 8.20152C36.8694 8.58686 36.5324 9 36 9V7C35.3959 7 35.0156 7.4634 34.9494 7.90467C34.8839 8.34123 35.1043 8.88483 35.665 9.07182L36.2978 7.17458ZM35.6781 63.0253C34.553 63.402 34.8885 65 36 65V63C37.0808 63 37.409 64.5549 36.3131 64.9218L35.6781 63.0253Z"></path> </g> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 60.9996C36 60.9996 30 49.8067 30 35.9996C30 22.2397 35.9591 11.0761 35.9998 11C35.9711 11.0538 33 16.6294 33 23.4996C33 30.4032 36 35.9996 36 35.9996C36 35.9996 39 41.596 39 48.4996C39 55.4032 36 60.9996 36 60.9996Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M36 60.9996L35.1186 61.4721C35.2928 61.7969 35.6314 61.9996 36 61.9996C36.3686 61.9996 36.7072 61.7969 36.8814 61.4721L36 60.9996ZM35.9998 11L36.8817 11.4713C37.142 10.9843 36.9583 10.3785 36.4713 10.1181C35.9843 9.85776 35.3785 10.0414 35.118 10.5283L35.9998 11ZM36 35.9996L36.8814 35.5271L36 35.9996ZM29 35.9996C29 43.0422 30.529 49.4021 32.0508 53.992C32.8126 56.2896 33.575 58.1509 34.1488 59.4413C34.4357 60.0866 34.6757 60.5897 34.8451 60.9336C34.9299 61.1056 34.997 61.2379 35.0435 61.3283C35.0668 61.3735 35.085 61.4083 35.0976 61.4323C35.1039 61.4443 35.1089 61.4537 35.1124 61.4603C35.1142 61.4636 35.1156 61.4663 35.1166 61.4682C35.1171 61.4692 35.1176 61.47 35.1179 61.4707C35.1181 61.471 35.1183 61.4713 35.1183 61.4715C35.1185 61.4718 35.1186 61.4721 36 60.9996C36.8814 60.5271 36.8815 60.5273 36.8815 60.5275C36.8815 60.5275 36.8816 60.5275 36.8816 60.5275C36.8815 60.5275 36.8814 60.5273 36.8812 60.5269C36.8808 60.5261 36.88 60.5247 36.8789 60.5226C36.8767 60.5183 36.873 60.5114 36.868 60.5018C36.8579 60.4827 36.8424 60.4529 36.8217 60.4128C36.7804 60.3325 36.7186 60.2108 36.6392 60.0498C36.4806 59.7277 36.2518 59.2484 35.9762 58.6287C35.425 57.3889 34.6874 55.589 33.9492 53.3626C32.471 48.9042 31 42.7641 31 35.9996L29 35.9996ZM35.118 10.5283C35.0545 10.6471 29 21.9887 29 35.9996L31 35.9996C31 22.4906 36.8636 11.5052 36.8816 11.4717L35.118 10.5283ZM34 23.4996C34 20.2029 34.714 17.201 35.4387 15.0073C36.1623 12.8167 36.8861 11.4631 36.8817 11.4713L35.1178 10.5286C35.0663 10.6251 32 16.3787 32 23.4996L34 23.4996ZM36 35.9996C36.8814 35.5271 36.8815 35.5273 36.8816 35.5275C36.8816 35.5276 36.8817 35.5277 36.8817 35.5278C36.8818 35.5279 36.8818 35.5279 36.8818 35.5279C36.8817 35.5278 36.8815 35.5274 36.8811 35.5266C36.8803 35.5251 36.8788 35.5223 36.8766 35.5181C36.8722 35.5097 36.8651 35.4961 36.8554 35.4773C36.836 35.4397 36.8065 35.3815 36.7681 35.3037C36.6915 35.1481 36.5799 34.9145 36.445 34.611C36.175 34.0037 35.8124 33.1192 35.4492 32.0237C34.721 29.8274 34 26.8124 34 23.4996L32 23.4996C32 27.0904 32.779 30.3253 33.5508 32.6531C33.9376 33.8198 34.325 34.7658 34.6175 35.4236C34.7638 35.7527 34.8866 36.0101 34.974 36.1876C35.0178 36.2763 35.0527 36.3451 35.0772 36.3928C35.0895 36.4167 35.0993 36.4353 35.1062 36.4486C35.1097 36.4552 35.1125 36.4605 35.1146 36.4644C35.1156 36.4664 35.1165 36.468 35.1172 36.4693C35.1175 36.4699 35.1178 36.4704 35.118 36.4709C35.1182 36.4711 35.1183 36.4714 35.1184 36.4716C35.1185 36.4718 35.1186 36.4721 36 35.9996ZM36 35.9996C35.1186 36.4721 35.1185 36.4719 35.1184 36.4717C35.1184 36.4716 35.1183 36.4715 35.1183 36.4714C35.1182 36.4713 35.1182 36.4713 35.1182 36.4713C35.1183 36.4714 35.1185 36.4718 35.1189 36.4726C35.1197 36.4741 35.1212 36.4769 35.1234 36.4811C35.1278 36.4895 35.1349 36.5031 35.1446 36.5219C35.164 36.5595 35.1935 36.6177 35.2319 36.6955C35.3085 36.8511 35.4201 37.0847 35.555 37.3882C35.825 37.9955 36.1876 38.88 36.5508 39.9755C37.279 42.1718 38 45.1868 38 48.4996L40 48.4996C40 44.9088 39.221 41.6739 38.4492 39.3461C38.0624 38.1795 37.675 37.2334 37.3825 36.5756C37.2362 36.2465 37.1134 35.9891 37.026 35.8116C36.9822 35.7229 36.9474 35.6541 36.9228 35.6064C36.9105 35.5825 36.9008 35.5639 36.8938 35.5506C36.8903 35.544 36.8875 35.5387 36.8854 35.5348C36.8844 35.5328 36.8835 35.5312 36.8829 35.5299C36.8825 35.5293 36.8822 35.5288 36.882 35.5283C36.8818 35.5281 36.8817 35.5278 36.8816 35.5277C36.8815 35.5274 36.8814 35.5271 36 35.9996ZM38 48.4996C38 51.8124 37.279 54.8274 36.5508 57.0237C36.1876 58.1192 35.825 59.0037 35.555 59.611C35.4201 59.9145 35.3085 60.1481 35.2319 60.3037C35.1935 60.3815 35.164 60.4397 35.1446 60.4773C35.1349 60.4961 35.1278 60.5097 35.1234 60.5181C35.1212 60.5223 35.1197 60.5251 35.1189 60.5266C35.1185 60.5274 35.1183 60.5278 35.1182 60.5279C35.1182 60.5279 35.1182 60.5279 35.1183 60.5278C35.1183 60.5277 35.1184 60.5276 35.1184 60.5275C35.1185 60.5273 35.1186 60.5271 36 60.9996C36.8814 61.4721 36.8815 61.4718 36.8816 61.4716C36.8817 61.4714 36.8818 61.4711 36.882 61.4709C36.8822 61.4704 36.8825 61.4699 36.8829 61.4693C36.8835 61.468 36.8844 61.4664 36.8854 61.4644C36.8875 61.4605 36.8903 61.4552 36.8938 61.4486C36.9007 61.4353 36.9105 61.4167 36.9228 61.3928C36.9473 61.3451 36.9822 61.2763 37.026 61.1876C37.1134 61.0101 37.2362 60.7527 37.3825 60.4236C37.675 59.7658 38.0624 58.8198 38.4492 57.6531C39.221 55.3253 40 52.0904 40 48.4996L38 48.4996Z"></path> </g> </g> <g id="line"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000000" stroke-width="2"></ellipse> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 33 30.4036 33 23.5C33 16.5964 36 11 36 11"></path> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 39 41.5964 39 48.5C39 55.4036 36 61 36 61"></path> </g> </g></svg>ffee into code . 
                turns c<svg width="140px" height="140px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="#A57939"></ellipse> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 64C35.9846 64 35.981 63.9785 35.9956 63.9736C44.4605 61.1397 50.792 49.7143 50.792 36.0508C50.792 22.3796 44.4534 10.9491 35.9814 8.1232C35.9134 8.10052 35.9283 8 36 8C46.4934 8 55 20.536 55 36C55 51.464 46.4934 64 36 64Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M35.9956 63.9736L36.3131 64.9218L35.9956 63.9736ZM49.792 36.0508C49.792 42.734 48.2426 48.841 45.6871 53.6002C43.1261 58.3698 39.5986 61.7128 35.6781 63.0253L36.3131 64.9218C40.8575 63.4004 44.7282 59.6138 47.4492 54.5463C50.1758 49.4684 51.792 43.031 51.792 36.0508H49.792ZM35.665 9.07182C39.5885 10.3805 43.1193 13.7226 45.6829 18.4933C48.2408 23.2536 49.792 29.3638 49.792 36.0508H51.792C51.792 29.0666 50.174 22.6259 47.4446 17.5467C44.7209 12.4778 40.8463 8.69175 36.2978 7.17458L35.665 9.07182ZM36 9C40.8166 9 45.2921 11.8765 48.6076 16.7625C51.9193 21.643 54 28.4415 54 36H56C56 28.0945 53.8274 20.893 50.2625 15.6395C46.7013 10.3915 41.6769 7 36 7V9ZM54 36C54 43.5585 51.9193 50.357 48.6076 55.2375C45.2921 60.1235 40.8166 63 36 63V65C41.6769 65 46.7013 61.6085 50.2625 56.3605C53.8274 51.107 56 43.9055 56 36H54ZM36.2978 7.17458C36.7904 7.3389 36.9844 7.82089 36.9272 8.20152C36.8694 8.58686 36.5324 9 36 9V7C35.3959 7 35.0156 7.4634 34.9494 7.90467C34.8839 8.34123 35.1043 8.88483 35.665 9.07182L36.2978 7.17458ZM35.6781 63.0253C34.553 63.402 34.8885 65 36 65V63C37.0808 63 37.409 64.5549 36.3131 64.9218L35.6781 63.0253Z"></path> </g> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 60.9996C36 60.9996 30 49.8067 30 35.9996C30 22.2397 35.9591 11.0761 35.9998 11C35.9711 11.0538 33 16.6294 33 23.4996C33 30.4032 36 35.9996 36 35.9996C36 35.9996 39 41.596 39 48.4996C39 55.4032 36 60.9996 36 60.9996Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M36 60.9996L35.1186 61.4721C35.2928 61.7969 35.6314 61.9996 36 61.9996C36.3686 61.9996 36.7072 61.7969 36.8814 61.4721L36 60.9996ZM35.9998 11L36.8817 11.4713C37.142 10.9843 36.9583 10.3785 36.4713 10.1181C35.9843 9.85776 35.3785 10.0414 35.118 10.5283L35.9998 11ZM36 35.9996L36.8814 35.5271L36 35.9996ZM29 35.9996C29 43.0422 30.529 49.4021 32.0508 53.992C32.8126 56.2896 33.575 58.1509 34.1488 59.4413C34.4357 60.0866 34.6757 60.5897 34.8451 60.9336C34.9299 61.1056 34.997 61.2379 35.0435 61.3283C35.0668 61.3735 35.085 61.4083 35.0976 61.4323C35.1039 61.4443 35.1089 61.4537 35.1124 61.4603C35.1142 61.4636 35.1156 61.4663 35.1166 61.4682C35.1171 61.4692 35.1176 61.47 35.1179 61.4707C35.1181 61.471 35.1183 61.4713 35.1183 61.4715C35.1185 61.4718 35.1186 61.4721 36 60.9996C36.8814 60.5271 36.8815 60.5273 36.8815 60.5275C36.8815 60.5275 36.8816 60.5275 36.8816 60.5275C36.8815 60.5275 36.8814 60.5273 36.8812 60.5269C36.8808 60.5261 36.88 60.5247 36.8789 60.5226C36.8767 60.5183 36.873 60.5114 36.868 60.5018C36.8579 60.4827 36.8424 60.4529 36.8217 60.4128C36.7804 60.3325 36.7186 60.2108 36.6392 60.0498C36.4806 59.7277 36.2518 59.2484 35.9762 58.6287C35.425 57.3889 34.6874 55.589 33.9492 53.3626C32.471 48.9042 31 42.7641 31 35.9996L29 35.9996ZM35.118 10.5283C35.0545 10.6471 29 21.9887 29 35.9996L31 35.9996C31 22.4906 36.8636 11.5052 36.8816 11.4717L35.118 10.5283ZM34 23.4996C34 20.2029 34.714 17.201 35.4387 15.0073C36.1623 12.8167 36.8861 11.4631 36.8817 11.4713L35.1178 10.5286C35.0663 10.6251 32 16.3787 32 23.4996L34 23.4996ZM36 35.9996C36.8814 35.5271 36.8815 35.5273 36.8816 35.5275C36.8816 35.5276 36.8817 35.5277 36.8817 35.5278C36.8818 35.5279 36.8818 35.5279 36.8818 35.5279C36.8817 35.5278 36.8815 35.5274 36.8811 35.5266C36.8803 35.5251 36.8788 35.5223 36.8766 35.5181C36.8722 35.5097 36.8651 35.4961 36.8554 35.4773C36.836 35.4397 36.8065 35.3815 36.7681 35.3037C36.6915 35.1481 36.5799 34.9145 36.445 34.611C36.175 34.0037 35.8124 33.1192 35.4492 32.0237C34.721 29.8274 34 26.8124 34 23.4996L32 23.4996C32 27.0904 32.779 30.3253 33.5508 32.6531C33.9376 33.8198 34.325 34.7658 34.6175 35.4236C34.7638 35.7527 34.8866 36.0101 34.974 36.1876C35.0178 36.2763 35.0527 36.3451 35.0772 36.3928C35.0895 36.4167 35.0993 36.4353 35.1062 36.4486C35.1097 36.4552 35.1125 36.4605 35.1146 36.4644C35.1156 36.4664 35.1165 36.468 35.1172 36.4693C35.1175 36.4699 35.1178 36.4704 35.118 36.4709C35.1182 36.4711 35.1183 36.4714 35.1184 36.4716C35.1185 36.4718 35.1186 36.4721 36 35.9996ZM36 35.9996C35.1186 36.4721 35.1185 36.4719 35.1184 36.4717C35.1184 36.4716 35.1183 36.4715 35.1183 36.4714C35.1182 36.4713 35.1182 36.4713 35.1182 36.4713C35.1183 36.4714 35.1185 36.4718 35.1189 36.4726C35.1197 36.4741 35.1212 36.4769 35.1234 36.4811C35.1278 36.4895 35.1349 36.5031 35.1446 36.5219C35.164 36.5595 35.1935 36.6177 35.2319 36.6955C35.3085 36.8511 35.4201 37.0847 35.555 37.3882C35.825 37.9955 36.1876 38.88 36.5508 39.9755C37.279 42.1718 38 45.1868 38 48.4996L40 48.4996C40 44.9088 39.221 41.6739 38.4492 39.3461C38.0624 38.1795 37.675 37.2334 37.3825 36.5756C37.2362 36.2465 37.1134 35.9891 37.026 35.8116C36.9822 35.7229 36.9474 35.6541 36.9228 35.6064C36.9105 35.5825 36.9008 35.5639 36.8938 35.5506C36.8903 35.544 36.8875 35.5387 36.8854 35.5348C36.8844 35.5328 36.8835 35.5312 36.8829 35.5299C36.8825 35.5293 36.8822 35.5288 36.882 35.5283C36.8818 35.5281 36.8817 35.5278 36.8816 35.5277C36.8815 35.5274 36.8814 35.5271 36 35.9996ZM38 48.4996C38 51.8124 37.279 54.8274 36.5508 57.0237C36.1876 58.1192 35.825 59.0037 35.555 59.611C35.4201 59.9145 35.3085 60.1481 35.2319 60.3037C35.1935 60.3815 35.164 60.4397 35.1446 60.4773C35.1349 60.4961 35.1278 60.5097 35.1234 60.5181C35.1212 60.5223 35.1197 60.5251 35.1189 60.5266C35.1185 60.5274 35.1183 60.5278 35.1182 60.5279C35.1182 60.5279 35.1182 60.5279 35.1183 60.5278C35.1183 60.5277 35.1184 60.5276 35.1184 60.5275C35.1185 60.5273 35.1186 60.5271 36 60.9996C36.8814 61.4721 36.8815 61.4718 36.8816 61.4716C36.8817 61.4714 36.8818 61.4711 36.882 61.4709C36.8822 61.4704 36.8825 61.4699 36.8829 61.4693C36.8835 61.468 36.8844 61.4664 36.8854 61.4644C36.8875 61.4605 36.8903 61.4552 36.8938 61.4486C36.9007 61.4353 36.9105 61.4167 36.9228 61.3928C36.9473 61.3451 36.9822 61.2763 37.026 61.1876C37.1134 61.0101 37.2362 60.7527 37.3825 60.4236C37.675 59.7658 38.0624 58.8198 38.4492 57.6531C39.221 55.3253 40 52.0904 40 48.4996L38 48.4996Z"></path> </g> </g> <g id="line"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000000" stroke-width="2"></ellipse> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 33 30.4036 33 23.5C33 16.5964 36 11 36 11"></path> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 39 41.5964 39 48.5C39 55.4036 36 61 36 61"></path> </g> </g></svg>ffee into code . 
                turns c<svg width="140px" height="140px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="#A57939"></ellipse> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 64C35.9846 64 35.981 63.9785 35.9956 63.9736C44.4605 61.1397 50.792 49.7143 50.792 36.0508C50.792 22.3796 44.4534 10.9491 35.9814 8.1232C35.9134 8.10052 35.9283 8 36 8C46.4934 8 55 20.536 55 36C55 51.464 46.4934 64 36 64Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M35.9956 63.9736L36.3131 64.9218L35.9956 63.9736ZM49.792 36.0508C49.792 42.734 48.2426 48.841 45.6871 53.6002C43.1261 58.3698 39.5986 61.7128 35.6781 63.0253L36.3131 64.9218C40.8575 63.4004 44.7282 59.6138 47.4492 54.5463C50.1758 49.4684 51.792 43.031 51.792 36.0508H49.792ZM35.665 9.07182C39.5885 10.3805 43.1193 13.7226 45.6829 18.4933C48.2408 23.2536 49.792 29.3638 49.792 36.0508H51.792C51.792 29.0666 50.174 22.6259 47.4446 17.5467C44.7209 12.4778 40.8463 8.69175 36.2978 7.17458L35.665 9.07182ZM36 9C40.8166 9 45.2921 11.8765 48.6076 16.7625C51.9193 21.643 54 28.4415 54 36H56C56 28.0945 53.8274 20.893 50.2625 15.6395C46.7013 10.3915 41.6769 7 36 7V9ZM54 36C54 43.5585 51.9193 50.357 48.6076 55.2375C45.2921 60.1235 40.8166 63 36 63V65C41.6769 65 46.7013 61.6085 50.2625 56.3605C53.8274 51.107 56 43.9055 56 36H54ZM36.2978 7.17458C36.7904 7.3389 36.9844 7.82089 36.9272 8.20152C36.8694 8.58686 36.5324 9 36 9V7C35.3959 7 35.0156 7.4634 34.9494 7.90467C34.8839 8.34123 35.1043 8.88483 35.665 9.07182L36.2978 7.17458ZM35.6781 63.0253C34.553 63.402 34.8885 65 36 65V63C37.0808 63 37.409 64.5549 36.3131 64.9218L35.6781 63.0253Z"></path> </g> <g> <path fill="#6A462F" fill-rule="evenodd" d="M36 60.9996C36 60.9996 30 49.8067 30 35.9996C30 22.2397 35.9591 11.0761 35.9998 11C35.9711 11.0538 33 16.6294 33 23.4996C33 30.4032 36 35.9996 36 35.9996C36 35.9996 39 41.596 39 48.4996C39 55.4032 36 60.9996 36 60.9996Z" clip-rule="evenodd"></path> <path fill="#6A462F" d="M36 60.9996L35.1186 61.4721C35.2928 61.7969 35.6314 61.9996 36 61.9996C36.3686 61.9996 36.7072 61.7969 36.8814 61.4721L36 60.9996ZM35.9998 11L36.8817 11.4713C37.142 10.9843 36.9583 10.3785 36.4713 10.1181C35.9843 9.85776 35.3785 10.0414 35.118 10.5283L35.9998 11ZM36 35.9996L36.8814 35.5271L36 35.9996ZM29 35.9996C29 43.0422 30.529 49.4021 32.0508 53.992C32.8126 56.2896 33.575 58.1509 34.1488 59.4413C34.4357 60.0866 34.6757 60.5897 34.8451 60.9336C34.9299 61.1056 34.997 61.2379 35.0435 61.3283C35.0668 61.3735 35.085 61.4083 35.0976 61.4323C35.1039 61.4443 35.1089 61.4537 35.1124 61.4603C35.1142 61.4636 35.1156 61.4663 35.1166 61.4682C35.1171 61.4692 35.1176 61.47 35.1179 61.4707C35.1181 61.471 35.1183 61.4713 35.1183 61.4715C35.1185 61.4718 35.1186 61.4721 36 60.9996C36.8814 60.5271 36.8815 60.5273 36.8815 60.5275C36.8815 60.5275 36.8816 60.5275 36.8816 60.5275C36.8815 60.5275 36.8814 60.5273 36.8812 60.5269C36.8808 60.5261 36.88 60.5247 36.8789 60.5226C36.8767 60.5183 36.873 60.5114 36.868 60.5018C36.8579 60.4827 36.8424 60.4529 36.8217 60.4128C36.7804 60.3325 36.7186 60.2108 36.6392 60.0498C36.4806 59.7277 36.2518 59.2484 35.9762 58.6287C35.425 57.3889 34.6874 55.589 33.9492 53.3626C32.471 48.9042 31 42.7641 31 35.9996L29 35.9996ZM35.118 10.5283C35.0545 10.6471 29 21.9887 29 35.9996L31 35.9996C31 22.4906 36.8636 11.5052 36.8816 11.4717L35.118 10.5283ZM34 23.4996C34 20.2029 34.714 17.201 35.4387 15.0073C36.1623 12.8167 36.8861 11.4631 36.8817 11.4713L35.1178 10.5286C35.0663 10.6251 32 16.3787 32 23.4996L34 23.4996ZM36 35.9996C36.8814 35.5271 36.8815 35.5273 36.8816 35.5275C36.8816 35.5276 36.8817 35.5277 36.8817 35.5278C36.8818 35.5279 36.8818 35.5279 36.8818 35.5279C36.8817 35.5278 36.8815 35.5274 36.8811 35.5266C36.8803 35.5251 36.8788 35.5223 36.8766 35.5181C36.8722 35.5097 36.8651 35.4961 36.8554 35.4773C36.836 35.4397 36.8065 35.3815 36.7681 35.3037C36.6915 35.1481 36.5799 34.9145 36.445 34.611C36.175 34.0037 35.8124 33.1192 35.4492 32.0237C34.721 29.8274 34 26.8124 34 23.4996L32 23.4996C32 27.0904 32.779 30.3253 33.5508 32.6531C33.9376 33.8198 34.325 34.7658 34.6175 35.4236C34.7638 35.7527 34.8866 36.0101 34.974 36.1876C35.0178 36.2763 35.0527 36.3451 35.0772 36.3928C35.0895 36.4167 35.0993 36.4353 35.1062 36.4486C35.1097 36.4552 35.1125 36.4605 35.1146 36.4644C35.1156 36.4664 35.1165 36.468 35.1172 36.4693C35.1175 36.4699 35.1178 36.4704 35.118 36.4709C35.1182 36.4711 35.1183 36.4714 35.1184 36.4716C35.1185 36.4718 35.1186 36.4721 36 35.9996ZM36 35.9996C35.1186 36.4721 35.1185 36.4719 35.1184 36.4717C35.1184 36.4716 35.1183 36.4715 35.1183 36.4714C35.1182 36.4713 35.1182 36.4713 35.1182 36.4713C35.1183 36.4714 35.1185 36.4718 35.1189 36.4726C35.1197 36.4741 35.1212 36.4769 35.1234 36.4811C35.1278 36.4895 35.1349 36.5031 35.1446 36.5219C35.164 36.5595 35.1935 36.6177 35.2319 36.6955C35.3085 36.8511 35.4201 37.0847 35.555 37.3882C35.825 37.9955 36.1876 38.88 36.5508 39.9755C37.279 42.1718 38 45.1868 38 48.4996L40 48.4996C40 44.9088 39.221 41.6739 38.4492 39.3461C38.0624 38.1795 37.675 37.2334 37.3825 36.5756C37.2362 36.2465 37.1134 35.9891 37.026 35.8116C36.9822 35.7229 36.9474 35.6541 36.9228 35.6064C36.9105 35.5825 36.9008 35.5639 36.8938 35.5506C36.8903 35.544 36.8875 35.5387 36.8854 35.5348C36.8844 35.5328 36.8835 35.5312 36.8829 35.5299C36.8825 35.5293 36.8822 35.5288 36.882 35.5283C36.8818 35.5281 36.8817 35.5278 36.8816 35.5277C36.8815 35.5274 36.8814 35.5271 36 35.9996ZM38 48.4996C38 51.8124 37.279 54.8274 36.5508 57.0237C36.1876 58.1192 35.825 59.0037 35.555 59.611C35.4201 59.9145 35.3085 60.1481 35.2319 60.3037C35.1935 60.3815 35.164 60.4397 35.1446 60.4773C35.1349 60.4961 35.1278 60.5097 35.1234 60.5181C35.1212 60.5223 35.1197 60.5251 35.1189 60.5266C35.1185 60.5274 35.1183 60.5278 35.1182 60.5279C35.1182 60.5279 35.1182 60.5279 35.1183 60.5278C35.1183 60.5277 35.1184 60.5276 35.1184 60.5275C35.1185 60.5273 35.1186 60.5271 36 60.9996C36.8814 61.4721 36.8815 61.4718 36.8816 61.4716C36.8817 61.4714 36.8818 61.4711 36.882 61.4709C36.8822 61.4704 36.8825 61.4699 36.8829 61.4693C36.8835 61.468 36.8844 61.4664 36.8854 61.4644C36.8875 61.4605 36.8903 61.4552 36.8938 61.4486C36.9007 61.4353 36.9105 61.4167 36.9228 61.3928C36.9473 61.3451 36.9822 61.2763 37.026 61.1876C37.1134 61.0101 37.2362 60.7527 37.3825 60.4236C37.675 59.7658 38.0624 58.8198 38.4492 57.6531C39.221 55.3253 40 52.0904 40 48.4996L38 48.4996Z"></path> </g> </g> <g id="line"> <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000000" stroke-width="2"></ellipse> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 33 30.4036 33 23.5C33 16.5964 36 11 36 11"></path> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36C36 36 39 41.5964 39 48.5C39 55.4036 36 61 36 61"></path> </g> </g></svg>ffee into code.</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
    </Layout>
  );
};
export default Index4OnePage;
