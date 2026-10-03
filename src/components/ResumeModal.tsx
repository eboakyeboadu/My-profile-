import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopyToast }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCopyResumeText = () => {
    const resumeText = `EBENEZER BOAKYE-BOADU
Product Leader • Harvard Business School (MBA '28)
Location: Boston, MA | Email: eboakyeboadu@mba2028.hbs.edu
LinkedIn: https://linkedin.com/in/eboakyeboadu | GitHub: https://github.com/eboakyeboadu

EXECUTIVE SUMMARY
Product Manager with track record scaling platforms across 17+ international countries in mobility, enterprise SaaS, and FinTech.

EXPERIENCE
1. Senior Project Manager • Yango (Yandex Group) [Nov 2022 – Aug 2026]
- Core Driver OS Redesign: Slashed arrival wait times by 50%, expanded driver supply hours 2.8x.
- Market Expansion: Unlocked 3.5x GMV across 17+ countries in Africa, LATAM, MENA.

2. Lead SAP Consultant • Enterprise Solutions [Jul 2020 – Sep 2021]
- E-Justice National Platform: Cut processing delays by ~40%.
- Enterprise S/4HANA Suite: Drove user adoption to >90%.

3. Financial Advisor – Team Lead • Petra Securities [Jun 2019 – Jul 2020]
- Digital Advisory Engine: +50% lift in conversions.
- Fund Capitalization: Raised $25M+ across two mutual funds.

4. Business Strategy & Operations Analyst • SSNIT [Sep 2017 – May 2019]
- Procurement Automation: Expanded throughput 2.5x with Oracle SCM.

EDUCATION
- Harvard Business School (MBA Candidate, 2026-2028)
- Higher School of Economics (MSc, Tech & Innovation Mgmt, 2021-2023)
- KNUST (BA Economics, 2013-2017)

VERIFIED CERTIFICATIONS
- Product Management Professional Certificate (edX)
- Google Project Management Specialization (Google / Coursera)
- Google AI Essentials Specialization (Google / Coursera)
- McKinsey Forward Program (McKinsey & Company)
- Google Business Intelligence Specialization (Google / Coursera)
- Google Advanced Data Analytics Specialization (Google / Coursera)
- Google Data Analytics Specialization (Google / Coursera)
- SAP Certified Associate - SAP Activate Project Manager (SAP SE)
- SAP Certified Application Associate - SAP S/4HANA 1909 (SAP SE)`;

    navigator.clipboard.writeText(resumeText);
    onCopyToast('Executive resume copied in clean Markdown format!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative w-full max-w-3xl p-6 sm:p-8 rounded-3xl border shadow-2xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto ${
        isDark 
          ? 'bg-[#181c24] border-[#a51c30]/40 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9)]' 
          : 'bg-white border-slate-200 text-slate-800 shadow-2xl'
      }`}>
        {/* Top bar */}
        <div className={`flex items-center justify-between border-b pb-4 ${
          isDark ? 'border-[#a51c30]/20' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`p-2 rounded-xl border ${
              isDark ? 'bg-[#a51c30]/20 border-[#a51c30]/40 text-[#ffdad9]' : 'bg-red-50 border-red-200 text-[#a51c30]'
            }`}>
              <span className="material-symbols-outlined text-xl">description</span>
            </span>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold font-display ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Executive Resume
              </h3>
              <p className={`text-xs font-mono ${
                isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
              }`}>
                Ebenezer Boakye-Boadu • Harvard Business School (MBA '28)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? 'bg-[#262a31] hover:bg-[#31353c] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Action Header */}
        <div className={`flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl border ${
          isDark ? 'bg-[#10141a] border-[#a51c30]/25' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className={`flex items-center gap-2 text-xs font-medium ${
            isDark ? 'text-[#dfe2eb]' : 'text-slate-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#c92a3e] animate-pulse"></span>
            <span>Verified Credentials</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyResumeText}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-[#262a31] hover:bg-[#31353c] text-[#ffdad9] border-[#a51c30]/30' 
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <span className="material-symbols-outlined text-sm">content_copy</span>
              <span>Copy Markdown</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-[#a51c30] hover:bg-[#8a1526] text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Content */}
        <div className={`p-5 sm:p-7 rounded-2xl border space-y-5 text-sm ${
          isDark 
            ? 'bg-[#10141a] border-[#31353c] text-[#dfe2eb]' 
            : 'bg-slate-50 border-slate-200 text-slate-800'
        }`}>
          {/* Header */}
          <div className={`border-b pb-3 ${isDark ? 'border-[#31353c]' : 'border-slate-200'}`}>
            <h2 className={`text-xl sm:text-2xl font-bold font-display tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {PORTFOLIO_DATA.profile.name}
            </h2>
            <p className={`font-medium text-xs sm:text-sm mt-0.5 ${
              isDark ? 'text-[#ffdad9]' : 'text-[#a51c30]'
            }`}>
              Product Leader • MBA Candidate, Harvard Business School
            </p>
            <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1.5 font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <span>Boston, MA</span>
              <span>•</span>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-[#a51c30] dark:text-[#ffb3b3] hover:underline">
                {PORTFOLIO_DATA.profile.email}
              </a>
              <span>•</span>
              <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#a51c30] dark:text-[#ffb3b3] hover:underline">
                {PORTFOLIO_DATA.profile.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
              isDark ? 'text-[#e9c349]' : 'text-amber-800'
            }`}>
              Executive Summary
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#dfe2eb]/90' : 'text-slate-700'}`}>
              Product Manager with a proven record of leading global mobility, enterprise software, and fintech products across 17+ international markets. Experienced in zero-to-one product development, high-scale algorithmic dispatch, and executive roadmap strategy.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              Professional Experience
            </h4>
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</span>
                  <span className={`font-mono text-xs ${isDark ? 'text-[#ffdad9]' : 'text-slate-500'}`}>{exp.period}</span>
                </div>
                <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{exp.location}</p>
                <ul className={`list-disc pl-4 text-xs space-y-1 pt-1 ${isDark ? 'text-[#dfe2eb]/85' : 'text-slate-700'}`}>
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>
                      <strong>{b.highlight}:</strong> {b.text} {b.boldStat && <strong>{b.boldStat}</strong>}.
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${
              isDark ? 'text-[#e9c349]' : 'text-amber-800'
            }`}>
              Education
            </h4>
            {PORTFOLIO_DATA.education.map((edu) => (
              <div key={edu.id} className="text-xs">
                <div className="flex justify-between items-baseline">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.institution}</span>
                  <span className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{edu.period}</span>
                </div>
                <p className={isDark ? 'text-[#ffdad9]' : 'text-[#a51c30]'}>{edu.degree}</p>
                {edu.honor && <p className={`font-mono text-[11px] ${isDark ? 'text-[#e9c349]' : 'text-amber-700'}`}>{edu.honor}</p>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              Key Certifications &amp; Licenses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.credentials.map((cred) => (
                <div key={cred.id} className={`p-2 rounded-lg border flex flex-col ${
                  isDark ? 'bg-[#181c22] border-[#31353c]' : 'bg-white border-slate-200'
                }`}>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{cred.title}</span>
                  <span className={`text-[10px] font-mono mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cred.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Close Button */}
        <div className="flex justify-end pt-2">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#a51c30] hover:bg-[#8a1526] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
