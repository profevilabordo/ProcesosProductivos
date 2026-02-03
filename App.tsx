import React, { useState, useEffect } from 'react';
import { CURRICULUM } from './constants.tsx';
import { UserProgress, Unit, Block } from './types.ts';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import BlockViewer from './components/BlockViewer.tsx';
import SelfAssessment from './components/SelfAssessment.tsx';
import Home from './components/Home.tsx';
import Unit1Test from './components/Unit1Test.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'block' | 'assessment' | 'test-u1'>('home');
  const [currentUnitId, setCurrentUnitId] = useState<number>(1);
  const [currentBlockId, setCurrentBlockId] = useState<string>("u1b1");
  const [progress, setProgress] = useState<UserProgress>({ completedBlocks: [] });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('procesos_productivos_progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading progress", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('procesos_productivos_progress', JSON.stringify(progress));
  }, [progress]);

  const toggleBlockCompletion = (blockId: string) => {
    setProgress(prev => {
      const isCompleted = prev.completedBlocks.includes(blockId);
      if (isCompleted) {
        return { completedBlocks: prev.completedBlocks.filter(id => id !== blockId) };
      } else {
        return { completedBlocks: [...prev.completedBlocks, blockId] };
      }
    });
  };

  const handleSelectBlock = (unitId: number, blockId: string) => {
    setCurrentUnitId(unitId);
    setCurrentBlockId(blockId);
    setView('block');
    setIsSidebarOpen(false);
  };

  const handleSelectAssessment = () => {
    setView('assessment');
    setIsSidebarOpen(false);
  };

  const handleSelectHome = () => {
    setView('home');
    setIsSidebarOpen(false);
  };

  const handleStartTest = () => {
    setView('test-u1');
  };

  // Selección ultra-segura de datos para evitar errores de .find en undefined o arrays vacíos
  const safeCurriculum = CURRICULUM || [];
  const currentUnit = safeCurriculum.find(u => u.id === currentUnitId) || safeCurriculum[0] || null;
  const blocks = currentUnit?.blocks || [];
  const currentBlock = blocks.find(b => b.id === currentBlockId) || blocks[0] || null;

  const getPageTitle = () => {
    if (view === 'home') return "Inicio / Presentación";
    if (view === 'assessment') return "Autoevaluación Final";
    if (view === 'test-u1') return "Evaluación Interactiva: Unidad 1";
    return currentUnit?.title || "Procesos Productivos";
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {view !== 'test-u1' && (
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0
        `}>
          <Sidebar 
            units={safeCurriculum} 
            currentBlockId={currentBlockId}
            currentView={view as 'home' | 'block' | 'assessment'}
            onSelectBlock={handleSelectBlock}
            onSelectAssessment={handleSelectAssessment}
            onSelectHome={handleSelectHome}
            progress={progress}
          />
        </aside>
      )}

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {view !== 'test-u1' && (
          <Header 
            title={getPageTitle()}
            onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
        
        <div className={`flex-1 overflow-y-auto ${view === 'test-u1' ? 'p-0' : 'p-4 md:p-8 lg:p-12'} bg-slate-50`}>
          {view === 'home' && <Home />}
          {view === 'assessment' && <SelfAssessment onStartTest={handleStartTest} />}
          {view === 'test-u1' && <Unit1Test onBack={() => setView('assessment')} />}
          {view === 'block' && currentBlock && (
            <BlockViewer 
              block={currentBlock}
              isCompleted={progress.completedBlocks.includes(currentBlock.id)}
              onToggleComplete={() => toggleBlockCompletion(currentBlock.id)}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
