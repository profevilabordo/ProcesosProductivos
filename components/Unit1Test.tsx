
import React, { useState } from 'react';

const QUESTIONS = [
  {
    level: "🟢",
    topic: "Proceso productivo",
    q: "¿Qué define mejor a un proceso productivo?",
    opts: [
      "Una actividad aislada para fabricar un objeto",
      "El conjunto organizado de actividades que transforma insumos en bienes o servicios",
      "Un conjunto de máquinas trabajando sin personas",
      "Solo el trabajo manual en una fábrica"
    ],
    a: 1,
    exp: "Un proceso productivo es un sistema organizado: transforma insumos (materia, trabajo, tecnología, energía) en bienes o servicios."
  },
  {
    level: "🟢",
    topic: "Elementos",
    q: "¿Cuál de los siguientes NO es un elemento típico de los procesos productivos?",
    opts: ["Materia prima", "Trabajo", "Tecnología", "Publicidad"],
    a: 3,
    exp: "Los elementos básicos incluyen materia prima, trabajo, capital, tecnología y energía. Publicidad es parte del área comercial, no del proceso productivo en sí."
  },
  {
    level: "🟡",
    topic: "Elementos vs factores",
    q: "La relación correcta entre factor productivo y retribución es:",
    opts: [
      "Capital → Salario",
      "Trabajo → Interés",
      "Tierra → Renta",
      "Iniciativa empresarial → Renta"
    ],
    a: 2,
    exp: "Tierra → Renta; Trabajo → Salario; Capital → Interés; Iniciativa empresarial → Beneficio."
  },
  {
    level: "🟢",
    topic: "Cantidad producida",
    q: "La producción artesanal se caracteriza principalmente por:",
    opts: [
      "Grandes volúmenes estandarizados",
      "Alta personalización y baja escala",
      "Flujo continuo sin interrupciones",
      "Producción sin stock mediante JIT"
    ],
    a: 1,
    exp: "La artesanal es personalizada y de baja escala; suele concentrar varias etapas en una misma persona o equipo pequeño."
  },
  {
    level: "🟢",
    topic: "Cantidad producida",
    q: "¿Qué sistema produce sin interrupciones y suele usarse en industrias como petroquímica o cemento?",
    opts: ["Por lotes", "Continua", "Artesanal", "Por proyectos"],
    a: 1,
    exp: "La producción continua opera de forma ininterrumpida por eficiencia y por la naturaleza del proceso."
  },
  {
    level: "🟡",
    topic: "JIT",
    q: "¿Cuál es el objetivo principal del sistema Justo a Tiempo (JIT)?",
    opts: [
      "Producir más de lo necesario para bajar costos",
      "Minimizar inventarios produciendo en la cantidad y momento exactos",
      "Eliminar por completo la participación humana",
      "Fabricar solo productos personalizados"
    ],
    a: 1,
    exp: "JIT busca reducir stock y costos asociados, coordinando producción y demanda con precisión."
  },
  {
    level: "🟢",
    topic: "Tecnología empleada",
    q: "Producción mecanizada significa:",
    opts: [
      "Robots que trabajan solos",
      "Uso de máquinas con intervención humana",
      "Trabajo manual sin máquinas",
      "Control total por IA sin operarios"
    ],
    a: 1,
    exp: "En la mecanizada hay máquinas, pero el operario interviene activamente (operación, ajustes, control)."
  },
  {
    level: "🟡",
    topic: "Automatización",
    q: "Una diferencia típica entre automatizada y robotizada es que la robotizada:",
    opts: [
      "No usa sistemas de control",
      "Usa robots industriales para tareas repetitivas de alta precisión",
      "Siempre es artesanal",
      "No requiere energía"
    ],
    a: 1,
    exp: "Robotizada suele implicar robots industriales. Automatizada puede incluir control automático sin necesariamente robots (PLC, sensores, cintas, etc.)."
  },
  {
    level: "🟢",
    topic: "Flujo",
    q: "Producción por proyectos se relaciona mejor con:",
    opts: ["Un producto único a medida", "Miles de unidades idénticas", "Flujo continuo", "Producción sin intervención humana"],
    a: 0,
    exp: "Por proyectos: obra/solución única (ej. edificio, software a medida)."
  },
  {
    level: "🟡",
    topic: "Flujo",
    q: "Producción flexible es la capacidad de:",
    opts: [
      "Fabricar siempre lo mismo sin cambios",
      "Adaptarse rápido a cambios de diseño o demanda",
      "Producir solo manualmente",
      "Detener el proceso por largos períodos"
    ],
    a: 1,
    exp: "Flexible: adaptación rápida con costos y tiempos razonables, apoyada en organización y tecnología."
  },
  {
    level: "🟢",
    topic: "Fases (producto)",
    q: "¿Cuál fase del diseño define características técnicas y funcionales antes de fabricar?",
    opts: ["Generación de ideas", "Diseño conceptual", "Lanzamiento", "Investigación de mercado"],
    a: 1,
    exp: "En el diseño conceptual se elige la mejor idea y se define cómo será técnicamente y funcionalmente."
  },
  {
    level: "🟡",
    topic: "Prototipo",
    q: "¿Para qué sirve principalmente un prototipo de producto?",
    opts: [
      "Para venderlo masivamente",
      "Para probar y detectar errores antes de producir en serie",
      "Para reemplazar la investigación de mercado",
      "Para eliminar el control de calidad"
    ],
    a: 1,
    exp: "El prototipo permite pruebas y ajustes: evita errores caros en producción."
  },
  {
    level: "🟢",
    topic: "Pruebas",
    q: "La fase de pruebas busca:",
    opts: [
      "Aumentar stock",
      "Evaluar funcionamiento, calidad y aceptación del usuario",
      "Elegir el mercado objetivo por primera vez",
      "Definir la necesidad recién al final"
    ],
    a: 1,
    exp: "Pruebas: verificar desempeño, calidad, seguridad y experiencia de uso antes del lanzamiento."
  },
  {
    level: "🟡",
    topic: "Servicios",
    q: "Una diferencia clave del diseño de servicios respecto al de productos es que el servicio:",
    opts: [
      "Siempre se almacena en stock",
      "Suele producirse y consumirse al mismo tiempo",
      "No involucra personas",
      "No necesita procesos"
    ],
    a: 1,
    exp: "Servicios: intangibles y muchas veces se producen mientras se consumen (atención, soporte, etc.)."
  },
  {
    level: "🔴",
    topic: "Informática y producción",
    q: "En una fábrica automatizada, un aporte típico del Técnico en Informática es:",
    opts: [
      "Definir el color del packaging",
      "Mantener y configurar sistemas de control, redes, sensores y registro de datos",
      "Reemplazar materia prima por publicidad",
      "Eliminar la planificación"
    ],
    a: 1,
    exp: "La informática integra control, datos, monitoreo, redes industriales, mantenimiento y mejora continua."
  },
  {
    level: "🟢",
    topic: "Localización",
    q: "¿Por qué la localización es estratégica para una empresa?",
    opts: [
      "Porque no afecta costos ni tiempos",
      "Porque impacta costos, acceso a clientes/proveedores e infraestructura",
      "Porque solo depende del gusto del dueño",
      "Porque solo importa en empresas pequeñas"
    ],
    a: 1,
    exp: "La ubicación influye en costos logísticos, mano de obra, infraestructura, normativas y competitividad."
  },
  {
    level: "🟡",
    topic: "Factores de localización",
    q: "Elegir una planta cerca de rutas, energía estable e internet confiable se relaciona con:",
    opts: ["Cercanía al mercado", "Impacto ambiental", "Infraestructura y servicios", "Acceso a materias primas"],
    a: 2,
    exp: "Infraestructura y servicios incluye transporte, energía, conectividad, agua, etc."
  },
  {
    level: "🟡",
    topic: "Normas y regulaciones",
    q: "Las zonas industriales habilitadas y beneficios impositivos por región corresponden a:",
    opts: ["Marco legal y regulaciones", "Acceso a materias primas", "Cercanía al mercado", "Producción por lotes"],
    a: 0,
    exp: "El marco legal regula qué se puede instalar, dónde, y bajo qué condiciones (y a veces incentiva inversiones)."
  },
  {
    level: "🔴",
    topic: "Impacto ambiental",
    q: "Ubicar una industria química lejos de zonas residenciales se vincula principalmente con:",
    opts: ["Mano de obra", "Impacto ambiental", "Producción flexible", "Diseño conceptual"],
    a: 1,
    exp: "El impacto ambiental y la seguridad condicionan la ubicación por riesgos y regulaciones."
  },
  {
    level: "🟢",
    topic: "Síntesis",
    q: "¿Cuál afirmación integra mejor los contenidos de la unidad?",
    opts: [
      "La producción solo depende de máquinas",
      "Los sistemas productivos se eligen según demanda, tecnología, organización y ubicación",
      "La localización no influye en el proceso",
      "Diseñar un producto es solo estética"
    ],
    a: 1,
    exp: "La elección del sistema productivo y su diseño dependen de múltiples factores: demanda, costos, tecnología, organización y localización."
  }
];

