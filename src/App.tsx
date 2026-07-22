import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Target, 
  Compass, 
  CheckCircle2, 
  XCircle, 
  Printer, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Palette, 
  Briefcase, 
  MessageSquare, 
  Check,
  Award,
  Eye,
  Type,
  Maximize2,
  Activity,
  Image as ImageIcon,
  Grid,
  BookOpen,
  Zap,
  Flame,
  Globe,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'document' | 'matrix' | 'direction' | 'visuals' | 'architecture' | 'enquiry'>('direction');
  const [viewMode, setViewMode] = useState<'editorial' | 'presentation'>('editorial');
  const [activeInspiration, setActiveInspiration] = useState<string>('all');
  
  const [approvedItems, setApprovedItems] = useState<Record<string, boolean>>({
    'opt-1': true,
    'opt-2': true,
    'opt-3': true,
    'opt-4': true,
    'opt-5': true,
    'opt-6': true,
  });

  const toggleApproval = (id: string) => {
    setApprovedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans-body">
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE7DF] no-print px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs tracking-widest uppercase font-semibold text-[#8A7963]">Valtreon Media Network</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E] font-mono">Awwwards Strategy Blueprint</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A] tracking-tight">
                Creative Director Design Specification & Project Blueprint
              </h1>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-[#EBE7DF] p-1 rounded-md text-xs font-medium text-[#4A453E]">
              <button
                onClick={() => setViewMode('editorial')}
                className={`px-3 py-1.5 rounded transition-all ${viewMode === 'editorial' ? 'bg-[#1A1A1A] text-[#FAF8F5] shadow-xs' : 'hover:text-[#1A1A1A]'}`}
              >
                Editorial Document
              </button>
              <button
                onClick={() => setViewMode('presentation')}
                className={`px-3 py-1.5 rounded transition-all ${viewMode === 'presentation' ? 'bg-[#1A1A1A] text-[#FAF8F5] shadow-xs' : 'hover:text-[#1A1A1A]'}`}
              >
                Presentation Deck
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#EBE7DF] border border-[#DCD6CA] rounded text-xs font-medium text-[#1A1A1A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#5A5245]" />
              <span>Export PDF / Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Header */}
      <nav className="border-b border-[#EBE7DF] bg-[#FAF8F5] no-print px-4 sm:px-8 py-2 sticky top-[73px] z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-6 text-xs sm:text-sm font-medium whitespace-nowrap">
          <button
            onClick={() => setActiveTab('direction')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'direction' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            ★ Awwwards Design Specification
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'document' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            01. Executive Overview
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'matrix' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            02. User Matrix & Goals
          </button>
          <button
            onClick={() => setActiveTab('visuals')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'visuals' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            03. Aesthetic Guardrails
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'architecture' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            04. Site Architecture
          </button>
          <button
            onClick={() => setActiveTab('enquiry')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'enquiry' ? 'border-[#1A1A1A] text-[#1A1A1A] font-semibold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            05. Dual Lead Schema
          </button>
        </div>
      </nav>

      {/* Document Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        
        {/* Cover / Title Block */}
        <div className="mb-16 border-b border-[#DCD6CA] pb-12">
          <div className="flex flex-wrap items-center justify-between text-xs tracking-wider uppercase text-[#8A7963] font-mono mb-4 gap-2">
            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> AWWWARDS CREATIVE DIRECTOR DIRECTION</span>
            <span>STATUS: STRATEGIC SPECIFICATION APPROVED</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-light text-[#1A1A1A] leading-[1.08] tracking-tight mb-6">
            Valtreon Media Network
          </h1>
          
          <p className="text-lg sm:text-xl font-serif-display italic text-[#5A5245] max-w-3xl leading-relaxed mb-8">
            "An editorial luxury digital experience fusing Apple’s typographic scale, Stripe’s tactile clarity, Linear’s spatial restraint, Vercel’s geometric rhythm, Refokus’s fluid motion, and Vivid+Co’s editorial prestige."
          </p>

          {/* Quick Context Summary Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#EBE7DF] text-xs font-medium">
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Creative Standard</span>
              <span className="text-[#1A1A1A] font-semibold">Awwwards Site of the Month</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Aesthetic Archetype</span>
              <span className="text-[#1A1A1A] font-semibold">Minimal • Luxury • Editorial</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Strict Prohibition</span>
              <span className="text-[#1A1A1A] font-semibold">No Cyberpunk • No SaaS Slop</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Primary Outcome</span>
              <span className="text-[#1A1A1A] font-semibold">Instant Institutional Trust</span>
            </div>
          </div>
        </div>

        {/* SECTION: AWWWARDS CREATIVE DIRECTOR SPECIFICATION (PRIMARY TAB) */}
        {(activeTab === 'direction' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">AWWWARDS DESIGN SPECIFICATION</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Creative Direction & Architectural Philosophy</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: AWWWARDS-CD-2026</span>
            </div>

            {/* Benchmark Brand Filter / Synthesis Grid */}
            <div className="p-6 bg-[#F5F1E8] border border-[#DCD6CA] rounded-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7963]">Curated World-Class Benchmark Influences:</span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {['all', 'apple', 'stripe', 'linear', 'vercel', 'refokus', 'vivid'].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setActiveInspiration(brand)}
                      className={`px-3 py-1 rounded-full capitalize font-medium transition-colors ${
                        activeInspiration === brand
                          ? 'bg-[#1A1A1A] text-[#FAF8F5]'
                          : 'bg-[#EBE7DF] text-[#5A5245] hover:bg-[#DCD6CA]'
                      }`}
                    >
                      {brand === 'all' ? 'All Benchmarks' : brand === 'vivid' ? 'Vivid+Co' : brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-xs pt-2">
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'apple' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Apple</span>
                  <span className="text-[10px] text-[#6A6356]">Scale, focal isolation, unhurried reveal</span>
                </div>
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'stripe' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Stripe</span>
                  <span className="text-[10px] text-[#6A6356]">Tactile geometry, micro-typography</span>
                </div>
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'linear' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Linear</span>
                  <span className="text-[10px] text-[#6A6356]">Obsessive keyboard & spatial discipline</span>
                </div>
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'vercel' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Vercel</span>
                  <span className="text-[10px] text-[#6A6356]">Monochrome contrast, razor grids</span>
                </div>
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'refokus' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Refokus</span>
                  <span className="text-[10px] text-[#6A6356]">Kinetic layout inertia, fluid storytelling</span>
                </div>
                <div className={`p-3 rounded border transition-all ${activeInspiration === 'all' || activeInspiration === 'vivid' ? 'bg-[#FAF8F5] border-[#8A7963]' : 'opacity-40 border-transparent'}`}>
                  <span className="font-semibold block text-[#1A1A1A]">Vivid+Co</span>
                  <span className="text-[10px] text-[#6A6356]">High fashion editorial, luxury warmth</span>
                </div>
              </div>
            </div>

            {/* 8 PHILOSOPHICAL PILLARS DETAILED SPECIFICATION */}
            <div className="space-y-12">

              {/* PILLAR 1: LAYOUT PHILOSOPHY */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Maximize2 className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 01</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Layout Philosophy: The Unhurried Gallery</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY VIVID+CO & APPLE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Core Premise:</strong> Reject the frantic density of SaaS dashboards and aggressive e-commerce stores. Valtreon’s layout operates as an <em>unhurried luxury art gallery</em>. Each section acts as a singular, monumental focal point that commands the viewer’s full attention before yielding gracefully to the next statement.
                    </p>
                    <p>
                      <strong>Structural Mechanics:</strong> We employ a vertical rhythm anchored by generous section breaks (160px–220px padding). Instead of crowding multiple competing elements side-by-side, we isolate high-value content blocks—such as a single $1.2M campaign case study or a single tier-one creator spotlight—giving it the visual dignity of an artwork framed in a museum.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F5F1E8] p-4 rounded border border-[#E0D9CB] space-y-2">
                    <span className="font-semibold text-[#1A1A1A] block uppercase text-[10px] text-[#8A7963] tracking-wider">Awwwards Execution Checklist</span>
                    <ul className="space-y-1.5 text-[11px] text-[#5A5245]">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Full-bleed hero stage with 85vh content clearance</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Single-column focus zones for high-value metrics</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Asymmetric editorial offset grids for campaign stories</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 2: TYPOGRAPHY PHILOSOPHY */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Type className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 02</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Typography Philosophy: The High-Contrast Contrast Pair</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY STRIPE & APPLE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Typographic Pairings:</strong> We unite <strong>Cormorant Garamond</strong> (an exquisite, high-contrast display serif with historical roots) for monumental headings, and <strong>Plus Jakarta Sans</strong> (a clean, geometric humanist sans-serif) for body text and data tables.
                    </p>
                    <p>
                      <strong>Scale & Optical Ratios:</strong> We utilize a low-density, high-impact typographic scale ratio (1.333 Perfect Fourth scale). Headings are deliberately large (up to 72px on desktop), light in weight (300/400), and tight in tracking (-0.03em). Body copy is set at 16px–18px with generous line height (1.65) to enforce effortless readability.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F5F1E8] p-4 rounded border border-[#E0D9CB] space-y-2">
                    <span className="font-semibold text-[#1A1A1A] block uppercase text-[10px] text-[#8A7963] tracking-wider">Type Pairing Hierarchy</span>
                    <div className="space-y-2">
                      <div className="border-b border-[#DCD6CA] pb-2">
                        <span className="font-serif-display text-xl text-[#1A1A1A] block">Cormorant Garamond Light</span>
                        <span className="text-[10px] text-[#8A7963]">Used for Hero Headlines, Quotes & Case Titles</span>
                      </div>
                      <div>
                        <span className="font-sans-body font-semibold text-xs text-[#1A1A1A] block">Plus Jakarta Sans Medium</span>
                        <span className="text-[10px] text-[#8A7963]">Used for Case Metadata, Data Labels & Nav</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PILLAR 3: WHITE SPACE & SPATIAL RHYTHM */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Maximize2 className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 03</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">White Space: Negative Space as Wealth Indicator</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY LINEAR & VERCEL</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>The Luxury Rule:</strong> In digital design, white space is the ultimate indicator of prestige. Cheap sites crowd content into dense boxes; luxury brands afford room to breathe.
                    </p>
                    <p>
                      <strong>Spatial Cadence:</strong> We enforce a strict minimum 65% negative space ratio across all viewport breakpoints. Outer container padding never drops below 24px on mobile and 80px on ultra-wide screens. Spacing between major visual blocks follows a 16px base grid multiplier (32px, 64px, 128px, 192px), creating a calm, hypnotic cadence as the user scrolls.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#141414] text-[#FAF8F5] p-5 rounded-lg space-y-3">
                    <span className="text-[10px] font-mono text-[#A38B68] uppercase tracking-widest block">SPATIAL DISTRIBUTION MODEL</span>
                    <div className="flex items-center justify-between text-[11px] border-b border-[#333] pb-2">
                      <span>Content Footprint</span>
                      <span className="font-mono text-[#A38B68]">35% Area</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span>Negative Breathing Canvas</span>
                      <span className="font-mono text-[#FAF8F5]">65% Area</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PILLAR 4: MOTION & MICRO-INTERACTIONS */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Activity className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 04</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Motion: Weighty, Friction-Based Inertia</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY REFOKUS & LINEAR</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Motion Character:</strong> Motion should feel like heavy physical objects moving through silk—damped, deliberate, and expensive. We ban bouncy cubic-beziers, frantic spin animations, and jarring slide-ins.
                    </p>
                    <p>
                      <strong>Scroll Dynamics & Transitions:</strong> Page elements transition via gentle vertical drift (12px–20px offset) paired with a subtle opacity fade (0.6s duration with custom ease-out `cubic-bezier(0.16, 1, 0.3, 1)`). Cursor hovers over campaign cards trigger smooth 1.02x scale transitions with soft shadow expansion, mimicking a physical photographic print being raised off a desk.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F5F1E8] p-4 rounded border border-[#E0D9CB] space-y-2">
                    <span className="font-semibold text-[#1A1A1A] block uppercase text-[10px] text-[#8A7963] tracking-wider">Prohibited Motion Patterns</span>
                    <ul className="space-y-1.5 text-[11px] text-[#5A5245]">
                      <li className="flex items-center gap-1.5 text-red-800"><XCircle className="w-3.5 h-3.5 shrink-0" /> No springy bouncy easing curves</li>
                      <li className="flex items-center gap-1.5 text-red-800"><XCircle className="w-3.5 h-3.5 shrink-0" /> No auto-playing background carousels</li>
                      <li className="flex items-center gap-1.5 text-red-800"><XCircle className="w-3.5 h-3.5 shrink-0" /> No sudden horizontal slide-ins</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 5: PHOTOGRAPHY & IMAGERY STRATEGY */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><ImageIcon className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 05</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Images: High-Fashion Editorial Imagery</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY VIVID+CO & APPLE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Art Direction:</strong> Influencer marketing imagery often suffers from cheesy stock photos or overly saturated phone selfies. Valtreon mandates <strong>editorial-grade fashion photography</strong>—authentic, warm-toned portraiture, rich natural lighting, muted earth backgrounds, and elevated lifestyle settings.
                    </p>
                    <p>
                      <strong>Image Treatments:</strong> All campaign photography utilizes a subtle custom color grade (low saturation -10%, contrast +5%, warm highlight tint). Video previews are framed with quiet hairline borders (1px #EBE7DF) and subtle caption overlays to maintain an archival, documentary feel.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F5F1E8] p-4 rounded border border-[#E0D9CB] space-y-2">
                    <span className="font-semibold text-[#1A1A1A] block uppercase text-[10px] text-[#8A7963] tracking-wider">Imagery Guidelines</span>
                    <ul className="space-y-1.5 text-[11px] text-[#5A5245]">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Muted warm tone-grading across all case studies</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Crisp 4:3 and 16:9 aspect ratio containers</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#8A7963]" /> Subtle 1px warm borders on all media cards</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 6: COLOR USAGE & PALETTE ECONOMICS */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Palette className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 06</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Color Usage: Organic Luxury Warmth</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY VERCEL & VIVID+CO</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Color Economics:</strong> Banish stark digital white (#FFFFFF) and cold pitch black (#000000). Valtreon’s palette relies on organic warm neutrals that reduce optical fatigue while evoking rich archival paper and fine leather.
                    </p>
                    <p>
                      <strong>Palette Ratios:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#5A5245]">
                      <li><strong>Primary Surface (70%):</strong> Warm Alabaster / Soft Ivory (#FAF8F5)</li>
                      <li><strong>Primary Text & Contrast (20%):</strong> Deep Charcoal Onyx (#141414)</li>
                      <li><strong>Secondary Surface & Borders (8%):</strong> Muted Warm Taupe (#EBE7DF / #DCD6CA)</li>
                      <li><strong>Accent Highlight (2%):</strong> Antique Bronze (#8A7963)</li>
                    </ul>
                  </div>
                  <div className="md:col-span-5 space-y-3">
                    <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-[#FAF8F5] border border-[#CCC]" />
                        <span className="font-semibold text-[#1A1A1A]">Alabaster Ivory</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#8A7963]">#FAF8F5</span>
                    </div>
                    <div className="p-3 bg-[#141414] text-[#FAF8F5] rounded flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-[#141414] border border-[#444]" />
                        <span className="font-semibold text-[#FAF8F5]">Deep Onyx</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#A38B68]">#141414</span>
                    </div>
                    <div className="p-3 bg-[#8A7963] text-[#FAF8F5] rounded flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-[#8A7963]" />
                        <span className="font-semibold text-[#FAF8F5]">Antique Bronze</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#FAF8F5]">#8A7963</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PILLAR 7: GRID SYSTEM & STRUCTURAL RATIOS */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><Grid className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 07</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Grid System: Mathematical Editorial Alignment</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY VERCEL & STRIPE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Grid Discipline:</strong> The structure rests upon a strict 12-column responsive grid system paired with fine hairline structural dividers (1px #EBE7DF).
                    </p>
                    <p>
                      <strong>Asymmetric Rhythm:</strong> Rather than uniform 3-column feature grids, we introduce editorial asymmetry—such as a 7-column case study image paired with a 5-column narrative block, or a 4-column key performance indicator column offset against an 8-column client testimonial. This prevents visual monotony and forces active reading.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F5F1E8] p-4 rounded border border-[#E0D9CB] space-y-2">
                    <span className="font-semibold text-[#1A1A1A] block uppercase text-[10px] text-[#8A7963] tracking-wider">Grid Breakdowns</span>
                    <div className="grid grid-cols-12 gap-1 h-12 pt-2">
                      <div className="col-span-7 bg-[#1A1A1A] text-[#FAF8F5] rounded flex items-center justify-center text-[9px] font-mono">7 Cols</div>
                      <div className="col-span-5 bg-[#8A7963] text-[#FAF8F5] rounded flex items-center justify-center text-[9px] font-mono">5 Cols</div>
                    </div>
                    <span className="text-[10px] text-[#6A6356] block text-center pt-1">Golden Ratio Asymmetric Layout Split</span>
                  </div>
                </div>
              </div>

              {/* PILLAR 8: EDITORIAL NARRATIVE & STORYTELLING */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[#EBE7DF] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="p-2.5 bg-[#F2EDE4] rounded-lg text-[#8A7963]"><BookOpen className="w-5 h-5" /></span>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">PILLAR 08</span>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A]">Storytelling: The Institutional Thesis Narrative</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#6A6356] bg-[#EBE7DF] px-2.5 py-1 rounded">INSPIRED BY APPLE & REFOKUS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#4A453E] leading-relaxed">
                  <div className="md:col-span-7 space-y-3">
                    <p>
                      <strong>Editorial Voice:</strong> The copy is written not as sales marketing, but as an <em>authoritative institutional thesis</em>. We speak with quiet confidence, substituting buzzwords with verified financial and performance metrics.
                    </p>
                    <p>
                      <strong>The Narrative Arc:</strong>
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-[#5A5245]">
                      <li><strong>The Thesis (Hero):</strong> Influence is no longer ad-hoc outreach; it is a measurable asset class.</li>
                      <li><strong>The Method (Services):</strong> How Valtreon mitigates risk, licenses IP, and scales creator campaigns.</li>
                      <li><strong>The Evidence (Case Studies):</strong> Verified campaign case studies with trackable ROAS and reach.</li>
                      <li><strong>The Roster (Talent):</strong> Premium creator network showcase.</li>
                      <li><strong>The Action (Consultation):</strong> High-intent dual intake funnels for brands and talent.</li>
                    </ol>
                  </div>
                  <div className="md:col-span-5 bg-[#141414] text-[#FAF8F5] p-5 rounded-lg space-y-3">
                    <span className="text-[10px] font-mono text-[#A38B68] uppercase tracking-widest block">TONE OF VOICE SAMPLE</span>
                    <p className="font-serif-display text-base italic leading-snug text-[#FAF8F5]">
                      "We do not buy posts; we curate cultural capital. Valtreon structures creator partnerships with the rigor of private equity transactions."
                    </p>
                    <span className="text-[10px] text-[#888] block">— Valtreon Brand Manifesto</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* SECTION 01: EXECUTIVE OVERVIEW */}
        {(activeTab === 'document' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-10">
            <div className="flex items-baseline justify-between border-b border-[#DCD6CA] pb-3">
              <h2 className="text-2xl sm:text-4xl font-serif-display text-[#1A1A1A]">01 / Executive Summary & Project Intent</h2>
              <span className="text-xs font-mono text-[#8A7963]">SECTION ID: VM-01</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-4">
                <h3 className="text-xl font-serif-display text-[#1A1A1A] italic">The Business Definition</h3>
                <p className="text-sm text-[#4A453E] leading-relaxed">
                  Valtreon Media Network operates at the intersection of high-tier creator talent and enterprise marketing capital. Unlike standard influencer databases or automated SaaS platforms, Valtreon delivers <strong>white-glove, outcome-driven campaign execution</strong>.
                </p>
                <div className="p-4 bg-[#F2EDE4] rounded border border-[#E0D9CB] text-xs text-[#3D3830] space-y-2">
                  <span className="font-semibold block uppercase tracking-wider text-[10px] text-[#7A6B56]">Creative Director's Assessment</span>
                  <p>
                    The agency website must act as a silent filter and a prestige validator. It must project the stature of a global luxury fashion house or elite private equity firm, assuring Brand Directors that their multi-hundred-thousand dollar budgets are safe, measured, and masterfully handled.
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">6 Core Website Goals & Strategic Requirements</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      id: 'opt-1',
                      title: '1. Build Trust Instantly',
                      desc: 'Establish enterprise credibility within 3 seconds of landing. High-contrast layout, dignified typography, and zero gimmicks assure CMOs & procurement teams.'
                    },
                    {
                      id: 'opt-2',
                      title: '2. Feel Premium & Timeless',
                      desc: 'Adopt a luxury editorial aesthetic (warm ivory, rich charcoal, quiet bronze). Avoid fleeting web trends, aggressive SaaS popups, and cyberpunk visuals.'
                    },
                    {
                      id: 'opt-3',
                      title: '3. Showcase High-Performance Services',
                      desc: 'Clearly define the end-to-end campaign lifecycle: Creator Discovery, Rights Licensing, Content Co-Creation, and Trackable ROI Attribution.'
                    },
                    {
                      id: 'opt-4',
                      title: '4. Showcase Curated Campaigns',
                      desc: 'Present campaign case studies as editorial vignettes featuring metrics (ROAS, Reach, Engagement Ratio, Media Value) alongside visual storytelling.'
                    },
                    {
                      id: 'opt-5',
                      title: '5. Generate High-Value Enquiries',
                      desc: 'Position a streamlined, multi-step Brand Consultation Portal to filter and capture serious enterprise budget holders.'
                    },
                    {
                      id: 'opt-6',
                      title: '6. Attract Top 1% Creators',
                      desc: 'Build an exclusive Creator Application portal to attract, vet, and recruit elite influencers who seek top-tier brand alignment.'
                    },
                  ].map((goal) => (
                    <div 
                      key={goal.id} 
                      onClick={() => toggleApproval(goal.id)}
                      className={`p-4 rounded border transition-all cursor-pointer ${approvedItems[goal.id] ? 'bg-[#F5F1E8] border-[#8A7963]/40' : 'bg-[#FAF8F5] border-[#EBE7DF]'}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                            {approvedItems[goal.id] && <Check className="w-4 h-4 text-[#8A7963]" />}
                            {goal.title}
                          </h4>
                          <p className="text-xs text-[#5A5245] leading-relaxed">{goal.desc}</p>
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${approvedItems[goal.id] ? 'bg-[#8A7963] text-[#FAF8F5]' : 'bg-[#EBE7DF] text-[#6A6356]'}`}>
                          {approvedItems[goal.id] ? 'APPROVED' : 'REVIEW'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 02: TARGET USER MATRIX */}
        {(activeTab === 'matrix' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-10">
            <div className="flex items-baseline justify-between border-b border-[#DCD6CA] pb-3">
              <h2 className="text-2xl sm:text-4xl font-serif-display text-[#1A1A1A]">02 / Audience Architecture & Intent Alignment</h2>
              <span className="text-xs font-mono text-[#8A7963]">SECTION ID: VM-02</span>
            </div>

            <p className="text-sm text-[#5A5245] max-w-2xl leading-relaxed">
              The website serves two distinct high-intent user cohorts. Each requires a tailored visual entry point, distinct messaging hierarchy, and custom call to action.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cohort A: Brands & Enterprise */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963]">DEMAND SIDE</span>
                    <h3 className="text-xl font-serif-display text-[#1A1A1A]">Enterprise, Startups & D2C Brands</h3>
                  </div>
                  <Building2 className="w-6 h-6 text-[#8A7963]" />
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Target Persona Profiles:</span>
                    <p className="text-[#5A5245] leading-relaxed">
                      Chief Marketing Officers, Brand Directors, VP of Growth, Acquisition Managers at scaling D2C brands & enterprise corporations.
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Core Pain Points & Objections:</span>
                    <ul className="list-disc list-inside text-[#5A5245] space-y-1">
                      <li>Fear of unvetted creators damaging brand reputation</li>
                      <li>Lack of transparent ROAS & real attribution tracking</li>
                      <li>Inability to manage multi-creator contract rights & licensing</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Design Solution & UX Trigger:</span>
                    <p className="text-[#5A5245] leading-relaxed">
                      Front-center display of verified ROI metrics, editorial campaign case studies, clear safety compliance seals, and a friction-free <strong>"Initiate Brand Campaign"</strong> intake portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cohort B: Influencers & Creators */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963]">SUPPLY SIDE</span>
                    <h3 className="text-xl font-serif-display text-[#1A1A1A]">Influencers & Content Creators</h3>
                  </div>
                  <Users className="w-6 h-6 text-[#8A7963]" />
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Target Persona Profiles:</span>
                    <p className="text-[#5A5245] leading-relaxed">
                      Mid-tier to macro creators (50k - 5M+ reach) across Lifestyle, Tech, Beauty, Gaming, Business, and Luxury sectors.
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Core Desires & Expectations:</span>
                    <ul className="list-disc list-inside text-[#5A5245] space-y-1">
                      <li>Access to high-paying, reputable brand partnerships</li>
                      <li>Creative freedom without rigid corporate micromanagement</li>
                      <li>Guaranteed prompt payments and professional contract management</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-[#1A1A1A] block mb-1">Design Solution & UX Trigger:</span>
                    <p className="text-[#5A5245] leading-relaxed">
                      Prestige talent showcase, testimonials from existing network creators, and an exclusive <strong>"Apply for Roster Representation"</strong> intake workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 03: VISUAL GUARDRAILS */}
        {(activeTab === 'visuals' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-10">
            <div className="flex items-baseline justify-between border-b border-[#DCD6CA] pb-3">
              <h2 className="text-2xl sm:text-4xl font-serif-display text-[#1A1A1A]">03 / Aesthetic Guardrails & Banned Patterns</h2>
              <span className="text-xs font-mono text-[#8A7963]">SECTION ID: VM-03</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DO's: Approved Tone & Style */}
              <div className="bg-[#FAF8F5] border-l-4 border-l-[#8A7963] border border-[#DCD6CA] rounded-r-lg p-6 space-y-4">
                <div className="flex items-center space-x-2 text-[#8A7963]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">Required Aesthetic Pillars</h3>
                </div>

                <ul className="space-y-3 text-xs text-[#4A453E]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A7963] mt-1.5 shrink-0" />
                    <span><strong>Minimal & Spatial:</strong> Generous whitespace (65%+ negative space), disciplined layout grids, unhurried typography hierarchy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A7963] mt-1.5 shrink-0" />
                    <span><strong>Luxury & Editorial:</strong> High-contrast pairing of Cormorant Garamond display serif headings with Plus Jakarta Sans body copy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A7963] mt-1.5 shrink-0" />
                    <span><strong>Confident & Timeless:</strong> Restrained color palette (Warm Ivory #FAF8F5, Deep Charcoal #141414, Muted Taupe #8A7963).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A7963] mt-1.5 shrink-0" />
                    <span><strong>Subtle Micro-Interactions:</strong> Delicate opacity fades, crisp line dividers, smooth border transitions without bouncy gimmicks.</span>
                  </li>
                </ul>
              </div>

              {/* DONT's: Strictly Banned Anti-Patterns */}
              <div className="bg-[#FAF8F5] border-l-4 border-l-red-800 border border-[#DCD6CA] rounded-r-lg p-6 space-y-4">
                <div className="flex items-center space-x-2 text-red-800">
                  <XCircle className="w-5 h-5" />
                  <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">Strictly Banned Patterns</h3>
                </div>

                <ul className="space-y-3 text-xs text-[#4A453E]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 shrink-0" />
                    <span><strong>No Cyberpunk or Futuristic Tropes:</strong> Zero neon blues, glowing gradients, or sci-fi UI grid overlays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 shrink-0" />
                    <span><strong>No SaaS Dashboard Noise:</strong> No dense analytical sidebars, floating widgets, or crowded software-like control panels on the public site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 shrink-0" />
                    <span><strong>No Low-End Marketing Clutter:</strong> No flashing discount badges, aggressive exit popups, or frantic countdown timers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 shrink-0" />
                    <span><strong>No Generic AI Templates:</strong> No purple-to-cyan gradient text, glassmorphism blur overload, or stacked 3-column hero icons.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 04: SITE ARCHITECTURE */}
        {(activeTab === 'architecture' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-10">
            <div className="flex items-baseline justify-between border-b border-[#DCD6CA] pb-3">
              <h2 className="text-2xl sm:text-4xl font-serif-display text-[#1A1A1A]">04 / Proposed Website Architecture</h2>
              <span className="text-xs font-mono text-[#8A7963]">SECTION ID: VM-04</span>
            </div>

            <p className="text-sm text-[#5A5245] max-w-2xl leading-relaxed">
              The proposed site layout follows an intentional single-view, multi-section editorial narrative structure designed to maximize engagement and conversion.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  name: 'The Statement Hero',
                  purpose: 'Establish immediate prestige. Large display headline, quiet brand video preview, key stats ribbon ($50M+ Media Managed, 500+ Verified Creators, 4.2x Avg ROAS).',
                  cta: 'Primary: "Commission a Campaign" • Secondary: "Explore Selected Work"'
                },
                {
                  step: '02',
                  name: 'The Valtreon Difference (Core Pillars)',
                  purpose: 'Define agency superiority: Creator Procurement, Rights Licensing, Content Studio Production, Real-Time ROAS Attribution.',
                  cta: 'Interactive pillar deep-dive toggles'
                },
                {
                  step: '03',
                  name: 'Selected Campaign Case Studies',
                  purpose: 'High-impact editorial grid showcasing real brand-creator achievements with quantifiable revenue and reach metrics.',
                  cta: 'Filterable by Industry (Fashion, Tech, Beauty, D2C, Luxury)'
                },
                {
                  step: '04',
                  name: 'The Creator Roster Showcase',
                  purpose: 'Curated gallery highlighting top creators across niches, demonstrating network quality to incoming brands.',
                  cta: 'Profile previews & reach statistics'
                },
                {
                  step: '05',
                  name: 'Dual Conversion Portals (Brands vs Creators)',
                  purpose: 'Interactive multi-step consultation intake for Brands, and an exclusive application portal for Creators.',
                  cta: 'Tailored forms for high-intent qualification'
                }
              ].map((arch) => (
                <div key={arch.step} className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-serif-display font-light text-[#8A7963] font-mono">{arch.step}</span>
                    <div className="space-y-1">
                      <h3 className="text-base font-serif-display font-semibold text-[#1A1A1A]">{arch.name}</h3>
                      <p className="text-xs text-[#5A5245] leading-relaxed">{arch.purpose}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#8A7963] block">Call To Action</span>
                    <span className="text-xs font-medium text-[#1A1A1A]">{arch.cta}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 05: DUAL LEAD SCHEMA */}
        {(activeTab === 'enquiry' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-10">
            <div className="flex items-baseline justify-between border-b border-[#DCD6CA] pb-3">
              <h2 className="text-2xl sm:text-4xl font-serif-display text-[#1A1A1A]">05 / Interactive Campaign Intake Blueprint</h2>
              <span className="text-xs font-mono text-[#8A7963]">SECTION ID: VM-05</span>
            </div>

            <p className="text-sm text-[#5A5245] max-w-2xl leading-relaxed">
              Below is the proposed field architecture for the two lead generation funnels. Review how the intake process qualifies high-budget enterprise brands vs elite creators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Campaign Intake Preview */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg p-6 space-y-6">
                <div className="border-b border-[#EBE7DF] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963]">PORTAL 01: BRAND INTAKE SCHEMA</span>
                  <h3 className="text-lg font-serif-display text-[#1A1A1A]">Enterprise Campaign Consultation</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">1. Company / Brand Name</label>
                    <input disabled placeholder="e.g. Acme Luxury Group" className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">2. Estimated Campaign Budget Range</label>
                    <select disabled className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]">
                      <option>$25,000 - $50,000 (Testing / Pilot)</option>
                      <option selected>$50,000 - $150,000 (Growth Scaling)</option>
                      <option>$150,000+ (Enterprise National Campaign)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">3. Primary Campaign Objective</label>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <span className="p-2 bg-[#F2EDE4] border border-[#8A7963] text-[#1A1A1A] text-center rounded font-medium">ROAS / Direct Sales</span>
                      <span className="p-2 bg-[#F2EDE4] border border-[#DCD6CA] text-[#6A6356] text-center rounded">Brand Awareness</span>
                      <span className="p-2 bg-[#F2EDE4] border border-[#DCD6CA] text-[#6A6356] text-center rounded">Product Launch</span>
                      <span className="p-2 bg-[#F2EDE4] border border-[#DCD6CA] text-[#6A6356] text-center rounded">Content Licensing</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">4. Preferred Creator Niche</label>
                    <input disabled placeholder="e.g. Fashion, High Tech, Beauty, Luxury Lifestyle" className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]" />
                  </div>
                </div>
              </div>

              {/* Creator Application Intake Preview */}
              <div className="bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg p-6 space-y-6">
                <div className="border-b border-[#EBE7DF] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963]">PORTAL 02: CREATOR ROSTER SCHEMA</span>
                  <h3 className="text-lg font-serif-display text-[#1A1A1A]">Creator Roster Application</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">1. Creator / Handle Name</label>
                    <input disabled placeholder="@handle or Channel Name" className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">2. Primary Social Channels & Reach</label>
                    <select disabled className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]">
                      <option>Instagram (100k+ Followers)</option>
                      <option selected>TikTok (250k+ Followers)</option>
                      <option>YouTube (50k+ Subscribers)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">3. Past Brand Collaborations</label>
                    <textarea disabled rows={2} placeholder="List 2-3 notable brand partnerships you have executed" className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#1A1A1A] font-medium block">4. Portfolio / Media Kit Link</label>
                    <input disabled placeholder="https://yourportfolio.com or Drive folder" className="w-full p-2.5 bg-[#F2EDE4] border border-[#DCD6CA] rounded text-xs text-[#6A6356]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sign-off & Client Action Footer */}
        <div className="mt-20 p-8 bg-[#141414] text-[#FAF8F5] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A38B68]">CREATIVE DIRECTOR SIGN-OFF</span>
            <h3 className="text-2xl font-serif-display font-light text-[#FAF8F5]">
              Ready to approve the Strategic Direction Specification?
            </h3>
            <p className="text-xs text-[#AAA] leading-relaxed">
              Once you review and confirm this Project Understanding & Design Specification Document, we will proceed to building the production-ready Valtreon Media Network web application.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button 
              onClick={() => alert("Strategic Direction Approved! Specifications saved in project environment.")}
              className="w-full sm:w-auto px-6 py-3 bg-[#FAF8F5] hover:bg-[#EAE6DF] text-[#141414] font-medium text-xs tracking-wider uppercase rounded transition-colors"
            >
              Confirm Design Specification Alignment
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#EBE7DF] bg-[#FAF8F5] py-8 px-4 text-center text-xs text-[#8A7963] no-print">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Valtreon Media Network. Creative Direction & Brand Strategy Specification.</p>
          <span className="font-mono text-[11px]">Awwwards Creative Director Standard • Minimal Luxury Editorial</span>
        </div>
      </footer>
    </div>
  );
}
