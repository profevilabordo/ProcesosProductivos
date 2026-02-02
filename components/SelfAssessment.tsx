
import React from 'react';

interface SelfAssessmentProps {
  onStartTest: () => void;
}

const SelfAssessment: React.FC<SelfAssessmentProps> = ({ onStartTest }) => {
  return (
    <div className="max-w-6xl mx-auto pb-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-emerald-600/20 z-0"></div>
        <div className="relative z-10 p-8 md:p-16 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full text-sm font-bold tracking-wide uppercase">
            Autoevaluación Académica
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Procesos Productivos
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Portal de validación de conocimientos para alumnos de 5° Informática A.
            Poné a prueba lo aprendido sobre sistemas, diseño y localización.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-lg">👩‍🏫</span>
              <span>Prof. Verónica Vila Bordó</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🏫</span>
              <span>E.E.T.P. N° 602</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">Instrucciones</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Este portal contiene evaluaciones interactivas diseñadas para detectar qué conceptos de la asignatura 
                <strong> Procesos Productivos</strong> ya dominás y cuáles requieren un repaso en tu cuadernillo.
              </p>
              <p>
                Al finalizar cada test de 20 preguntas, el sistema te dará una devolución inmediata con el puntaje obtenido y la explicación de cada respuesta.
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
           <h2 className="text-3xl font-black text-slate-900">📚 Tests Activos</h2>
           <div className="space-y-4">
              <div className="bg-white rounded-3xl border-2 border-emerald-100 p-6 space-y-4 shadow-xl shadow-emerald-500/5">
                <div className="flex justify-between items-start">
                  <span className="text-3xl font-black text-emerald-600/20 italic">01</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-full">Activo</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">Unidad 1: Antecedentes e Inicios del Diseño</h3>
                <p className="text-sm text-slate-500">20 preguntas sobre factores, sistemas de producción y localización.</p>
                <button 
                  onClick={onStartTest}
                  className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-100"
                >
                  Comenzar Test
                  <i className="fas fa-play text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 space-y-4 opacity-60">
                <div className="flex justify-between items-start">
                  <span className="text-3xl font-black text-slate-300 italic">02</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-500 text-[10px] font-black uppercase rounded-full">Próximamente</span>
                </div>
                <h3 className="text-xl font-bold text-slate-600 leading-tight">Unidad 2: Administración</h3>
                <p className="text-sm text-slate-400">Disponible al finalizar la unidad en clase.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
