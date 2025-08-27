import { useState, useEffect } from "react";

function Hero() {
    const words = [
        "Native Android Developer!",
        "Web Developer!",
        "Computer Science Student!"
    ];

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;
        if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
                setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
            }, 125);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <div id="hero" className="w-[60%] lg:w-[40%] mx-auto px-2 lg:px-16 md:px-10 sm:px-6 py-6 lg:py-12 md:py-8 sm:py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-white">
            <h1 className="text-[0.85rem] lg:text-4xl md:text-lg sm:text-sm font-bold"> Hi </h1>
            <h1 className="text-[1rem] lg:text-5xl ms:text-2xl sm:text-lg font-bold mt-2 sm:mt-1">
                I'm <span className="text-[#bc39f5]">Govind Sankar</span>
            </h1>
            <h2 className="text-[0.85rem] lg:mt-3 sm:mt-1 sm:text-sm md:text-lg lg:text-lg font-medium text-white">
                I'm a <span className="text-[#6af4cd]">{text}</span><span className="blinking-cursor">|</span>
            </h2>
            <div className="flex flex-row space-x-5 mt-4 lg:mt-8">
                <a href="https://github.com/Govind-Sankar" target='_blank'>
                    <button className="px-2 sm:px-2 lg:px-8 cursor-pointer relative inline-flex items-center justify-center  py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#7f3fc3] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
                                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
                            </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487" >
                                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" ></path>
                            </svg>
                        </span>
                        <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                        ></span>
                        <svg className="relative text-base font-semibold" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                        </svg>
                        <span className="text-[0.75rem] lg:text-xl ml-2 relative text-base font-semibold">GitHub</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/govind-sankar-a2127a307/" target='_blank'>
                    <button className="px-2 sm:px-2 lg:px-8 cursor-pointer relative inline-flex items-center justify-center py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#7f3fc3] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487" >
                                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
                            </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487" >
                                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" ></path>
                            </svg>
                        </span>
                        <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                        ></span>
                        <svg className="relative text-base font-semibold" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                        </svg>
                        <span className="text-[0.75rem] lg:text-xl ml-2 relative text-base font-semibold">LinkedIn</span>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Hero;

