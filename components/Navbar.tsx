
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleBooking = () => {
    const msg = encodeURIComponent("Hola! Me gustaría reservar una cita en APT Barber.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-[#243047] bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
        <img 
            src="/icons/logo-apt.svg" 
            alt="Logo APT Barber" 
            className="size-12 group-hover:rotate-12 transition-transform duration-300 object-contain animate-pulse"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h2 className="text-[25px] font-bold tracking-tighter text-slate-900 dark:text-white">APT BARBER</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-[#243047] p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold p-3 rounded-xl ${isActive(link.path) ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={handleBooking} className="w-full bg-primary text-white py-4 rounded-xl font-bold">RESERVAR AHORA</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
