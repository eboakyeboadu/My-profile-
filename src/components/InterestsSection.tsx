import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const InterestsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12">
      <div className={`p-6 sm:p-10 md:p-12 rounded-3xl border flex flex-col gap-8 shadow-xl ${
        isDark 
          ? 'bg-gradient-to-br from-[#181c22] to-[#0a0e14] border-[#a51c30]/25' 
          : 'bg-white border-slate-200/90 shadow-slate-200/60'
      }`}>
        <div className="flex flex-col gap-2">
          <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
            isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
          }`}>
            COMMUNITY &amp; LEADERSHIP
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#090d16]'
          }`}>
            Mentorship &amp; Interests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.interests.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between gap-4 transition-all group ${
                isDark 
                  ? 'bg-[#262a31]/60 hover:bg-[#262a31]/80 border-[#a51c30]/20 hover:border-[#a51c30]/50' 
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 hover:border-[#a51c30]/40 shadow-sm'
              }`}
            >
              <div className="flex flex-col gap-3">
                <span className={`material-symbols-outlined text-3xl sm:text-4xl ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </span>
                
                <h4 className={`font-display text-lg sm:text-xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-[#090d16]'
                }`}>
                  {item.title}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#dfe2eb]/85' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider pt-2 border-t ${
                isDark ? 'border-[#31353c]/30 text-[#ffb3b3]' : 'border-slate-200 text-[#a51c30]'
              }`}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
