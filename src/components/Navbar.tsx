import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('vision');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['vision', 'products', 'credentials', 'experience', 'education', 'connect'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'vision', label: 'Vision' },
    { id: 'products', label: 'Projects & Products' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'connect', label: 'Connect' }
  ];

  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? isDark
          ? 'bg-[#0e1218]/95 backdrop-blur-xl border-b border-[#a51c30]/25 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3'
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.06)] py-3'
        : isDark
        ? 'bg-[#0a0e14]/80 backdrop-blur-lg border-b border-[#a51c30]/15 py-4'
        : 'bg-[#f8f9fc]/90 backdrop-blur-lg border-b border-slate-200/80 py-4'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#vision" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white group-hover:text-[#ffdad9]' : 'text-slate-900 group-hover:text-[#a51c30]'
            }`}>
              EBENEZER B.B.
            </span>
            <span className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              Harvard Business School MBA Candidate
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden xl:flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-md ${
          isDark 
            ? 'bg-[#161b22]/70 border-[#a51c30]/20' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? isDark
                      ? 'bg-[#262a31] text-[#ffdad9] font-bold border border-[#a51c30]/40 shadow-sm'
                      : 'bg-[#a51c30] text-white font-bold shadow-sm'
                    : isDark
                    ? 'text-[#dfe2eb]/80 hover:text-white hover:bg-[#1f242c]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
              isDark
                ? 'bg-[#1e2430] border-[#a51c30]/40 text-[#e9c349] hover:bg-[#283040]'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#a51c30]'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-lg">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="hidden sm:inline text-xs font-mono font-semibold">
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Book Strategic Intro Button */}
          <a
            href="#connect"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#a51c30] hover:bg-[#8a1526] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#a51c30]/25 border border-[#c92a3e]/40 hover:shadow-[#a51c30]/45"
          >
            Book Strategic Intro
          </a>

          {/* Portrait Monogram Thumbnail */}
          <a href="#vision" className="relative block">
            <img 
              src={PORTFOLIO_DATA.profile.portraitImg} 
              alt="Ebenezer Boakye-Boadu Portrait"
              className="w-9 h-9 rounded-full object-cover border border-[#a51c30]/40 shadow-inner hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#e9c349] border-2 border-white dark:border-[#10141a]"></span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-xl border transition-colors ${
              isDark
                ? 'bg-[#1c2026] text-[#dfe2eb] hover:text-white border-[#a51c30]/30'
                : 'bg-white text-slate-800 border-slate-200 shadow-sm'
            }`}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`xl:hidden px-4 pt-3 pb-5 border-b shadow-2xl backdrop-blur-2xl ${
          isDark ? 'bg-[#10141a]/98 border-[#a51c30]/30' : 'bg-white/98 border-slate-200'
        }`}>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-[#262a31] text-[#ffdad9] font-bold border border-[#a51c30]/40'
                        : 'bg-[#a51c30] text-white font-bold'
                      : isDark
                      ? 'text-[#dfe2eb]/80 hover:bg-[#181c22]'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="flex gap-2 pt-2 border-t border-slate-200 dark:border-[#a51c30]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-1.5 ${
                  isDark
                    ? 'bg-[#262a31] text-[#ffdad9] border-[#a51c30]/30'
                    : 'bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <span className="material-symbols-outlined text-sm text-[#a51c30] dark:text-[#e9c349]">description</span>
                <span>View Resume</span>
              </button>
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#a51c30] text-white text-xs font-semibold text-center flex items-center justify-center"
              >
                Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
