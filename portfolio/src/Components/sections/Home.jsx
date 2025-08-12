import { TypeAnimation } from 'react-type-animation';
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center relative">
            <div className="text-center z-10 px-4">
                <div>
                    <img src="/profile.jpg" alt="Tshering Tamang" className="w-3/4 max-w-xs mb-6 mt-8 mx-auto rounded-full border-4 border-blue-400 shadow-lg"
                    
                    />
                </div>

                <h1 className="text-5xl md:text7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight font-mono">
                    Hi, I'm Tshering Tamang
                </h1>

                <p className="text-3xl md:text5xl font-bold text-gray-700 max-w-lg mx-auto mb-8">
                    I'm a <span className="text-blue-500">
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                1000,
                                'Backend Enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </span>

                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#contact" 
                     className="bg-blue-500 text-white py-3 px-6 rounded-3xl font-medium transition"
                     >
                        Contact me
                    </a>
                    <a href="#" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-3xl font-medium transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};