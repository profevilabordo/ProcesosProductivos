
import React from 'react';

interface HeaderProps {
  title: string;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuToggle }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        <h2 className="text-lg font-bold text-slate-800 truncate">{title}</h2>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
          Ciclo Lectivo 2024/25
        </span>
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
          VV
        </div>
      </div>
    </header>
  );
};

export default Header;
