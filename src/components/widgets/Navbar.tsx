"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

// Primary navigation links
const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Secondary navigation links with dropdowns
const secondaryLinks = [
  { 
    name: 'Attractions', 
    path: '/attractions',
  },
  { 
    name: 'Events', 
    path: '/events'
  },
  { 
    name: 'Dining', 
    path: '/dining'
  },
  { 
    name: 'Places to Stay', 
    path: '/stay',
  },
  { 
    name: 'Plan Your Visit', 
    path: '/plan',
    dropdownItems: [
      { name: 'Travel Tips', path: '/plan/travel-tips' },
      { name: 'Itinerary Builder', path: '/plan/itinerary-builder' },
    ]
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Helper function to check if a link is active
  const isLinkActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Helper function to check if a secondary link is active
  const isSecondaryLinkActive = (path: string) => {
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-0'}`}>
      {/* Primary Navigation */}
      <div className="container mx-auto px-4 pt-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-gray-800">
              Discover Rwanda
            </span>
          </Link>

          {/* Primary Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {primaryLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                className={`text-gray-800 font-medium hover:text-rwanda-green transition-colors ${isLinkActive(link.path) ? 'border-b-2 border-rwanda-green' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            {isAuthenticated ? (
              <Link href="/profile">
                <Button variant="ghost" className="flex items-center gap-2">
                  {user?.avatar ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                  <span className="text-gray-800">Profile</span>
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
                  Log In
                </Button>
              </Link>
            )}
          </div>

          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="w-full bg-black border-b border-gray-800 mt-2">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-center space-x-6 py-2">
            {secondaryLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div className="text-white font-medium cursor-pointer flex items-center gap-1">
                  <Link href={link.path} className={`${isSecondaryLinkActive(link.path) ? 'bg-gray-800 px-2 py-1 rounded-md' : ''}`}>
                    {link.name}
                  </Link>
                  {link.dropdownItems && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
                
                {link.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white ${isSecondaryLinkActive(item.path) ? 'bg-gray-800 text-white' : ''}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Primary Mobile Menu */}
            <div className="border-b border-gray-200 pb-2 mb-2">
              {primaryLinks.map((link) => (
                <div key={link.name} className="py-2">
                  <Link 
                    href={link.path} 
                    onClick={toggleMenu} 
                    className={`block text-base font-medium text-gray-800 ${isLinkActive(link.path) ? 'border-b-2 border-rwanda-green' : ''}`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Secondary Mobile Menu */}
            <div className="bg-gray-900 rounded-lg p-4">
              {secondaryLinks.map((link) => (
                <div key={link.name} className="py-2">
                  <div 
                    className="flex justify-between items-center text-white"
                    onClick={() => link.dropdownItems && handleDropdown(link.name)}
                  >
                    <Link href={link.path} onClick={toggleMenu} className={`block text-base font-medium ${isSecondaryLinkActive(link.path) ? 'bg-gray-800 px-2 py-1 rounded-md' : ''}`}>
                      {link.name}
                    </Link>
                    {link.dropdownItems && (
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {link.dropdownItems && activeDropdown === link.name && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={toggleMenu}
                          className={`block py-1 text-sm text-gray-300 hover:text-white ${isSecondaryLinkActive(item.path) ? 'bg-gray-800 text-white' : ''}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4">
              {isAuthenticated ? (
                <Link href="/profile" onClick={toggleMenu}>
                  <Button className="w-full flex items-center justify-center gap-2 bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
                    <User className="h-4 w-4" />
                    My Profile
                  </Button>
                </Link>
              ) : (
                <Link href="/login" onClick={toggleMenu}>
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
                    Log In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;