"use client";

import Link from "next/link";
import { Search, Bell, Settings, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../component/Button";
import { Input } from "../component/input";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black px-2 py-1 sm:px-4 md:px-6 md:py-3">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between flex-wrap max-w-full">
        {/* Logo */}
        <div className="flex flex-col items-center md:flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-orange-600 font-poppins">
              MOMS
            </span>
          </Link>
          <span className="text-[10px] sm:text-xs text-orange-600 mt-[-2px]">Creating Timeless Moments</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs sm:text-sm font-medium flex-grow justify-center">
          <Link href="/about" className="hover:text-orange-400 text-white">
            ABOUT US
          </Link>
          <Link href="/catalog" className="hover:text-orange-400 text-gray-400">
            CATALOG
          </Link>
          <Link href="/places" className="hover:text-orange-400 text-gray-400">
            PLACES
          </Link>
          <Link href="/blog" className="hover:text-orange-400 text-gray-400">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-orange-400 text-gray-400">
            CONTACT
          </Link>
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-4 text-gray-300">
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center relative text-gray-400 w-[300px] sm:w-[350px] xl:w-[400px]">
            <Input
              type="search"
              placeholder="Search"
              className="w-full pl-2 sm:pl-3 pr-8 sm:pr-10 py-1.5 sm:py-2 rounded-full text-gray-400 bg-gray-700 border-gray-600 focus:ring-2 focus:ring-orange-400 text-xs sm:text-sm"
            />
            <Search className="absolute right-2 sm:right-3 h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </div>

          {/* Icons */}
          <Button variant="ghost" size="icon" className="text-white hidden sm:flex p-1.5 sm:p-2">
            <Bell className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hidden sm:flex p-1.5 sm:p-2">
            <Settings className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </Button>

          {/* Create Account Button */}
          <Button className="hidden lg:flex bg-gradient-to-b from-yellow-400 to-orange-700 text-gray-200 rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap">
            Create Account
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="text-white lg:hidden p-1.5 sm:p-2" onClick={toggleMobileMenu}>
            <Menu className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Left Sidebar) */}
      <div
        className={`fixed top-0 left-0 w-48 sm:w-64 h-full bg-black text-white p-3 sm:p-4 space-y-3 sm:space-y-4 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <Link href="/about" className="block hover:text-orange-400 text-sm sm:text-base">
          ABOUT US
        </Link>
        <Link href="/catalog" className="block hover:text-orange-400 text-sm sm:text-base">
          CATALOG
        </Link>
        <Link href="/places" className="block hover:text-orange-400 text-sm sm:text-base">
          PLACES
        </Link>
        <Link href="/blog" className="block hover:text-orange-400 text-sm sm:text-base">
          BLOG
        </Link>
        <Link href="/contact" className="block hover:text-orange-400 text-sm sm:text-base">
          CONTACT
        </Link>

        {/* Mobile Search Bar */}
        <div className="relative mt-4 sm:mt-6">
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-2 sm:pl-3 pr-8 sm:pr-10 py-1.5 sm:py-2 rounded-full text-gray-400 bg-gray-500 border-gray-500 text-xs sm:text-sm"
          />
          <Search className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-white" />
        </div>

        {/* Mobile Create Account Button */}
        <Button className="w-full bg-gradient-to-b from-yellow-400 to-orange-700 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-2 sm:border-4 hover:border-orange-500 mt-3 sm:mt-4">
          Create Account
        </Button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 lg:hidden z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
}
