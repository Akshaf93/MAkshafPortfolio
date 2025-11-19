import React from 'react';
import { motion } from 'framer-motion';
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
  PenTool
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
    rev: "A.02"
  },
  notes: [
    "1. ALL DIMENSIONS IN MILLIMETERS UNLESS OTHERWISE SPECIFIED.",
    "2. FOCUS: KINEMATIC DESIGN, FEA, & CFD.",
    "3. METHODOLOGY: FIRST-PRINCIPLES PHYSICS & ITERATIVE PROTOTYPING.",
    "4. MATERIAL: INTELLECTUAL CURIOSITY & RIGOROUS ANALYSIS."
  ],
  skills: [
    { cat: "ANALYSIS", items: ["ANSYS Fluent", "FEA Static/Transient", "MATLAB Simulink", "Python (SciPy)"] },
    { cat: "DESIGN", items: ["SolidWorks (CSWP)", "Catia V5", "GD&T (ASME Y14.5)", "DFM/DFA"] },
    { cat: "FABRICATION", items: ["CNC (3-Axis)", "Injection Molding", "Additive (SLA/FDM)", "Laser Cutting"] }
  ],
  experience: [
    {
      company: "Nexerin",
      dept: "Design Team",
      role: "Mech. Design Intern",
      date: "Oct 25 - Present",
      result: "Initial-design of UGV rescue drone, UGV and launching platform in SolidWorks.",
      details: "Initial-design of UGV rescue drone, UGV and launching platform in SolidWorks."
    },
    {
      company: "Team Raftar NUST Baja SAE",
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
      desc: "Rocker-bogie suspension implementation. Differential bar averaging for chassis pitch stability. Kinematic synthesis performed to optimize linkage lengths."
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
      desc: "RANS simulation (k-epsilon) of impeller tip flow separation. Iterative optimization of blade backsweep angle delayed stall onset by 1200 RPM."
    }
  ]
};

// --- Components ---

const GDTSymbol = ({ symbol, label }) => (
  <div className="border border-black flex text-xs font-mono font-bold bg-white">
    <div className="w-6 h-6 flex items-center justify-center border-r border-black">{symbol}</div>
    <div className="px-2 flex items-center">{label}</div>
  </div>
);

