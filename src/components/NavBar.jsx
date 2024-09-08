import logo from "../assets/personallogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m=8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/austinfelder/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/afelder11" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://apps.apple.com/us/app/spacewar-lite/id1509854985" target="_blank" rel="noopener noreferrer">
                    <FaAppStore />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;