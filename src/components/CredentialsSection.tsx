import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CredentialsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getProviderVisual = (provider: string) => {
    switch (provider) {
      case 'Google':
        return {
          pill: isDark 
            ? 'bg-[#4285F4]/20 border-[#4285F4]/50 text-[#8ab4f8]' 
            : 'bg-blue-50 border-blue-200 text-blue-700',
          badgeText: 'GOOGLE',
          icon: 'g_translate',
          topGlow: 'via-[#4285F4]'
        };
      case 'SAP':
        return {
          pill: isDark 
            ? 'bg-[#e9c349]/20 border-[#e9c349]/50 text-[#e9c349]' 
            : 'bg-amber-50 border-amber-300 text-amber-800',
          badgeText: 'SAP SE',
          icon: 'verified',
          topGlow: 'via-[#e9c349]'
        };
      case 'McKinsey':
        return {
          pill: isDark 
            ? 'bg-[#c92a3e]/25 border-[#c92a3e]/50 text-[#ffdad9]' 
            : 'bg-red-50 border-red-200 text-[#a51c30]',
          badgeText: 'MCKINSEY & CO.',
          icon: 'workspace_premium',
          topGlow: 'via-[#c92a3e]'
        };
      case 'edX':
      default:
        return {
          pill: isDark 
            ? 'bg-[#a51c30]/25 border-[#a51c30]/50 text-[#ffdad9]' 
            : 'bg-red-50 border-red-200 text-[#a51c30]',
          badgeText: 'EDX PROFESSIONAL',
          icon: 'school',
          topGlow: 'via-[#a51c30]'
        };
    }
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12" id="credentials">
      {/* Ambient background glow */}
      {isDark && (
        <>
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#4285F4]/8 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#a51c30]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        </>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#a51c30] dark:text-[#ffb3b3]">
            <div className={`p-1 rounded-md border flex items-center justify-center ${
              isDark ? 'bg-[#a51c30]/20 border-[#a51c30]/40 text-[#ffdad9]' : 'bg-red-50 border-red-200 text-[#a51c30]'
            }`}>
              <span className="material-symbols-outlined text-sm">verified_user</span>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              ACCREDITATIONS &amp; LICENSES
            </span>
          </div>
          <h2 className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications &amp; Specializations
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl ${
            isDark ? 'text-[#dfe2eb]/80' : 'text-slate-600'
          }`}>
            Verified enterprise product credentials across Google, SAP, McKinsey, and edX.
          </p>
        </div>

        <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono ${
          isDark 
            ? 'bg-[#212734] border-[#485368]/60 text-[#dfe2eb]' 
            : 'bg-white border-slate-200 text-slate-700 shadow-sm'
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#c92a3e] animate-pulse"></span>
          <span>9 Verified Licenses</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {PORTFOLIO_DATA.credentials.map((cred) => {
          const visual = getProviderVisual(cred.provider);

          return (
            <a
              key={cred.id}
              href={cred.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-4 hover:-translate-y-1 overflow-hidden shadow-sm ${
                isDark 
                  ? 'bg-gradient-to-br from-[#1f2634] via-[#161c28] to-[#121620] hover:from-[#252d3e] hover:to-[#171e2c] border-[#39465c]/80 hover:border-[#ff9494]/70 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(165,28,48,0.2)]' 
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-[#a51c30]/40 shadow-slate-100 hover:shadow-md'
              }`}
            >
              {/* Top ambient highlight line for dark mode */}
              {isDark && (
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${visual.topGlow} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              )}

              <div className="flex flex-col gap-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border shadow-sm flex items-center gap-1.5 ${visual.pill}`}>
                    <span className="material-symbols-outlined text-[13px]">{visual.icon}</span>
                    <span>{visual.badgeText}</span>
                  </span>

                  <span className={`flex items-center gap-1 text-[11px] font-mono font-semibold transition-colors ${
                    isDark ? 'text-[#ffb3b3] group-hover:text-white' : 'text-[#a51c30] group-hover:text-[#8a1526]'
                  }`}>
                    <span>Verify</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-sm sm:text-[15px] font-bold leading-snug transition-colors ${
                    isDark ? 'text-white group-hover:text-[#ffdad9]' : 'text-slate-900 group-hover:text-[#a51c30]'
                  }`}>
                    {cred.title}
                  </h3>
                  <p className={`text-[11px] font-mono mt-1.5 flex items-center gap-1 ${
                    isDark ? 'text-[#dfe2eb]/60' : 'text-slate-500'
                  }`}>
                    <span className={`material-symbols-outlined text-xs ${isDark ? 'text-[#e9c349]' : 'text-amber-600'}`}>
                      verified
                    </span>
                    <span>{cred.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className={`flex items-center justify-between pt-2.5 border-t text-xs font-mono ${
                isDark ? 'border-[#39465c]/50 text-[#dfe2eb]/50' : 'border-slate-100 text-slate-400'
              }`}>
                <span className="text-[10px]">Digital Badge Issued</span>
                <span className={`text-[11px] font-semibold group-hover:underline ${
                  isDark ? 'text-[#ffdad9]' : 'text-[#a51c30]'
                }`}>
                  Click to Authenticate ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