interface Unit1TestProps {
  onBack: () => void;
}

const Unit1Test: React.FC<Unit1TestProps> = ({ onBack }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = Object.entries(userAnswers).reduce((acc, [idx, val]) => {
    return val === QUESTIONS[parseInt(idx)].a ? acc + 1 : acc;
  }, 0);
  const total = QUESTIONS.length;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
             <button onClick={onBack} className="text-emerald-400 hover:text-emerald-300 font-bold text-sm mb-2 flex items-center gap-2">
               <i className="fas fa-arrow-left"></i> Volver al Portal
             </button>
             <h1 className="text-2xl font-black">Autoevaluación Unidad 1</h1>
             <p className="text-slate-400 text-sm">Procesos Productivos · Prof. Verónica Vila Bordó</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300">20 Preguntas</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300">5° Inf. A</span>
          </div>
        </header>

        <div className="space-y-6">
          {QUESTIONS.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.a;
            const hasAnswered = userAnswers[idx] !== undefined;

            return (
              <div key={idx} className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase">Pregunta {idx + 1}</span>
                  <span className={`text-[10px] px-2 py-1 rounded-md font-bold ${q.level === '🟢' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {q.level} {q.topic}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-6">{q.q}</h3>
                <div className="grid gap-3">
                  {q.opts.map((opt, oIdx) => {
                    const isSelected = userAnswers[idx] === oIdx;
                    const isTheCorrectOne = oIdx === q.a;
                    let style = "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10";
                    if (isSelected) style = "bg-indigo-500/20 border-indigo-500 text-indigo-100";
                    if (showResults) {
                      if (isTheCorrectOne) style = "bg-emerald-500/20 border-emerald-500 text-emerald-100";
                      else if (isSelected && !isCorrect) style = "bg-rose-500/20 border-rose-500 text-rose-100";
                      else style = "opacity-40 border-white/5";
                    }
                    return (
                      <button key={oIdx} onClick={() => handleSelect(idx, oIdx)} disabled={showResults} className={`w-full text-left p-4 rounded-xl border transition-all flex gap-3 items-start ${style}`}>
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${isSelected ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-slate-500'}`}>
                          {isSelected && <i className="fas fa-check text-[10px]"></i>}
                        </div>
                        <span className="text-sm font-medium">{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {showResults && (
                  <div className={`mt-4 p-4 rounded-xl border border-dashed text-sm ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/30 text-emerald-200' : 'bg-rose-500/5 border-rose-500/30 text-rose-200'}`}>
                    <strong>{isCorrect ? '✅ Correcto: ' : '❌ Incorrecto: '}</strong> {q.exp}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showResults ? (
          <div className="bg-slate-800 border-2 border-emerald-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
            <h2 className="text-3xl font-black">Resultado Final</h2>
            <div className="flex items-center justify-center gap-8">
              <div className="text-5xl font-black text-emerald-400">{score}/{total}</div>
              <div className="text-2xl font-bold text-slate-300">{percentage}%</div>
            </div>
            <p className="text-slate-400">{percentage >= 70 ? "¡Excelente desempeño!" : "Te sugerimos repasar los bloques en rojo."}</p>
            <div className="flex justify-center gap-4">
               <button onClick={() => {setShowResults(false); setUserAnswers({}); window.scrollTo(0,0);}} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all">Reiniciar</button>
               <button onClick={onBack} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold transition-all">Volver al Inicio</button>
            </div>
          </div>
        ) : (
          <div className="sticky bottom-8 flex justify-center">
            <button onClick={() => setShowResults(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/40 transform hover:scale-105 transition-all">
              Corregir Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Unit1Test;
