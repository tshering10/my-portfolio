import { RevealOnScroll } from "./RevealOnScroll";
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mb-4">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Hi there! I'm Tshering Tamang
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  A passionate Software Developer with a love for creating
                  efficient, scalable solutions. I specialize in backend
                  development and enjoy turning complex problems into simple,
                  beautiful, and intuitive solutions.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500">
                  My Expertise
                </h4>
                {/* Frontend Skills */}
                <div className="space-y-3">
                  <h5 className="text-base sm:text-lg font-medium">Frontend</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["HTML5", "CSS3", "JavaScript", "React"].map(
                      (skill, index) => (
                        <div
                          key={index}
                          className=" backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-400/30 text-center transition-all duration-300 hover:scale-105"
                        >
                          <span className="text-blue-200 font-medium text-sm sm:text-base">
                            {skill}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="space-y-3">
                  <h5 className="text-base sm:text-lg font-medium">Backend</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Python",
                      "Django",
                      "Rest Framework",
                      "API Development",
                      "MySQL",
                      "PostgreSQL",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-400/30 text-center transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-blue-200 font-medium text-sm sm:text-base">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="space-y-6">
                    {/* Code Terminal */}
                    <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm font-mono">
                        <div className="text-blue-400">
                          const developer = &#123;
                        </div>
                        <div className="text-white ml-4">
                          name: "Tshering Tamang",
                        </div>
                        <div className="text-white ml-4">focus: "Backend",</div>
                        <div className="text-white ml-4">
                          loves: "Clean Code",
                        </div>
                        <div className="text-white ml-4">
                          location: "Kathmandu, Nepal"
                        </div>
                        <div className="text-blue-400">&#125;;</div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">
                            Backend Development
                          </span>
                          <span className="text-blue-500">90%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">Database Design</span>
                          <span className="text-cyan-500">85%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse"
                            style={{ width: "85%", animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">Problem Solving</span>
                          <span className="text-blue-400">95%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full animate-pulse"
                            style={{ width: "95%", animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-500 rounded-full animate-bounce opacity-80"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
