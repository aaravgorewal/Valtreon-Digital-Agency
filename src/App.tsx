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
  ChevronRight,
  Shield,
  Heart,
  Crown,
  Lock,
  Cpu,
  Terminal,
  Gamepad2,
  Coins,
  Bot,
  LayoutGrid,
  FileCode,
  Copy,
  Scale,
  MousePointer,
  Maximize,
  Filter,
  CheckSquare,
  AlertTriangle,
  FileText,
  Search,
  CheckCircle,
  HelpCircle,
  BarChart3,
  ListFilter
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'principles' | 'personality' | 'direction' | 'document' | 'matrix' | 'visuals' | 'architecture' | 'enquiry' | 'blueprint' | 'figma'>('figma');
  const [viewMode, setViewMode] = useState<'editorial' | 'presentation'>('editorial');
  const [activePrincipleCategory, setActivePrincipleCategory] = useState<string>('all');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  
  // Interactive Design Audit Tool State
  const [auditQuery, setAuditQuery] = useState<string>('');
  const [selectedAuditViolations, setSelectedAuditViolations] = useState<string[]>([]);
  
  // Checklist state for 15 Principles verification
  const [verifiedPrinciples, setVerifiedPrinciples] = useState<Record<number, boolean>>({
    1: true, 2: true, 3: true, 4: true, 5: true,
    6: true, 7: true, 8: true, 9: true, 10: true,
    11: true, 12: true, 13: true, 14: true, 15: true
  });

  const togglePrincipleVerification = (num: number) => {
    setVerifiedPrinciples(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `VALTREON MEDIA NETWORK — THE OFFICIAL DESIGN LANGUAGE & VISUAL SOURCE OF TRUTH
========================================================================================
AESTHETIC ARCHETYPE: LUXURY EDITORIAL ("QUIET LUXURY & FINE PRINT")

THE 15 MANDATORY VISUAL PRINCIPLES:
1. LARGE TYPOGRAPHY: Monumental Cormorant Garamond display serifs (64px-88px) paired with tracking-tight Plus Jakarta Sans.
2. LOTS OF WHITESPACE: Minimum 65%+ negative space ratio across every fold. Generous 128px-192px section buffers.
3. MINIMAL COLORS: Warm Alabaster (#FAF8F5), Deep Charcoal (#141414), and Antique Bronze (#8A7963). Zero neon or raw black.
4. STRONG HIERARCHY: Strict 1.333 Perfect Fourth scale. Single primary anchor heading per viewport.
5. LARGE IMAGERY: High-fashion, warm-toned editorial visuals in full-bleed or 16:9/4:3 ratio with 1px warm borders.
6. EDITORIAL SPACING: Asymmetrical 12-column grid layout with 16px multiplier spacing (32px, 64px, 128px, 192px).
7. ELEGANT ANIMATIONS: Damped physics inertia (0.6s opacity fades, 2px elevation). No bouncy pops or spins.
8. PREMIUM CARDS: Flat, un-nested containers with 1px taupe borders (#DCD6CA) and 32px+ internal padding.
9. CLEAR CTA: High-contrast, unambiguous primary triggers ("Commission a Campaign", "Apply for Roster").
10. HIGH-CONTRAST LEGIBILITY: Strict WCAG AA compliance (4.5:1+) with 1.6 line height and max-w-prose limits.
11. MATHEMATICAL GRID ALIGNMENT: 12-column editorial grid anchored by subtle 1px hairline dividers.
12. TACTILE FINE PRINT DETAILS: Monospace metadata tags (10px tracked 0.12em), specification IDs, and timestamps.
13. UNHURRIED SCROLL INERTIA: Viewport sections behave as framed gallery exhibits with holding focus.
14. DUAL LEAD CONVERSION FUNNELS: Isolated, bespoke intake portals for Enterprise Brands vs. Creator Talent.
15. INSTITUTIONAL PROOF SEALS: Verified metrics ($50M+ Media, 4.2x ROAS) integrated directly into conversion touchpoints.

STRICTLY BANNED AESTHETICS (IMMEDIATE REJECTION CRITERIA):
❌ Hacker Dashboard • ❌ AI Dashboard • ❌ SaaS Dashboard • ❌ Crypto UI • ❌ Cyberpunk • ❌ Gaming UI
❌ Purple-to-blue gradients • ❌ Neon glows • ❌ Nested cards inside cards • ❌ Bouncy spring animations`;

    navigator.clipboard.writeText(summary);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  // 15 Principles Data Array
  const visualPrinciples = [
    {
      num: 1,
      title: 'Large Typography',
      category: 'typography',
      icon: Type,
      summary: 'Monumental display headlines set in Cormorant Garamond that establish immediate editorial authority.',
      specs: 'H1: 64px–88px (Light/Medium), H2: 40px–52px, Body: 16px–18px (Plus Jakarta Sans).',
      previewText: 'Empowering Enterprise Brands & Elite Content Creators',
      futureRule: 'Headings must command the viewport. Never use small, timid, or generic sans-serif headlines on primary page anchors.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 2,
      title: 'Lots of Whitespace',
      category: 'layout',
      icon: Maximize2,
      summary: 'Expansive negative space (65%+ of canvas) projecting unhurried luxury and spatial breathing room.',
      specs: 'Minimum section padding: 128px–192px desktop. Component spacing: 32px–64px.',
      previewText: '65%+ Negative Space Canvas Ratio',
      futureRule: 'Never crowd layout elements to force content "above the fold." Allow every section to exist as a framed exhibit.',
      bgGradient: 'bg-[#FDFBF7]'
    },
    {
      num: 3,
      title: 'Minimal Colors',
      category: 'color',
      icon: Palette,
      summary: 'Restrained organic luxury palette anchored by Warm Alabaster, Deep Onyx Charcoal, and Antique Bronze.',
      specs: 'Canvas: #FAF8F5 | Text: #141414 | Accent: #8A7963 | Borders: #DCD6CA | Dividers: #EBE7DF',
      previewText: 'Warm Alabaster (#FAF8F5) • Onyx (#141414) • Antique Bronze (#8A7963)',
      futureRule: 'Color is reserved exclusively for typographic hierarchy, subtle borders, and key status seals—never saturated backgrounds.',
      bgGradient: 'bg-[#F8F4EE]'
    },
    {
      num: 4,
      title: 'Strong Hierarchy',
      category: 'typography',
      icon: SlidersHorizontal,
      summary: 'Uncompromising 1.333 Perfect Fourth scale ratio ensuring effortless scannability and logical flow.',
      specs: 'Eyebrow (Mono 10px) → H1 (Serif 64px) → Lead Text (Serif 20px) → Body (Sans 16px)',
      previewText: 'Level 1: Title → Level 2: Section → Level 3: Label → Level 4: Fine Print',
      futureRule: 'Every layout fold must feature exactly one primary focal anchor (H1) and clear structural sub-headings.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 5,
      title: 'Large Imagery',
      category: 'media',
      icon: ImageIcon,
      summary: 'High-fashion, warm-toned editorial photography presented in full-bleed or generous 16:9 and 4:3 ratios.',
      specs: 'Ratio: 16:9 or 4:3 | Border: 1px #DCD6CA | Treatment: Muted warm saturation, 0px shadow',
      previewText: 'Framed Gallery Media Containers with Warm Tone Grading',
      futureRule: 'Images must feel like high-end exhibition prints. Never use small 64x64px stock thumbnail icons or generic clipart.',
      bgGradient: 'bg-[#F6F2EB]'
    },
    {
      num: 6,
      title: 'Editorial Spacing',
      category: 'layout',
      icon: Grid,
      summary: 'Asymmetrical 12-column magazine grid with rhythmic padding following a 16px multiplier scale.',
      specs: 'Multipliers: 16px, 32px, 64px, 128px, 192px. Asymmetric splits: 7:5 golden ratio columns.',
      previewText: 'Golden Ratio Asymmetric 7:5 Grid Alignment',
      futureRule: 'Eliminate repetitive symmetrical 3-column card grids in favor of magazine-style staggered editorial columns.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 7,
      title: 'Elegant Animations',
      category: 'motion',
      icon: Sparkles,
      summary: 'Damped physics transitions (0.6s opacity fades, subtle 2px vertical elevation) with zero bouncy springs.',
      specs: 'Transition: cubic-bezier(0.16, 1, 0.3, 1) | Duration: 400ms–600ms | Scale: 1.000 to 1.005',
      previewText: 'Damped Inertia Fade & Subtle 2px Elevation',
      futureRule: 'No fast bouncy pops, 360-degree spins, flashing pulses, or frantic particle background animations.',
      bgGradient: 'bg-[#F9F6F0]'
    },
    {
      num: 8,
      title: 'Premium Cards',
      category: 'components',
      icon: Layers,
      summary: 'Flat, un-nested containers with 1px soft taupe borders (#DCD6CA), generous internal padding, and clean hover state.',
      specs: 'Border: 1px #DCD6CA | Padding: 32px–48px | Radius: 8px–12px | Background: #FAF8F5 or #141414',
      previewText: 'Single-Layer Premium Card Container (No Nested Cards)',
      futureRule: 'Never nest cards inside cards. Use whitespace, clear typography, and subtle hairline dividers for hierarchy.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 9,
      title: 'Clear CTA',
      category: 'conversion',
      icon: ArrowRight,
      summary: 'High-contrast, unambiguous primary triggers that guide enterprise executives and creators directly to intent.',
      specs: 'Primary: Solid Onyx (#141414) button with Alabaster text | Secondary: 1px Bronze outline pill',
      previewText: 'Commission a Campaign → | Apply for Roster representación →',
      futureRule: 'Every page fold must feature exactly one dominant primary CTA and a maximum of one secondary action button.',
      bgGradient: 'bg-[#F5F0E6]'
    },
    {
      num: 10,
      title: 'High-Contrast Legibility',
      category: 'typography',
      icon: Eye,
      summary: 'Strict WCAG AA compliance (4.5:1+ contrast) ensuring flawless readability across desktop and mobile displays.',
      specs: 'Contrast Ratio: > 7:1 (AAA) on main copy | Line Height: 1.6 | Line Width: max 65ch',
      previewText: 'Passes WCAG AA & AAA Accessibility Standards',
      futureRule: 'Never place light gray copy on light backgrounds or low-contrast text over photographic overlays.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 11,
      title: 'Mathematical Grid Alignment',
      category: 'layout',
      icon: Scale,
      summary: 'Strict 12-column structural alignment anchored by delicate 1px hairline dividers (#EBE7DF).',
      specs: '12-Column Grid | Gutter: 24px–32px | Divider: 1px solid #EBE7DF',
      previewText: 'Pixel-Perfect 12-Column Grid with Hairline Dividers',
      futureRule: 'All text blocks, statistics counters, and media containers must lock precisely into defined grid tracks.',
      bgGradient: 'bg-[#F8F4EE]'
    },
    {
      num: 12,
      title: 'Tactile Fine Print Details',
      category: 'components',
      icon: FileCode,
      summary: 'Architectural metadata tags set in crisp uppercase monospace typography (10px, tracked 0.12em).',
      specs: 'Font: Monospace | Size: 10px–11px | Letter Spacing: 0.12em uppercase | Color: #8A7963',
      previewText: 'SPECIFICATION ID: VM-CORE-2026 • CREATOR ROSTER v4.2',
      futureRule: 'Incorporate precise architectural metadata tags on technical sections to reinforce institutional authority.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 13,
      title: 'Unhurried Scroll Inertia',
      category: 'motion',
      icon: Compass,
      summary: 'Viewport sections behave as framed gallery exhibits that command full attention before revealing the next module.',
      specs: 'Scroll-Margin: 80px | Section Height: 80vh–100vh padded exhibits | Buffer: 128px',
      previewText: 'Framed Gallery Exhibit Focus per Viewport Fold',
      futureRule: 'Prevent dense vertical scrolling lists; organize page content into distinct, digestible spatial exhibits.',
      bgGradient: 'bg-[#F7F3EC]'
    },
    {
      num: 14,
      title: 'Dual Lead Conversion Funnels',
      category: 'conversion',
      icon: Users,
      summary: 'Isolated, bespoke intake portals for Enterprise Brands vs. Tier-1 Creator Talent with zero cross-contamination.',
      specs: 'Path A: Brand Budget & Scope Schema | Path B: Creator Portfolio & Social Media Metrics',
      previewText: 'Enterprise Brand Intake Portal • Creator Representation Portal',
      futureRule: 'Never combine enterprise brand inquiries and creator applications into a single generic contact form.',
      bgGradient: 'bg-[#FAF8F5]'
    },
    {
      num: 15,
      title: 'Institutional Proof Seals',
      category: 'components',
      icon: ShieldCheck,
      summary: 'Verified financial and performance seals ($50M+ Media, 4.2x ROAS) integrated directly into conversion touchpoints.',
      specs: 'Style: Typographic Stat Counter + Fine Label | Border: 1px #DCD6CA | Icon: 16px Mono Shield',
      previewText: '$50M+ Media Managed • 4.2x Average ROAS • 100% Brand IP Safety',
      futureRule: 'Every conversion section must incorporate at least two third-party verified institutional proof indicators.',
      bgGradient: 'bg-[#F5F0E6]'
    }
  ];

  const filteredPrinciples = visualPrinciples.filter(p => {
    if (activePrincipleCategory === 'all') return true;
    return p.category === activePrincipleCategory;
  });

  const antiPatternsList = [
    { id: 'hacker', name: 'Hacker Dashboard', icon: Terminal, desc: 'Green-on-black monospace text, terminal prompts, raw code feeds.', fix: 'Replace with editorial typography and Alabaster canvas.' },
    { id: 'ai', name: 'AI Dashboard', icon: Bot, desc: 'Glowing purple/cyan gradients, floating prompt boxes, pulsing particle waves.', fix: 'Remove glow effects and synthetic gradient cards.' },
    { id: 'saas', name: 'SaaS Dashboard', icon: LayoutGrid, desc: 'Dense multi-column sidebars, packed data tables with status pills.', fix: 'Flatten layout hierarchy, increase whitespace, remove sidebars.' },
    { id: 'crypto', name: 'Crypto UI', icon: Coins, desc: 'Web3 wallet connectors, dark glassmorphism, volatile ticker banners.', fix: 'Use quiet neutral containers and static institutional seals.' },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: Cpu, desc: 'Glitch animations, neon overlays, scan lines, dystopian HUDs.', fix: 'Adopt warm luxury tones (#FAF8F5, #8A7963) and clean serif headings.' },
    { id: 'gaming', name: 'Gaming UI', icon: Gamepad2, desc: 'Health bars, metallic borders, particle explosions, level-up meters.', fix: 'Eliminate arcade styling; replace with high-fashion editorial grid.' }
  ];

  const toggleViolation = (id: string) => {
    if (selectedAuditViolations.includes(id)) {
      setSelectedAuditViolations(prev => prev.filter(v => v !== id));
    } else {
      setSelectedAuditViolations(prev => [...prev, id]);
    }
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
                <span className="text-xs px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E] font-mono">Design System Specification & Source of Truth</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A] tracking-tight">
                Official Design Language Master Document
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
                Editorial Guide
              </button>
              <button
                onClick={() => setViewMode('presentation')}
                className={`px-3 py-1.5 rounded transition-all ${viewMode === 'presentation' ? 'bg-[#1A1A1A] text-[#FAF8F5] shadow-xs' : 'hover:text-[#1A1A1A]'}`}
              >
                Presentation Deck
              </button>
            </div>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#F2EDE4] hover:bg-[#EBE7DF] border border-[#DCD6CA] rounded text-xs font-medium text-[#1A1A1A] transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-[#5A5245]" />
              <span>{copiedNotification ? 'Copied Brief Specs!' : 'Copy Brief Summary'}</span>
            </button>

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
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm font-medium whitespace-nowrap">
          <button
            onClick={() => setActiveTab('principles')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'principles' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            ★ 15 Visual Principles
          </button>
          <button
            onClick={() => setActiveTab('personality')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'personality' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            01. Brand Personality & Banned UI
          </button>
          <button
            onClick={() => setActiveTab('direction')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'direction' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            02. Creative Directions & Winner
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'document' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            03. Final Brief Source of Truth
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'matrix' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            04. Design Audit & Rejection Engine
          </button>
          <button
            onClick={() => setActiveTab('visuals')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'visuals' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            05. Layout, Type & Color Guardrails
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'architecture' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            06. Section Moodboard Philosophy
          </button>
          <button
            onClick={() => setActiveTab('enquiry')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'enquiry' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            07. Dual Lead Schema
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'blueprint' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            08. Homepage Blueprint Architecture
          </button>
          <button
            onClick={() => setActiveTab('figma')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'figma' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            ★ 09. Figma UI Specification
          </button>
        </div>
      </nav>

      {/* Main Document Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        
        {/* Document Cover Header */}
        <div className="mb-16 border-b border-[#DCD6CA] pb-12">
          <div className="flex flex-wrap items-center justify-between text-xs tracking-wider uppercase text-[#8A7963] font-mono mb-4 gap-2">
            <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5 text-[#8A7963]" /> VALTREON MEDIA NETWORK • DESIGN SYSTEM SPECIFICATION</span>
            <span>VERSION 3.0 (FINAL SOURCE OF TRUTH)</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-light text-[#1A1A1A] leading-[1.08] tracking-tight mb-6">
            Valtreon Media Network
          </h1>
          
          <p className="text-lg sm:text-xl font-serif-display italic text-[#5A5245] max-w-3xl leading-relaxed mb-8">
            "The official visual source of truth combining every design specification into one definitive brief. Every future design must comply with these rules or be strictly rejected."
          </p>

          {/* Quick Pillar Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#EBE7DF] text-xs font-medium">
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Visual Principles</span>
              <span className="text-[#1A1A1A] font-semibold">15 Mandatory Rules</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Visual Archetype</span>
              <span className="text-[#1A1A1A] font-semibold">Direction A: Luxury Editorial</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Color System</span>
              <span className="text-[#1A1A1A] font-semibold">90% Neutrals / 10% Accent</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Rejection Standard</span>
              <span className="text-[#1A1A1A] font-semibold">Zero SaaS / Cyberpunk UI</span>
            </div>
          </div>
        </div>

        {/* TAB 0: THE 15 MANDATORY VISUAL PRINCIPLES */}
        {(activeTab === 'principles' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 00</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">The 15 Visual Principles</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-PRINCIPLES-2026</span>
            </div>

            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">DESIGN DIRECTOR MANDATE</span>
              </div>
              <blockquote className="font-serif-display text-2xl sm:text-3xl font-light italic leading-relaxed text-[#FAF8F5]">
                "Every page, section, component, and interaction in the Valtreon Media Network ecosystem MUST adhere strictly to these 15 visual principles. No exceptions, no shortcuts, and no compromises."
              </blockquote>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EBE7DF] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7963] flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" /> Filter Principles By Design Category:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    { id: 'all', name: 'All 15 Principles' },
                    { id: 'typography', name: 'Typography' },
                    { id: 'layout', name: 'Layout & Space' },
                    { id: 'color', name: 'Palette' },
                    { id: 'media', name: 'Imagery' },
                    { id: 'components', name: 'Components' },
                    { id: 'motion', name: 'Motion' },
                    { id: 'conversion', name: 'Conversion' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActivePrincipleCategory(cat.id)}
                      className={`px-3 py-1 rounded transition-colors font-medium ${
                        activePrincipleCategory === cat.id
                          ? 'bg-[#1A1A1A] text-[#FAF8F5]'
                          : 'bg-[#EBE7DF] text-[#5A5245] hover:bg-[#DCD6CA]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 gap-8">
              {filteredPrinciples.map((p) => {
                const IconComponent = p.icon;
                const isVerified = verifiedPrinciples[p.num];

                return (
                  <div 
                    key={p.num} 
                    className={`border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6 transition-all hover:border-[#8A7963] ${p.bgGradient}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EBE7DF] pb-4 gap-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-10 h-10 rounded-lg bg-[#F2EDE4] border border-[#DCD6CA] flex items-center justify-center font-mono font-bold text-sm text-[#8A7963]">
                          {p.num < 10 ? `0${p.num}` : p.num}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963] block">PRINCIPLE {p.num} • {p.category.toUpperCase()}</span>
                          <h3 className="text-2xl font-serif-display font-semibold text-[#1A1A1A]">
                            {p.title}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => togglePrincipleVerification(p.num)}
                        className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-mono transition-colors border ${
                          isVerified 
                            ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]' 
                            : 'bg-[#FAF8F5] text-[#6A6356] border-[#DCD6CA] hover:border-[#141414]'
                        }`}
                      >
                        <CheckSquare className={`w-3.5 h-3.5 ${isVerified ? 'text-[#A38B68]' : 'text-[#8A7963]'}`} />
                        <span>{isVerified ? 'Enforced Standard' : 'Mark Enforced'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4A453E]">
                      <div className="space-y-2">
                        <span className="font-semibold text-[#1A1A1A] block uppercase tracking-wider text-[10px]">Strategic Rationale:</span>
                        <p className="text-sm leading-relaxed text-[#3D3830]">
                          {p.summary}
                        </p>
                      </div>

                      <div className="space-y-2 p-3.5 bg-[#F2EDE4]/80 rounded border border-[#DCD6CA]">
                        <span className="font-semibold text-[#8A7963] block uppercase tracking-wider text-[10px] font-mono">Design Parameter Specifications:</span>
                        <p className="font-mono text-[11px] text-[#1A1A1A] leading-relaxed">
                          {p.specs}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">
                        <span className="flex items-center gap-1"><IconComponent className="w-3.5 h-3.5 text-[#8A7963]" /> Live Visual Spec Preview</span>
                        <span>COMPONENT EXEMPLAR</span>
                      </div>
                      
                      <div className="pt-2">
                        {p.num === 1 && (
                          <div className="font-serif-display text-2xl sm:text-4xl text-[#1A1A1A] font-light leading-tight tracking-tight border-l-2 border-[#8A7963] pl-4 py-1">
                            {p.previewText}
                          </div>
                        )}
                        {p.num === 2 && (
                          <div className="p-8 border border-dashed border-[#8A7963]/50 rounded text-center text-xs font-mono text-[#8A7963] bg-[#FAF8F5]">
                            [ 65%+ Generous Negative Space Cushion • 128px Padding Buffer ]
                          </div>
                        )}
                        {p.num === 3 && (
                          <div className="flex flex-wrap gap-3 items-center text-xs font-mono">
                            <div className="flex items-center gap-2 p-2 bg-[#FAF8F5] border border-[#DCD6CA] rounded">
                              <span className="w-4 h-4 rounded bg-[#FAF8F5] border border-[#DCD6CA]" />
                              <span>#FAF8F5 (Alabaster)</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-[#141414] text-[#FAF8F5] rounded">
                              <span className="w-4 h-4 rounded bg-[#141414]" />
                              <span>#141414 (Charcoal)</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-[#F2EDE4] border border-[#8A7963] text-[#8A7963] rounded">
                              <span className="w-4 h-4 rounded bg-[#8A7963]" />
                              <span>#8A7963 (Antique Bronze)</span>
                            </div>
                          </div>
                        )}
                        {p.num === 4 && (
                          <div className="space-y-1">
                            <div className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest">LEVEL 1 • EYEBROW TAG</div>
                            <div className="text-2xl font-serif-display text-[#1A1A1A]">Level 2 • Monumental Anchor Heading</div>
                            <div className="text-xs text-[#5A5245] max-w-prose">Level 3 • Supporting lead paragraph narrative set in high-contrast typography.</div>
                          </div>
                        )}
                        {p.num === 5 && (
                          <div className="aspect-[16/6] bg-[#EBE7DF] rounded border border-[#DCD6CA] flex items-center justify-center text-xs font-mono text-[#6A6356] bg-cover bg-center">
                            [ High-Fashion Framed Editorial Gallery Visual Container — 16:9 Aspect Ratio ]
                          </div>
                        )}
                        {p.num === 6 && (
                          <div className="grid grid-cols-12 gap-2 text-[10px] font-mono text-[#8A7963]">
                            <div className="col-span-7 p-3 bg-[#F2EDE4] border border-[#DCD6CA] rounded">Column Split A (7/12 Golden Ratio)</div>
                            <div className="col-span-5 p-3 bg-[#F2EDE4] border border-[#DCD6CA] rounded">Column Split B (5/12)</div>
                          </div>
                        )}
                        {p.num === 7 && (
                          <div className="p-3 bg-[#141414] text-[#FAF8F5] rounded text-xs font-mono flex items-center justify-between border border-[#A38B68]/40 shadow-xs transition-transform duration-500 hover:-translate-y-0.5">
                            <span>Hover State: 2px Elevation • cubic-bezier(0.16, 1, 0.3, 1)</span>
                            <Sparkles className="w-4 h-4 text-[#A38B68]" />
                          </div>
                        )}
                        {p.num === 8 && (
                          <div className="p-5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-2 text-xs">
                            <span className="font-serif-display text-base font-semibold text-[#1A1A1A]">Single-Layer Premium Card Container</span>
                            <p className="text-[#5A5245] text-[11px]">32px internal padding • 1px soft hairline border • Zero internal nested card boxes.</p>
                          </div>
                        )}
                        {p.num === 9 && (
                          <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2.5 bg-[#141414] text-[#FAF8F5] rounded text-xs font-medium flex items-center space-x-2">
                              <span>Commission a Campaign</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#A38B68]" />
                            </button>
                            <button className="px-5 py-2.5 bg-transparent border border-[#8A7963] text-[#1A1A1A] rounded text-xs font-medium">
                              Apply for Roster Representation
                            </button>
                          </div>
                        )}
                        {p.num === 10 && (
                          <div className="p-3 bg-[#FAF8F5] border-l-4 border-[#141414] text-xs text-[#141414] font-medium leading-relaxed">
                            Contrast Ratio: 14.8:1 (Passes WCAG AAA) • Line Height 1.6 • Max Width 65 characters.
                          </div>
                        )}
                        {p.num === 11 && (
                          <div className="divide-y divide-[#EBE7DF] border-y border-[#EBE7DF] text-xs py-1">
                            <div className="py-1.5 flex justify-between font-mono text-[11px]"><span>Grid Track 01</span><span>$50M+ Media Managed</span></div>
                            <div className="py-1.5 flex justify-between font-mono text-[11px]"><span>Grid Track 02</span><span>4.2x Average ROAS</span></div>
                          </div>
                        )}
                        {p.num === 12 && (
                          <div className="p-2.5 bg-[#F2EDE4] rounded text-[10px] font-mono text-[#8A7963] flex justify-between items-center">
                            <span>SPECIFICATION ID: VM-PRINCIPLES-2026</span>
                            <span>STATUS: VERIFIED STANDARD</span>
                          </div>
                        )}
                        {p.num === 13 && (
                          <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded text-xs font-serif-display italic text-[#5A5245]">
                            "Each viewport fold presents a standalone framed exhibit before revealing the next module."
                          </div>
                        )}
                        {p.num === 14 && (
                          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                            <div className="p-2.5 bg-[#141414] text-[#FAF8F5] rounded text-center text-[11px]">Path A: Enterprise Brand Inquiries</div>
                            <div className="p-2.5 bg-[#F2EDE4] text-[#1A1A1A] border border-[#DCD6CA] rounded text-center text-[11px]">Path B: Tier-1 Creator Roster</div>
                          </div>
                        )}
                        {p.num === 15 && (
                          <div className="flex items-center space-x-2 text-xs font-semibold text-[#1A1A1A] p-2 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                            <ShieldCheck className="w-4 h-4 text-[#8A7963]" />
                            <span>$50M+ Verified Media Spend • 100% Guaranteed IP Safety</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-3.5 bg-[#141414] text-[#FAF8F5] rounded-lg flex items-start space-x-3 text-xs">
                      <ShieldCheck className="w-4 h-4 text-[#A38B68] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#A38B68] font-bold block mb-0.5">MANDATORY RULE FOR ALL FUTURE PAGES:</span>
                        <p className="text-[#DDD] leading-relaxed text-[11px]">
                          {p.futureRule}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </section>
        )}

        {/* TAB 1: BRAND PERSONALITY GUIDE & BANNED UI */}
        {(activeTab === 'personality' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 01</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Brand Personality & Banned UI</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-PERSONALITY-2026</span>
            </div>

            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">CREATIVE DIRECTOR MANIFESTO</span>
              </div>
              <blockquote className="font-serif-display text-2xl sm:text-3xl font-light italic leading-relaxed text-[#FAF8F5]">
                "Valtreon does not shout to be heard. We speak with the quiet authority of an established private institution. True luxury does not rely on neon glows, frantic animations, or artificial hype—it relies on flawless execution, generous whitespace, and undeniable results."
              </blockquote>
            </div>

            {/* 8 Core Personality Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: '1. Voice', tag: 'MEASURED & EDITORIAL', icon: Type, desc: 'Valtreon’s voice is measured, authoritative, editorial, and institutional. We speak like a high-end publication (Vogue, Financial Times, Monocle) or a global private equity firm.' },
                { title: '2. Tone', tag: 'CALM & POLISHED', icon: Compass, desc: 'Our tone is calm, precise, polished, and discreet. We deliver campaign insights and data points with quiet clarity, never rushed, anxious, or pushy.' },
                { title: '3. Emotion', tag: 'REASSURANCE & PRESTIGE', icon: Heart, desc: 'The emotional response we evoke is deep reassurance, prestige, ambition, and composure. Brand Directors feel their capital is handled with utmost care.' },
                { title: '4. Confidence', tag: 'UNSHAKEABLE & PROVEN', icon: ShieldCheck, desc: 'Confidence at Valtreon is unshakeable and understated. We do not beg for business; we showcase $50M+ in campaign volume and 4.2x average ROAS.' },
                { title: '5. Luxury', tag: 'QUIET LUXURY & FINE PRINT', icon: Crown, desc: 'Luxury is expressed as Quiet Luxury ("if you know, you know"). Soft alabaster background canvas (#FAF8F5), deep charcoal typography, and subtle antique bronze.' },
                { title: '6. Trust', tag: 'INSTITUTIONAL & TRANSPARENT', icon: Lock, desc: 'Trust is built through absolute operational transparency. Clear licensing terms, multi-tier brand safety, and third-party verified ROAS tracking.' },
                { title: '7. Professionalism', tag: 'WHITE-GLOVE ENTERPRISE', icon: Briefcase, desc: 'Professionalism is uncompromising white-glove service. Dedicated campaign strategists, structured multi-stage approvals, and executive-ready reports.' },
                { title: '8. Innovation', tag: 'ALGORITHMIC PRECISION', icon: Zap, desc: 'Innovation means algorithmic creator matching and real-time performance tracking—delivered seamlessly without polluting the UI with synthetic AI jargon.' }
              ].map((p, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><p.icon className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">{p.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">{p.tag}</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Banned Aesthetics Grid */}
            <div className="space-y-8 pt-8 border-t border-[#DCD6CA]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#EBE7DF] pb-3 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-800 font-semibold">STRICT PROHIBITION MATRIX</span>
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[#1A1A1A]">Things The Website Should NEVER Look Like</h3>
                </div>
                <span className="text-xs font-mono text-red-800 bg-red-100/60 px-2.5 py-1 rounded">6 BANNED AESTHETICS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {antiPatternsList.map((ap) => {
                  const IconComp = ap.icon;
                  return (
                    <div key={ap.id} className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                        <div className="flex items-center space-x-2.5 text-red-800">
                          <IconComp className="w-5 h-5" />
                          <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">{ap.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                      </div>
                      <p className="text-xs text-[#5A5245] leading-relaxed">{ap.desc}</p>
                      <div className="p-2.5 bg-red-50 rounded border border-red-200 text-[11px] text-red-900 font-mono">
                        <span className="font-bold uppercase text-[10px] block text-red-800">Required Correction:</span>
                        {ap.fix}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </section>
        )}

        {/* TAB 2: CREATIVE DIRECTIONS & WINNER */}
        {(activeTab === 'direction' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 02</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Creative Directions & Winning Selection</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-DIRECTIONS-2026</span>
            </div>

            {/* 3 Directions Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Direction A - WINNER */}
              <div className="p-6 bg-[#FAF8F5] border-2 border-[#8A7963] rounded-xl space-y-4 relative shadow-md">
                <span className="absolute -top-3 right-4 px-3 py-0.5 bg-[#8A7963] text-[#FAF8F5] text-[10px] font-mono font-bold uppercase rounded">
                  RECOMMENDED WINNER
                </span>
                <div className="border-b border-[#EBE7DF] pb-3">
                  <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest">DIRECTION A</span>
                  <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold">Luxury Editorial</h3>
                </div>
                <p className="text-xs text-[#4A453E] leading-relaxed">
                  High-fashion magazine aesthetic with generous whitespace, monumental serif typography, warm alabaster canvas, and framed image exhibits.
                </p>
                <ul className="text-[11px] space-y-2 text-[#3D3830] font-mono border-t border-[#EBE7DF] pt-3">
                  <li>• Typography: Cormorant Garamond</li>
                  <li>• Palette: Alabaster / Onyx / Bronze</li>
                  <li>• Layout: 12-col Golden Ratio</li>
                  <li>• Vibe: Vogue / Monocle Prestige</li>
                </ul>
                <div className="p-3 bg-[#141414] text-[#FAF8F5] rounded text-[11px] font-mono">
                  ★ Selected for Valtreon Media Network for unmatched institutional authority and luxury positioning.
                </div>
              </div>

              {/* Direction B */}
              <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] opacity-80 rounded-xl space-y-4">
                <div className="border-b border-[#EBE7DF] pb-3">
                  <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest">DIRECTION B</span>
                  <h3 className="text-2xl font-serif-display text-[#1A1A1A]">Modern Tech Premium</h3>
                </div>
                <p className="text-xs text-[#4A453E] leading-relaxed">
                  Linear/Stripe inspired dark mode UI with high density data tables, dark graphite surfaces, and tight micro-interactions.
                </p>
                <ul className="text-[11px] space-y-2 text-[#3D3830] font-mono border-t border-[#EBE7DF] pt-3">
                  <li>• Typography: Inter / SF Pro</li>
                  <li>• Palette: Dark Graphite / Slate</li>
                  <li>• Layout: Dense Grid</li>
                  <li>• Vibe: Developer Tool / B2B SaaS</li>
                </ul>
                <div className="p-3 bg-red-50 border border-red-200 text-red-900 rounded text-[11px] font-mono">
                  ❌ Rejected: Feels too much like a software dashboard rather than a luxury talent agency.
                </div>
              </div>

              {/* Direction C */}
              <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] opacity-80 rounded-xl space-y-4">
                <div className="border-b border-[#EBE7DF] pb-3">
                  <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest">DIRECTION C</span>
                  <h3 className="text-2xl font-serif-display text-[#1A1A1A]">Creative Agency</h3>
                </div>
                <p className="text-xs text-[#4A453E] leading-relaxed">
                  Experimental brutalist typography, oversized bold elements, high contrast neon pop accents, and kinetic scroll triggers.
                </p>
                <ul className="text-[11px] space-y-2 text-[#3D3830] font-mono border-t border-[#EBE7DF] pt-3">
                  <li>• Typography: Syne / Space Grotesk</li>
                  <li>• Palette: Raw Off-White / Acid Lime</li>
                  <li>• Layout: Asymmetric Chaos</li>
                  <li>• Vibe: Trendy Boutique Studio</li>
                </ul>
                <div className="p-3 bg-red-50 border border-red-200 text-red-900 rounded text-[11px] font-mono">
                  ❌ Rejected: Lacks enterprise seriousness required by Fortune 500 brand CMOs.
                </div>
              </div>

            </div>

            {/* Why Direction A Wins Detailed Rationale */}
            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-6">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-widest">CREATIVE DIRECTOR RECOMMENDATION REPORT</span>
              </div>
              <h3 className="text-3xl font-serif-display font-light">Why Direction A (Luxury Editorial) is the Sole Source of Truth</h3>
              <p className="text-sm text-[#DDD] leading-relaxed max-w-4xl">
                Valtreon Media Network bridges two elite worlds: Fortune 500 Chief Marketing Officers managing $50M+ annual budgets, and Tier-1 digital creators with millions of hyper-engaged followers. Direction A provides the exact cultural authority needed for both audiences. It elevates creator campaigns into high-art brand partnerships while giving enterprise buyers the confidence of a private wealth management firm.
              </p>
            </div>

          </section>
        )}

        {/* TAB 3: FINAL BRIEF SOURCE OF TRUTH (EXECUTIVE OVERVIEW) */}
        {(activeTab === 'document' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 03</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Final Creative Brief Source of Truth</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-BRIEF-TRUTH-2026</span>
            </div>

            <div className="space-y-8 p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl text-sm leading-relaxed text-[#3D3830]">
              <div className="border-b border-[#EBE7DF] pb-4">
                <span className="text-xs font-mono text-[#8A7963] uppercase tracking-widest block mb-1">SECTION 1: PURPOSE & CORE AUTHORITY</span>
                <h3 className="text-2xl font-serif-display font-semibold text-[#1A1A1A]">Definitive Visual Mandate</h3>
                <p className="mt-2 text-xs text-[#5A5245]">
                  This Creative Brief serves as the absolute visual and structural source of truth for Valtreon Media Network. Every future page, mock, component, layout, or design asset created for Valtreon MUST conform exactly to the rules outlined here. Any design proposal violating these parameters must be instantly rejected and corrected.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#EBE7DF] pb-8">
                <div className="space-y-3">
                  <h4 className="font-serif-display text-lg text-[#1A1A1A] font-semibold">Core Audience Split</h4>
                  <ul className="space-y-2 text-xs font-mono">
                    <li className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                      <strong className="text-[#1A1A1A] block mb-0.5">Enterprise Brand Directors:</strong>
                      Demands institutional safety, verified metrics, legal protection, and white-glove account management.
                    </li>
                    <li className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                      <strong className="text-[#1A1A1A] block mb-0.5">Tier-1 Creator Roster:</strong>
                      Demands prestige representation, elevated aesthetic framing, transparent payout schedules, and career growth.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif-display text-lg text-[#1A1A1A] font-semibold">Aesthetic Pillar Matrix</h4>
                  <ul className="space-y-2 text-xs font-mono">
                    <li className="p-2.5 bg-[#FAF8F5] border-l-2 border-[#8A7963]">
                      <strong>Canvas:</strong> Soft Warm Alabaster (#FAF8F5)
                    </li>
                    <li className="p-2.5 bg-[#FAF8F5] border-l-2 border-[#141414]">
                      <strong>Typography:</strong> Cormorant Garamond Display + Plus Jakarta Sans
                    </li>
                    <li className="p-2.5 bg-[#FAF8F5] border-l-2 border-[#8A7963]">
                      <strong>Accents:</strong> Antique Bronze (#8A7963)
                    </li>
                    <li className="p-2.5 bg-[#FAF8F5] border-l-2 border-[#DCD6CA]">
                      <strong>Proportion:</strong> 90% Neutral Space / 10% Targeted Accent
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif-display text-xl text-[#1A1A1A] font-semibold">Mandatory Compliance Statement</h4>
                <div className="p-4 bg-[#141414] text-[#FAF8F5] rounded-lg font-mono text-xs leading-relaxed space-y-2">
                  <p className="text-[#A38B68] font-bold">REJECTION CRITERIA FOR ALL FUTURE DESIGNS:</p>
                  <p className="text-[#DDD]">
                    If a proposed design contains: (1) Cyberpunk neon colors, (2) SaaS dashboard sidebar drawers, (3) Glowing particle effects, (4) Nested card boxes, (5) Symmetrical 3-column stock grids, or (6) Bouncy spring animations — IT MUST BE IMMEDIATELY REJECTED.
                  </p>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* TAB 4: DESIGN AUDIT & REJECTION ENGINE */}
        {(activeTab === 'matrix' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 04</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Design Audit & Compliance Checker</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-AUDIT-2026</span>
            </div>

            {/* Interactive Audit Tool Container */}
            <div className="p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-8">
              <div>
                <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest block mb-1">INTERACTIVE DESIGN SYSTEM AUDITOR</span>
                <h3 className="text-2xl font-serif-display font-medium text-[#1A1A1A]">Evaluate a Future Design Proposal Against The Brief</h3>
                <p className="text-xs text-[#5A5245] mt-1">Select any elements present in the proposed design to check if it complies or must be rejected:</p>
              </div>

              {/* Violation Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'neon', label: 'Uses Neon/Glowing Colors', fatal: true },
                  { id: 'dark_dash', label: 'Dark Mode SaaS Dashboard', fatal: true },
                  { id: 'nested_cards', label: 'Nested Cards inside Cards', fatal: true },
                  { id: 'bouncy_anim', label: 'Fast Bouncy Spring Animations', fatal: true },
                  { id: 'crowded_space', label: 'Whitespace < 50%', fatal: true },
                  { id: 'small_headers', label: 'Timid Sans-Serif Headers', fatal: true },
                  { id: 'alabaster_bg', label: 'Uses Warm Alabaster Canvas (#FAF8F5)', fatal: false },
                  { id: 'serif_display', label: 'Uses Cormorant Garamond Headlines', fatal: false },
                  { id: 'mono_labels', label: 'Uses Monospace Metadata Tags', fatal: false }
                ].map((item) => {
                  const isChecked = selectedAuditViolations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleViolation(item.id)}
                      className={`p-3 rounded border text-left flex items-start space-x-2.5 transition-all ${
                        isChecked 
                          ? (item.fatal ? 'bg-red-50 border-red-300 text-red-900' : 'bg-green-50 border-green-300 text-green-900')
                          : 'bg-[#F2EDE4]/60 border-[#DCD6CA] text-[#1A1A1A] hover:bg-[#EBE7DF]'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={() => {}} 
                        className="mt-0.5 rounded text-[#1A1A1A]"
                      />
                      <div className="text-[11px] font-medium leading-tight">
                        <span>{item.label}</span>
                        {item.fatal && <span className="block text-[9px] font-mono text-red-800 uppercase mt-0.5">Fatal Violation Risk</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Audit Result Display Banner */}
              <div className="pt-4 border-t border-[#EBE7DF]">
                {selectedAuditViolations.some(id => ['neon', 'dark_dash', 'nested_cards', 'bouncy_anim', 'crowded_space', 'small_headers'].includes(id)) ? (
                  <div className="p-6 bg-red-950 text-red-100 rounded-xl space-y-3 border border-red-800">
                    <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase font-bold">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>AUDIT RESULT: PROPOSAL REJECTED</span>
                    </div>
                    <p className="text-sm font-serif-display leading-relaxed">
                      "This design proposal violates the official Valtreon Media Network Design Language. It incorporates prohibited tropes that compromise brand prestige."
                    </p>
                    <div className="p-3 bg-red-900/60 rounded text-xs font-mono text-red-200">
                      <strong>REMEDIATION MANDATE:</strong> Remove all dashboard drawers, replace glowing gradients with Warm Alabaster (#FAF8F5), restore Cormorant Garamond display headlines, and expand padding buffers to at least 128px.
                    </div>
                  </div>
                ) : selectedAuditViolations.length > 0 ? (
                  <div className="p-6 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-3 border border-[#8A7963]">
                    <div className="flex items-center space-x-2 text-[#A38B68] font-mono text-xs uppercase font-bold">
                      <CheckCircle2 className="w-5 h-5 text-[#A38B68]" />
                      <span>AUDIT RESULT: DESIGN COMPLIANT & APPROVED</span>
                    </div>
                    <p className="text-sm font-serif-display leading-relaxed">
                      "This design proposal successfully fulfills the Valtreon Media Network visual standards. It preserves luxury editorial principles, generous negative space, and institutional trust."
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-[#F2EDE4] rounded text-center text-xs font-mono text-[#6A6356]">
                    Select checklist options above to run an interactive design audit evaluation.
                  </div>
                )}
              </div>
            </div>

          </section>
        )}

        {/* TAB 5: LAYOUT, TYPOGRAPHY, COLOR & MOTION GUARDRAILS */}
        {(activeTab === 'visuals' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 05</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Design Guardrails & Token Standards</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-TOKENS-2026</span>
            </div>

            {/* Layout Guardrails */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
              <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold border-b border-[#EBE7DF] pb-3">
                01. Layout & Grid Math Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#4A453E]">
                <div className="space-y-2 p-4 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <strong className="text-[#1A1A1A] block uppercase font-mono text-[10px]">Canvas Container Max Width</strong>
                  <p className="font-mono text-sm text-[#1A1A1A]">max-w-7xl (1280px)</p>
                  <p className="text-[11px] text-[#5A5245]">Constrains main content from stretching on ultra-wide desktop displays.</p>
                </div>
                <div className="space-y-2 p-4 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <strong className="text-[#1A1A1A] block uppercase font-mono text-[10px]">Section Padding Buffers</strong>
                  <p className="font-mono text-sm text-[#1A1A1A]">128px – 192px Desktop</p>
                  <p className="text-[11px] text-[#5A5245]">Ensures every fold breathes and acts as an isolated gallery exhibit.</p>
                </div>
                <div className="space-y-2 p-4 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <strong className="text-[#1A1A1A] block uppercase font-mono text-[10px]">Negative Space Canvas Ratio</strong>
                  <p className="font-mono text-sm text-[#1A1A1A]">65%+ Open Area</p>
                  <p className="text-[11px] text-[#5A5245]">Whitespace is treated as an active luxury design material.</p>
                </div>
              </div>
            </div>

            {/* Typography Scale Guardrails */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
              <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold border-b border-[#EBE7DF] pb-3">
                02. Typography Scale (1.333 Perfect Fourth)
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex justify-between items-center">
                  <span>Display Hero (Cormorant Garamond)</span>
                  <span className="font-bold text-[#1A1A1A]">64px – 88px / Light 300</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex justify-between items-center">
                  <span>Section Headline H2 (Cormorant Garamond)</span>
                  <span className="font-bold text-[#1A1A1A]">40px – 52px / Medium 500</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex justify-between items-center">
                  <span>Card Title H3 (Cormorant Garamond)</span>
                  <span className="font-bold text-[#1A1A1A]">24px – 32px / SemiBold 600</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex justify-between items-center">
                  <span>Body Copy (Plus Jakarta Sans)</span>
                  <span className="font-bold text-[#1A1A1A]">16px – 18px / Regular 400 (Line Height 1.6)</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#DCD6CA] rounded flex justify-between items-center">
                  <span>Metadata Tags & Monospace Fine Print</span>
                  <span className="font-bold text-[#8A7963]">10px – 11px / Tracked 0.12em Uppercase</span>
                </div>
              </div>
            </div>

            {/* Color Guardrails */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
              <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold border-b border-[#EBE7DF] pb-3">
                03. Color Strategy (90% Neutral / 10% Accent)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#DCD6CA] inline-block" />
                  <span className="block font-bold">#FAF8F5</span>
                  <span className="text-[10px] text-[#6A6356] block">Warm Alabaster Canvas</span>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#141414] inline-block" />
                  <span className="block font-bold">#141414</span>
                  <span className="text-[10px] text-[#6A6356] block">Onyx Charcoal Body</span>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#8A7963] inline-block" />
                  <span className="block font-bold text-[#8A7963]">#8A7963</span>
                  <span className="text-[10px] text-[#6A6356] block">Antique Bronze Accent</span>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#DCD6CA] inline-block" />
                  <span className="block font-bold">#DCD6CA</span>
                  <span className="text-[10px] text-[#6A6356] block">Soft Taupe Borders</span>
                </div>
              </div>
            </div>

            {/* Motion Guardrails */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
              <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold border-b border-[#EBE7DF] pb-3">
                04. Unified Motion Language
              </h3>
              <div className="p-4 bg-[#141414] text-[#FAF8F5] rounded-lg font-mono text-xs space-y-2">
                <p className="text-[#A38B68]">BEZIER CURVE DAMPED PHYSICS:</p>
                <p className="text-[#DDD]">transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);</p>
                <p className="text-[#AAA] text-[11px] pt-1 border-t border-[#333]">
                  All hover elevations max at 2px. Opacity fades occur gently over 600ms. Zero spring physics, zero bouncing, zero spin loaders.
                </p>
              </div>
            </div>

          </section>
        )}

        {/* TAB 6: SECTION MOODBOARD PHILOSOPHY */}
        {(activeTab === 'architecture' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 06</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Section Moodboard & Architecture</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-MOODBOARD-2026</span>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Hero Fold', concept: 'Monumental Display Anchor & Quiet Confidence', desc: 'Full-width Alabaster canvas featuring an 88px Cormorant Garamond headline. Subtle 10px tracked metadata tags. Single primary action trigger.' },
                { title: 'Services Module', concept: 'Asymmetrical Editorial Magazine Columns', desc: 'Staggered 7:5 golden ratio column splits separating enterprise strategy from creator matching. Hairline dividers.' },
                { title: 'Campaigns Gallery', concept: 'High-Fashion Framed Exhibition Exhibits', desc: 'Full-bleed 16:9 media containers with muted warm color grading, 1px taupe borders, and static performance metrics.' },
                { title: 'Creator Roster', concept: 'Curated Portrait Gallery Framing', desc: '4:3 high-fashion portrait framing displaying creator audience scale ($1M+ REACH) in understated serif counters.' },
                { title: 'Testimonials Section', concept: 'Executive Pull-Quotes & Institutional Stamps', desc: 'Large 32px italicized serif quote copy paired with verified Fortune 500 client trust seals.' },
                { title: 'Footer Module', concept: 'Architectural Monospace Fine Print', desc: 'Quiet, structured legal specifications, dual contact intake portals, and institutional copyright notices.' }
              ].map((m, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-3">
                  <div className="flex justify-between items-center border-b border-[#EBE7DF] pb-2">
                    <h3 className="text-xl font-serif-display text-[#1A1A1A] font-semibold">{m.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#F2EDE4] text-[#8A7963] uppercase">{m.concept}</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* TAB 7: DUAL LEAD SCHEMA */}
        {(activeTab === 'enquiry' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 07</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Dual Lead Intake Schema & Conversion Protocol</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-CONVERSION-2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Funnel A: Enterprise Brands */}
              <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-6">
                <div className="border-b border-[#333] pb-4">
                  <span className="text-[10px] font-mono text-[#A38B68] uppercase tracking-widest block mb-1">FUNNEL A</span>
                  <h3 className="text-2xl font-serif-display font-light">Enterprise Brand Portal</h3>
                  <p className="text-xs text-[#AAA] mt-1">Designed exclusively for Chief Marketing Officers & Brand Directors.</p>
                </div>

                <div className="space-y-4 text-xs font-mono text-[#DDD]">
                  <div className="p-3 bg-[#1F1F1F] rounded border border-[#333]">
                    <span className="text-[#A38B68] block font-bold mb-1">QUALIFICATION PARAMETERS:</span>
                    • Campaign Budget: $100K–$5M+ Range<br/>
                    • Media Scope: Multi-platform Creator Syndication<br/>
                    • Governance: Enterprise IP Rights & SLA Guarantees
                  </div>

                  <button className="w-full py-3 bg-[#FAF8F5] text-[#141414] font-sans-body font-medium rounded text-xs hover:bg-[#EBE7DF] transition-colors">
                    Commission Enterprise Campaign →
                  </button>
                </div>
              </div>

              {/* Funnel B: Creator Roster */}
              <div className="p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
                <div className="border-b border-[#EBE7DF] pb-4">
                  <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest block mb-1">FUNNEL B</span>
                  <h3 className="text-2xl font-serif-display text-[#1A1A1A] font-semibold">Creator Roster Portal</h3>
                  <p className="text-xs text-[#5A5245] mt-1">Designed exclusively for Tier-1 Digital Content Creators.</p>
                </div>

                <div className="space-y-4 text-xs font-mono text-[#3D3830]">
                  <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                    <span className="text-[#8A7963] block font-bold mb-1">QUALIFICATION PARAMETERS:</span>
                    • Reach: &gt; 250,000 Verified Followers<br/>
                    • Engagement Rate: &gt; 3.8% Benchmark<br/>
                    • Portfolio: Premium Editorial Content Quality
                  </div>

                  <button className="w-full py-3 bg-[#141414] text-[#FAF8F5] font-sans-body font-medium rounded text-xs hover:bg-[#2A2A2A] transition-colors">
                    Apply for Roster Representation →
                  </button>
                </div>
              </div>

            </div>

          </section>
        )}

        {/* TAB 8: HOMEPAGE BLUEPRINT ARCHITECTURE */}
        {(activeTab === 'blueprint' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 08</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Homepage Blueprint Specification</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-HOMEPAGE-BLUEPRINT-2026</span>
            </div>

            {/* Strategic Overview & Psychology */}
            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                <div className="flex items-center space-x-2 text-[#A38B68]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">CREATIVE DIRECTOR STRATEGY ARCHITECTURE</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#A38B68]/20 text-[#A38B68] rounded">LUXURY EDITORIAL</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#DDD]">
                <div className="space-y-2">
                  <span className="text-[#A38B68] font-mono uppercase tracking-wider block text-[10px]">1. Homepage Storytelling</span>
                  <p className="leading-relaxed">
                    The homepage unfolds like an architectural exhibition catalog. It transitions the visitor from awe (monumental typography) to trust (institutional spend proof) to capability (editorial campaign showcases) to effortless conversion.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-[#A38B68] font-mono uppercase tracking-wider block text-[10px]">2. Scroll Journey & Psychology</span>
                  <p className="leading-relaxed">
                    Unhurried, gallery-like scroll inertia. Each fold acts as a self-contained exhibit. CMOs feel immediate capital reassurance; creators feel prestige and exclusivity.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-[#A38B68] font-mono uppercase tracking-wider block text-[10px]">3. Conversion Strategy</span>
                  <p className="leading-relaxed">
                    Dual lead isolation: Enterprise Brands proceed to budget & scope inquiry, while Creators access roster representation vetting. No cross-contamination.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Sequence Flow */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif-display font-semibold text-[#1A1A1A]">Section Order & Journey Mapping</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {[
                  '01. Hero', '02. Trusted By', '03. About Valtreon', '04. Services',
                  '05. Featured Campaigns', '06. Creator Network', '07. Process',
                  '08. Testimonials', '09. FAQ', '10. CTA', '11. Footer'
                ].map((s, idx) => (
                  <React.Fragment key={s}>
                    <span className="px-3 py-1.5 bg-[#F2EDE4] border border-[#DCD6CA] text-[#1A1A1A] rounded font-medium">
                      {s}
                    </span>
                    {idx < 10 && <ChevronRight className="w-3.5 h-3.5 text-[#8A7963]" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 11 Section Breakdown Cards */}
            <div className="space-y-12">
              {[
                {
                  num: '01',
                  name: 'Hero Section',
                  purpose: 'Establish immediate editorial dominance and introduce Valtreon as the premier influencer marketing authority for global enterprise brands and elite creators.',
                  content: 'Eyebrow tag: "VALTREON MEDIA NETWORK • EST. 2026". H1 Headline: "Empowering Enterprise Brands & Elite Content Creators". Subheadline: "We engineer high-impact influencer campaigns backed by $50M+ in verified media spend and algorithmic creator matching." CTAs: "Commission a Campaign →" (Primary) & "Explore Creator Roster" (Secondary).',
                  layout: 'Asymmetrical 12-column golden ratio split (7 cols copy / 5 cols hero framed image exhibit). Hairline divider base.',
                  typography: 'Cormorant Garamond Light 72px headline, Plus Jakarta Sans 18px lead copy, uppercase Monospace 10px metadata tag.',
                  whitespace: 'Generous 160px top padding buffer, 65%+ canvas breathing ratio, zero clutter.',
                  animation: 'Damped inertia fade-in (0.6s opacity, 4px vertical rise) on page load.',
                  emotion: 'Awe, prestige, unshakeable confidence, and high-capital reassurance.',
                  goal: 'Drive high-intent enterprise CMOs directly into campaign briefing or roster exploration.'
                },
                {
                  num: '02',
                  name: 'Trusted By (Social Proof)',
                  purpose: 'Provide immediate institutional validation through marquee enterprise client logos and total capital figures.',
                  content: 'Header: "INSTITUTIONAL PARTNERS & BRAND PORTFOLIO". Monochrome luxury brand marks (LVMH, Nike, Sephora, Samsung, Dyson, Equinox) + Verified metrics badge: "$50M+ Media Spend Managed".',
                  layout: 'Horizontal 6-column aligned marquee row with hairline borders top and bottom.',
                  typography: 'Monospace 10px tracked 0.12em section header; crisp logo marks in muted charcoal tone.',
                  whitespace: '64px top/bottom vertical padding cushion; equal 48px horizontal spacing between logos.',
                  animation: 'Subtle continuous horizontal crawl (0.2px/frame) with smooth pause on hover.',
                  emotion: 'Unquestioned authority, peer-level executive trust.',
                  goal: 'Eliminate credibility hesitation early in the scroll journey.'
                },
                {
                  num: '03',
                  name: 'About Valtreon',
                  purpose: 'Communicate Valtreon’s core thesis and why traditional influencer agencies fail in high-stakes campaign execution.',
                  content: 'Editorial narrative block: "The Anti-Agency Thesis". Paragraphs detailing algorithmic match precision, 100% brand safety guarantees, and direct-to-creator communication pipes. Key stats: "4.2x Average ROAS", "99.8% Campaign Safety Rating", "1,200+ Vetted Creators".',
                  layout: 'Asymmetric 2-column layout. Column 1: Sticky manifesto heading. Column 2: 3 structured narrative blocks + metric callouts.',
                  typography: 'Cormorant Garamond 44px section title; Plus Jakarta Sans 16px narrative text with 1.6 line height.',
                  whitespace: '128px top and bottom section buffers; 40px gap between column tracks.',
                  animation: 'Staggered opacity fade as user scrolls into the viewport fold.',
                  emotion: 'Intellectual alignment, professional clarity, relief from generic agency hype.',
                  goal: 'Qualify enterprise buyers and establish Valtreon’s unique market positioning.'
                },
                {
                  num: '04',
                  name: 'Services & Capabilities',
                  purpose: 'Detail Valtreon’s 4 core service pillars with transparent operational scope and zero fluff.',
                  content: 'Pillars: 1. Full-Funnel Campaign Strategy, 2. Algorithmic Creator Match, 3. Production & Rights Management, 4. Real-Time Attribution Analytics.',
                  layout: '2x2 grid of flat, un-nested cards with 1px taupe borders (#DCD6CA) and subtle hover elevation.',
                  typography: 'H3: Cormorant Garamond 28px; Card body: Plus Jakarta Sans 14px; Tags: Monospace 10px uppercase.',
                  whitespace: '32px internal card padding; 32px grid gaps; 128px outer section cushion.',
                  animation: 'Subtle 2px vertical lift on card hover with border transition to Antique Bronze (#8A7963).',
                  emotion: 'Operational clarity, structural capability, white-glove confidence.',
                  goal: 'Convert general interest into specific service scope inquiry.'
                },
                {
                  num: '05',
                  name: 'Featured Campaigns (Case Studies)',
                  purpose: 'Showcase real-world enterprise campaign executions through high-fashion visual gallery containers.',
                  content: '3 Featured Exhibitions: Campaign 1 (Global Luxury Skincare Launch - $3.2M Revenue), Campaign 2 (Next-Gen Tech Wearable - 14.2M Reach), Campaign 3 (Sustainable Apparel - 5.1x ROAS). Each includes hero editorial image, key stats, and "Read Case Study" link.',
                  layout: 'Vertical staggered magazine layout with alternating 7:5 image/text proportions.',
                  typography: 'Cormorant Garamond 36px campaign title; Monospace 11px stat counters (#8A7963).',
                  whitespace: '96px vertical gap between campaign exhibits; generous image padding.',
                  animation: 'Image subtle zoom (1.000 to 1.020) on cursor hover inside framed image container.',
                  emotion: 'Visual inspiration, tangible ROI proof, high-fashion envy.',
                  goal: 'Demonstrate proven campaign success for enterprise decision-makers.'
                },
                {
                  num: '06',
                  name: 'Creator Network Showcase',
                  purpose: 'Highlight the caliber of exclusive talent represented on Valtreon’s roster.',
                  content: 'Creator cards showcasing Tier-1 Talent across Luxury Fashion, Tech, Wellness, and Automotive. Metrics: Followers, Engagement Rate, Niche, Past Brand Collaborations.',
                  layout: '4-column editorial roster gallery with framed photography and fine metadata tags.',
                  typography: 'Creator Name: Cormorant Garamond 22px; Stats: Monospace 10px uppercase.',
                  whitespace: '24px grid gap; 48px section header cushion; 128px section buffer.',
                  animation: 'Smooth overlay fade showing creator campaign portfolio preview on card focus.',
                  emotion: 'Prestige, talent desire, exclusivity.',
                  goal: 'Attract elite creators for representation while impressing brand advertisers.'
                },
                {
                  num: '07',
                  name: 'Process & Methodology',
                  purpose: 'Demystify the 4-step campaign lifecycle from brief to final ROI audit.',
                  content: 'Phase 01: Strategic Discovery & Persona Brief → Phase 02: Algorithmic Roster Vetting → Phase 03: Production & Brand Safety Audit → Phase 04: Attribution & ROI Settlement.',
                  layout: 'Horizontal 4-column timeline with connecting hairline dividers (#EBE7DF) and phase badges.',
                  typography: 'Phase Number: Monospace 12px (#8A7963); Phase Name: Cormorant Garamond 24px; Description: Sans 13px.',
                  whitespace: '32px internal step padding; 128px section top/bottom padding.',
                  animation: 'Progressive hairline highlight line animating across steps during scroll.',
                  emotion: 'Predictability, risk elimination, structured perfection.',
                  goal: 'Reassure risk-averse corporate buyers about campaign execution.'
                },
                {
                  num: '08',
                  name: 'Testimonials & Executive Endorsements',
                  purpose: 'Provide high-level peer validation from Global CMOs and Tier-1 Creator Partners.',
                  content: 'Quotes from VP of Marketing at Fortune 500 Beauty Brand and 2M+ Creator Partner. Includes verified name, title, company mark, and campaign spend context.',
                  layout: 'Dual-column side-by-side editorial quote containers with large serif quotation marks.',
                  typography: 'Quote Copy: Cormorant Garamond Italic 24px; Author Details: Plus Jakarta Sans 12px uppercase.',
                  whitespace: '48px container padding; 128px vertical section buffer.',
                  animation: 'Gentle opacity cross-fade when cycling testimonial slides.',
                  emotion: 'Peer reassurance, executive social proof, unshakeable trust.',
                  goal: 'Close remaining doubts for enterprise leads before CTA.'
                },
                {
                  num: '09',
                  name: 'Frequently Asked Questions (FAQ)',
                  purpose: 'Address technical, legal, financial, and roster questions for both Brands and Creators.',
                  content: 'Categorized accordions: Enterprise Brand FAQs (Budget minimums, IP licensing, Brand safety) & Creator FAQs (Roster qualification, payout terms, exclusivity).',
                  layout: 'Single column max-w-3xl with clean hairline dividers (#EBE7DF) and subtle open/close indicators.',
                  typography: 'Question: Plus Jakarta Sans 16px Medium; Answer: Plus Jakarta Sans 14px Regular (1.6 line height).',
                  whitespace: '24px vertical padding per item; 128px section padding.',
                  animation: 'Smooth height expansion (0.3s ease-out) with zero visual jump.',
                  emotion: 'Complete transparency, friction removal, clarity.',
                  goal: 'Remove final objections prior to contact form submission.'
                },
                {
                  num: '10',
                  name: 'Primary Call To Action (CTA)',
                  purpose: 'Serve as the ultimate conversion gateway for both target audiences.',
                  content: 'Dual Conversion Portal: Portal A for Enterprise Brands ("Commission a Campaign") & Portal B for Content Creators ("Apply for Roster Representation"). Includes institutional safety seals.',
                  layout: 'Side-by-side 2-column conversion cards in Deep Charcoal (#141414) and Warm Alabaster (#FAF8F5).',
                  typography: 'Heading: Cormorant Garamond 36px; Body: Plus Jakarta Sans 14px; CTA Button: 12px uppercase bold.',
                  whitespace: '64px internal card padding; 160px section padding buffer.',
                  animation: 'Subtle border highlight pulse on button focus.',
                  emotion: 'Decisive action, ambition, mutual prestige.',
                  goal: 'Maximize lead conversion for both enterprise clients and talent.'
                },
                {
                  num: '11',
                  name: 'Footer',
                  purpose: 'Anchor the bottom of the canvas with legal, navigational, and institutional credentials.',
                  content: 'Valtroen logo mark, location offices (New York, London, Paris, Tokyo), legal terms, privacy policy, security compliance, social links, and live system status tag.',
                  layout: '4-column footer layout anchored by top hairline border (#EBE7DF).',
                  typography: 'Headers: Monospace 10px uppercase (#8A7963); Links: Plus Jakarta Sans 12px; Copyright: Monospace 10px.',
                  whitespace: '64px top/bottom padding; 32px column gaps.',
                  animation: 'Clean hover color shift on text links from #5A5245 to #1A1A1A.',
                  emotion: 'Institutional completeness and permanence.',
                  goal: 'Provide seamless navigation and meet legal/compliance requirements.'
                }
              ].map((sec) => (
                <div key={sec.num} className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EBE7DF] pb-4 gap-2">
                    <div className="flex items-center space-x-3">
                      <span className="w-9 h-9 rounded bg-[#141414] text-[#FAF8F5] flex items-center justify-center font-mono text-sm font-bold">
                        {sec.num}
                      </span>
                      <h3 className="text-2xl font-serif-display font-semibold text-[#1A1A1A]">
                        {sec.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 bg-[#F2EDE4] text-[#8A7963] border border-[#DCD6CA] rounded">
                      SECTION SPECIFICATION
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#3D3830]">
                    <div className="space-y-3">
                      <div>
                        <span className="font-bold text-[#1A1A1A] block uppercase text-[10px] tracking-wider mb-1">Purpose:</span>
                        <p className="leading-relaxed">{sec.purpose}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#1A1A1A] block uppercase text-[10px] tracking-wider mb-1">Content & Copy:</span>
                        <p className="leading-relaxed">{sec.content}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#1A1A1A] block uppercase text-[10px] tracking-wider mb-1">Layout Architecture:</span>
                        <p className="leading-relaxed">{sec.layout}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#1A1A1A] block uppercase text-[10px] tracking-wider mb-1">Typography System:</span>
                        <p className="leading-relaxed font-mono text-[11px] text-[#8A7963]">{sec.typography}</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 bg-[#F2EDE4]/60 rounded-lg border border-[#DCD6CA]">
                      <div>
                        <span className="font-bold text-[#8A7963] block uppercase text-[10px] tracking-wider mb-1 font-mono">Whitespace & Padding:</span>
                        <p className="leading-relaxed">{sec.whitespace}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#8A7963] block uppercase text-[10px] tracking-wider mb-1 font-mono">Motion & Animation:</span>
                        <p className="leading-relaxed">{sec.animation}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#8A7963] block uppercase text-[10px] tracking-wider mb-1 font-mono">User Emotion Evoked:</span>
                        <p className="leading-relaxed font-serif-display italic text-sm text-[#1A1A1A]">{sec.emotion}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#8A7963] block uppercase text-[10px] tracking-wider mb-1 font-mono">Conversion Goal:</span>
                        <p className="leading-relaxed font-medium text-[#1A1A1A]">{sec.goal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Behavior & Responsiveness Specification */}
            <div className="p-8 bg-[#FAF8F5] border-2 border-[#8A7963] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#8A7963] border-b border-[#EBE7DF] pb-3">
                <Globe className="w-4 h-4" />
                <h3 className="text-xl font-serif-display font-semibold text-[#1A1A1A]">Mobile Responsiveness & Touch Ergonomics</h3>
              </div>
              <ul className="text-xs text-[#4A453E] space-y-2 leading-relaxed">
                <li>• <strong>Typography Scaling:</strong> Headlines downscale gracefully from 72px desktop to 36px–42px mobile using fluid CSS clamp(36px, 8vw, 72px).</li>
                <li>• <strong>Touch Targets:</strong> All buttons, accordion headers, and tab selectors strictly maintain a minimum 48px vertical touch target.</li>
                <li>• <strong>Grid Collapsing:</strong> Asymmetric 12-column desktop grids stack cleanly into single-column editorial exhibits with 24px horizontal margins.</li>
                <li>• <strong>No Unnecessary Drawers:</strong> Navigation simplifies into a minimal sticky header with a quiet fullscreen overlay navigation on tap.</li>
              </ul>
            </div>

          </section>
        )}

        {/* TAB 9: FIGMA UI & COMPONENT SPECIFICATION */}
        {(activeTab === 'figma' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 09</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Figma UI & Section Component Specs</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-FIGMA-SPECS-2026</span>
            </div>

            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <LayoutGrid className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">FIGMA SYSTEM ARCHITECTURE</span>
              </div>
              <blockquote className="font-serif-display text-xl sm:text-2xl font-light italic leading-relaxed text-[#FAF8F5]">
                "Complete Figma design file token matrix. Every section defines exact layout, grid, spacing, typography, imagery, card styles, buttons, icons, backgrounds, radiuses, shadows, motion, and hover parameters."
              </blockquote>
            </div>

            {/* Design Tokens Global Matrix */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-4">
              <h3 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">Global Master Figma Tokens</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <span className="text-[#8A7963] block text-[10px]">COLOR CANVASES</span>
                  • Alabaster (#FAF8F5)<br/>
                  • Charcoal (#141414)<br/>
                  • Sand (#F5F1E8)
                </div>
                <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <span className="text-[#8A7963] block text-[10px]">TYPOGRAPHY STACK</span>
                  • Display: Cormorant Garamond<br/>
                  • Sans: Plus Jakarta Sans<br/>
                  • Tag: IBM Plex Mono
                </div>
                <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <span className="text-[#8A7963] block text-[10px]">GRID & BREAKPOINTS</span>
                  • Max-Width: 1280px (7xl)<br/>
                  • Columns: 12 (Gutter 32px)<br/>
                  • Margin: 64px Desktop
                </div>
                <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA]">
                  <span className="text-[#8A7963] block text-[10px]">ELEVATION & BORDERS</span>
                  • Border: 1px #DCD6CA<br/>
                  • Radius: 8px / 12px<br/>
                  • Shadow: 0px (Flat Luxury)
                </div>
              </div>
            </div>

            {/* 11 Detailed Figma Section Spec Breakdown */}
            <div className="space-y-12">
              {[
                {
                  id: 'sec-hero',
                  name: '01. Hero Section',
                  layout: 'Asymmetric Split Hero Layout (7 Columns Left Copy / 5 Columns Right Framed Image Exhibit). Sticky Navigation Anchor above.',
                  grid: '12-Column Grid (Gutter: 32px, Margin: 64px Desktop, 24px Mobile).',
                  containerWidth: '1280px (Max Width 7XL Container, Centered).',
                  spacing: 'Padding Top: 160px, Padding Bottom: 128px, Element Gap: 32px, Text Stack Gap: 24px.',
                  typography: 'Eyebrow: 10px Mono Uppercase (Tracked 0.12em, #8A7963) • H1: 72px Cormorant Garamond Light (Leading 1.08, #141414) • Lead: 18px Plus Jakarta Sans Regular (Leading 1.6, #3D3830).',
                  images: 'Hero Framed Exhibit: 16:9 Aspect Ratio with Muted Warm Tone Grading, 1px Taupe Border (#DCD6CA), 0px Shadow, Warm Alabaster Placeholder backdrop.',
                  cardStyle: 'Flat Exhibition Frame (No elevation, 1px #DCD6CA solid border, 0px box shadow, 12px border radius).',
                  buttonStyle: 'Primary: Solid Charcoal (#141414) Background, Warm White Text (#FAF8F5), 12px Mono Uppercase (Tracked 0.08em), 16px vertical / 32px horizontal padding, 6px radius. Secondary: Transparent with 1px Bronze (#8A7963) border.',
                  icons: 'Lucide ArrowRight (14px) in Antique Bronze (#8A7963) inline with button text.',
                  background: 'Warm Alabaster Canvas (#FAF8F5) with subtle 1px Hairline Bottom Divider (#EBE7DF).',
                  borderRadius: 'Outer Container: 16px | Buttons: 6px | Framed Image: 12px.',
                  shadows: '0px (Strictly No Drop Shadows / No Glows in compliance with Quiet Luxury principles).',
                  motion: 'Figma Smart Animate / Ease-Out (600ms, cubic-bezier 0.16, 1, 0.3, 1). Staggered opacity rise (+4px Y shift).',
                  hoverEffects: 'Primary Button: Background shifts from #141414 to #2A2A2A with +2px right icon shift. Framed Image: Subtle 1.010x scale expansion.'
                },
                {
                  id: 'sec-trusted',
                  name: '02. Trusted By (Social Proof)',
                  layout: 'Horizontal Single-Row Marquee Strip anchored by Top and Bottom Hairline Dividers (#EBE7DF).',
                  grid: '6-Column Equal Width Spacing Track (Gutter: 48px).',
                  containerWidth: '1280px (Full Width Flex Container within 7XL bounds).',
                  spacing: 'Padding Top: 64px, Padding Bottom: 64px, Logo Gap: 48px.',
                  typography: 'Section Label: 10px Mono Uppercase (Tracked 0.14em, #8A7963) • Verified Spend Badge: 11px Mono (#141414).',
                  images: 'Logos: Vector Monochromatic SVGs rendered in Charcoal (#3D3830) with 60% opacity baseline.',
                  cardStyle: 'N/A (Seamless inline divider row).',
                  buttonStyle: 'N/A.',
                  icons: 'ShieldCheck (14px) in Antique Bronze (#8A7963) for spend badge.',
                  background: 'Off-White Sand Canvas (#F5F1E8) flanked by 1px solid dividers (#EBE7DF).',
                  borderRadius: '0px (Edge-to-edge section dividers).',
                  shadows: '0px.',
                  motion: 'Continuous linear scroll animation (0.2px/frame) with CSS hardware acceleration.',
                  hoverEffects: 'Logo Mark Hover: Opacity shifts from 60% to 100% Charcoal with 200ms transition.'
                },
                {
                  id: 'sec-about',
                  name: '03. About Valtreon',
                  layout: 'Asymmetric 2-Column Grid (4 Columns Left Sticky Headline / 8 Columns Right Editorial Copy & Key Metric Cards).',
                  grid: '12-Column Grid (Gutter: 32px, Margin: 64px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Row Gap: 40px, Metric Card Gap: 24px.',
                  typography: 'Section Eyebrow: 10px Mono (#8A7963) • Main Title: 48px Cormorant Garamond Medium (#141414) • Body Copy: 16px Plus Jakarta Sans (Leading 1.65, #3D3830) • Stat Value: 40px Cormorant Garamond Bold (#141414).',
                  images: 'Option for 1 Editorial Portrait (4:5 Aspect Ratio) with 1px Taupe Border and fine metadata overlay.',
                  cardStyle: 'Stat Cards: Single-layer flat surface (#FAF8F5) with 1px #DCD6CA border, 24px inner padding, 8px radius.',
                  buttonStyle: 'Text Link Button: 12px Mono Uppercase with 1px solid underline in Antique Bronze (#8A7963).',
                  icons: 'Sparkles (16px) & Scale (16px) in #8A7963.',
                  background: 'Warm Alabaster Canvas (#FAF8F5).',
                  borderRadius: 'Stat Cards: 8px.',
                  shadows: '0px.',
                  motion: 'Scroll-triggered viewport reveal. Staggered 150ms delay between narrative blocks.',
                  hoverEffects: 'Stat Card Hover: Border color shifts from #DCD6CA to #8A7963 with subtle 1px elevation.'
                },
                {
                  id: 'sec-services',
                  name: '04. Services & Capabilities',
                  layout: '2x2 Grid Matrix of Flat Service Cards anchored by Top Section Header and Capability Index Tags.',
                  grid: '12-Column Grid Split into 2 Equal 6-Column Tracks (Gutter: 32px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Card Inner Padding: 40px, Grid Gap: 32px.',
                  typography: 'Section Title: 44px Cormorant Garamond (#141414) • Service Title: 28px Cormorant Garamond SemiBold (#141414) • Service Body: 14px Plus Jakarta Sans (#5A5245) • Pillar Tag: 10px Mono (#8A7963).',
                  images: 'N/A (Typography and subtle vector iconography driven).',
                  cardStyle: 'Flat Luxury Card Container: Background #FAF8F5, Border 1px #DCD6CA, Corner Radius 12px, Inner Padding 40px.',
                  buttonStyle: 'Secondary Outline Pill: 11px Mono Uppercase, 1px #8A7963 border, 12px vertical / 20px horizontal padding.',
                  icons: 'Zap, Sliders, Shield, BarChart3 (20px) in #8A7963.',
                  background: 'Warm Sand Background Canvas (#F5F1E8) providing contrast from adjacent alabaster folds.',
                  borderRadius: 'Card Containers: 12px | Pill Badges: 4px.',
                  shadows: '0px.',
                  motion: 'Hover transition: border-color 300ms ease, transform -2px Y axis.',
                  hoverEffects: 'Card Border turns Antique Bronze (#8A7963), background warms slightly to #FAF8F5.'
                },
                {
                  id: 'sec-campaigns',
                  name: '05. Featured Campaigns (Case Studies)',
                  layout: 'Vertical Magazine Exhibition Layout with Staggered 7:5 Alternating Image/Data Splits.',
                  grid: '12-Column Grid (7 Cols Image / 5 Cols Campaign Specs & Results).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Exhibition Item Gap: 96px, Spec Block Gap: 16px.',
                  typography: 'Campaign Title: 36px Cormorant Garamond Light (#141414) • Revenue Stat: 32px Cormorant Garamond Medium (#8A7963) • Client Industry: 10px Mono Uppercase (#8A7963) • Description: 14px Plus Jakarta Sans (#3D3830).',
                  images: 'Editorial Campaign Photography: 16:9 and 4:3 Ratios, High-Fashion Color Grading, 1px Taupe Border (#DCD6CA), Framed Exhibit Matting.',
                  cardStyle: 'Framed Gallery Exhibit: Single-layer container with 1px #DCD6CA border and 32px internal padding.',
                  buttonStyle: 'Primary Link CTA: "Explore Campaign Case Study →" set in 12px Mono Uppercase with Antique Bronze arrow.',
                  icons: 'ArrowRight (14px), ExternalLink (14px) in Antique Bronze.',
                  background: 'Warm Alabaster (#FAF8F5).',
                  borderRadius: 'Media Frames: 12px | Spec Cards: 8px.',
                  shadows: '0px.',
                  motion: 'Image subtle zoom (scale 1.000 to 1.015) on hover inside fixed frame clip mask.',
                  hoverEffects: 'Framed Media Container: Scale zoom + Border color darkens to Charcoal (#141414).'
                },
                {
                  id: 'sec-creators',
                  name: '06. Creator Network Showcase',
                  layout: '4-Column Editorial Talent Roster Grid with Framed Creator Cards and Fine Metrics.',
                  grid: '12-Column Grid Split into 4 Equal 3-Column Cards (Gutter: 24px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Grid Gap: 24px, Card Inner Padding: 20px.',
                  typography: 'Creator Name: 22px Cormorant Garamond SemiBold (#141414) • Niche Tag: 10px Mono Uppercase (#8A7963) • Reach Stat: 14px Plus Jakarta Sans Bold (#141414).',
                  images: 'Creator Portraits: 3:4 Aspect Ratio High-Fashion Editorial Photography, Warm Tone Graded, 1px #DCD6CA border.',
                  cardStyle: 'Flat Talent Card: Background #FAF8F5, Border 1px #DCD6CA, Radius 10px, Inner Padding 20px.',
                  buttonStyle: 'Pill Tag: 10px Mono Uppercase, Background #EBE7DF, Text #4A453E.',
                  icons: 'Users, Award, Crown (14px) in Antique Bronze.',
                  background: 'Warm Sand Background Canvas (#F5F1E8).',
                  borderRadius: 'Talent Cards: 10px | Images: 8px.',
                  shadows: '0px.',
                  motion: 'Card hover: 300ms ease transition, subtle +2px vertical lift.',
                  hoverEffects: 'Portrait image scales 1.02x within clip mask; border turns #8A7963.'
                },
                {
                  id: 'sec-process',
                  name: '07. Process & Methodology',
                  layout: 'Horizontal 4-Step Linear Timeline anchored by Connecting Hairline Guide Line (#EBE7DF).',
                  grid: '12-Column Grid Split into 4 Equal 3-Column Process Step Columns (Gutter: 24px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Step Padding: 24px, Step Gap: 24px.',
                  typography: 'Phase Number: 12px Mono Bold Uppercase (#8A7963) • Phase Title: 24px Cormorant Garamond (#141414) • Phase Body: 13px Plus Jakarta Sans (#5A5245).',
                  images: 'N/A.',
                  cardStyle: 'Flat Step Box: Background #FAF8F5, Border 1px #DCD6CA, Radius 8px, Inner Padding 24px.',
                  buttonStyle: 'N/A.',
                  icons: 'CheckCircle2, Compass, Cpu, FileText (16px) in Antique Bronze.',
                  background: 'Warm Alabaster Canvas (#FAF8F5).',
                  borderRadius: 'Step Cards: 8px.',
                  shadows: '0px.',
                  motion: 'Timeline progress line fills from left to right as section scrolls into center viewport.',
                  hoverEffects: 'Step Card: Background shifts to #F2EDE4; step number turns Onyx Charcoal.'
                },
                {
                  id: 'sec-testimonials',
                  name: '08. Testimonials & Executive Endorsements',
                  layout: 'Dual-Column Side-by-Side Quote Cards with Large Decorative Serif Quotation Marks.',
                  grid: '12-Column Grid Split into 2 Equal 6-Column Quote Columns (Gutter: 32px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Quote Padding: 48px, Card Gap: 32px.',
                  typography: 'Quote Copy: 24px Cormorant Garamond Light Italic (#141414) • Author Name: 14px Plus Jakarta Sans Bold (#141414) • Author Title: 11px Mono Uppercase (#8A7963).',
                  images: 'Author Avatar or Brand Monogram Mark (40x40px, 1px border).',
                  cardStyle: 'Luxury Endorsement Container: Background #FAF8F5, Border 1px #DCD6CA, Radius 12px, Inner Padding 48px.',
                  buttonStyle: 'N/A.',
                  icons: 'Quote mark (32px Cormorant Serif, #DCD6CA) + ShieldCheck (14px).',
                  background: 'Warm Sand Background Canvas (#F5F1E8).',
                  borderRadius: 'Quote Cards: 12px.',
                  shadows: '0px.',
                  motion: 'Staggered fade-in on scroll entry.',
                  hoverEffects: 'Border turns Antique Bronze (#8A7963) on cursor focus.'
                },
                {
                  id: 'sec-faq',
                  name: '09. Frequently Asked Questions (FAQ)',
                  layout: 'Centered Single Column Accordion List bounded by Hairline Section Dividers.',
                  grid: '12-Column Grid (Centered Max-Width 800px / 8 Columns).',
                  containerWidth: '800px Centered Container.',
                  spacing: 'Padding Top: 128px, Padding Bottom: 128px, Item Padding: 24px vertical, Accordion Gap: 12px.',
                  typography: 'Question: 16px Plus Jakarta Sans Medium (#141414) • Answer: 14px Plus Jakarta Sans Regular (Leading 1.6, #5A5245) • Category Tag: 10px Mono (#8A7963).',
                  images: 'N/A.',
                  cardStyle: 'Accordion Item: Flat bottom hairline border (1px #EBE7DF), 0px radius, 20px vertical padding.',
                  buttonStyle: 'Accordion Trigger: Flex container with full width hover state.',
                  icons: 'ChevronRight / Plus (16px) in Antique Bronze (#8A7963) with 90-degree rotation transform on open.',
                  background: 'Warm Alabaster Canvas (#FAF8F5).',
                  borderRadius: '0px (Clean hairline dividers).',
                  shadows: '0px.',
                  motion: 'Accordion Content Expand: 300ms ease-out height transition, opacity fade 0 to 1.',
                  hoverEffects: 'Question Header Hover: Text color shifts to Antique Bronze (#8A7963).'
                },
                {
                  id: 'sec-cta',
                  name: '10. Primary Call To Action (CTA)',
                  layout: 'Dual Lead Conversion Gateway: Side-by-Side 2-Column Cards (Dark Charcoal Enterprise Portal vs. Warm Alabaster Creator Portal).',
                  grid: '12-Column Grid Split into 2 Equal 6-Column Conversion Portals (Gutter: 32px).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 160px, Padding Bottom: 160px, Inner Padding: 56px, Gap: 32px.',
                  typography: 'Portal Title: 36px Cormorant Garamond SemiBold • Portal Copy: 14px Plus Jakarta Sans (Leading 1.6) • Badge: 10px Mono Uppercase.',
                  images: 'N/A (Typography and high-contrast surface driven).',
                  cardStyle: 'Portal A (Brands): Solid Charcoal #141414 background, Warm Alabaster text, 1px #333 border, 16px radius. Portal B (Creators): Alabaster #FAF8F5 background, 1px #DCD6CA border, 16px radius.',
                  buttonStyle: 'Portal A Button: Warm Alabaster (#FAF8F5) background, Charcoal text, 12px Mono Uppercase bold. Portal B Button: Solid Charcoal (#141414) background, Warm Alabaster text.',
                  icons: 'ArrowRight (14px) in gold/bronze accent inline.',
                  background: 'Warm Sand Canvas (#F5F1E8).',
                  borderRadius: 'Conversion Portals: 16px | Buttons: 6px.',
                  shadows: '0px.',
                  motion: 'Subtle focus highlight shift on form container interaction.',
                  hoverEffects: 'Portal Card Hover: Border highlight turns Antique Bronze (#8A7963) with -2px Y elevation.'
                },
                {
                  id: 'sec-footer',
                  name: '11. Footer',
                  layout: '4-Column Footer Navigation Matrix anchored by Top Hairline Divider (#EBE7DF) and Bottom Copyright Row.',
                  grid: '12-Column Grid Split (4 Columns Logo/Bio, 2 Columns Brands, 2 Columns Creators, 4 Columns Offices & Legal).',
                  containerWidth: '1280px Container.',
                  spacing: 'Padding Top: 80px, Padding Bottom: 48px, Column Gap: 32px, Item Gap: 12px.',
                  typography: 'Column Header: 10px Mono Uppercase (Tracked 0.14em, #8A7963) • Link Text: 13px Plus Jakarta Sans (#5A5245) • Copyright: 10px Mono (#8A7963).',
                  images: 'Valtreon Brand Emblem Vector Icon.',
                  cardStyle: 'N/A (Inline footer structure).',
                  buttonStyle: 'N/A.',
                  icons: 'Globe, Crown, Shield, Lock (14px) in #8A7963.',
                  background: 'Warm Sand Footer Canvas (#F5F1E8) with 1px top border (#EBE7DF).',
                  borderRadius: '0px.',
                  shadows: '0px.',
                  motion: 'Clean opacity transition on hover.',
                  hoverEffects: 'Footer Link Hover: Color shifts from #5A5245 to #1A1A1A with subtle +2px right shift.'
                }
              ].map((fig) => (
                <div key={fig.id} className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EBE7DF] pb-4 gap-2">
                    <h3 className="text-2xl font-serif-display font-semibold text-[#1A1A1A]">
                      {fig.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-1 bg-[#141414] text-[#FAF8F5] rounded">
                      FIGMA COMPONENT SPEC
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-[#3D3830]">
                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">1. LAYOUT & STRUCTURE</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]">{fig.layout}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">2. GRID & CONTAINER WIDTH</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]"><strong>Grid:</strong> {fig.grid}<br/><strong>Container:</strong> {fig.containerWidth}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">3. SPACING & PADDING</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]">{fig.spacing}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">4. TYPOGRAPHY HIERARCHY</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]">{fig.typography}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">5. IMAGERY & MEDIA TREATMENT</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]">{fig.images}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">6. CARD CONTAINERS & BORDERS</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]">{fig.cardStyle}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">7. BUTTONS, ICONS & CONTROLS</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]"><strong>Buttons:</strong> {fig.buttonStyle}<br/><strong>Icons:</strong> {fig.icons}</p>
                    </div>

                    <div className="p-3 bg-[#F2EDE4] rounded border border-[#DCD6CA] space-y-1">
                      <span className="text-[#8A7963] font-bold block uppercase text-[10px]">8. BACKGROUND, RADIUS & SHADOWS</span>
                      <p className="text-[11px] leading-relaxed text-[#1A1A1A]"><strong>BG:</strong> {fig.background}<br/><strong>Radius:</strong> {fig.borderRadius}<br/><strong>Shadows:</strong> {fig.shadows}</p>
                    </div>

                    <div className="p-3 bg-[#141414] text-[#FAF8F5] rounded border border-[#333] space-y-1 col-span-1 md:col-span-2">
                      <span className="text-[#A38B68] font-bold block uppercase text-[10px]">9. MOTION & HOVER INTERACTION PHYSICS</span>
                      <p className="text-[11px] leading-relaxed text-[#DDD]"><strong>Motion:</strong> {fig.motion}<br/><strong>Hover Effect:</strong> {fig.hoverEffects}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-[#EBE7DF] bg-[#F5F1E8] py-8 text-center text-xs text-[#8A7963] no-print">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Crown className="w-4 h-4 text-[#8A7963]" />
            <span className="font-serif-display font-medium text-[#1A1A1A]">Valtreon Media Network</span>
          </div>
          <p>© 2026 Valtreon Media Network. All Rights Reserved. Official Design Language & Visual Source of Truth Document.</p>
        </div>
      </footer>
    </div>
  );
}
