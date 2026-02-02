
import React from 'react';
import { Block, ContentSection } from '../types';

interface BlockViewerProps {
  block: Block;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const SectionRenderer: React.FC<{ section: ContentSection }> = ({ section }) => {
  switch (section.type) {
    case 'imprescindible':
      return (
        <div className="bg-emerald-50 border-l-8 border-emerald-500 p-6 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2 uppercase text-xs tracking-widest">
            <i className="fas fa-circle text-emerald-500"></i>
            <span>Imprescindible (Para evaluación)</span>
          </div>
          {section.title && <h4 className="text-xl font-bold text-emerald-900 mb-2">{section.title}</h4>}
          <p className="text-emerald-800 leading-relaxed font-medium whitespace-pre-line">{section.text}</p>
          {section.list && (
            <ul className="mt-3 space-y-2">
              {section.list.map((item, i) => (
                <li key={i} className="flex gap-2 text-emerald-800 italic">
                  <span className="text-emerald-500">•</span> {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'importante':
      return (
        <div className="bg-amber-50 border-l-8 border-amber-400 p-6 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center gap-2 text-amber-800 font-bold mb-2 uppercase text-xs tracking-widest">
            <i className="fas fa-circle text-amber-400"></i>
            <span>Importante (Comprensión)</span>
          </div>
          {section.title && <h4 className="text-xl font-bold text-amber-900 mb-2">{section.title}</h4>}
          <p className="text-amber-800 leading-relaxed whitespace-pre-line">{section.text}</p>
          {section.list && (
            <ul className="mt-3 space-y-2">
              {section.list.map((item, i) => (
                <li key={i} className="flex gap-2 text-amber-700">
                  <span className="text-amber-400">•</span> {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'profundizar':
      return (
        <div className="bg-rose-50 border-l-8 border-rose-400 p-6 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center gap-2 text-rose-800 font-bold mb-2 uppercase text-xs tracking-widest">
            <i className="fas fa-circle text-rose-400"></i>
            <span>Para Profundizar (Desafío)</span>
          </div>
          {section.title && <h4 className="text-xl font-bold text-rose-900 mb-2">{section.title}</h4>}
          <p className="text-rose-800 leading-relaxed whitespace-pre-line">{section.text}</p>
          {section.list && (
            <ul className="mt-3 space-y-2">
              {section.list.map((item, i) => (
                <li key={i} className="flex gap-2 text-rose-700">
                  <span className="text-rose-400">•</span> {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'informatica':
      return (
        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-2xl my-6 flex gap-4 items-start shadow-sm">
          <div className="text-indigo-600 text-2xl mt-1">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-indigo-900 text-lg">{section.title || "Conexión con Informática"}</h4>
            <p className="text-indigo-700 mt-1 whitespace-pre-line">{section.text}</p>
            {section.list && (
              <ul className="mt-3 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i} className="text-indigo-600 text-sm flex gap-2">
                    <span className="opacity-50">•</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    case 'trampa':
      return (
        <div className="bg-orange-100 border-2 border-dashed border-orange-300 p-6 rounded-2xl my-6 flex gap-4 items-start shadow-sm">
          <div className="text-orange-600 text-2xl mt-1">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div>
            <h4 className="font-bold text-orange-900 text-lg">{section.title || "Trampa Típica"}</h4>
            <p className="text-orange-800 mt-1 font-medium italic whitespace-pre-line">{section.text}</p>
          </div>
        </div>
      );
    case 'reflexion':
      return (
        <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 my-8 shadow-sm">
          <h4 className="text-purple-900 font-bold text-xl mb-4 flex items-center gap-2">
            <i className="fas fa-brain"></i>
            {section.title || "Reflexión Metacognitiva"}
          </h4>
          <p className="text-purple-800 text-lg italic leading-relaxed whitespace-pre-line">
            {section.text}
          </p>
          {section.list && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.list.map((item, i) => (
                <div key={i} className="bg-white/50 p-4 rounded-xl border border-purple-200 text-purple-700 text-sm">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    case 'checklist':
      return (
        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 my-6">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
            <i className="fas fa-tasks text-slate-400"></i>
            {section.title || "Checklist"}
          </h4>
          <ul className="space-y-3">
            {section.list?.map((item, i) => (
              <li key={i} className="flex gap-3 items-center text-slate-700">
                <div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center text-[10px] text-slate-400">
                  <i className="fas fa-check opacity-20"></i>
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'actividad':
      return (
        <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-3xl my-8 shadow-md">
          <h4 className="text-blue-900 font-black text-2xl mb-4 flex items-center gap-3">
            <i className="fas fa-pencil-alt text-blue-500"></i>
            {section.title || "Actividad"}
          </h4>
          {section.text && <p className="text-blue-800 mb-6 text-lg font-medium whitespace-pre-line">{section.text}</p>}
          <div className="grid grid-cols-1 gap-4">
            {section.options?.map((opt, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-blue-100 text-blue-900 text-sm shadow-sm flex gap-4 items-start hover:border-blue-300 transition-colors">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">{i + 1}</div>
                <div className="whitespace-pre-line leading-relaxed">{opt}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'tabla':
      return (
        <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-800 text-white">
              <tr>
                {section.tableData?.headers.map((h, i) => (
                  <th key={i} className="p-4 font-bold uppercase text-xs tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {section.tableData?.rows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="p-4 text-slate-700 text-sm font-medium">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <div className="my-6">
          {section.title && <h3 className="text-2xl font-bold text-slate-800 mb-3">{section.title}</h3>}
          <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">{section.text}</p>
          {section.list && (
            <ul className="mt-4 space-y-3">
              {section.list.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-slate-400">{i+1}</div>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
  }
};

const BlockViewer: React.FC<BlockViewerProps> = ({ block, isCompleted, onToggleComplete }) => {
  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fadeIn">
      {/* Header Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="p-8 md:p-12 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-white to-slate-50">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-widest">Contenido Técnico</span>
              {isCompleted && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-widest">Estudiado</span>}
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">{block.title}</h1>
            <p className="text-slate-500 text-xl font-medium">{block.description}</p>
          </div>
          <button
            onClick={onToggleComplete}
            className={`
              flex-shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg
              ${isCompleted 
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-100' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100 hover:scale-[1.02]'
              }
            `}
          >
            <i className={`fas ${isCompleted ? 'fa-check-circle' : 'fa-circle-check'} text-xl`}></i>
            {isCompleted ? 'Bloque Aprendido' : 'Marcar como Leído'}
          </button>
        </div>

        {/* Content Flow */}
        <div className="p-8 md:p-12">
          {block.sections.map((section, index) => (
            <SectionRenderer key={index} section={section} />
          ))}
        </div>
      </div>

      <div className="text-center text-slate-400 text-sm flex items-center justify-center gap-3">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span>Final del Bloque</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>
    </div>
  );
};

export default BlockViewer;
