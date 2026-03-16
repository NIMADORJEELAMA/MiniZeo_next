import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo_minizeo.png";

import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center flex-shrink-0">
                <img className="h-14 w-14 mr-2" src={logo} alt="Logo" />
              </Link>

              {/* <span className="text-xl tracking-tight">Minizeo</span> */}
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-purple-400 transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a> */}
              <Link
                to="/top-performers"
                className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
              >
                Top Performers
              </Link>
              <Link
                to="/internship"
                className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
              >
                Internship
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="hover:text-purple-400 transition"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                {/* <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a> */}
                <Link
                  to="/top-performers"
                  className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
                >
                  Top Performers
                </Link>
                <Link
                  to="/internship"
                  className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
                >
                  Internship
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="w-full bg-neutral-900 text-purple-400 py-2 overflow-hidden">
        <p className="animate-marquee whitespace-nowrap text-sm font-medium">
          Top Performers: MD Mudassir Ansari • Rahul Sharma • Ayesha Sharma •
          Vishakha Bharti
        </p>
      </div>
    </>
  );
};

export default Navbar;
