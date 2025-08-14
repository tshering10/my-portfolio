import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowUp } from 'react-icons/bs';
import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/50 border-t border-white/10 py-8 sm:py-12">
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-3">
                            Tshering Tamang
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Software Developer passionate about creating efficient, scalable solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a 
                                href="#home"
                                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                            >
                                Home
                            </a>
                            <a 
                                href="#about"
                                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                            >
                                About
                            </a>
                            <a 
                                href="#projects"
                                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact"
                                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            <a 
                                href="https://github.com/tshering10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a 
                                href="https://linkedin.com/in/tsheringtamang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5 text-gray-400  group-hover:text-white" />
                            </a>
                            <a 
                                href="https://www.facebook.com/xering.tamang.256"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a 
                                href="mailto:tshering.work1.@gmail.com"
                                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
                                aria-label="Email"
                            >
                                <HiOutlineMail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                        
                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
                            aria-label="Back to top"
                        >
                            <BsArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                            Back to Top
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                            © {currentYear} Tshering Tamang. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
                            <span>Built with React & Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </footer>
    );
};