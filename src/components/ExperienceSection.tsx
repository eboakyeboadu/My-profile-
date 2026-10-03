import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12" id="experience">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-[#a51c30] dark:text-[#ffb3b3]">
          <span className="material-symbols-outlined text-lg">timeline</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider">CAREER PATH</span>
        </div>
        <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isDark ? 'text-white' : 'text-[#090d16]'
        }`}>
          Experience
        </h2>
        <p className={`text-sm sm:text-base max-w-xl ${
          isDark ? 'text-[#dfe2eb]/85' : 'text-slate-600'
        }`}>
          Product management and leadership across high-growth tech companies and enterprise technology.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-10 space-y-10">
        {/* Glow Line Rail */}
        <div className="absolute left-2.5 md:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#a51c30] via-[#c92a3e] to-slate-300 dark:to-[#31353c]"></div>

        {PORTFOLIO_DATA.experiences.map((exp) => {
          const isGold = exp.accentColor === 'gold';
          const isCrimson = exp.accentColor === 'crimson';

          return (
            <div key={exp.id} className="relative group">
              {/* Pulse Node Point */}
              <div className={`absolute -left-[27px] md:-left-[35px] top-2 w-6 h-6 rounded-full flex items-center justify-center ${
                isDark ? 'bg-[#0a0e14]' : 'bg-[#f4f6fa]'
              }`}>
                <div className={`w-3.5 h-3.5 rounded-full ${
                  isGold 
                    ? 'bg-[#e9c349] shadow-[0_0_12px_rgba(233,195,73,0.9)]' 
                    : isCrimson 
                    ? 'bg-[#c92a3e] shadow-[0_0_12px_rgba(201,42,62,0.9)]' 
                    : 'bg-[#a51c30] shadow-[0_0_12px_rgba(165,28,48,0.9)]'
                } group-hover:scale-125 transition-transform`}></div>
              </div>

              {/* Experience Card */}
              <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col gap-4 transition-all duration-300 ${
                isDark 
                  ? 'bg-[#181c22] hover:bg-[#1c2026] border-[#a51c30]/25 hover:border-[#a51c30]/40 shadow-xl' 
                  : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-[#a51c30]/40 shadow-md hover:shadow-xl'
              }`}>
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-3 ${
                  isDark ? 'border-[#31353c]/30' : 'border-slate-100'
                }`}>
                  <div>
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider block ${
                      isGold 
                        ? isDark ? 'text-[#e9c349]' : 'text-amber-800' 
                        : isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
                    }`}>
                      {exp.category}
                    </span>
                    <h3 className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight mt-0.5 ${
                      isDark ? 'text-white' : 'text-[#090d16]'
                    }`}>
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <span className={`font-mono text-xs sm:text-sm font-bold ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {exp.period}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? 'text-[#dfe2eb]/70' : 'text-slate-500'}`}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className={`space-y-2.5 text-sm sm:text-[15px] leading-relaxed list-disc pl-5 ${
                  isDark ? 'text-[#dfe2eb]/90' : 'text-slate-700'
                }`}>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-[#090d16]'}`}>{bullet.highlight}:</span>{' '}
                      {bullet.text}{' '}
                      {bullet.boldStat && (
                        <strong className={`font-extrabold ${
                          bullet.boldStatColor === 'gold' 
                            ? isDark ? 'text-[#e9c349]' : 'text-amber-700' 
                            : bullet.boldStatColor === 'crimson' 
                            ? isDark ? 'text-[#c92a3e]' : 'text-[#a51c30]' 
                            : isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {bullet.boldStat}
                        </strong>
                      )}
                      .
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-md border font-mono text-[11px] font-medium ${
                        isDark 
                          ? 'bg-[#262a31] border-[#594141]/30 text-[#dfe2eb]/85' 
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