const TitleBlockCell = ({ label, value, className = "" }) => (
  <div className={`border-r border-black p-2 flex flex-col justify-center ${className}`}>
    <span className="text-[8px] font-bold uppercase text-slate-500 leading-none mb-1">{label}</span>
    <span className="font-mono text-xs md:text-sm font-bold text-black leading-tight truncate">{value}</span>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="border-2 border-black mb-12 bg-white relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
    {/* Section Cut Header */}
    <div className="bg-slate-100 border-b-2 border-black p-2 flex justify-between items-center">
      <div className="font-bold font-serif text-lg uppercase border-b border-black inline-block leading-none">
        {project.id}
      </div>
      <div className="font-mono text-xs uppercase font-bold text-slate-500">
        {project.spec}
      </div>
    </div>

    <div className="grid md:grid-cols-12">
      {/* Image / Drawing View */}
      <div className="md:col-span-7 border-b-2 md:border-b-0 md:border-r-2 border-black relative h-64 md:h-auto bg-white p-4">
        <div className="w-full h-full border border-black relative p-1">
           <div className="absolute top-0 left-0 border-l border-t border-black w-2 h-2"/>
           <div className="absolute top-0 right-0 border-r border-t border-black w-2 h-2"/>
           <div className="absolute bottom-0 left-0 border-l border-b border-black w-2 h-2"/>
           <div className="absolute bottom-0 right-0 border-r border-b border-black w-2 h-2"/>
           
           <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover filter grayscale contrast-125" 
          />
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-white px-1 border border-black">
            SCALE: NTS
        </div>
      </div>

      {/* BOM / Specs */}
      <div className="md:col-span-5 p-4 flex flex-col justify-between">
        <div>
            <h3 className="font-bold font-sans text-xl uppercase mb-2">{project.title}</h3>
            <p className="font-mono text-xs text-slate-600 mb-4 leading-relaxed text-justify">
                {project.desc}
            </p>
            
            {/* Bill of Materials Table */}
            <div className="border border-black mb-4">
                <div className="bg-black text-white font-mono text-xs font-bold px-2 py-1 flex justify-between">
                    <span>ITEM / PARAMETER</span>
                    <span>QTY / VAL</span>
                </div>
                {project.bom.map((row, i) => (
                    <div key={i} className="flex justify-between font-mono text-xs border-t border-black/20 px-2 py-1">
                        <span className="font-bold">{row.item}</span>
                        <span>{row.qty}</span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <div className="font-mono text-xs font-bold text-slate-400 mb-1">TOOLS & STANDARDS</div>
            <div className="flex flex-wrap gap-1">
                {project.tools.map(tool => (
                    <span key={tool} className="border border-black px-1.5 py-0.5 text-xs font-bold bg-slate-50 uppercase">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-stone-100 font-sans text-black selection:bg-blue-200 selection:text-black pb-12">
      
      {/* Graph Paper Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0" 
        style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }}
      />

      {/* Main container - Changed max-w-5xl to max-w-full */}
      <div className="max-w-full mx-auto p-4 md:p-8 relative z-10">
        
        {/* TITLE BLOCK HEADER (ISO Style) */}
        <header className="bg-white border-2 border-black shadow-lg mb-8">
            <div className="grid grid-cols-12 border-b border-black">
                {/* Main Title Area */}
                <div className="col-span-12 md:col-span-8 p-4 md:p-6 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
                    <div className="font-mono text-xs font-bold text-slate-400 mb-1">PROJECT TITLE</div>
                    <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                        {data.header.name}
                    </h1>
                    <div className="text-lg font-bold text-slate-600 uppercase mt-1">{data.header.role}</div>
                </div>
                
                {/* Logo / Symbol Area */}
                <div className="col-span-12 md:col-span-4 flex items-center justify-center bg-slate-50 p-4">
                    <div className="border-2 border-black rounded-full p-4">
                        <Settings size={48} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 border-t border-black text-center md:text-left bg-white">
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
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    <div className="font-bold text-sm underline decoration-2 underline-offset-2 mb-3 uppercase">
                        1.0 General Notes
                    </div>
                    <ul className="space-y-2 font-mono text-xs md:text-sm leading-tight text-slate-700">
                        {data.notes.map((note, i) => (
                            <li key={i}>{note}</li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT / INFO */}
                <div className="bg-white border-2 border-black p-4 relative">
                     <div className="absolute -left-1 top-4 w-2 h-4 bg-black"></div>
                     <div className="font-bold text-sm mb-3 uppercase flex items-center gap-2">
                        <MapPin size={14}/> 2.0 Location Data
                     </div>
                     <div className="font-mono text-sm space-y-2">
                        <div className="flex justify-between border-b border-dotted border-slate-400 pb-1">
                            <span>BASE:</span> <span className="font-bold">{data.header.location}</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-slate-400 pb-1">
                            <span>EMAIL:</span> <a href={`mailto:${data.header.contact}`} className="font-bold text-blue-700 underline">{data.header.contact}</a>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span>STATUS:</span> <span className="font-bold bg-black text-white px-1">OPERATIONAL</span>
                        </div>
                     </div>
                </div>

                {/* SKILLS TABLE */}
                <div className="bg-white border-2 border-black">
                    <div className="bg-black text-white font-bold text-xs p-2 uppercase text-center">
                        3.0 Technical Specifications
                    </div>
                    {data.skills.map((skill, i) => (
                        <div key={i} className="p-3 border-b border-black last:border-0">
                            <div className="font-mono text-xs font-bold text-slate-500 mb-1">{skill.cat}</div>
                            <div className="font-sans text-sm font-bold leading-snug">
                                {skill.items.join(', ')}
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
                
                {/* REVISION TABLE (EXPERIENCE) */}
                <div className="bg-white border-2 border-black mb-12">
                    <div className="bg-stone-200 border-b-2 border-black p-2 font-bold text-sm uppercase flex justify-between items-center">
                        <span>4.0 Revision History (Experience)</span>
                        <FileText size={16}/>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-xs text-left">
                            <thead>
                                <tr className="border-b border-black bg-slate-50">
                                    {/* Widened Zone Column */}
                                    <th className="p-2 border-r border-black w-24">ZONE</th> 
                                    <th className="p-2 border-r border-black">DESCRIPTION OF CHANGE / ROLE</th>
                                    <th className="p-2 border-r border-black w-24">DATE</th>
                                    <th className="p-2">APPR.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.experience.map((job, i) => (
                                    <tr key={i} className="border-b border-black/20 last:border-0 hover:bg-yellow-50">
                                        {/* Removed substring truncation so full company name shows */}
                                        <td className="p-2 border-r border-black font-bold">{job.company}</td>
                                        <td className="p-2 border-r border-black">
                                            {/* Increased font size for Role */}
                                            <div className="font-bold text-sm">{job.role}</div>
                                            {/* Increased font size for Details */}
                                            <div className="text-slate-600 text-xs mt-1 leading-relaxed">{job.details}</div>
                                        </td>
                                        <td className="p-2 border-r border-black">{job.date}</td>
                                        <td className="p-2 font-bold text-green-700">OK</td>
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
                        <ProjectCard key={i} project={p} />
                    ))}
                </div>

                <div className="flex justify-between items-center mt-12 border-t-2 border-black pt-4">
                   <div className="text-xs font-mono">
                      CAD FILE: PORTFOLIO_MASTER_ASM <br/>
                      SHEET 1 OF 1
                   </div>
                   <div className="flex gap-4">
                      <button className="border-2 border-black px-4 py-2 font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Print PDF <Download size={14}/>
                      </button>
                      <button className="bg-yellow-400 border-2 border-black px-4 py-2 font-bold text-xs uppercase hover:bg-yellow-500 transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                         Contact <MoveRight size={14}/>
                      </button>
                   </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default App;