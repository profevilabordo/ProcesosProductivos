
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold tracking-wide uppercase">
          E.E.T.P. N° 602 - 5° A - Técnico en Informática
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Procesos Productivos
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Prof. Verónica Vila Bordó
        </p>
      </section>

      {/* Intro Guide */}
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
           <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl">
              <i className="fas fa-graduation-cap"></i>
           </div>
           <h2 className="text-2xl font-bold text-slate-800">¿Cómo usar esta plataforma?</h2>
        </div>
        <p className="text-slate-600 leading-relaxed text-lg">
          Este material está pensado para **leer, estudiar, reflexionar y elegir**. No es solo contenido teórico: incluye herramientas para que puedas controlar tu propio aprendizaje.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <i className="fas fa-circle text-emerald-500"></i>
            <span className="text-xs font-bold text-emerald-800">IMPRESCINDIBLE: Sale seguro en evaluación.</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <i className="fas fa-circle text-amber-400"></i>
            <span className="text-xs font-bold text-amber-800">IMPORTANTE: Refuerza la comprensión.</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-2xl border border-rose-100">
            <i className="fas fa-circle text-rose-400"></i>
            <span className="text-xs font-bold text-rose-800">PROFUNDIZAR: Desafío y curiosidad técnica.</span>
          </div>
        </div>
      </section>

      {/* Year Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <i className="fas fa-map-marked-alt text-indigo-600"></i>
          Roadmap del Año
        </h2>
        <div className="space-y-4">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-6 items-center group hover:border-indigo-300 transition-colors">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-2xl font-black">1</div>
              <div>
                 <h3 className="font-bold text-slate-900 text-lg">Antecedentes Históricos y Diseño de Producto</h3>
                 <p className="text-slate-500 text-sm">Desde las sociedades primitivas hasta la Industria 5.0 y localización.</p>
              </div>
              <i className="fas fa-chevron-right ml-auto text-slate-300 group-hover:text-indigo-400 transition-colors"></i>
           </div>
           <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 flex gap-6 items-center grayscale opacity-60">
              <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center text-2xl font-black">2</div>
              <div>
                 <h3 className="font-bold text-slate-600 text-lg">Administración y Organización Industrial</h3>
                 <p className="text-slate-400 text-sm">Estructuras funcionales y optimización de recursos.</p>
              </div>
           </div>
           <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 flex gap-6 items-center grayscale opacity-60">
              <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center text-2xl font-black">3</div>
              <div>
                 <h3 className="font-bold text-slate-600 text-lg">Gestión de Calidad y Costos Industriales</h3>
                 <p className="text-slate-400 text-sm">Normas IRAM, mejora continua y cálculo de rentabilidad.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
