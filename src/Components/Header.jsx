import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { IoMenu, IoClose, IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FaRegUser, FaFolderOpen, FaSlideshare    } from "react-icons/fa6";
import { RiHome5Line } from "react-icons/ri";

const navLinks = [
  { id: 'home', icon: <RiHome5Line />, alt:'Home', name: 'Home' },
  { id: 'about', icon: < FaRegUser  />, alt:'About',  name: 'About'},
  { id: 'project', icon: <FaFolderOpen />, alt:'Project',  name: 'Project'},
  { id: 'skills', icon: <FaSlideshare  />, alt:'Skills',  name: 'Skills'},
  { id: 'contact', icon: <IoChatboxEllipsesOutline/>, alt:'Contact',  name: 'Contact'},
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY) {
            setIsScrolled(true);
        } else (
            setIsScrolled(false)
        )
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0.5, behavior: "instant" });
    }, []);

    return (
        <header className={`flex items-center justify-between w-full px-7 py-3.5 pt-4 md:pt-10 lg:px-20 fixed top-0 z-20 transition-all duration-700 shadow-md shadow-gray-700/20 md:shadow-none ${
            isOpen
                ? 'bg-[#0f172a] transition-colors duration-700 ease-in-out lg:bg-transparent'
                : isScrolled
                    ? 'bg-background/80 backdrop-blur-md shadow-md shadow-gray-700/20 '
                    : 'bg-transparent'
        }`}>
            <h1 className="text-base md:text-xl lg:text-2xl font-bold ">Rhoda.Alewi</h1>
        {/* DESKTOP HEADER */}
            <nav className="space-x-8 hidden md:flex items-center">
                {navLinks.map(links => (
                    <Link
                        key={links.id}
                        to={links.id}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-50}
                        activeClass="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                        className="hover:text-purple-400 cursor-pointer inline-flex flex-col item-start group tracking-wide transition-all duration-700 ease-in-out"
                    >
                        {links.name}
                        <span className="w-4 h-0.5 md:w-6 md:h-1 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></span>
                    </Link>
                ))}
            </nav>

            <button
                className="md:hidden p-2 rounded bg-purple-500/20 hover:text-purple-400 transition-all duration-700 ease-in-out hover:rotate-180"
                onClick={() => setIsOpen((s) => !s)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <IoClose className="w-5 h-5" /> : <IoMenu className="w-5 h-5" />}
            </button>

        {/* MOBILE HEADER */}
            <div className="fixed inset-0 z-50 pointer-events-none md:hidden" aria-hidden={!isOpen}>
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute top-16 inset-0 transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto bg-black/50"
                    : "opacity-0 pointer-events-none"}`}
                >
                    <aside className={`fixed top-15 right-0 w-64 sm:w-80 h-full bg-[#0f172a] px-8 py-10 shadow-lg transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
                    }`}>
                        <nav className="flex flex-col space-y-4 text-lg">
                            {navLinks.map((links) => (
                            <Link
                                key={links.id}
                                to={links.id}
                                spy={true}
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                activeClass="text-purple-400 bg-purple-500/10"
                                className="flex items-center gap-4 hover:text-purple-400 transition-all duration-300 ease-linear cursor-pointer tracking-wide text-base pl-4 py-2 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{links.icon}</span>
                                <span>{links.name}</span>
                            </Link>
                            ))}
                        </nav>
                    </aside>
                </div>
            </div> 
        </header>
    )
}

export default Header;


