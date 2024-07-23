import { Menu, X } from "lucide-react";
import logo from '../assets/DEV.png';
import { navItems } from '../constants';
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
        <div className="container relative px-4 mx-auto text-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-20 h-20 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight"></span>
                </div>
                <ul className="hidden space-x-12 lg:flex ml-14">
                    {navItems.map((item,index) => (
                        <li key={index}>
                            <Link className="transition-all cursor-pointer hover:text-gray-400" to={item.href} smooth={true} duration={500}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="items-center justify-center hidden space-x-6 lg:flex">
                    {/* <a href="#" className="px-3 py-2 border rounded-md vorder">
                        Botao
                    </a> */}
                    <Link to="contato" smooth={true} duration={500} className="px-3 py-2 rounded-md cursor-pointer bg-gradient-to-r from-blue-500 to-blue-800">
                        Contratar
                    </Link>
                </div>
                <div className="flex-col justify-end lg:hidden md:flex">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
                    <ul>
                        {navItems.map((item,index) => (
                            <li key={index} className="py-4">
                                <Link className="transition-all cursor-pointer hover:text-gray-400" to={item.href} smooth={true} duration={500}>{item.label}</Link>    
                            </li>
                        ))}
                    </ul>
                    <div className="flex mt-6 space-x-6">
                        {/* <a href="#" className="px-3 py-2 border rounded-md">
                            Botao
                        </a> */}
                        <a href="#contato" className="px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-800">Contratar</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
    
  )
}

export default Navbar
