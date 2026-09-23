import React from 'react';

interface ProjectDiagramProps {
  type: 'autoform' | 'ehl-mesh' | 'cad-chassis' | 'robotics' | 'cfd' | 'topology';
  title: string;
  className?: string;
}

export const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ type, className = '' }) => {
  if (type === 'autoform') {
    return (
      <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
        {/* Engineering grid background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />

        {/* Top telemetry bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold tracking-wider">AUTOFORM CAE · AA6082</span>
          </div>
          <span className="text-sky-400">FAST TECHNOLOGY</span>
        </div>

        {/* Center CAE Simulation Graphic */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <svg viewBox="0 0 420 120" className="w-full h-28 drop-shadow-lg">
            <defs>
              <linearGradient id="stampingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="35%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="65%" stopColor="#ef4444" />
                <stop offset="85%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="meshGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Die Boundary Geometry */}
            <path
              d="M 20,25 L 90,25 C 120,25 130,75 160,85 C 190,95 230,95 260,85 C 290,75 300,25 330,25 L 400,25"
              fill="none"
              stroke="#475569"
              strokeWidth="2"
              strokeDasharray="4 3"
            />

            {/* Base Tooling profile */}
            <path
              d="M 20,38 L 90,38 C 118,38 128,88 158,98 C 188,106 232,106 262,98 C 292,88 302,38 330,38 L 400,38 L 400,112 L 20,112 Z"
              fill="url(#meshGradient)"
            />

            {/* Finite Element Mesh Grid lines */}
            {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
              <line key={x} x1={x} y1="30" x2={x} y2="110" stroke="#334155" strokeWidth="0.7" opacity="0.6" />
            ))}
            {[50, 70, 90].map((y) => (
              <line key={y} x1="20" y1={y} x2="400" y2={y} stroke="#334155" strokeWidth="0.7" opacity="0.5" />
            ))}

            {/* Deformed Stamped Sheet Metal with Thickness Variation heatmap */}
            <path
              d="M 25,32 L 92,32 C 118,32 129,82 159,92 C 189,101 231,101 261,92 C 291,82 302,32 328,32 L 395,32"
              fill="none"
              stroke="url(#stampingGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Base vs Optimised Springback Comparison Curve (From Poster Figure 4) */}
            <path
              d="M 40,95 Q 110,88 180,60 T 320,70 T 380,85"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              opacity="0.85"
            />
            <path
              d="M 40,92 Q 110,84 180,50 T 320,58 T 380,82"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Section measurement points */}
            <circle cx="210" cy="98" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            <text x="220" y="94" fill="#f8fafc" fontSize="9" fontFamily="monospace">Max Thinning: +6.5%</text>

            <circle cx="140" cy="85" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <text x="75" y="70" fill="#38bdf8" fontSize="8" fontFamily="monospace">Wrinkling: -82.8%</text>
          </svg>
        </div>

        {/* Bottom Legend */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-0.5 bg-red-500 inline-block" /> Base
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-0.5 bg-sky-400 border-dashed border-b border-sky-400 inline-block" /> Optimised
            </span>
          </div>
          <span className="text-emerald-400 font-medium">CO₂ -43% · Cost -30.9%</span>
        </div>
      </div>
    );
  }

  if (type === 'ehl-mesh') {
    return (
      <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* Header telemetry */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-200 font-semibold tracking-wider">MATLAB EHL SOLVER · PMD</span>
          </div>
          <span className="text-emerald-400 font-bold">92.7% SPEEDUP</span>
        </div>

        {/* Progressive Mesh Densification Diagram (reflecting Poster Figure 1 & Figure 4) */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <svg viewBox="0 0 420 120" className="w-full h-28 drop-shadow-md">
            <defs>
              <linearGradient id="pressureHeat" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>

            {/* Left Box: Coarse Mesh (32x96) */}
            <g transform="translate(15, 15)">
              <rect x="0" y="0" width="85" height="60" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="3" />
              {/* Coarse grid lines */}
              {[17, 34, 51, 68].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="60" stroke="#475569" strokeWidth="0.8" />
              ))}
              {[15, 30, 45].map((y) => (
                <line key={y} x1="0" y1={y} x2="85" y2={y} stroke="#475569" strokeWidth="0.8" />
              ))}
              <circle cx="42" cy="30" r="14" fill="#38bdf8" opacity="0.3" />
              <text x="42" y="78" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Coarse 32×96</text>
            </g>

            {/* Transition Arrow 1: 2D Interpolate */}
            <g transform="translate(110, 36)">
              <path d="M 0,10 L 25,10 M 18,4 L 25,10 L 18,16" stroke="#38bdf8" strokeWidth="1.8" fill="none" />
              <text x="12" y="-2" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">2D Interp</text>
            </g>

            {/* Middle Box: Approximation Fine Mesh (64x96) */}
            <g transform="translate(148, 15)">
              <rect x="0" y="0" width="85" height="60" fill="#0f172a" stroke="#0284c7" strokeWidth="1.4" rx="3" />
              {/* Denser grid lines */}
              {[10, 20, 30, 40, 50, 60, 70, 80].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="60" stroke="#38bdf8" strokeWidth="0.6" opacity="0.6" />
              ))}
              {[10, 20, 30, 40, 50].map((y) => (
                <line key={y} x1="0" y1={y} x2="85" y2={y} stroke="#38bdf8" strokeWidth="0.6" opacity="0.6" />
              ))}
              <ellipse cx="42" cy="30" rx="18" ry="12" fill="url(#pressureHeat)" opacity="0.6" />
              <text x="42" y="78" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">Dense 512×96</text>
            </g>

            {/* Transition Arrow 2: Solve */}
            <g transform="translate(243, 36)">
              <path d="M 0,10 L 25,10 M 18,4 L 25,10 L 18,16" stroke="#10b981" strokeWidth="1.8" fill="none" />
              <text x="12" y="-2" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">Iterative</text>
            </g>

            {/* Right: Computation Time Curve Comparison (Standard vs PMD) */}
            <g transform="translate(285, 10)">
              <rect x="0" y="0" width="120" height="75" fill="#090d16" stroke="#334155" strokeWidth="1" rx="3" />
              {/* Axes */}
              <line x1="15" y1="65" x2="112" y2="65" stroke="#64748b" strokeWidth="1" />
              <line x1="15" y1="10" x2="15" y2="65" stroke="#64748b" strokeWidth="1" />
              
              {/* Standard Solver Time Curve (Red - exponential rise to 389.4 min) */}
              <path d="M 15,63 Q 50,60 80,42 T 110,14" fill="none" stroke="#ef4444" strokeWidth="2" />
              {/* PMD Solver Time Curve (Blue - dramatic flat reduction to 28.4 min) */}
              <path d="M 15,64 Q 50,62 80,58 T 110,54" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />

              <text x="112" y="16" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="end">389m</text>
              <text x="112" y="52" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="end">28.4m</text>
              <text x="60" y="86" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Mesh Size: 1024×96</text>
            </g>
          </svg>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <span className="text-slate-400">Tribology International · UROP 2026</span>
          <span className="text-sky-300">1024×96: 389.4 min → 28.4 min</span>
        </div>
      </div>
    );
  }

  if (type === 'cad-chassis') {
    return (
      <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-slate-200 font-semibold tracking-wider">ANSYS FEA · SPACEFRAME</span>
          </div>
          <span className="text-sky-400 font-mono">1,540 N·m/°</span>
        </div>

        <div className="relative z-10 my-auto flex items-center justify-center">
          <svg viewBox="0 0 400 110" className="w-full h-28 drop-shadow-md">
            {/* Spaceframe Chassis 3D perspective wireframe */}
            <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Lower chassis rails */}
              <line x1="60" y1="75" x2="330" y2="75" stroke="#38bdf8" />
              <line x1="80" y1="88" x2="350" y2="88" stroke="#0284c7" />
              {/* Upper rails */}
              <line x1="90" y1="45" x2="280" y2="45" stroke="#38bdf8" />
              <line x1="110" y1="35" x2="300" y2="35" stroke="#0284c7" />

              {/* Main Roll Hoop */}
              <path d="M 210,75 L 215,20 L 235,20 L 240,75" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <path d="M 230,88 L 235,30 L 255,30 L 260,88" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.6" />

              {/* Front bulkhead */}
              <line x1="60" y1="75" x2="90" y2="45" stroke="#38bdf8" />
              <line x1="80" y1="88" x2="110" y2="35" stroke="#0284c7" />
              <line x1="90" y1="45" x2="110" y2="35" stroke="#0284c7" />
              <line x1="60" y1="75" x2="80" y2="88" stroke="#0284c7" />

              {/* Triangulation bracing */}
              <line x1="90" y1="45" x2="140" y2="75" stroke="#10b981" strokeWidth="1.2" />
              <line x1="140" y1="75" x2="215" y2="20" stroke="#f59e0b" strokeWidth="1.4" />
              <line x1="150" y1="45" x2="210" y2="75" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="240" y1="75" x2="300" y2="45" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="280" y1="45" x2="330" y2="75" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="215" y1="20" x2="280" y2="75" stroke="#eab308" strokeWidth="1.4" />

              {/* Suspension wishbone mounts */}
              <circle cx="70" cy="75" r="3" fill="#ef4444" />
              <circle cx="100" cy="45" r="3" fill="#ef4444" />
              <circle cx="310" cy="75" r="3" fill="#38bdf8" />
            </g>

            {/* Load vector indicators */}
            <path d="M 50,60 L 50,73 M 46,68 L 50,75 L 54,68" stroke="#ef4444" strokeWidth="2" fill="none" />
            <text x="35" y="55" fill="#ef4444" fontSize="8" fontFamily="monospace">2.5G Load</text>

            <path d="M 360,95 L 360,82 M 356,87 L 360,80 L 364,87" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <text x="340" y="105" fill="#38bdf8" fontSize="8" fontFamily="monospace">Reaction</text>
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <span className="text-slate-400">4130 Chromoly Spaceframe</span>
          <span className="text-emerald-400">Mass: -11.5% · FoS: 1.78</span>
        </div>
      </div>
    );
  }

  if (type === 'robotics') {
    return (
      <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-200 font-semibold tracking-wider">6-DOF KINEMATICS & CONTROL</span>
          </div>
          <span className="text-amber-400 font-mono">ERROR &lt;0.28mm</span>
        </div>

        <div className="relative z-10 my-auto flex items-center justify-center">
          <svg viewBox="0 0 400 110" className="w-full h-28 drop-shadow-md">
            {/* Coordinate ground base */}
            <rect x="50" y="85" width="40" height="12" fill="#334155" rx="2" />
            <line x1="70" y1="85" x2="70" y2="55" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <circle cx="70" cy="55" r="5" fill="#f59e0b" />

            {/* Link 1 */}
            <line x1="70" y1="55" x2="135" y2="28" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="135" cy="28" r="4.5" fill="#f59e0b" />

            {/* Link 2 */}
            <line x1="135" y1="28" x2="200" y2="50" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="200" cy="50" r="4" fill="#f59e0b" />

            {/* End Effector */}
            <line x1="200" y1="50" x2="235" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
            <polygon points="235,36 242,40 235,44" fill="#f59e0b" />

            {/* Trajectory curve with tolerance envelope */}
            <path
              d="M 235,40 Q 280,20 320,45 T 375,35"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <path
              d="M 235,37 Q 280,17 320,42 T 375,32"
              fill="none"
              stroke="#10b981"
              strokeWidth="0.8"
              opacity="0.3"
            />
            <path
              d="M 235,43 Q 280,23 320,48 T 375,38"
              fill="none"
              stroke="#10b981"
              strokeWidth="0.8"
              opacity="0.3"
            />

            {/* D-H frame indicator */}
            <g transform="translate(135, 28)">
              <line x1="0" y1="0" x2="15" y2="0" stroke="#ef4444" strokeWidth="1.2" />
              <line x1="0" y1="0" x2="0" y2="-15" stroke="#10b981" strokeWidth="1.2" />
              <text x="17" y="3" fill="#ef4444" fontSize="7">x₁</text>
              <text x="-2" y="-17" fill="#10b981" fontSize="7">z₁</text>
            </g>

            <text x="305" y="70" fill="#94a3b8" fontSize="8" fontFamily="monospace">Spline Trajectory Tracking</text>
            <text x="305" y="82" fill="#10b981" fontSize="8" fontFamily="monospace">DLS Inverse Kinematics</text>
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <span className="text-slate-400">MATLAB & Simulink Dynamic Model</span>
          <span className="text-amber-400">Settling: 0.42s · 6-Axis</span>
        </div>
      </div>
    );
  }

  if (type === 'cfd') {
    return (
      <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-200 font-semibold tracking-wider">FLUENT CFD · VORTEX GENERATORS</span>
          </div>
          <span className="text-cyan-400 font-mono">Nu +24.6%</span>
        </div>

        <div className="relative z-10 my-auto flex items-center justify-center">
          <svg viewBox="0 0 400 110" className="w-full h-28 drop-shadow-md">
            <defs>
              <linearGradient id="cfdTemp" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="30%" stopColor="#06b6d4" />
                <stop offset="60%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* Channel Walls */}
            <line x1="20" y1="20" x2="380" y2="20" stroke="#64748b" strokeWidth="2.5" />
            <line x1="20" y1="90" x2="380" y2="90" stroke="#64748b" strokeWidth="2.5" />

            {/* Vortex generator angled rib pairs on bottom wall */}
            <polygon points="120,90 135,70 142,90" fill="#f97316" />
            <polygon points="230,90 245,70 252,90" fill="#f97316" />

            {/* Streamline turbulent swirl paths */}
            <path d="M 20,35 Q 100,35 125,50 T 170,30 T 235,55 T 310,32 T 380,35" fill="none" stroke="url(#cfdTemp)" strokeWidth="2" />
            <path d="M 20,55 Q 110,55 130,68 T 180,48 T 240,68 T 320,48 T 380,55" fill="none" stroke="url(#cfdTemp)" strokeWidth="2.2" />
            <path d="M 20,75 Q 115,75 140,55 T 190,75 T 255,55 T 330,75 T 380,75" fill="none" stroke="url(#cfdTemp)" strokeWidth="1.8" />

            {/* Swirl arrows behind turbulator */}
            <ellipse cx="160" cy="72" rx="10" ry="14" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />
            <ellipse cx="270" cy="72" rx="10" ry="14" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />

            <text x="35" y="47" fill="#94a3b8" fontSize="8" fontFamily="monospace">Inlet: 300K</text>
            <text x="320" y="47" fill="#ef4444" fontSize="8" fontFamily="monospace">Core: 360K</text>
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <span className="text-slate-400">SST k-ω Turbulence Formulation</span>
          <span className="text-cyan-300">Re = 4,000 – 24,000</span>
        </div>
      </div>
    );
  }

  // default to topology
  return (
    <div className="relative w-full h-52 bg-slate-950 overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800 select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-violet-400" />
          <span className="text-slate-200 font-semibold tracking-wider">TOPOLOGY OPTIMIZATION · Ti-6Al-4V</span>
        </div>
        <span className="text-violet-400 font-mono">MASS -44.8%</span>
      </div>

      <div className="relative z-10 my-auto flex items-center justify-center">
        <svg viewBox="0 0 400 110" className="w-full h-28 drop-shadow-md">
          {/* Outer initial bounding envelope (dashed) */}
          <rect x="60" y="18" width="280" height="74" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" rx="4" />

          {/* Organic load paths generated by SIMP algorithm */}
          <path
            d="M 80,35 C 130,22 180,24 230,42 C 270,55 300,35 320,35 C 330,35 330,75 320,75 C 290,75 260,55 220,68 C 170,82 120,78 80,75 Z"
            fill="#334155"
            stroke="#818cf8"
            strokeWidth="2"
          />

          {/* Core void pockets */}
          <ellipse cx="145" cy="50" rx="22" ry="14" fill="#020617" stroke="#6366f1" strokeWidth="1.2" />
          <ellipse cx="250" cy="52" rx="18" ry="10" fill="#020617" stroke="#6366f1" strokeWidth="1.2" />

          {/* Bolt fixation journals */}
          <circle cx="80" cy="35" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="80" cy="35" r="3" fill="#ffffff" />

          <circle cx="80" cy="75" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="80" cy="75" r="3" fill="#ffffff" />

          {/* Load application boss */}
          <circle cx="320" cy="55" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="320" cy="55" r="3" fill="#ffffff" />
          <path d="M 345,55 L 365,55 M 360,51 L 366,55 L 360,59" stroke="#ef4444" strokeWidth="2" fill="none" />
          <text x="350" y="45" fill="#ef4444" fontSize="8" fontFamily="monospace">6.8 kN</text>

          <text x="145" y="53" textAnchor="middle" fill="#818cf8" fontSize="7" fontFamily="monospace">Void</text>
          <text x="250" y="55" textAnchor="middle" fill="#818cf8" fontSize="7" fontFamily="monospace">Void</text>
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
        <span className="text-slate-400">SIMP Solid Isotropic Material Model</span>
        <span className="text-violet-300">1.45 kg → 0.80 kg · FoS &gt; 1.41</span>
      </div>
    </div>
  );
};
