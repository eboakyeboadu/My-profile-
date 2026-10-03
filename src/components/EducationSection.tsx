import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HBSLogo, HSELogo, KNUSTLogo } from './UniversityLogos';
import { useTheme } from '../context/ThemeContext';

export const EducationSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const renderUniversityLogo = (logoType: string) => {
    switch (logoType) {
      case 'hbs':
        return <HBSLogo className="w-14 h-14" />;
      case 'hse':
        return <HSELogo className="w-14 h-14" />;
      case 'knust':
      default:
        return <KNUSTLogo className="w-14 h-14" />;
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-10" id="education">
      <div className="flex flex-col gap-1.5 mb-6">
        <div className="flex items-center gap-2 text-[#a51c30] dark:text-[#ffb3b3]">
          <span className="material-symbols-outlined text-lg">school</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider">ACADEMICS</span>
        </div>
        <h2 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
          isDark ? 'text-white' : 'text-[#090d16]'
        }`}>
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PORTFOLIO_DATA.education.map((edu) => {
          const isHBS = edu.id === 'edu-hbs';

          return (
            <div
              key={edu.id}
              className={`p-6 rounded-3xl border flex flex-col justify-between gap-5 hover:-translate-y-1 transition-all ${
                isDark
                  ? isHBS
                    ? 'bg-[#181c22] border-[#a51c30]/50 shadow-[0_4px_24px_rgba(165,28,48,0.15)] hover:border-[#a51c30]'
                    : 'bg-[#181c22] border-[#a51c30]/25 hover:border-[#a51c30]/60'
                  : isHBS
                  ? 'bg-white border-red-300 shadow-md hover:border-[#a51c30] hover:shadow-xl'
                  : 'bg-white border-slate-200/90 hover:border-[#a51c30]/40 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col gap-4">
                {/* Logo & Period Badge */}
                <div className="flex items-center justify-between gap-3">
                  {renderUniversityLogo(edu.logoType)}
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider ${
                    isHBS 
                      ? isDark
                        ? 'bg-[#a51c30]/20 text-[#ffdad9] border border-[#a51c30]/40' 
                        : 'bg-red-50 text-[#881324] border border-red-300'
                      : isDark
                      ? 'bg-[#262a31] text-[#dfe2eb]/90 border border-[#31353c]'
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}>
                    {edu.period}
                  </span>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h3 className={`font-display text-lg sm:text-xl font-extrabold tracking-tight leading-snug ${
                    isDark ? 'text-white' : 'text-[#090d16]'
                  }`}>
                    {edu.institution}
                  </h3>
                  <p className={`text-xs sm:text-sm font-semibold mt-1 ${
                    isDark ? 'text-[#ffdad9]' : 'text-[#a51c30]'
                  }`}>
                    {edu.degree}
                  </p>
                  {edu.honor && (
                    <p className={`text-[11px] font-mono mt-2 flex items-center gap-1 font-semibold ${
                      isDark ? 'text-[#e9c349]' : 'text-amber-700'
                    }`}>
                      <span className="material-symbols-outlined text-xs">workspace_premium</span>
                      <span>{edu.honor}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Location Footer */}
              <div className={`font-mono text-[11px] uppercase tracking-wider pt-3 border-t font-semibold ${
                isDark ? 'border-[#31353c]/40 text-[#dfe2eb]/60' : 'border-slate-100 text-slate-500'
              }`}>
                {edu.location}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
