import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'ops' | 'marketplace'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Simulation' },
    { id: 'ops', label: 'Operations & Dashboards' },
    { id: 'marketplace', label: 'Marketplaces' }
  ] as const;

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    return activeFilter === 'all' || project.category === activeFilter;
  });

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12" id="products">
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#a51c30] dark:text-[#ffb3b3]">
            <span className="material-symbols-outlined text-lg">code</span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider">PROJECTS &amp; SYSTEMS</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#090d16]'
          }`}>
            Projects &amp; Products
          </h2>
          <p className={`text-sm sm:text-base max-w-xl ${
            isDark ? 'text-[#dfe2eb]/85' : 'text-slate-600'
          }`}>
            Software platforms, autonomous AI agents, and executive operational tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl border ${
          isDark 
            ? 'bg-[#181c22] border-[#594141]/30' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#a51c30] text-white shadow-md border border-[#c92a3e]/40'
                    : isDark
                    ? 'text-[#dfe2eb]/80 hover:text-white hover:bg-[#262a31]'
                    : 'text-slate-700 hover:text-black hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isCrimson = project.badgeType === 'crimson';
          const isGold = project.badgeType === 'gold';

          return (
            <div
              key={project.id}
              className={`rounded-3xl border overflow-hidden transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 ${
                isDark 
                  ? 'bg-[#181c22] border-[#a51c30]/25 hover:border-[#a51c30]/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(165,28,48,0.22)]' 
                  : 'bg-white border-slate-200/90 hover:border-[#a51c30]/50 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Image Banner */}
              <div className="relative h-[200px] bg-slate-100 dark:bg-[#31353c] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10141a]/90 border border-[#a51c30]/40 backdrop-blur-md">
                  <span className={`w-2 h-2 rounded-full ${isGold ? 'bg-[#e9c349]' : isCrimson ? 'bg-[#c92a3e]' : 'bg-[#4285F4]'} animate-pulse`}></span>
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[11px] font-bold tracking-wider uppercase ${
                      isDark ? 'text-[#ffb3b3]' : 'text-[#881324]'
                    }`}>
                      {project.role}
                    </span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-semibold ${
                      isDark 
                        ? 'text-[#e9c349] bg-[#262a31] border-[#e9c349]/30' 
                        : 'text-amber-900 bg-amber-50 border-amber-300'
                    }`}>
                      {project.region}
                    </span>
                  </div>

                  <h3 className={`font-mono text-lg sm:text-xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-[#090d16]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-normal ${
                    isDark ? 'text-[#dfe2eb]/85' : 'text-slate-600'
                  }`}>
                    {project.summary}
                  </p>

                  {/* KPIs */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    {project.kpis.map((kpi, idx) => (
                      <div key={idx} className={`p-2 rounded-xl border flex flex-col text-center ${
                        isDark ? 'bg-[#262a31] border-[#a51c30]/20' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <span className={`font-display text-base font-bold ${
                          kpi.highlightColor === 'crimson' 
                            ? isDark ? 'text-[#c92a3e]' : 'text-[#a51c30]' 
                            : kpi.highlightColor === 'gold' 
                            ? isDark ? 'text-[#e9c349]' : 'text-amber-700' 
                            : isDark ? 'text-[#ffdad9]' : 'text-slate-900'
                        }`}>
                          {kpi.value}
                        </span>
                        <span className={`font-mono text-[9px] uppercase font-semibold ${
                          isDark ? 'text-[#dfe2eb]/60' : 'text-slate-500'
                        }`}>
                          {kpi.sublabel}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md border font-mono text-[10px] font-medium ${
                          isDark 
                            ? 'bg-[#262a31] border-[#594141]/40 text-[#dfe2eb]/80' 
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className={`flex items-center gap-2 pt-3 border-t ${
                  isDark ? 'border-[#31353c]/40' : 'border-slate-100'
                }`}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#a51c30] hover:bg-[#881324] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Code</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-colors text-center cursor-pointer ${
                      isDark 
                        ? 'bg-[#262a31] hover:bg-[#353940] text-[#ffdad9] border-[#a51c30]/30' 
                        : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 shadow-sm'
                    }`}
                  >
                    Deep Dive Spec
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
