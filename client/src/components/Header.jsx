import { Link } from "react-router-dom";
import logo from "../assets/ndseLogoPrimary.png";
import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
    <>
      <header className="flex px-2 pt-2 items-center ">
        <div className="brand w-1/6">
          <img src={logo} alt="NSDE Logo" />
        </div>
        <nav className="flex pl-32 space-x-3 w-3/4">
          <Link to="/" className="w-34 py-2">Home</Link>
          <Link to="/about" className="w-34 focus:font-bold p-2 focus:bg-blue-800 focus:text-white">About</Link>
          <Link to="/about" className="w-34 py-2">Projects</Link>
          <Link to="/about" className="w-34 py-2">Get Involved</Link>
          <Link to="/about" className="w-34 py-2">News & Blog</Link>
          <Link to="/about" className="w-34 py-2">Gallery</Link>
          <Link to="/about" className="w-34 py-2">Contact</Link>
          <Link to="/about" className="w-34 py-2">Events</Link>
        </nav>
        <div className="lang and search flex items-center space-x-1  ">
            <CiGlobe className="text-2xl text-deep-orange-400"/>
            <span className="text-deep-orange-700">EN</span>
          <button className="p-1 rounded-full bg-deep-orange-100"><CiSearch className="text-black text-xl"/></button>
        </div>
      </header>
    </>
  );
}

export { Header };
