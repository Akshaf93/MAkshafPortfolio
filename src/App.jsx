import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Mail, 
  MoveRight,
  MapPin,
  Ruler,
  Settings,
  Triangle,
  Circle,
  Square,
  PenTool,
  X,
  ZoomIn,
  Printer,
  Sun,
  Moon,
  Cpu,
  Activity,
  Terminal
} from 'lucide-react';

// --- Data ---
const data = {
  header: {
    name: "MUHAMMAD AKSHAF",
    dwg_no: "AS-2025-01",
    role: "MECHANICAL ENGINEER",
    scale: "1:1",
    contact: "mmebhoob.ug24mme@student.nust.edu.pk",
    location: "Islamabad, Pakistan",
    rev: "A.04"
  },
  notes: [
    "1. ALL DIMENSIONS IN MILLIMETERS UNLESS OTHERWISE SPECIFIED.",
    "2. FOCUS: KINEMATIC DESIGN, FEA, & CFD.",
    "3. METHODOLOGY: FIRST-PRINCIPLES PHYSICS & ITERATIVE PROTOTYPING.",
    "4. MATERIAL: INTELLECTUAL CURIOSITY & RIGOROUS ANALYSIS."
  ],
  skills: [
    { cat: "ANALYSIS", items: [
      { name: "ANSYS Fluent", level: 90 }, 
      { name: "FEA Static/Transient", level: 85 }, 
      { name: "MATLAB Simulink", level: 80 }, 
      { name: "Python (SciPy)", level: 75 }
    ]},
    { cat: "DESIGN", items: [
      { name: "SolidWorks (CSWP)", level: 95 }, 
      { name: "Catia V5", level: 70 }, 
      { name: "GD&T (ASME Y14.5)", level: 85 }, 
      { name: "DFM/DFA", level: 80 }
    ]},
    { cat: "FABRICATION", items: [
      { name: "CNC (3-Axis)", level: 60 }, 
      { name: "Injection Molding", level: 65 }, 
      { name: "Additive (SLA/FDM)", level: 90 }, 
      { name: "Laser Cutting", level: 95 }
    ]}
  ],
  experience: [
    {
      company: "Nexe",
      dept: "Design Team",
      role: "Mech. Design Intern",
      date: "Oct 25 - Present",
      result: "Initial-design of UGV rescue drone, UGV and launching platform in SolidWorks.",
      details: "Initial-design of UGV rescue drone, UGV and launching platform in SolidWorks."
    },
    {
      company: "Team",
      dept: "Aerodynamics",
      role: "Member",
      date: "Oct 25 - PRES",
      result: "Boundary layer separation study. Designed modular wind tunnel test section (Acrylic/80-20). PIV data processing in MATLAB.",
      details: "Boundary layer separation study. Designed modular wind tunnel test section (Acrylic/80-20). PIV data processing in MATLAB."
    }
  ],
  projects: [
    {
      id: "VIEW A-A",
      title: "ASME Efx IAm3D Rover",
      spec: "ASSEMBLY: ROBOTICS",
      image: "https://images.unsplash.com/photo-1535378437327-274cc23898e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bom: [
        { item: "Material", qty: "Al 6061-T6" },
        { item: "Mass", qty: "4.2 kg" },
        { item: "Gain", qty: "+40% Travel" }
      ],
      tools: ["SolidWorks", "Python", "ROS2", "CNC"],
      desc: "Rocker-bogie suspension implementation. Differential bar averaging for chassis pitch stability. Kinematic synthesis performed to optimize linkage lengths.",
      fullDetails: "This project addressed the challenge of traversing unstructured terrain. By implementing a rocker-bogie suspension, we decoupled the left and right chassis movement, ensuring all 6 wheels maintain contact with the ground. The differential bar mechanism averages the pitch of the two rockers to stabilize the main chassis payload."
    },
    {
      id: "VIEW B-B",
      title: "CENTRIFUGAL COMPRESSOR",
      spec: "SUB-ASSY: TURBOMACHINERY",
      image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bom: [
        { item: "Speed", qty: "80k RPM" },
        { item: "Ratio", qty: "3.5:1" },
        { item: "Solver", qty: "ANSYS CFX" }
      ],
      tools: ["ANSYS CFX", "MATLAB", "TurboGrid"],
      desc: "RANS simulation (k-epsilon) of impeller tip flow separation. Iterative optimization of blade backsweep angle delayed stall onset by 1200 RPM.",
      fullDetails: "The primary objective was to delay stall onset in a micro-turbine compressor. Using ANSYS CFX, I modeled the full rotor-stator interaction. The final design featured a 30-degree backsweep which reduced shock wave intensity at the blade tips."
    }
  ]
};

