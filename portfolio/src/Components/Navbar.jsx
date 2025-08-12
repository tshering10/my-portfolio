import { useEffect } from "react"
export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl m-auto px-4">
            <div className="flex justify-between items-center h-17">
                <a href="#home" className="font-mono text-2xl font-bold text-white cursor-pointer">
                    {""}
                    tmg<span className="text-orange-600 drop-shadow-lg">.dev</span> {""}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}
                    >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Home{" "}
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-orange transition-colors">
                        {" "}
                        About{" "}
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Projects{" "}
                    </a>
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Contact{" "}
                    </a>
                </div>
            </div>
        </div>
    </nav>
};