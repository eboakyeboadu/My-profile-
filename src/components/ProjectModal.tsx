import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onCopySpec: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onCopySpec }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl border shadow-2xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto ${
        isDark 
          ? 'bg-[#181c24] border-[#a51c30]/40 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9)]' 
          : 'bg-white border-slate-200 text-slate-800 shadow-2xl'
      }`}>
        {/* Header Ribbon */}
        <div className={`flex items-center justify-between border-b pb-4 ${
          isDark ? 'border-[#a51c30]/20' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c92a3e] animate-ping"></span>
            <span className={`font-mono text-xs uppercase font-bold tracking-widest ${
              isDark ? 'text-[#ffdad9]' : 'text-[#a51c30]'
            }`}>
              {project.fullSpec.categoryHeader}
            </span>
          </div>
          <button 
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? 'bg-[#262a31] hover:bg-[#31353c] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            title="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Title */}
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {project.fullSpec.title}
          </h3>
          <p className={`text-sm font-mono mt-1 ${
            isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
          }`}>
            {project.role} • {project.region}
          </p>
        </div>

        {/* Image Preview */}
        <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#a51c30]/30 bg-slate-100 dark:bg-[#10141a]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spec Overview */}
        <div className="space-y-3 text-sm">
          {/* Executive Overview */}
          <div className={`p-3.5 rounded-xl border ${
            isDark ? 'bg-[#10141a]/80 border-[#a51c30]/20' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className={`text-xs font-bold font-mono uppercase block mb-1 ${
              isDark ? 'text-[#e9c349]' : 'text-amber-800'
            }`}>
              Core Objective &amp; Context
            </span>
            <p className={`leading-relaxed ${isDark ? 'text-[#dfe2eb]/90' : 'text-slate-700'}`}>
              {project.fullSpec.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div className={`p-3.5 rounded-xl border ${
            isDark ? 'bg-[#181c22] border-[#594141]/40' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className={`text-xs font-bold font-mono uppercase block mb-1 ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              Challenge / Market Problem
            </span>
            <p className={`leading-relaxed ${isDark ? 'text-[#dfe2eb]/80' : 'text-slate-600'}`}>
              {project.fullSpec.problem}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="pt-2">
            <span className={`text-xs font-bold font-mono uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#ffdad9]' : 'text-slate-900'
            }`}>
              Key Engineering &amp; Product Deliverables
            </span>
            <ul className={`space-y-2 list-disc pl-5 ${isDark ? 'text-[#dfe2eb]/90' : 'text-slate-700'}`}>
              {project.fullSpec.deliverables.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Stack */}
          <div className="pt-2">
            <span className={`text-xs font-bold font-mono uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#e9c349]' : 'text-amber-800'
            }`}>
              Architecture &amp; Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.fullSpec.technicalStack.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-mono ${
                    isDark 
                      ? 'bg-[#262a31] border-[#a51c30]/30 text-[#ffdad9]' 
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="pt-2">
            <span className={`text-xs font-bold font-mono uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#ffb3b3]' : 'text-[#a51c30]'
            }`}>
              Verified Business Impact
            </span>
            <ul className={`space-y-1.5 list-disc pl-5 ${isDark ? 'text-[#dfe2eb]/90' : 'text-slate-700'}`}>
              {project.fullSpec.businessImpact.map((impact, index) => (
                <li key={index} className="leading-relaxed">
                  {impact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t ${
          isDark ? 'border-[#a51c30]/20' : 'border-slate-200'
        }`}>
          <button
            onClick={() => onCopySpec(project.title)}
            className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
              isDark ? 'text-[#ffb3b3] hover:text-[#ffdad9]' : 'text-[#a51c30] hover:text-[#8a1526]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">content_copy</span>
            <span>Copy Spec Overview</span>
          </button>
          
          <div className="flex items-center gap-2">
            <a 
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                isDark 
                  ? 'bg-[#262a31] hover:bg-[#31353c] text-white border-[#a51c30]/30' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
              }`}
            >
              <span>View Repository</span>
              <span className="material-symbols-outlined text-xs">north_east</span>
            </a>
            <button 
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#a51c30] hover:bg-[#8a1526] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
