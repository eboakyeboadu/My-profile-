import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!message) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-sm font-medium shadow-2xl backdrop-blur-xl animate-fade-in ${
      isDark 
        ? 'bg-[#181c24]/95 border-[#a51c30]/40 text-white shadow-[0_12px_32px_rgba(0,0,0,0.8)]' 
        : 'bg-slate-900/95 border-slate-700 text-white shadow-xl'
    }`}>
      <span className="material-symbols-outlined text-[#e9c349] text-lg">check_circle</span>
      <span>{message}</span>
    </div>
  );
};
