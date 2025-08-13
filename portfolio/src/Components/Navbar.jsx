import { useEffect } from "react"
export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-6xl m-auto px-4">
            <div className="flex justify-between items-center h-17">
                <a href="#home" className="font-mono text-3xl font-bold text-white cursor-pointer">
                    {""}
                    tmg<span className="text-orange-600 drop-shadow-lg">.dev</span> {""}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}
                    >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8 text-lg">
                    {/* Regular navigation links */}
                    <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 relative group ">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </a>
                    
                    {/* Contact button with extra spacing */}
                    <a href="#contact" className="ml-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
};