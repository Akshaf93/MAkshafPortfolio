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
  Terminal,
  Image as ImageIcon,
  AlertTriangle,
  CheckCircle2,
  Clock,
  User,
  TrendingUp,
  Stamp,
  Box,
  Wrench
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
    rev: "A.09"
  },
  notes: [
    "1. ALL DIMENSIONS IN MILLIMETERS UNLESS OTHERWISE SPECIFIED.",
    "2. FOCUS: KINEMATIC DESIGN, FEA, & CFD.",
    "3. METHODOLOGY: FIRST-PRINCIPLES PHYSICS & ITERATIVE PROTOTYPING.",
    "4. MATERIAL: INTELLECTUAL CURIOSITY & RIGOROUS ANALYSIS."
  ],
  qa_log: [
    { id: "QA-01", inspector: "Dr. S. Khan", role: "Head of Aerodynamics", status: "PASSED", note: "Akshaf demonstrates exceptional intuition for fluid mechanics. His mesh refinement strategy reduced simulation time by 40% without compromising accuracy." },
    { id: "QA-02", inspector: "Engr. M. Ali", role: "Nexe Team Lead", status: "APPROVED", note: " Delivered the UGV suspension redesign 2 weeks ahead of schedule. The differential bar mechanism performed flawlessly in field tests." }
  ],
  skills: [
    { cat: "ANALYSIS", items: [
      "ANSYS Fluent", 
      "FEA Static/Transient", 
      "MATLAB Simulink", 
      "Python (SciPy)",
      "CFD",
      "Thermal Analysis"
    ]},
    { cat: "DESIGN", items: [
      "SolidWorks (CSWP)", 
      "Catia V5", 
      "GD&T (ASME Y14.5)", 
      "DFM/DFA",
      "Generative Design",
      "Surface Modeling"
    ]},
    { cat: "FABRICATION", items: [
      "CNC (3-Axis)", 
      "Injection Molding", 
      "Additive (SLA/FDM)", 
      "Laser Cutting",
      "Rapid Prototyping",
      "Shop Tools"
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
      cadImage: "https://images.unsplash.com/photo-1535378437327-274cc23898e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fabImage: "https://images.unsplash.com/photo-1616422339395-e244b7f8c09d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
      image: "https://images.unsplash.com/photo-1535378437327-274cc23898e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
      gallery: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      timeline: "Aug 2024 - Oct 2024",
      role: "Lead Mechanical Design",
      bom: [
        { item: "Material", qty: "Al 6061-T6" },
        { item: "Mass", qty: "4.2 kg" },
        { item: "Actuators", qty: "6x DC Planetary" }
      ],
      technicalSpecs: {
        "Suspension Travel": "150 mm",
        "Ground Clearance": "120 mm",
        "Max Gradient": "45 degrees",
        "Payload Capacity": "2.5 kg",
        "Factor of Safety": "2.1 (Static)"
      },
      challenges: [
        "Decoupling chassis pitch from suspension articulation.",
        "Maintaining traction on loose aggregate (sand/gravel).",
        "Minimizing unsprung mass to improve dynamic response."
      ],
      tools: ["SolidWorks", "Python", "ROS2", "CNC"],
      desc: "Rocker-bogie suspension implementation. Differential bar averaging for chassis pitch stability.",
      fullDetails: "This project addressed the challenge of traversing unstructured terrain. By implementing a rocker-bogie suspension, we decoupled the left and right chassis movement, ensuring all 6 wheels maintain contact with the ground. The differential bar mechanism averages the pitch of the two rockers to stabilize the main chassis payload, crucial for the onboard LiDAR mapping sensors."
    },
    {
      id: "VIEW B-B",
      title: "CENTRIFUGAL COMPRESSOR",
      spec: "SUB-ASSY: TURBOMACHINERY",
      image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
      glbModel: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      gallery: [
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      timeline: "Jan 2024 - Mar 2024",
      role: "CFD Analyst",
      bom: [
        { item: "Speed", qty: "80k RPM" },
        { item: "Ratio", qty: "3.5:1" },
        { item: "Solver", qty: "ANSYS CFX" }
      ],
      technicalSpecs: {
        "Mass Flow Rate": "0.05 kg/s",
        "Isentropic Eff": "78%",
        "Pressure Ratio": "3.5 : 1",
        "Blade Count": "12 Main / 12 Splitter",
        "Tip Speed": "450 m/s"
      },
      graphData: {
        title: "COMPRESSOR MAP: EFFICIENCY vs RPM",
        xLabel: "Rotational Speed (kRPM)",
        yLabel: "Isentropic Eff (%)",
        points: [
            { x: 20, y: 45 },
            { x: 40, y: 60 },
            { x: 60, y: 72 },
            { x: 80, y: 78 }, // Design Point
            { x: 90, y: 75 }, // Choke
            { x: 100, y: 68 }
        ]
      },
      challenges: [
        "Mitigating shock wave formation at impeller tips.",
        "Delaying stall onset at low mass flow rates.",
        "Balancing structural integrity with aerodynamic profile."
      ],
      tools: ["ANSYS CFX", "MATLAB", "TurboGrid"],
      desc: "RANS simulation (k-epsilon) of impeller tip flow separation. Iterative optimization of blade backsweep angle.",
      fullDetails: "The primary objective was to delay stall onset in a micro-turbine compressor. Using ANSYS CFX, I modeled the full rotor-stator interaction. The final design featured a 30-degree backsweep which reduced shock wave intensity at the blade tips and improved the surge margin by 12%."
    }
  ]
};

// --- Components ---

const EngineeringChart = ({ data, isBlueprint }) => {
  if (!data) return null;

  const width = 300;
  const height = 150;
  const padding = 20;
  
  const maxX = Math.max(...data.points.map(p => p.x));
  const maxY = 100; 
  
  const pointsStr = data.points.map(p => {
      const x = padding + (p.x / maxX) * (width - 2 * padding);
      const y = height - padding - (p.y / maxY) * (height - 2 * padding);
      return `${x},${y}`;
  }).join(" ");

  return (
    <div className={`border border-current p-4 mb-6 ${isBlueprint ? 'bg-[#003B7A] text-white' : 'bg-stone-50 text-black'}`}> 
        <div className="font-mono text-xs font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={14} /> {data.title}
        </div>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
            {/* Grid Lines */}
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="currentColor" strokeWidth="1" />
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="currentColor" strokeWidth="1" />
            
            {/* The Line */}
            <polyline 
                fill="none" 
                stroke={isBlueprint ? "#86EFAC" : "#f97316"} 
                strokeWidth="2" 
                points={pointsStr} 
            />
            
            {/* Points */}
            {data.points.map((p, i) => {
                 const x = padding + (p.x / maxX) * (width - 2 * padding);
                 const y = height - padding - (p.y / maxY) * (height - 2 * padding);
                 return (
                    <circle key={i} cx={x} cy={y} r="3" fill="currentColor" />
                 )
            })}
            
            {/* Labels */}
            <text x={width/2} y={height} fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace">{data.xLabel}</text>
            <text x={0} y={height/2} fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace" transform={`rotate(-90, 10, ${height/2})`}>{data.yLabel}</text>
        </svg>
    </div>
  );
};

const ThreeDViewer = ({ src, isBlueprint }) => {
  if (!src) return null;
  return (
    <div className={`border-2 border-current relative h-[400px] w-full ${isBlueprint ? 'bg-[#003B7A]' : 'bg-gray-100'}`}>
      <model-viewer
        src={src}
        alt="3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        shadow-intensity="1"
        environment-image="neutral"
        auto-rotate
        rotation-per-second="250%"
        style={{ width: '100%', height: '100%', filter: isBlueprint ? 'grayscale(0.8) contrast(1.2)' : 'none' }}
      >
      </model-viewer>
       <div className={`absolute bottom-2 left-2 text-[10px] font-mono px-1 border border-current ${isBlueprint ? 'bg-[#003B7A]' : 'bg-white'}`}>
            INTERACTIVE 3D
        </div>
    </div>
  );
};

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

const ImageOverlay = ({ src, alt, isBlueprint, showOverlay = true, className = "" }) => (
  <div className={`w-full h-full border border-current relative p-1 group-hover:border-dashed transition-all ${className}`}>
    <div className="absolute top-0 left-0 border-l border-t border-current w-2 h-2"/>
    <div className="absolute top-0 right-0 border-r border-t border-current w-2 h-2"/>
    <div className="absolute bottom-0 left-0 border-l border-b border-current w-2 h-2"/>
    <div className="absolute bottom-0 right-0 border-r border-b border-current w-2 h-2"/>
    
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full object-cover transition-all duration-500`}
      style={{ filter: isBlueprint ? 'grayscale(80%) contrast(120%)' : 'grayscale(20%) contrast(110%)' }}
    />
    {showOverlay && (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
        <span className="bg-white text-black px-3 py-1 font-bold text-xs font-mono border-2 border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-2">
           <ImageIcon size={14}/> INSPECT DATASHEET
        </span>
      </div>
    )}
  </div>
);


const ProjectModal = ({ project, onClose, isBlueprint }) => {
  const [activeImage, setActiveImage] = useState(project.image || project.cadImage);
  const galleryImages = [
    project.image || project.cadImage, 
    ...(project.gallery || []),
    ...(project.fabImage ? [project.fabImage] : []) 
  ].filter(Boolean); 

  const hasThreeD = !!project.glbModel;
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    setShow3D(false); 
    setActiveImage(project.image || project.cadImage);
  }, [project]);


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`relative w-full max-w-6xl my-8 border-2 shadow-2xl flex flex-col ${isBlueprint ? 'bg-[#002B5B] text-white border-white' : 'bg-white text-black border-black'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`border-b-2 border-current p-4 flex justify-between items-start ${isBlueprint ? 'bg-[#001D3B]' : 'bg-slate-100'}`}>
           <div>
             <div className="flex items-center gap-2 mb-1">
                <ZoomIn size={16} />
                <span className="font-mono text-xs font-bold opacity-70">DATASHEET VIEW</span>
             </div>
             <h2 className={`font-black font-serif text-3xl uppercase leading-none ${isBlueprint ? 'text-white' : 'text-black'}`}>{project.title}</h2>
             <div className="font-mono text-xs font-bold mt-2 flex gap-4">
                <span className="border border-current px-1">ID: {project.id}</span>
                <span className="flex items-center gap-1"><Clock size={12}/> {project.timeline}</span>
                <span className="flex items-center gap-1"><User size={12}/> {project.role}</span>
             </div>
           </div>
           <button onClick={onClose} className="hover:bg-red-500 hover:text-white border border-current p-1 transition-colors">
             <X size={24} />
           </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: VISUALS */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Main Visual Stage */}
              {show3D ? (
                <ThreeDViewer src={project.glbModel} isBlueprint={isBlueprint} />
              ) : (
                <div className="border-2 border-current p-1 bg-black/5 relative group">
                   <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-current opacity-50"/>
                   <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-current opacity-50"/>
                   <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-current opacity-50"/>
                   <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-current opacity-50"/>
                   
                  <img 
                    src={activeImage} 
                    alt={project.title} 
                    className={`w-full h-[400px] object-cover border border-current`} 
                    style={{ filter: isBlueprint ? 'grayscale(80%) contrast(120%)' : 'grayscale(20%) contrast(110%)' }}
                  />
                </div>
              )}

              {/* Thumbnail Strip & 3D Toggle */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                 {galleryImages.map((img, idx) => (
                   <button
                     key={idx}
                     onClick={() => {setActiveImage(img); setShow3D(false);}} 
                     className={`flex-shrink-0 w-24 h-20 border-2 transition-all relative ${activeImage === img && !show3D ? 'border-current ring-1 ring-current ring-offset-2' : 'border-transparent opacity-60 hover:opacity-100'}`}
                   >
                     <img src={img} className={`w-full h-full object-cover`} style={{ filter: isBlueprint ? 'grayscale(80%) invert(0.1) contrast(1.2)' : 'grayscale(0.1) contrast(1.1)' }}/>
                     <div className="absolute bottom-0 right-0 bg-black text-white text-[9px] px-1 font-mono">0{idx+1}</div>
                   </button>
                 ))}
                 {hasThreeD && (
                    <button
                      onClick={() => setShow3D(true)}
                      className={`flex-shrink-0 w-24 h-20 border-2 transition-all relative flex items-center justify-center ${show3D ? 'border-current ring-1 ring-current ring-offset-2' : 'border-transparent opacity-60 hover:opacity-100'} ${isBlueprint ? 'bg-[#003B7A]' : 'bg-gray-100'}`}
                    >
                       <Box size={32} className={show3D ? (isBlueprint ? 'text-white' : 'text-blue-500') : (isBlueprint ? 'text-gray-400' : 'text-gray-500')} />
                       <div className="absolute bottom-0 right-0 bg-black text-white text-[9px] px-1 font-mono">3D</div>
                    </button>
                 )}
              </div>
              
              {/* Description */}
              <div className="border-t-2 border-current pt-6">
                  <div className="flex items-center gap-2 font-bold font-mono text-sm mb-3 uppercase">
                      <FileText size={16} /> Engineering Analysis
                  </div>
                  <p className={`font-serif leading-relaxed text-sm md:text-base opacity-90 text-justify columns-1 ${isBlueprint ? 'text-white text-shadow-sm' : 'text-black'}`}>
                    {project.fullDetails || project.desc}
                  </p>
              </div>
            </div>
            
            {/* RIGHT COLUMN: DATA */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Specs Table */}
              <div className="border-2 border-current">
                 <div className={`p-2 font-bold font-mono text-xs flex justify-between items-center border-b-2 border-current ${isBlueprint ? 'bg-white text-[#002B5B]' : 'bg-black text-white'}`}>
                    <span>TECHNICAL SPECIFICATIONS</span>
                    <Activity size={14} />
                 </div>
                 <div className="divide-y divide-current/20">
                    {project.technicalSpecs && Object.entries(project.technicalSpecs).map(([key, val]) => (
                        <div key={key} className={`flex justify-between p-2 font-mono text-xs ${isBlueprint ? 'text-white' : 'text-black'}`}>
                            <span className="opacity-70 font-bold">{key.toUpperCase()}</span>
                            <span className="font-bold">{val}</span>
                        </div>
                    ))}
                 </div>
              </div>

              {/* Engineering Chart */}
              {project.graphData && (
                <EngineeringChart data={project.graphData} isBlueprint={isBlueprint} />
              )}

              {/* Challenges */}
              <div>
                 <div className="font-bold font-mono text-xs mb-3 uppercase flex items-center gap-2 border-b border-current pb-1">
                    <AlertTriangle size={14} className="text-orange-500" /> Engineering Challenges
                 </div>
                 <ul className="space-y-2">
                    {project.challenges && project.challenges.map((challenge, i) => (
                        <li key={i} className={`text-xs font-mono flex gap-2 items-start ${isBlueprint ? 'text-white text-shadow-sm' : 'text-black'}`}>
                            <span className="mt-0.5 text-orange-500">►</span>
                            <span className="leading-tight">{challenge}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* BOM */}
              <div className={`border border-current p-4 ${isBlueprint ? 'bg-[#003B7A]' : 'bg-current/5'}`}>
                 <div className="font-mono text-xs font-bold mb-2 border-b border-current pb-1 flex justify-between">
                   <span>BILL OF MATERIALS (ABBR.)</span>
                   <Settings size={14} />
                 </div>
                 {project.bom.map((item, i) => (
                   <div key={i} className={`flex justify-between font-mono text-xs py-1 border-b border-dashed border-current/30 last:border-0 ${isBlueprint ? 'text-white' : 'text-black'}`}>
                     <span>{item.item}</span>
                     <span className="font-bold">{item.qty}</span>
                   </div>
                 ))}
              </div>
              
            </div>
          </div>
        </div>
        
        <div className={`border-t-2 border-current p-2 flex justify-between items-center font-mono text-[10px] ${isBlueprint ? 'bg-[#001D3B] text-white' : 'bg-stone-100 text-black'}`}>
            <div>SHEET 1 OF 1</div>
            <div>CAD FILE: {project.title.replace(/\s+/g, '_').toUpperCase()}.ASM</div>
            <div>APPROVED BY: M. AKSHAF</div>
        </div>

      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onClick, isBlueprint }) => {
  const [showFab, setShowFab] = useState(false);
  const currentImage = showFab && project.fabImage ? project.fabImage : (project.cadImage || project.image);

  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className={`border-2 mb-12 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group ${isBlueprint ? 'bg-[#002B5B] border-white text-white shadow-none' : 'bg-white border-black text-black'}`}
    >
      <div className={`border-b-2 p-2 flex justify-between items-center ${isBlueprint ? 'bg-[#001D3B] border-white' : 'bg-slate-100 border-black'}`}>
        <div className={`font-bold font-serif text-lg uppercase border-b border-current inline-block leading-none ${isBlueprint ? 'text-white' : 'text-black'}`}>
          {project.id}
        </div>
        <div className="font-mono text-xs uppercase font-bold opacity-60">
          {project.spec}
        </div>
      </div>

      <div className="grid md:grid-cols-12">
        <div className={`md:col-span-7 border-b-2 md:border-b-0 md:border-r-2 border-current relative h-64 md:h-auto p-4 ${isBlueprint ? 'bg-[#002B5B]' : 'bg-white'}`}>
          <button 
            onClick={() => onClick(project)}
            className="absolute inset-0 z-10 block" 
            aria-label={`Open datasheet for ${project.title}`}
          >
             <ImageOverlay src={currentImage} alt={project.title} isBlueprint={isBlueprint} />
          </button>
          
          {project.cadImage && project.fabImage && (
            <button 
              onClick={(e) => { e.stopPropagation(); setShowFab(!showFab); }} 
              className={`absolute bottom-6 left-6 z-20 px-3 py-1 text-xs font-mono font-bold uppercase border border-current flex items-center gap-2 
                         ${isBlueprint ? 'bg-[#001D3B] text-white hover:bg-white hover:text-[#001D3B]' : 'bg-black text-white hover:bg-gray-700'}`}
            >
              {showFab ? <Wrench size={12}/> : <Box size={12}/>}
              {showFab ? "VIEW CAD" : "VIEW FAB"}
            </button>
          )}
        </div>

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
};

const App = () => {
  const [isBlueprint, setIsBlueprint] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePrint = () => window.print();

  return (
    <div className={`min-h-screen font-sans pb-12 transition-colors duration-500 ${isBlueprint ? 'bg-[#002B5B] text-white selection:bg-white selection:text-[#002B5B]' : 'bg-stone-100 text-black selection:bg-blue-200 selection:text-black'}`}>

      {isBlueprint && (
        <div className="fixed inset-0 pointer-events-none z-[40] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      )}
      {isBlueprint && (
        <div className="fixed inset-0 pointer-events-none z-[40] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scanline"></div>
      )}

      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0" 
        style={{ 
            backgroundImage: `linear-gradient(${isBlueprint ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isBlueprint ? '#fff' : '#000'} 1px, transparent 1px)`, 
            backgroundSize: '20px 20px' 
        }}
      />

      <div className="fixed bottom-8 right-8 z-50 print:hidden flex flex-col gap-4">
        <button 
            onClick={() => setIsBlueprint(!isBlueprint)}
            className={`p-4 rounded-full shadow-xl border-2 transition-all hover:scale-110 ${isBlueprint ? 'bg-white text-[#002B5B] border-white' : 'bg-black text-white border-black'}`}
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
        
        <header className={`border-2 shadow-lg mb-8 ${isBlueprint ? 'bg-[#002B5B] border-white' : 'bg-white border-black'}`}>
            <div className="grid grid-cols-12 border-b border-current">
                <div className="col-span-12 md:col-span-8 p-4 md:p-6 border-b md:border-b-0 md:border-r border-current flex flex-col justify-center">
                    <div className="font-mono text-xs font-bold opacity-50 mb-1">PROJECT TITLE</div>
                    <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                        {data.header.name}
                    </h1>
                    <div className="text-lg font-bold opacity-70 uppercase mt-1">{data.header.role}</div>
                </div>
                
                <div className={`col-span-12 md:col-span-4 flex items-center justify-center p-4 ${isBlueprint ? 'bg-[#001D3B]' : 'bg-slate-50'}`}>
                    <div className="border-2 border-current rounded-full p-4">
                        <Settings size={48} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-4 md:grid-cols-8 border-t border-current text-center md:text-left ${isBlueprint ? 'bg-[#002B5B]' : 'bg-white'}`}>
                <TitleBlockCell label="DRAWING NO" value={data.header.dwg_no} className="col-span-2" />
                <TitleBlockCell label="REVISION" value={data.header.rev} className="col-span-1" />
                <TitleBlockCell label="SCALE" value={data.header.scale} className="col-span-1" />
                <TitleBlockCell label="DRAWN BY" value="STERLING" className="col-span-2" />
                <TitleBlockCell label="DATE" value="2025-OCT-24" className="col-span-2 border-r-0" />
            </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-4 space-y-8">
                
                <div className={`border-2 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] ${isBlueprint ? 'bg-[#002B5B] border-white shadow-none' : 'bg-white border-black'}`}>
                    <div className="font-bold text-sm underline decoration-2 underline-offset-2 mb-3 uppercase">
                        1.0 General Notes
                    </div>
                    <ul className="space-y-2 font-mono text-xs md:text-sm leading-tight opacity-90">
                        {data.notes.map((note, i) => (
                            <li key={i}>{note}</li>
                        ))}
                    </ul>
                </div>

                <div className={`border-2 p-4 relative ${isBlueprint ? 'bg-[#002B5B] border-white' : 'bg-white border-black'}`}>
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
                            <span>STATUS:</span> <span className={`font-bold px-1 ${isBlueprint ? 'bg-white text-[#002B5B]' : 'bg-black text-white'}`}>OPERATIONAL</span>
                        </div>
                     </div>
                </div>

                <div className={`border-2 border-current ${isBlueprint ? 'bg-[#002B5B]' : 'bg-white'}`}>
                    <div className={`font-bold text-xs p-2 uppercase text-center ${isBlueprint ? 'bg-white text-[#002B5B]' : 'bg-black text-white'}`}>
                        3.0 Technical Specifications
                    </div>
                    {data.skills.map((cat, i) => (
                        <div key={i} className="p-4 border-b border-current last:border-0">
                            <div className="font-mono text-xs font-bold opacity-50 mb-3 border-b border-current/20 inline-block">{cat.cat}</div>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((skill, j) => (
                                  <span key={j} className={`border border-current px-2 py-1 text-xs font-bold font-mono uppercase ${isBlueprint ? 'bg-[#004488] hover:bg-white hover:text-[#002B5B]' : 'bg-stone-50 hover:bg-black hover:text-white'} transition-colors cursor-default`}>
                                    {skill}
                                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <GDTSymbol symbol={<Circle size={14}/>} label="0.05 M" />
                    <GDTSymbol symbol={<Triangle size={14}/>} label="A" />
                    <GDTSymbol symbol={<Square size={14}/>} label="B" />
                </div>

            </div>

            <div className="lg:col-span-8">
                
                <div className={`border-2 border-current mb-12 ${isBlueprint ? 'bg-[#002B5B]' : 'bg-white'}`}>
                    <div className={`border-b-2 border-current p-2 font-bold text-sm uppercase flex justify-between items-center ${isBlueprint ? 'bg-[#001D3B]' : 'bg-stone-200'}`}>
                        <span>4.0 Revision History (Experience)</span>
                        <FileText size={16}/>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-xs text-left">
                            <thead>
                                <tr className={`border-b border-current ${isBlueprint ? 'bg-[#002B5B]' : 'bg-slate-50'}`}>
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

                <div className={`border-2 border-current mb-12 ${isBlueprint ? 'bg-[#002B5B]' : 'bg-white'}`}>
                    <div className={`border-b-2 border-current p-2 font-bold text-sm uppercase flex justify-between items-center ${isBlueprint ? 'bg-[#001D3B]' : 'bg-stone-200'}`}>
                        <span>5.0 Quality Control Log (References)</span>
                        <Stamp size={16}/>
                    </div>
                    {data.qa_log.map((log, i) => (
                        <div key={i} className="p-4 border-b border-current/20 last:border-0 flex gap-4">
                           <div className={`border-2 border-current w-16 h-16 flex items-center justify-center flex-shrink-0 rounded-full rotate-[-12deg] font-black text-[10px] border-double ${isBlueprint ? 'text-green-400 border-green-400' : 'text-red-700 border-red-700 opacity-80'}`}>
                              {log.status}
                           </div>
                           <div>
                              <div className="font-bold text-sm mb-1">{log.inspector} <span className="opacity-60 font-mono text-xs"> // {log.role}</span></div>
                              <p className="font-serif italic text-sm opacity-80">"{log.note}"</p>
                           </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Ruler size={18} />
                        <span className="font-bold text-sm uppercase underline decoration-2 underline-offset-4">6.0 Detail Views</span>
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
                        className={`border-2 border-current px-4 py-2 font-bold text-xs uppercase hover:bg-current hover:text-white transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${isBlueprint ? 'shadow-none hover:text-[#002B5B] hover:bg-white' : ''}`}
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