// --- Components ---

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    const sequence = [
      "INITIALIZING KERNEL...",
      "CHECKING MEMORY INTEGRITY... OK",
      "LOADING CAD DRIVERS... OK",
      "MOUNTING PORTFOLIO_V4.ISO...",
      "SYSTEM READY."
    ];
    
    let delay = 0;
    sequence.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (i === sequence.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
      delay += 400 + Math.random() * 400;
    });
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black text-green-500 font-mono text-xs p-8 flex flex-col justify-end"
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 0.5 }}
    >
      {lines.map((line, i) => (
        <div key={i}>{`> ${line}`}</div>
      ))}
      <div className="animate-pulse mt-2">_</div>
    </motion.div>
  );
};

const SkillMeter = ({ name, level, isBlueprint }) => (
  <div className="mb-3">
    <div className="flex justify-between text-[10px] font-mono font-bold mb-1 opacity-80">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className={`h-2 w-full border border-current p-[1px] ${isBlueprint ? 'border-white' : 'border-black'}`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${isBlueprint ? 'bg-white' : 'bg-black'}`}
      />
    </div>
  </div>
);

const GDTSymbol = ({ symbol, label }) => (
  <div className="border border-current flex text-xs font-mono font-bold bg-transparent">
    <div className="w-6 h-6 flex items-center justify-center border-r border-current">{symbol}</div>
    <div className="px-2 flex items-center">{label}</div>
  </div>
);

const TitleBlockCell = ({ label, value, className = "" }) => (
  <div className={`border-r border-current p-2 flex flex-col justify-center ${className}`}>
    <span className="text-[8px] font-bold uppercase opacity-60 leading-none mb-1">{label}</span>
    <span className="font-mono text-xs md:text-sm font-bold leading-tight truncate">{value}</span>
  </div>
);

const ProjectModal = ({ project, onClose, isBlueprint }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm print:hidden"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 shadow-2xl p-8 ${isBlueprint ? 'bg-[#003366] text-white border-white' : 'bg-white text-black border-black'}`}
      onClick={e => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 hover:opacity-50">
        <X size={24} />
      </button>

      <div className="flex items-center gap-2 mb-6 border-b border-current pb-2">
        <ZoomIn size={20} />
        <h2 className="font-bold font-mono text-xl uppercase">DETAIL VIEW: {project.id}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-current p-2">
          <img src={project.image} alt={project.title} className={`w-full h-64 object-cover ${isBlueprint ? 'grayscale invert' : 'grayscale'}`} />
        </div>
        
        <div>
          <h3 className="font-black text-3xl uppercase mb-4 leading-none">{project.title}</h3>
          <div className="font-mono text-xs font-bold mb-4 opacity-70">{project.spec}</div>
          <p className="font-serif leading-relaxed mb-6 text-sm md:text-base">
            {project.fullDetails || project.desc}
          </p>
          
          <div className="border border-current p-4">
             <div className="font-mono text-xs font-bold mb-2 border-b border-current pb-1">FULL BILL OF MATERIALS</div>
             {project.bom.map((item, i) => (
               <div key={i} className="flex justify-between font-mono text-xs py-1 border-b border-dashed border-current/30">
                 <span>{item.item}</span>
                 <span className="font-bold">{item.qty}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, onClick, isBlueprint }) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    onClick={() => onClick(project)}
    className={`border-2 mb-12 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer group ${isBlueprint ? 'bg-[#003366] border-white text-white shadow-none' : 'bg-white border-black text-black'}`}
  >
    {/* Section Cut Header */}
    <div className={`border-b-2 p-2 flex justify-between items-center ${isBlueprint ? 'bg-[#002244] border-white' : 'bg-slate-100 border-black'}`}>
      <div className="font-bold font-serif text-lg uppercase border-b border-current inline-block leading-none">
        {project.id}
      </div>
      <div className="font-mono text-xs uppercase font-bold opacity-60">
        {project.spec}
      </div>
    </div>

    <div className="grid md:grid-cols-12">
      {/* Image / Drawing View */}
      <div className={`md:col-span-7 border-b-2 md:border-b-0 md:border-r-2 border-current relative h-64 md:h-auto p-4 ${isBlueprint ? 'bg-[#003366]' : 'bg-white'}`}>
        <div className="w-full h-full border border-current relative p-1 group-hover:border-dashed transition-all">
           <div className="absolute top-0 left-0 border-l border-t border-current w-2 h-2"/>
           <div className="absolute top-0 right-0 border-r border-t border-current w-2 h-2"/>
           <div className="absolute bottom-0 left-0 border-l border-b border-current w-2 h-2"/>
           <div className="absolute bottom-0 right-0 border-r border-b border-current w-2 h-2"/>
           
           <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-all duration-500 ${isBlueprint ? 'grayscale invert opacity-80' : 'grayscale contrast-125'}`} 
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
            <span className="bg-white text-black px-3 py-1 font-bold text-xs font-mono border-2 border-black shadow-[4px_4px_0px_0px_#000]">INSPECT VIEW</span>
          </div>
        </div>
        <div className={`absolute bottom-2 right-2 text-[10px] font-mono px-1 border border-current ${isBlueprint ? 'bg-[#003366]' : 'bg-white'}`}>
            SCALE: NTS
        </div>
      </div>

      {/* BOM / Specs */}
      <div className="md:col-span-5 p-4 flex flex-col justify-between">
        <div>
            <h3 className="font-bold font-sans text-xl uppercase mb-2 group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
            <p className="font-mono text-xs opacity-80 mb-4 leading-relaxed text-justify">
                {project.desc}
            </p>
            
            <div className="border border-current mb-4">
                <div className={`font-mono text-xs font-bold px-2 py-1 flex justify-between ${isBlueprint ? 'bg-white text-[#003366]' : 'bg-black text-white'}`}>
                    <span>ITEM / PARAMETER</span>
                    <span>QTY / VAL</span>
                </div>
                {project.bom.map((row, i) => (
                    <div key={i} className="flex justify-between font-mono text-xs border-t border-current/20 px-2 py-1">
                        <span className="font-bold">{row.item}</span>
                        <span>{row.qty}</span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <div className="font-mono text-xs font-bold opacity-50 mb-1">TOOLS & STANDARDS</div>
            <div className="flex flex-wrap gap-1">
                {project.tools.map(tool => (
                    <span key={tool} className={`border border-current px-1.5 py-0.5 text-xs font-bold uppercase ${isBlueprint ? 'bg-[#004488]' : 'bg-slate-50'}`}>
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const App = () => {
  const [isBlueprint, setIsBlueprint] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePrint = () => window.print();

  return (
    <div className={`min-h-screen font-sans pb-12 transition-colors duration-500 ${isBlueprint ? 'bg-[#003366] text-white selection:bg-white selection:text-[#003366]' : 'bg-stone-100 text-black selection:bg-blue-200 selection:text-black'}`}>
      
      <AnimatePresence>
        {loading && <BootSequence onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* CRT Scanline Effect (Only in Blueprint Mode) */}
      {isBlueprint && (
        <div className="fixed inset-0 pointer-events-none z-[40] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      )}
      {isBlueprint && (
        <div className="fixed inset-0 pointer-events-none z-[40] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scanline"></div>
      )}

      {/* Blueprint Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0" 
        style={{ 
            backgroundImage: `linear-gradient(${isBlueprint ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isBlueprint ? '#fff' : '#000'} 1px, transparent 1px)`, 
            backgroundSize: '20px 20px' 
        }}
      />

      {/* Mode Toggle (Floating) */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden flex flex-col gap-4">
        <button 
            onClick={() => setIsBlueprint(!isBlueprint)}
            className={`p-4 rounded-full shadow-xl border-2 transition-all hover:scale-110 ${isBlueprint ? 'bg-white text-[#003366] border-white' : 'bg-black text-white border-black'}`}
            title="Toggle Blueprint Mode"
        >
            {isBlueprint ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            isBlueprint={isBlueprint}
          />
        )}
      </AnimatePresence>

      <div className="max-w-full mx-auto p-4 md:p-8 relative z-10">
        
        {/* TITLE BLOCK HEADER */}
        <header className={`border-2 shadow-lg mb-8 ${isBlueprint ? 'bg-[#003366] border-white' : 'bg-white border-black'}`}>
            <div className="grid grid-cols-12 border-b border-current">
                <div className="col-span-12 md:col-span-8 p-4 md:p-6 border-b md:border-b-0 md:border-r border-current flex flex-col justify-center">
                    <div className="font-mono text-xs font-bold opacity-50 mb-1">PROJECT TITLE</div>
                    <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                        {data.header.name}
                    </h1>
                    <div className="text-lg font-bold opacity-70 uppercase mt-1">{data.header.role}</div>
                </div>
                
                <div className={`col-span-12 md:col-span-4 flex items-center justify-center p-4 ${isBlueprint ? 'bg-[#002244]' : 'bg-slate-50'}`}>
                    <div className="border-2 border-current rounded-full p-4">
                        <Settings size={48} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-4 md:grid-cols-8 border-t border-current text-center md:text-left ${isBlueprint ? 'bg-[#003366]' : 'bg-white'}`}>
                <TitleBlockCell label="DRAWING NO" value={data.header.dwg_no} className="col-span-2" />
                <TitleBlockCell label="REVISION" value={data.header.rev} className="col-span-1" />
                <TitleBlockCell label="SCALE" value={data.header.scale} className="col-span-1" />
                <TitleBlockCell label="DRAWN BY" value="STERLING" className="col-span-2" />
                <TitleBlockCell label="DATE" value="2025-OCT-24" className="col-span-2 border-r-0" />
            </div>
        </header>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: NOTES & SPECS */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* GENERAL NOTES */}
                <div className={`border-2 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] ${isBlueprint ? 'bg-[#003366] border-white shadow-none' : 'bg-white border-black'}`}>
                    <div className="font-bold text-sm underline decoration-2 underline-offset-2 mb-3 uppercase">
                        1.0 General Notes
                    </div>
                    <ul className="space-y-2 font-mono text-xs md:text-sm leading-tight opacity-90">
                        {data.notes.map((note, i) => (
                            <li key={i}>{note}</li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT / INFO */}
                <div className={`border-2 p-4 relative ${isBlueprint ? 'bg-[#003366] border-white' : 'bg-white border-black'}`}>
                     <div className="absolute -left-1 top-4 w-2 h-4 bg-current"></div>
                     <div className="font-bold text-sm mb-3 uppercase flex items-center gap-2">
                        <MapPin size={14}/> 2.0 Location Data
                     </div>
                     <div className="font-mono text-sm space-y-2">
                        <div className="flex justify-between border-b border-dotted border-current/50 pb-1">
                            <span>BASE:</span> <span className="font-bold">{data.header.location}</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-current/50 pb-1">
                            <span>EMAIL:</span> <a href={`mailto:${data.header.contact}`} className={`font-bold underline ${isBlueprint ? 'text-yellow-400' : 'text-blue-700'}`}>{data.header.contact}</a>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span>STATUS:</span> <span className={`font-bold px-1 ${isBlueprint ? 'bg-white text-[#003366]' : 'bg-black text-white'}`}>OPERATIONAL</span>
                        </div>
                     </div>
                </div>

                {/* SKILLS TABLE (UPDATED WITH METERS) */}
                <div className={`border-2 border-current ${isBlueprint ? 'bg-[#003366]' : 'bg-white'}`}>
                    <div className={`font-bold text-xs p-2 uppercase text-center ${isBlueprint ? 'bg-white text-[#003366]' : 'bg-black text-white'}`}>
                        3.0 Technical Specifications
                    </div>
                    {data.skills.map((cat, i) => (
                        <div key={i} className="p-4 border-b border-current last:border-0">
                            <div className="font-mono text-xs font-bold opacity-50 mb-3 border-b border-current/20 inline-block">{cat.cat}</div>
                            <div className="space-y-2">
                                {cat.items.map((skill, j) => (
                                  <SkillMeter key={j} name={skill.name} level={skill.level} isBlueprint={isBlueprint} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* GD&T DECORATION */}
                <div className="flex gap-2">
                    <GDTSymbol symbol={<Circle size={14}/>} label="0.05 M" />
                    <GDTSymbol symbol={<Triangle size={14}/>} label="A" />
                    <GDTSymbol symbol={<Square size={14}/>} label="B" />
                </div>

            </div>

            {/* RIGHT COLUMN: DRAWINGS (PROJECTS) */}
            <div className="lg:col-span-8">
                
                {/* REVISION HISTORY (EXPERIENCE) */}
                <div className={`border-2 border-current mb-12 ${isBlueprint ? 'bg-[#003366]' : 'bg-white'}`}>
                    <div className={`border-b-2 border-current p-2 font-bold text-sm uppercase flex justify-between items-center ${isBlueprint ? 'bg-[#002244]' : 'bg-stone-200'}`}>
                        <span>4.0 Revision History (Experience)</span>
                        <FileText size={16}/>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-xs text-left">
                            <thead>
                                <tr className={`border-b border-current ${isBlueprint ? 'bg-[#003366]' : 'bg-slate-50'}`}>
                                    <th className="p-2 border-r border-current w-32">ZONE</th> 
                                    <th className="p-2 border-r border-current">DESCRIPTION OF CHANGE / ROLE</th>
                                    <th className="p-2 border-r border-current w-24">DATE</th>
                                    <th className="p-2">APPR.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.experience.map((job, i) => (
                                    <tr key={i} className={`border-b border-current/20 last:border-0 ${isBlueprint ? 'hover:bg-[#004488]' : 'hover:bg-yellow-50'}`}>
                                        <td className="p-2 border-r border-current font-bold">{job.company}</td>
                                        <td className="p-2 border-r border-current">
                                            <div className="font-bold text-sm">{job.role}</div>
                                            <div className="opacity-80 text-xs mt-1 leading-relaxed">{job.details}</div>
                                        </td>
                                        <td className="p-2 border-r border-current">{job.date}</td>
                                        <td className="p-2 font-bold text-green-500">OK</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* DETAIL VIEWS (PROJECTS) */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Ruler size={18} />
                        <span className="font-bold text-sm uppercase underline decoration-2 underline-offset-4">5.0 Detail Views</span>
                    </div>
                    
                    {data.projects.map((p, i) => (
                        <ProjectCard 
                            key={i} 
                            project={p} 
                            onClick={setSelectedProject} 
                            isBlueprint={isBlueprint}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center mt-12 border-t-2 border-current pt-4 print:hidden">
                   <div className="text-xs font-mono">
                      CAD FILE: PORTFOLIO_MASTER_ASM <br/>
                      SHEET 1 OF 1
                   </div>
                   <div className="flex gap-4">
                      <button 
                        onClick={handlePrint}
                        className={`border-2 border-current px-4 py-2 font-bold text-xs uppercase hover:bg-current hover:text-white transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${isBlueprint ? 'shadow-none hover:text-[#003366] hover:bg-white' : ''}`}
                      >
                        Print PDF <Printer size={14}/>
                      </button>
                      <button className="bg-yellow-400 border-2 border-black text-black px-4 py-2 font-bold text-xs uppercase hover:bg-yellow-500 transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                         Contact <MoveRight size={14}/>
                      </button>
                   </div>
                </div>

            </div>
        </div>
      </div>
      
      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0.5cm; }
          body { -webkit-print-color-adjust: exact; background-color: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;