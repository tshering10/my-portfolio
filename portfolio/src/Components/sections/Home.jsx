import { TypeAnimation } from "react-type-animation";
import { RevealOnScroll } from "./RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight font-mono">
                Hi, I'm <span className="block lg:inline">Tshering Tamang</span>
              </h1>

              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-700">
                I'm a{" "}
                <span className="text-blue-500">
                  <TypeAnimation
                    sequence={[
                      "Software Developer",
                      1000,
                      "Backend Enthusiast",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0">
                Passionate about creating efficient, scalable solutions and
                bringing ideas to life through clean, maintainable code.
              </p>

              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
                <a
                  href="#contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume-Tshering-Tamang.pdf"
                  download="Tshering_Tamang_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-0">
              <div className="relative max-w-full">
                <img
                  src="/profile.jpg"
                  alt="Tshering Tamang"
                  className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-pink-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
