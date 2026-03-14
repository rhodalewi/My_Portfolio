import { Link } from "react-scroll";
import { FaAnglesDown } from "react-icons/fa6";

const ScrollButton = () => {
    return (
        <Link
            to="project"
            spy={true}
            smooth={true}
            duration={1000}
            className="h-screen w-full absolute flex justify-center items-end p-6"
        >
            <FaAnglesDown className="text-xl animate-bounce text-gray-100 dark:hover:text-blue-500 cursor-pointer z-10" />
        </Link>
    )
}

export default ScrollButton;