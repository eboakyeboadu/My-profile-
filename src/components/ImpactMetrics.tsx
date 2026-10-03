import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ImpactMetrics: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PORTFOLIO_DATA.impactMetrics.map((metric) => {
          const isGold = metric.unitColor === 'gold';
          const isCrimson = metric.unitColor === 'crimson';

          return (
            <div
              key={metric.id}
              className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between gap-3 shadow-md hover:-translate-y-1 transition-all group ${
                isDark 
                  ? 'bg-[#181c22] border-[#a51c30]/25 hover:border-[#a51c30]/50' 
                  : 'bg-white border-slate-200/90 hover:border-[#a51c30]/50 shadow-slate-200/50'
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className={`font-mono text-[11px] font-bold tracking-wider uppercase ${
                  isGold 
                    ? isDark ? 'text-[#e9c349]' : 'text-amber-700'
                    : isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
                }`}>
                  {metric.tag}
                </span>
                
                <div className="flex items-baseline gap-2">
                  <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                    isDark ? 'text-white' : 'text-[#090d16]'
                  }`}>
                    {metric.value}
                  </span>
                  <span className={`font-display text-xl sm:text-2xl font-bold ${
                    isCrimson 
                      ? isDark ? 'text-[#c92a3e]' : 'text-[#a51c30]' 
                      : isGold 
                      ? isDark ? 'text-[#e9c349]' : 'text-amber-600' 
                      : isDark ? 'text-[#ffdad9]' : 'text-slate-700'
                  }`}>
                    {metric.unit}
                  </span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? 'text-[#dfe2eb]/80' : 'text-slate-600'
              }`}>
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
