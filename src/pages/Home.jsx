import Certifications from "../components/Certifications";
import ProjectComponent from "../components/ProjectComponent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import profile from "../assets/wizard_profile.jpeg";

function Home() {
  return (
    <div className="mx-[5%] lg:mx-40">

      <section className="min-h-screen pb-8 content-around text-white" id="about">
        <div className="flex flex-row justify-start space-x-4 lg:space-x-16 mb-16 mt-20 items-center lg:pl-28 text-white">
          <img src={profile} alt="Profile Picture" className="w-[20vw] sm:w-[18vw] md:w-[10vw] lg:w-[12vw] rounded-full" />
          <div className="flex flex-col justify-center items-start text-start">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-cyan-400">Govind Sankar</h1>
            <p className="mt-2 lg:mt-4 text-sm lg:text-lg text-orange-100">Just a young explorer trying to learn cool new stuff.</p>
            <div className="mt-2 lg:my-3 font-light">
              <p className="skill-Main text-sm lg:text-lg">Native Android Developer <span className="skill-Stack">| Kotlin & Jetpack Compose</span></p>
              <p className="skill-Main text-sm lg:text-lg">Web Developer <span className="skill-Stack">| HTML, CSS, Javascript, Tailwindcss, React</span></p>
              <p className="skill-Main text-sm lg:text-lg">Machine Learning Enthusiast <span className="skill-Stack">| Python, Numpy, Pandas, Matplotlib, Seaborn</span></p>
            </div>

          </div>
        </div>
        <div className="pt-7 pb-3 section-area">
          <h2 className='section-heading' >About Me</h2>
          <p className='about-text'>
            I'm a Computer Science student at Vellore Institute of Technology, Chennai. I really enjoy working on Native Android Development and I'm also diving into Artificial Intelligence and Machine Learning.
            I like solving problems and taking on projects that challenge me and help me grow.
          </p>
          <p className="about-text">
            Learning new things and working with others is what keeps me motivated.
            When I'm not coding, I'm usually working in some club, contributing to open-source, or just experimenting with new ideas.
          </p>
          <p className='about-text'>
            Take a look around my portfolio to see what I've been up to, and if you want to chat or work together, feel free to reach out!
          </p>
        </div>
      </section>

      <ProjectComponent />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  );
}
export default Home;
