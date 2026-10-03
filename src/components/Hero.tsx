import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onCopyEmail: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, onOpenResume }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-8 pb-12" id="vision">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Executive Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Status Chip */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border w-fit shadow-sm ${
            isDark 
              ? 'bg-[#181c22] border-[#a51c30]/40 text-[#ffb3b3]' 
              : 'bg-red-50/90 border-red-300 text-[#881324]'
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#c92a3e] animate-pulse shadow-[0_0_10px_rgba(201,42,62,0.9)]"></span>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
              {PORTFOLIO_DATA.profile.role}
            </span>
          </div>

          {/* Lead Title */}
          <h1 className={`font-display text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.12] tracking-tight font-extrabold ${
            isDark ? 'text-white' : 'text-[#090d16]'
          }`}>
            Building{' '}
            <span className="bg-gradient-to-r from-[#a51c30] via-[#c92a3e] to-[#7f1d1d] dark:from-[#ffdad9] dark:via-[#c92a3e] dark:to-[#e9c349] bg-clip-text text-transparent font-black">
              impactful tech products
            </span>{' '}
            &amp; scalable platforms.
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl leading-relaxed font-normal ${
            isDark ? 'text-[#dfe2eb]/90' : 'text-[#2d3748]'
          }`}>
            {PORTFOLIO_DATA.profile.bio}
          </p>

          {/* Telemetry Specs Bar */}
          <div className={`flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm font-medium ${
            isDark ? 'text-[#dfe2eb]/90' : 'text-[#334155]'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#a51c30] dark:text-[#ffb3b3]">location_on</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#090d16]'}`}>
                {PORTFOLIO_DATA.profile.location}
              </span>
            </div>
            
            <span className={isDark ? 'text-[#594141]' : 'text-slate-300'}>/</span>
            
            <button
              onClick={onCopyEmail}
              className={`flex items-center gap-1.5 transition-colors group cursor-pointer ${
                isDark ? 'text-[#dfe2eb] hover:text-[#ffdad9]' : 'text-[#1e293b] hover:text-[#a51c30]'
              }`}
              title="Click to copy email"
            >
              <span className="material-symbols-outlined text-base text-[#a51c30] dark:text-[#ffb3b3] group-hover:scale-110 transition-transform">
                alternate_email
              </span>
              <span className="font-mono font-medium">{PORTFOLIO_DATA.profile.email}</span>
              <span className="material-symbols-outlined text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                content_copy
              </span>
            </button>
            
            <span className={isDark ? 'text-[#594141]' : 'text-slate-300'}>/</span>
            
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 transition-colors group ${
                isDark ? 'text-[#dfe2eb] hover:text-[#ffdad9]' : 'text-[#1e293b] hover:text-[#a51c30]'
              }`}
            >
              <span className="material-symbols-outlined text-base text-[#a51c30] dark:text-[#ffb3b3] group-hover:scale-110 transition-transform">
                link
              </span>
              <span className="font-mono font-medium">{PORTFOLIO_DATA.profile.linkedinDisplay}</span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#a51c30] hover:bg-[#881324] text-white font-display text-sm sm:text-base font-bold shadow-lg shadow-[#a51c30]/25 hover:shadow-[#a51c30]/45 hover:-translate-y-0.5 transition-all border border-[#c92a3e]/30 cursor-pointer"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:-translate-y-0.5 border ${
                isDark
                  ? 'bg-[#262a31] text-white hover:bg-[#353940] border-[#a51c30]/25'
                  : 'bg-white text-slate-900 hover:bg-slate-50 border-slate-300'
              }`}
            >
              <span className="material-symbols-outlined text-lg text-[#a51c30] dark:text-[#ffb3b3]">code</span>
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={onOpenResume}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl transition-all text-sm font-bold hover:-translate-y-0.5 border cursor-pointer ${
                isDark
                  ? 'bg-[#181c22] text-[#dfe2eb] hover:text-[#ffdad9] border-[#594141]/50 hover:border-[#a51c30]/50'
                  : 'bg-slate-100 text-slate-900 hover:text-black border-slate-300 hover:bg-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-base text-[#a51c30] dark:text-[#e9c349]">description</span>
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Executive Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px]">
            {/* Ambient Backlight */}
            {isDark && (
              <div className="absolute -inset-1.5 rounded-3xl opacity-35 blur-2xl bg-gradient-to-tr from-[#a51c30] via-[#c92a3e]/40 to-[#e9c349]/30"></div>
            )}

            {/* Frame */}
            <div className={`relative rounded-3xl p-4 sm:p-5 shadow-xl flex flex-col gap-4 border ${
              isDark 
                ? 'bg-[#181c22]/90 border-[#a51c30]/30 backdrop-blur-2xl' 
                : 'bg-white border-slate-200/90 shadow-slate-300/60'
            }`}>
              {/* Top Status Header */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c92a3e] shadow-[0_0_8px_rgba(201,42,62,0.9)] animate-pulse"></span>
                  <span className={`font-mono text-[11px] font-bold tracking-wider ${
                    isDark ? 'text-[#ffb3b3]' : 'text-[#881324]'
                  }`}>
                    BOSTON, MA
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border shadow-sm ${
                  isDark
                    ? 'bg-[#a51c30]/15 border-[#a51c30]/35 text-[#ffdad9]'
                    : 'bg-red-50 border-red-300 text-[#881324]'
                }`}>
                  <span className="material-symbols-outlined text-[13px]">school</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                    HARVARD BUSINESS SCHOOL • MBA '28
                  </span>
                </div>
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#31353c] border border-slate-200 dark:border-[#a51c30]/30 shadow-inner group">
                <img
                  src={PORTFOLIO_DATA.profile.portraitImg}
                  alt="Ebenezer Boakye-Boadu Executive Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                
                {/* Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-0.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                    {PORTFOLIO_DATA.profile.name}
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-medium drop-shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e9c349]"></span>
                    Product Leader • Global Scale &amp; Platforms
                  </span>
                </div>
              </div>

              {/* Bottom Availability Ribbon */}
              <div className={`flex items-center justify-between px-1 pt-1 border-t text-xs ${
                isDark ? 'border-[#a51c30]/20' : 'border-slate-100'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.9)] animate-pulse"></span>
                  <span className={`font-mono text-[11px] font-bold ${
                    isDark ? 'text-[#dfe2eb]' : 'text-slate-800'
                  }`}>
                    Open to Product Management and Strategy Roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
