import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";

function Contact() {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [status, setStatus] = useState("idle");
    const [showAlert, setShowAlert] = useState(true);

    async function getClientIp() {
        return "unknown";
    }

    useEffect(() => {
        if (status === "success" || status === "error") {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setStatus("idle");
                setShowAlert(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        if (!recaptchaValue) {
            setStatus("error");
            return;
        }

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            ip: await getClientIp(),
            botField: form.botField.value,
            recaptchaToken: recaptchaValue,
        };

        if (data.botField) {
            return;
        }

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzfrL8ubt835GE67cIu0Bkup2WzKlVJ5Gdtsa4hkN2BOoYShDT5CEUF2Vxvn6MsSSFYRg/exec",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                });
            setStatus("success");
            form.reset();
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="pt-5 pb-4 section-area scroll-m-10">
            <h1 className="section-heading">Contact Me</h1>
            <div className="flex items-center space-x-4 pt-5">
                <a
                    href="https://github.com/Govind-Sankar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-[#283039] rounded-md group"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#7f3fc3] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="relative"
                    >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                    <span className="ml-2 relative font-semibold">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/govind-sankar-a2127a307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-[#283039] rounded-md group"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#7f3fc3] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="relative"
                    >
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                    <span className="ml-2 relative font-semibold">LinkedIn</span>
                </a>
            </div>
            <form onSubmit={handleSubmit}>
                <p className='contacts-title pt-3 pb-3'>Name</p>
                <input className='email-field' type='text' placeholder='Your name' name='name' required />
                <p className='contacts-title pt-3 pb-3'>Email</p>
                <input className='email-field' type='email' placeholder='your.email@example.com' name='email' required />
                <p className='contacts-title pt-3 pb-3'>Message</p>
                <textarea className='message-field' type='text' placeholder='Your message' name='message' style={{ resize: 'none' }} maxLength="150" required />
                <input type="text" name="botField" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                <ReCAPTCHA sitekey="6Lf3abErAAAAAC0K-SEK00l6UrLMnfd3lpSWPvCu" className="pt-3" onChange={(value) => setRecaptchaValue(value)} theme="dark" />

                <div className="grid grid-flow-col auto-cols-max pt-2">
                    {status === "loading" ? (
                        <button className="mt-3 mb-3 py-2.5 px-2 w-20 rounded-md text-white bg-purple-600 hover:bg-purple-700 flex items-center justify-center" disabled >
                            <svg width="32" height="16" viewBox="0 0 64 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loading" >
                                <title>Loading…</title>
                                <style>
                                    {`
                                        svg { color: #ffffffa0; } 
                                        .dot { fill: currentColor; animation: bounce 1s infinite ease-in-out; transform-origin: center; }
                                        .dot:nth-of-type(1) { animation-delay: 0s; }
                                        .dot:nth-of-type(2) { animation-delay: -0.3s; }
                                        .dot:nth-of-type(3) { animation-delay: -0.5s; }

                                        @keyframes bounce {
                                        0%, 100% { transform: translateY(0); }
                                        50%      { transform: translateY(-4px); }
                                        }
                                    `}
                                </style>
                                <circle className="dot" cx="8" cy="8" r="8" />
                                <circle className="dot" cx="32" cy="8" r="8" />
                                <circle className="dot" cx="56" cy="8" r="8" />
                            </svg>
                        </button>
                    ) : <button className="form-button" type="submit" > Submit </button>
                    }
                </div>

                <div className="p-4">
                    {status === "error" && showAlert && (
                        <div className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" >
                            <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <div className="ms-3 text-sm font-medium">Error in sending message! Recheck Captcha and your network connectivity.</div>
                            <button type="button" onClick={() => setShowAlert(false)} className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" aria-label="Close" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {status === "success" && showAlert && (
                        <div className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert" >
                            <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <div className="ms-3 text-sm font-medium">Successfully sent!</div>
                            <button type="button" onClick={() => setShowAlert(false)} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" aria-label="Close" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

            </form>
        </section>
    );
}

export default Contact;
