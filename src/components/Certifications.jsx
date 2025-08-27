import "../index.css";
import '../themes.css';
import certificates from '../data/certificationData.js';

function Certifications() {
  return (
    <section id="certificates" className="pt-10 pb-5 scroll-mt-20 section-area">
      <h1 className="section-heading">Certifications</h1>
      <div className='grid grid-flow-row-dense gap-3 pt-5'>

        {certificates.map((certificate, key) => (

          <div key={certificate.certification_title} className='certification-item'>
            <div className='certification-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="White" viewBox="0 0 256 256">
                <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z" />
              </svg>
            </div>
            <div className='certification-text'>
              <a href={certificate.link} target="_blank">
                <p className='certification-title'>{certificate.certification_title}</p>
              </a>
              <p className='text-[var(--card-description-color)]'>{"Issued by " + certificate.certification_description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Certifications;