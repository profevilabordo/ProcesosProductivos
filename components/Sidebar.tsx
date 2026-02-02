
import React from 'react';
import { Unit, UserProgress } from '../types';

interface SidebarProps {
  units: Unit[];
  currentBlockId: string;
  currentView: 'home' | 'block' | 'assessment';
  onSelectBlock: (unitId: number, blockId: string) => void;
  onSelectAssessment: () => void;
  onSelectHome: () => void;
  progress: UserProgress;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  units, 
  currentBlockId, 
  currentView, 
  onSelectBlock, 
  onSelectAssessment, 
  onSelectHome,
  progress 
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <h1 className="text-xl font-bold leading-tight">Procesos Productivos</h1>
        <p className="text-xs text-slate-400 mt-1">E.E.T.P. N° 602 - 5° Inf. A</p>
        <p className="text-xs text-slate-300 font-medium">Prof. Verónica Vila Bordó</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Home Button */}
        <button
          onClick={onSelectHome}
          className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-all flex items-center gap-3 font-semibold mb-2
            ${currentView === 'home' 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-slate-600 hover:bg-slate-100'
            }
          `}
        >
          <i className="fas fa-home text-lg"></i>
          <span>Inicio / Presentación</span>
        </button>

        <div className="h-px bg-slate-100 mx-2 mb-4"></div>

        {units.map(unit => {
          const unitBlocks = unit.blocks || [];
          const completedCount = unitBlocks.filter(b => progress.completedBlocks.includes(b.id)).length;
          const totalBlocks = unitBlocks.length;
          const progressPercent = totalBlocks > 0 ? (completedCount / totalBlocks) * 100 : 0;

          return (
            <div key={unit.id} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{unit.title.startsWith('Unidad') ? unit.title : `Unidad ${unit.id}`}</h2>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div 
                    className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">{completedCount}/{totalBlocks} Bloques</span>
                  <span className="text-[10px] text-indigo-600 font-semibold">{Math.round(progressPercent)}%</span>
                </div>
              </div>
              
              <ul className="space-y-1">
                {unitBlocks.map((block, index) => {
                  const isActive = currentView === 'block' && currentBlockId === block.id;
                  const isDone = progress.completedBlocks.includes(block.id);
                  
                  return (
                    <li key={block.id || index}>
                      <button
                        onClick={() => onSelectBlock(unit.id, block.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-3 group
                          ${isActive 
                            ? 'bg-indigo-50 text-indigo-700 font-medium border border-indigo-100 shadow-sm' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                          }
                        `}
                      >
                        <div className={`
                          flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center border transition-colors
                          ${isDone 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : isActive ? 'border-indigo-400' : 'border-slate-300'
                          }
                        `}>
                          {isDone ? (
                            <i className="fas fa-check text-[8px]"></i>
                          ) : (
                            <span className="text-[8px]">{index + 1}</span>
                          )}
                        </div>
                        <span className="truncate">{block.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={onSelectAssessment}
            className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-all flex items-center gap-3 font-semibold
              ${currentView === 'assessment' 
                ? 'bg-orange-50 text-orange-700 border border-orange-100 shadow-sm' 
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }
            `}
          >
            <i className="fas fa-clipboard-check text-lg"></i>
            <span>Autoevaluación Final</span>
          </button>
        </div>
      </nav>

      <div className="p-4 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 text-center">
        Venado Tuerto - Santa Fe
      </div>
    </div>
  );
};

export default Sidebar;
