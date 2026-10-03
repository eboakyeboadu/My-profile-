/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from './data/portfolioData';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { InterestsSection } from './components/InterestsSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

const PortfolioContent: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isDark = theme === 'dark';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    showToast(`Email copied to clipboard: ${PORTFOLIO_DATA.profile.email}`);
  };

  const handleCopySpec = (title: string) => {
    showToast(`Architectural specification for "${title}" copied!`);
  };

  return (
    <div className={`relative min-h-screen font-sans antialiased selection:bg-[#a51c30] selection:text-white overflow-x-hidden transition-colors duration-200 ${
      isDark ? 'bg-dark-obsidian text-[#dfe2eb]' : 'bg-light-blueprint text-[#2d3748]'
    }`}>
      {/* Background Ambient Glows for Dark Mode */}
      {isDark && (
        <>
          <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#a51c30]/10 blur-[140px] pointer-events-none -z-10"></div>
          <div className="fixed top-[600px] right-5 w-[650px] h-[650px] rounded-full bg-[#c92a3e]/8 blur-[150px] pointer-events-none -z-10"></div>
          <div className="fixed top-[1800px] left-10 w-[550px] h-[550px] rounded-full bg-[#e9c349]/5 blur-[140px] pointer-events-none -z-10"></div>
          <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-[#a51c30]/10 blur-[150px] pointer-events-none -z-10"></div>
        </>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="w-full pt-20">
        {/* Section 1: Hero */}
        <Hero 
          onCopyEmail={handleCopyEmail}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Impact Metrics Bar */}
        <ImpactMetrics />

        {/* Section 2: Projects & Products Showcase */}
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 3: Credentials & Specializations */}
        <CredentialsSection />

        {/* Section 4: Executive Career Timeline */}
        <ExperienceSection />

        {/* Section 5: Academic Rigor & Education */}
        <EducationSection />

        {/* Section 6: Mentorship, Values & Passions */}
        <InterestsSection />

        {/* Section 7: Strategic Inquiries & Connect */}
        <ConnectSection onCopyToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCopySpec={handleCopySpec}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyToast={showToast}
      />

      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
