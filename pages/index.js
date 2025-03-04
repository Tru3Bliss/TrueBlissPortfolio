import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

import { BsDiscord } from "react-icons/bs";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>I am a Full stack, Blockchain Engineer. I have rich experience in web3 project and building and Customization, also I am good at Solidity & Rust. I love to talk with you about your vision and idea.</p>`;

const IndexDark = () => {
  const handleDownload = () => {
    const fileUrl = "/CV.pdf"; // replace with the path to your file
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "True Bliss.pdf"; // replace with the name of your file
    link.click();
  };

  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/logo.png)",  }}
          />
          <div className="title">Ture Bliss</div>
          <TypingAnimation />
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/XTruebliss"
            >
              <span className="fa fa-twitter" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/Tru3B1iss"
            >
              <span className="fa fa-telegram" />
            </a>
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/2En0/"
            >
              <span className="fa fa-linkedin" />
            </a> */}
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://join.skype.com/invite/rO3zsYvYPklL"
            >
              <span className="fa fa-skype" />
            </a> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discordapp.com/users/1274339638668038187"
            >
              <span
                className="fa"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BsDiscord />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tru3bliss/"
            >
              <span className="fa fa-github" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a className="lnk" onClick={() => handleDownload()} href="#">
              <span className="text">Download CV</span>
              <span className="ion ion-ios-cloud-download"></span>
            </a>
            <a
              href="https://t.me/Tru3B1iss"
              className="lnk discover"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
        </About>
        <Resume>
          {/* <ResumeSection /> */}
          <Skills />
          {/* <Testimonials /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
