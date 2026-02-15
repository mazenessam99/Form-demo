import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <NavLink to="/" className="text-xl font-bold">
                        React Hook Form
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400" : "hover:text-blue-300"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400" : "hover:text-blue-300"
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/login"
                            className="hover:text-blue-300"
                        >
                            Login
                        </NavLink>
                    </div>

                    {/* Mobile Button */}
                    <Button
                        className="md:hidden bg-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="text-primary"/>
                    </Button> 
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <NavLink to="/" className="block">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="block">
                        About
                    </NavLink>
                    <NavLink to="/login" className="block">
                        Login
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
