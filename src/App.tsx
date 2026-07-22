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
  Sparkle,
  Scale,
  MousePointer,
  Maximize,
  Filter,
  CheckSquare
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'principles' | 'personality' | 'direction' | 'document' | 'matrix' | 'visuals' | 'architecture' | 'enquiry'>('principles');
  const [viewMode, setViewMode] = useState<'editorial' | 'presentation'>('editorial');
  const [activeInspiration, setActiveInspiration] = useState<string>('all');
  const [activeAntiPattern, setActiveAntiPattern] = useState<string>('all');
  const [activePrincipleCategory, setActivePrincipleCategory] = useState<string>('all');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  
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
    const summary = `VALTREON MEDIA NETWORK — THE 15 MANDATORY VISUAL PRINCIPLES
==================================================================
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

STRICTLY BANNED AESTHETICS:
❌ Hacker Dashboard • ❌ AI Dashboard • ❌ SaaS Dashboard • ❌ Crypto UI • ❌ Cyberpunk • ❌ Gaming UI`;

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
                <span className="text-xs px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E] font-mono">Brand Personality & Design System</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1A1A1A] tracking-tight">
                Brand Personality, Creative Direction & Visual Principles
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
              <span>{copiedNotification ? 'Copied Specs!' : 'Copy 15 Principles & Guide'}</span>
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
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-4 text-xs sm:text-sm font-medium whitespace-nowrap">
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
            01. Brand Personality Guide
          </button>
          <button
            onClick={() => setActiveTab('direction')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'direction' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            02. Creative Direction
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'document' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            03. Executive Overview
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'matrix' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            04. User Matrix
          </button>
          <button
            onClick={() => setActiveTab('visuals')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'visuals' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            05. Aesthetic Guardrails
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'architecture' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            06. Site Architecture
          </button>
          <button
            onClick={() => setActiveTab('enquiry')}
            className={`py-2 px-3 border-b-2 transition-colors ${activeTab === 'enquiry' ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'border-transparent text-[#6A6356] hover:text-[#1A1A1A]'}`}
          >
            07. Dual Lead Schema
          </button>
        </div>
      </nav>

      {/* Main Document Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        
        {/* Document Cover Header */}
        <div className="mb-16 border-b border-[#DCD6CA] pb-12">
          <div className="flex flex-wrap items-center justify-between text-xs tracking-wider uppercase text-[#8A7963] font-mono mb-4 gap-2">
            <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5 text-[#8A7963]" /> VALTREON MEDIA NETWORK • DESIGN SYSTEM SPECIFICATION</span>
            <span>VERSION 2.4 (FINAL)</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-light text-[#1A1A1A] leading-[1.08] tracking-tight mb-6">
            Valtreon Media Network
          </h1>
          
          <p className="text-lg sm:text-xl font-serif-display italic text-[#5A5245] max-w-3xl leading-relaxed mb-8">
            "An editorial luxury digital presence governed by 15 strict visual principles—delivering quiet confidence, institutional trust, and unhurried design craftsmanship across every future page fold."
          </p>

          {/* Quick Pillar Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#EBE7DF] text-xs font-medium">
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Visual Principles</span>
              <span className="text-[#1A1A1A] font-semibold">15 Mandatory Rules</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Primary Voice</span>
              <span className="text-[#1A1A1A] font-semibold">Measured & Editorial</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Aesthetic Archetype</span>
              <span className="text-[#1A1A1A] font-semibold">Quiet Luxury & Fine Print</span>
            </div>
            <div>
              <span className="block text-[#8A7963] uppercase tracking-wider text-[10px] mb-1">Scope Compliance</span>
              <span className="text-[#1A1A1A] font-semibold">Strict Rule Enforcement</span>
            </div>
          </div>
        </div>

        {/* SECTION 0: THE 15 MANDATORY VISUAL PRINCIPLES (PRIMARY TAB) */}
        {(activeTab === 'principles' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 00</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">The 15 Visual Principles</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-PRINCIPLES-2026</span>
            </div>

            {/* Principle Manifesto Box */}
            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">DESIGN DIRECTOR MANDATE</span>
              </div>
              <blockquote className="font-serif-display text-2xl sm:text-3xl font-light italic leading-relaxed text-[#FAF8F5]">
                "Every page, section, component, and interaction in the Valtreon Media Network ecosystem MUST adhere strictly to these 15 visual principles. No exceptions, no shortcuts, and no compromises."
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#333] text-xs text-[#AAA] gap-2">
                <span>Verification Status: 15 / 15 Rules Enforced for Future Pages</span>
                <span className="font-mono text-[#A38B68]">QUIET LUXURY • EDITORIAL MINIMALISM • INSTITUTIONAL TRUST</span>
              </div>
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

            {/* THE 15 PRINCIPLES CARDS GRID */}
            <div className="grid grid-cols-1 gap-8">
              {filteredPrinciples.map((p) => {
                const IconComponent = p.icon;
                const isVerified = verifiedPrinciples[p.num];

                return (
                  <div 
                    key={p.num} 
                    className={`border border-[#DCD6CA] rounded-xl p-6 sm:p-8 space-y-6 transition-all hover:border-[#8A7963] ${p.bgGradient}`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EBE7DF] pb-4 gap-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-10 h-10 rounded-lg bg-[#F2EDE4] border border-[#DCD6CA] flex items-center justify-center font-mono font-bold text-sm text-[#8A7963]">
                          {p.num < 10 ? `0${p.num}` : p.num}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7963] block">PRINCIPLE {p.num} • {p.category.toUpperCase()}</span>
                          <h3 className="text-2xl font-serif-display font-semibold text-[#1A1A1A] flex items-center gap-2">
                            {p.title}
                          </h3>
                        </div>
                      </div>

                      {/* Verification Badge Toggle */}
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

                    {/* Summary & Design Specs */}
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

                    {/* Live Visual Spec Preview Box */}
                    <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#8A7963] uppercase tracking-wider">
                        <span className="flex items-center gap-1"><IconComponent className="w-3.5 h-3.5 text-[#8A7963]" /> Live Visual Spec Preview</span>
                        <span>COMPONENT EXEMPLAR</span>
                      </div>
                      
                      {/* Interactive Visual Render Based on Principle */}
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
                          <div className="aspect-[16/6] bg-[#EBE7DF] rounded border border-[#DCD6CA] flex items-center justify-center text-xs font-mono text-[#6A6356] bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(#DCD6CA 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
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

                    {/* Mandatory Rule for Future Pages */}
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

            {/* Quick Principles Compliance Summary Matrix */}
            <div className="p-8 bg-[#FAF8F5] border border-[#DCD6CA] rounded-xl space-y-6">
              <div className="border-b border-[#EBE7DF] pb-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono text-[#8A7963] uppercase tracking-widest block mb-1">DESIGN SYSTEM COMPLIANCE SUMMARY</span>
                  <h3 className="text-xl font-serif-display font-medium text-[#1A1A1A]">Future Page Build Checklist</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-[#141414] text-[#FAF8F5] rounded">15 / 15 ACTIVE RULES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {visualPrinciples.map((p) => (
                  <div key={p.num} className="p-3 bg-[#F2EDE4]/60 border border-[#DCD6CA] rounded flex items-center justify-between font-medium">
                    <span className="text-[#1A1A1A]">{p.num}. {p.title}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#8A7963] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* SECTION 1: BRAND PERSONALITY GUIDE */}
        {(activeTab === 'personality' || viewMode === 'presentation') && (
          <section className="mb-20 space-y-16">
            
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCD6CA] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A7963]">SPECIFICATION 01</span>
                <h2 className="text-3xl sm:text-4xl font-serif-display text-[#1A1A1A]">Brand Personality Guide</h2>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#FAF8F5] rounded">DOC ID: VM-PERSONALITY-2026</span>
            </div>

            {/* Introductory Manifesto */}
            <div className="p-8 bg-[#141414] text-[#FAF8F5] rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#A38B68]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">CREATIVE DIRECTOR MANIFESTO</span>
              </div>
              <blockquote className="font-serif-display text-2xl sm:text-3xl font-light italic leading-relaxed text-[#FAF8F5]">
                "Valtreon does not shout to be heard. We speak with the quiet authority of an established private institution. True luxury does not rely on neon glows, frantic animations, or artificial hype—it relies on flawless execution, generous whitespace, and undeniable results."
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-[#333] text-xs text-[#AAA]">
                <span>Valtreon Media Network • Brand Persona Framework</span>
                <span className="font-mono text-[#A38B68]">MINIMAL • LUXURY • EDITORIAL</span>
              </div>
            </div>

            {/* 8 CORE PERSONALITY PILLARS */}
            <div className="space-y-8">
              <div className="flex items-baseline justify-between border-b border-[#EBE7DF] pb-2">
                <h3 className="text-2xl font-serif-display text-[#1A1A1A]">The 8 Dimensions of Brand Personality</h3>
                <span className="text-xs font-mono text-[#8A7963]">8 CORE PILLARS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Voice */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Type className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">1. Voice</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">MEASURED & EDITORIAL</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Valtreon’s voice is <strong>measured, authoritative, editorial, and institutional</strong>. We speak like a high-end publication (e.g. Vogue, Financial Times, Monocle) or a global private equity firm. We avoid casual jargon, marketing hype, or exclamation marks.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">DO:</span>
                      "Valtreon structures creator partnerships with the financial rigor of enterprise asset allocation."
                    </div>
                    <div className="p-2 bg-red-50/50 border border-red-200/60 rounded text-red-900">
                      <span className="font-semibold text-red-700 block text-[10px] uppercase">DON'T:</span>
                      "Get ready to skyrocket your sales overnight with our super hot viral influencer hacks!"
                    </div>
                  </div>
                </div>

                {/* 2. Tone */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Compass className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">2. Tone</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">CALM & POLISHED</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Our tone is <strong>calm, precise, polished, and discreet</strong>. We deliver campaign insights and data points with quiet clarity. We never sound rushed, anxious, or pushy. Every statement is framed as an objective truth supported by trackable media metrics.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">KEY TONAL ATTRIBUTES:</span>
                      Restrained vocabulary • Exact ROI figures • Discreet client references • Zero clutter.
                    </div>
                  </div>
                </div>

                {/* 3. Emotion */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Heart className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">3. Emotion</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">REASSURANCE & PRESTIGE</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    The emotional response we evoke is <strong>deep reassurance, prestige, ambition, and composure</strong>. Brand Directors feel their capital is handled with utmost care. Creators feel honored and elevated to be represented on the roster.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">TARGET USER FEELING:</span>
                      "I am dealing with world-class professionals who treat influencer marketing as a serious discipline."
                    </div>
                  </div>
                </div>

                {/* 4. Confidence */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><ShieldCheck className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">4. Confidence</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">UNSHAKEABLE & PROVEN</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Confidence at Valtreon is <strong>unshakeable, proven, and understated</strong>. We do not beg for business or post loud discount banners. We showcase $50M+ in campaign volume, 4.2x average ROAS, and let the work speak for itself.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">DISCIPLINE:</span>
                      No popups, no countdown timers, no "Limited spots left!" sales triggers.
                    </div>
                  </div>
                </div>

                {/* 5. Luxury */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Crown className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">5. Luxury</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">QUIET LUXURY & FINE PRINT</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Luxury is expressed as <strong>Quiet Luxury ("if you know, you know")</strong>. Soft alabaster background canvas (#FAF8F5), deep charcoal typography (#141414), subtle antique bronze accents (#8A7963), and 65%+ whitespace.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">AESTHETIC BENCHMARKS:</span>
                      Cormorant Garamond display serifs, 1px warm borders, unhurried scroll inertia.
                    </div>
                  </div>
                </div>

                {/* 6. Trust */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Lock className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">6. Trust</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">INSTITUTIONAL & TRANSPARENT</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Trust is built through <strong>absolute operational transparency</strong>. Transparent content licensing terms, multi-tier brand safety verification, clear contract rights management, and third-party verified ROAS tracking.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">TRUST SIGNALS:</span>
                      Enterprise IP licensing, guaranteed creator payout schedules, legal safety seals.
                    </div>
                  </div>
                </div>

                {/* 7. Professionalism */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Briefcase className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">7. Professionalism</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">WHITE-GLOVE ENTERPRISE</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Professionalism is <strong>uncompromising white-glove service</strong>. Dedicated campaign strategists, structured multi-stage approvals, prompt creator compensation, and clean, executive-ready performance reports.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">WORKFLOW:</span>
                      Clear SLA timelines, structured intake forms, zero friction communication.
                    </div>
                  </div>
                </div>

                {/* 8. Innovation */}
                <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EBE7DF] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2 bg-[#F2EDE4] rounded text-[#8A7963]"><Zap className="w-4 h-4" /></span>
                      <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">8. Innovation</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBE7DF] text-[#4A453E]">ALGORITHMIC PRECISION</span>
                  </div>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    Innovation means <strong>algorithmic creator matching and real-time performance tracking</strong>—delivered seamlessly without polluting the UI with synthetic AI jargon or sci-fi visual gimmicks.
                  </p>
                  <div className="space-y-2 pt-2 text-[11px] border-t border-[#EBE7DF]">
                    <div className="p-2 bg-[#F2EDE4] rounded text-[#3D3830]">
                      <span className="font-semibold text-[#8A7963] block text-[10px] uppercase">RULE:</span>
                      Advanced backend technology wrapped in elegant, timeless human design.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* BANNED AESTHETICS (WHAT THE WEBSITE SHOULD NEVER LOOK LIKE) */}
            <div className="space-y-8 pt-8 border-t border-[#DCD6CA]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#EBE7DF] pb-3 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-800 font-semibold">STRICT PROHIBITION MATRIX</span>
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[#1A1A1A]">Things The Website Should NEVER Look Like</h3>
                </div>
                <span className="text-xs font-mono text-red-800 bg-red-100/60 px-2.5 py-1 rounded">6 BANNED AESTHETICS</span>
              </div>

              <p className="text-sm text-[#5A5245] max-w-3xl leading-relaxed">
                To preserve the editorial prestige and institutional trust of Valtreon Media Network, the design system strictly bans the following six ubiquitous visual tropes. Each represents a failure of brand alignment.
              </p>

              {/* Banned Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Anti-Pattern 1: Hacker Dashboard */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <Terminal className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">1. Hacker Dashboard</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Green-on-black monospace text, terminal prompts, ASCII art, and raw command line feeds signal unsanctioned underground operations.
                  </p>
                </div>

                {/* Anti-Pattern 2: AI Dashboard */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <Bot className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">2. AI Dashboard</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Glowing purple/cyan gradients, floating prompt text boxes, pulsing orb animations, and synthetic particle waves feel cheap and automated.
                  </p>
                </div>

                {/* Anti-Pattern 3: SaaS Dashboard */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <LayoutGrid className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">3. SaaS Dashboard</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Dense multi-column sidebars, packed data tables with 50 status pills, sticky chat widgets, and frantic analytics cards clutter the public layout.
                  </p>
                </div>

                {/* Anti-Pattern 4: Crypto UI */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <Coins className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">4. Crypto UI</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Flashing "To the Moon" tickers, web3 wallet connect buttons, dark-mode glassmorphism overload, and volatile speculative charts signal risk.
                  </p>
                </div>

                {/* Anti-Pattern 5: Cyberpunk */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <Cpu className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">5. Cyberpunk</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Glitch animations, neon pink/cyan overlays, scan lines, HUD crosshairs, and dystopian sci-fi fonts ruin editorial dignity.
                  </p>
                </div>

                {/* Anti-Pattern 6: Gaming UI */}
                <div className="bg-[#FAF8F5] border-2 border-red-800/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                    <div className="flex items-center space-x-2.5 text-red-800">
                      <Gamepad2 className="w-5 h-5" />
                      <h4 className="text-lg font-serif-display font-semibold text-[#1A1A1A]">6. Gaming UI</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded font-bold">STRICTLY BANNED</span>
                  </div>
                  <p className="text-xs text-[#5A5245] leading-relaxed">
                    Health bar indicators, arcade badges, metallic borders, particle explosion buttons, and level-up meters trivialize enterprise investments.
                  </p>
                </div>

              </div>
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
          <p>© 2026 Valtreon Media Network. All Rights Reserved. Confidential Brand Personality & Design System Specification.</p>
        </div>
      </footer>
    </div>
  );
}
