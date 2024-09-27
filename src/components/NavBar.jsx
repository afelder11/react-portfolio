import logo from "../assets/personallogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { WiDaySunny, WiRain } from "react-icons/wi"; // Importing a weather icon
import { Link } from "react-router-dom"; // Import Link to navigate to Weather App

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <Link to="/"> {/* Wrap the image inside the Link component */}
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </Link>
        </div>
        <div className="m=8 flex items-center justify-center gap-4 text-2xl">
            {/* Weather App Button */}
            <Link to="/weatherapp" className="flex items-center gap-2 hover:text-cyan-500">
                <WiRain /> {/* Weather icon */}
                <span style={{ fontSize: '12px' }}>Weather App</span> {/* Inline style */}
            </Link>
            {/* Social Links with hover effect */}
            <a href="https://www.linkedin.com/in/austinfelder/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
                <FaLinkedin />
            </a>
            <a href="https://github.com/afelder11" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
                <FaGithub />
            </a>
            <a href="https://apps.apple.com/us/app/spacewar-lite/id1509854985" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
                <FaAppStore />
            </a>
        </div>
    </nav>
    
    );
};

export default NavBar;
