import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png';

export function Navbar() {
  return (
    <Footer container className="bg-blue-600 text-white p-6">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={Logo}
              alt="Butcher Logo"
              className="h-12 w-auto"
            />
            <span className="ml-2 text-lg font-bold text-white">Butcher</span>
          </Link>

   
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>


        <nav className="fixed bottom-0 left-0 w-full bg-blue-700 text-white flex items-center justify-between px-8 py-3 md:hidden shadow-md">
          <Link to="/" className="flex flex-col items-center">
            <img
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
              src="https://th.bing.com/th?id=OIP.WnK1vJs2BjGqyaFWdwdwiwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Home"
            />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center">
            <img
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
              src="https://th.bing.com/th?id=OIP.UvFAlAdHxw6EUBhJBPY-LgHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="About"
            />
            <span className="text-xs">About</span>
          </Link>
          <Link to="/projects" className="flex flex-col items-center">
            <img
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
              src="https://th.bing.com/th/id/R.574e56e23ad8cb7362d700bfb49305ac?rik=zryXaMl9XB1PyQ&pid=ImgRaw&r=0"
              alt="Projects"
            />
            <span className="text-xs">Projects</span>
          </Link>
          <Link to="/contacts" className="flex flex-col items-center">
            <img
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
              src="https://th.bing.com/th?id=OIP.q4v-Bk7VpV8UNypwm2NAfAHaFW&w=293&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Contacts"
            />
            <span className="text-xs">Contact</span>
          </Link>
        </nav>

        <Footer.Divider className="my-6 border-gray-400" />


        <Footer.Copyright
          href="/"
          by="Butcher™"
          year={2024}
          className="text-gray-200 text-center"
        />
      </div>
    </Footer>
  );
}
