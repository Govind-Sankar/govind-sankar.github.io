import Certifications from "../components/Certifications";
import ProjectComponent from "../components/ProjectComponent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="mx-[5%] lg:mx-40">

      <About />

      <ProjectComponent />

      {/* <Education /> */}

      {/* <Skills /> */}

      <Certifications />

      <Contact />

      <Footer />

    </div>
  );
}
export default Home;
