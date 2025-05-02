import './Mycss.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Link } from 'react-router-dom'; // <-- import Link

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md relative">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">Tharani Gurugandhi</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/projects" className="hover:text-blue-600">Projects</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>

      {/* Social Icons - Desktop Only */}
      <div className="hidden md:flex space-x-4 text-gray-600">
  <a href="https://www.linkedin.com/in/tharaniguru/" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon />
  </a>
  <a href="https://leetcode.com/u/tharaniguru/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=000000"
      alt="LeetCode"
      className="w-6 h-6"
    />
  </a>
  <a href="https://github.com/Tharaniguru" target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
  </a>
</div>

      {/* Hamburger Icon - Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <DensityMediumIcon />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col p-4 space-y-4 text-gray-700">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/tharaniguru/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/tharaniguru/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=000000"
                alt="LeetCode"
                className="w-6 h-6"
              />
            </a>
            <a href="https://github.com/Tharaniguru" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </li>

          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
