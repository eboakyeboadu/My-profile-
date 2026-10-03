import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`w-full border-t py-8 transition-colors ${
      isDark ? 'bg-[#0a0e14] border-[#a51c30]/20' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-[#262a31]/60">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.profile.harvardMonogram}
              alt="Harvard Monogram"
              className="h-7 w-auto rounded border border-[#a51c30]/30 shadow"
            />
            <span className={`font-display text-base sm:text-lg tracking-tight font-bold ${
              isDark ? 'text-white' : 'text-[#0f172a]'
            }`}>
              {PORTFOLIO_DATA.profile.name.toUpperCase()}
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark ? 'text-[#dfe2eb]/80 hover:text-[#ffdad9]' : 'text-slate-600 hover:text-[#a51c30]'
              }`}
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark ? 'text-[#dfe2eb]/80 hover:text-[#ffdad9]' : 'text-slate-600 hover:text-[#a51c30]'
              }`}
            >
              GitHub
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className={`transition-colors ${
                isDark ? 'text-[#dfe2eb]/80 hover:text-[#ffdad9]' : 'text-slate-600 hover:text-[#a51c30]'
              }`}
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className={`pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider ${
          isDark ? 'text-[#dfe2eb]/60' : 'text-slate-500'
        }`}>
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Ebenezer Boakye-Boadu • Harvard Business School (MBA '28)
          </p>
          <div className="flex items-center gap-3">
            <span>Boston, MA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
