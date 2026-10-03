import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ConnectSectionProps {
  onCopyToast: (msg: string) => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onCopyToast }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [topic, setTopic] = useState('Product Leadership Role');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    onCopyToast(`Email copied: ${PORTFOLIO_DATA.profile.email}`);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry: ${topic}] from ${senderName || 'Strategic Contact'}`);
    const body = encodeURIComponent(
      `Hello Ebenezer,\n\n${message || 'I would love to connect regarding your product leadership trajectory and background.'}\n\nBest regards,\n${senderName || 'Strategic Colleague'}\n${senderEmail || ''}`
    );
    
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
    onCopyToast('Opening your email client to send message...');
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12" id="connect">
      <div className={`p-6 sm:p-10 md:p-12 rounded-3xl border shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${
        isDark 
          ? 'bg-[#181c22] border-[#a51c30]/30' 
          : 'bg-white border-slate-200/90 shadow-slate-200/60'
      }`}>
        {/* Left narrative */}
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c92a3e] animate-pulse shadow-[0_0_10px_rgba(201,42,62,0.8)]"></span>
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              OPEN FOR PRODUCT OPPORTUNITIES
            </span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#090d16]'
          }`}>
            Get In Touch
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#dfe2eb]/85' : 'text-slate-600'
          }`}>
            Interested in discussing product leadership opportunities, advisory roles, or speaking engagements? Feel free to reach out directly.
          </p>

          {/* Quick contact buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 border group cursor-pointer ${
                isDark 
                  ? 'bg-[#262a31] hover:bg-[#353940] text-white border-[#a51c30]/25' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 shadow-sm'
              }`}
              title="Click to copy email"
            >
              <span className="material-symbols-outlined text-[#a51c30] dark:text-[#ffb3b3] group-hover:scale-110 transition-transform text-lg">
                content_copy
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold">{PORTFOLIO_DATA.profile.email}</span>
            </button>

            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/[^0-9+]/g, '')}`}
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 border text-xs sm:text-sm ${
                isDark 
                  ? 'bg-[#262a31] hover:bg-[#353940] text-white border-[#a51c30]/25' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              <span className="material-symbols-outlined text-[#b45309] dark:text-[#e9c349] text-lg">call</span>
              <span className="font-mono font-semibold">{PORTFOLIO_DATA.profile.phone}</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 border text-xs sm:text-sm font-semibold group ${
                isDark 
                  ? 'bg-[#262a31] hover:bg-[#353940] text-white border-[#a51c30]/25' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              <span className="material-symbols-outlined text-[#a51c30] dark:text-[#ffb3b3] text-lg group-hover:scale-110 transition-transform">
                link
              </span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div className={`w-full lg:w-[420px] p-6 sm:p-7 rounded-2xl border shadow-lg flex flex-col gap-4 ${
          isDark
            ? 'bg-[#262a31]/90 border-[#a51c30]/30'
            : 'bg-slate-50 border-slate-200/90'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              SEND A MESSAGE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
          </div>

          <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className={`text-xs font-bold ${isDark ? 'text-[#dfe2eb]/85' : 'text-slate-700'}`}>Topic</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`w-full p-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#a51c30] font-medium ${
                  isDark
                    ? 'bg-[#181c22] text-white border-[#594141]/50 focus:border-[#a51c30]'
                    : 'bg-white text-slate-900 border-slate-300 focus:border-[#a51c30]'
                }`}
              >
                <option value="Product Leadership Role">Product Leadership Role</option>
                <option value="Advisory / Consulting">Advisory / Consulting</option>
                <option value="Harvard MBA Networking">Harvard MBA Networking</option>
                <option value="Speaking / Panel">Speaking / Panel</option>
                <option value="General Collaboration">General Collaboration</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label className={`text-xs font-bold ${isDark ? 'text-[#dfe2eb]/85' : 'text-slate-700'}`}>Your Name</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full p-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-[#a51c30] font-medium ${
                    isDark
                      ? 'bg-[#181c22] text-white border-[#594141]/50 focus:border-[#a51c30] placeholder:text-[#dfe2eb]/40'
                      : 'bg-white text-slate-900 border-slate-300 focus:border-[#a51c30] placeholder:text-slate-400'
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className={`text-xs font-bold ${isDark ? 'text-[#dfe2eb]/85' : 'text-slate-700'}`}>Your Email</label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className={`w-full p-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-[#a51c30] font-medium ${
                    isDark
                      ? 'bg-[#181c22] text-white border-[#594141]/50 focus:border-[#a51c30] placeholder:text-[#dfe2eb]/40'
                      : 'bg-white text-slate-900 border-slate-300 focus:border-[#a51c30] placeholder:text-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className={`text-xs font-bold ${isDark ? 'text-[#dfe2eb]/85' : 'text-slate-700'}`}>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Brief note or collaborative scope..."
                rows={3}
                className={`w-full p-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#a51c30] resize-none font-medium ${
                  isDark
                    ? 'bg-[#181c22] text-white border-[#594141]/50 focus:border-[#a51c30] placeholder:text-[#dfe2eb]/40'
                    : 'bg-white text-slate-900 border-slate-300 focus:border-[#a51c30] placeholder:text-slate-400'
                }`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#a51c30] hover:bg-[#881324] text-white text-sm font-bold transition-all shadow-md shadow-[#a51c30]/25 border border-[#c92a3e]/30 flex items-center justify-center gap-2 cursor-pointer mt-1"
            >
              <span className="material-symbols-outlined text-base">send</span>
              <span>{isSent ? 'Opening Mail Client...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
