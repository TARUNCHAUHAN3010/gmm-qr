import React, { useState, useEffect, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Sparkles,
  HelpCircle,
  QrCode,
  Check,
  Star,
  ArrowUpRight,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import {
  REVIEW_SUGGESTIONS,
  CATEGORIES,
  OFFICIAL_CONFIG,
  TARGET_KEYWORDS,
  Language,
  CategoryKey,
  ReviewSuggestion
} from './data/reviewsData';
import { ReviewCard } from './components/ReviewCard';
import { QRCodeSection } from './components/QRCodeSection';
import { HostingerGuideModal } from './components/HostingerGuideModal';

export default function App() {
  // Language State: 'en' or 'hi'
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('gm_review_lang');
    return saved === 'hi' ? 'hi' : 'en';
  });

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLangFilter, setSelectedLangFilter] = useState<'all' | 'en' | 'hi'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Drafts State: stored in LocalStorage
  const [drafts, setDrafts] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('gm_review_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hostinger Guide Modal State
  const [isHostingerModalOpen, setIsHostingerModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('gm_review_lang', lang);
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('gm_review_drafts', JSON.stringify(drafts));
    } catch (e) {
      console.error('Failed to save drafts to localStorage', e);
    }
  }, [drafts]);

  const handleTextChange = (id: number, text: string) => {
    setDrafts((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  const handleResetSuggestion = (id: number) => {
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setToastMessage(
      lang === 'hi' ? 'मूल टेम्पलेट बहाल कर दिया गया।' : 'Template reset to original.'
    );
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedLangFilter('all');
    setSearchQuery('');
  };

  const filteredSuggestions = useMemo(() => {
    return REVIEW_SUGGESTIONS.filter((item) => {
      if (selectedLangFilter !== 'all' && item.language !== selectedLangFilter) {
        return false;
      }

      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const currentContent = drafts[item.id] || item.template;
        const catObj = CATEGORIES.find((c) => c.key === item.category);
        const catEn = catObj?.labelEn.toLowerCase() || '';
        const catHi = catObj?.labelHi.toLowerCase() || '';

        const matchText = currentContent.toLowerCase().includes(q);
        const matchCategory = catEn.includes(q) || catHi.includes(q);
        const matchId = String(item.id).includes(q);

        if (!matchText && !matchCategory && !matchId) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedLangFilter, searchQuery, drafts]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#4A0E17]/10 selection:text-[#4A0E17]">
      {/* ============================================================== */}
      {/* 1. TOP BAR (Responsive 3-zone contract, mobile-optimized)       */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/60 no-print">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href={OFFICIAL_CONFIG.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 min-w-0"
            title="Visit girdharmorarimathura.com"
          >
            <span className="font-heritage text-base sm:text-lg font-bold tracking-tight text-[#4A0E17] group-hover:text-stone-900 transition-colors truncate">
              Girdhar Morari
            </span>
            <span className="hidden sm:inline text-[11px] font-medium text-stone-400 group-hover:text-stone-600 transition-colors">
              · Mathura
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-600">
            <a
              href="#suggestions-section"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'सुझाव (100)' : 'Suggestions (100)'}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'मार्गदर्शिका' : 'Workflow'}
            </a>
            <a
              href="#google-review-cta"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'Google समीक्षा' : 'Google Review'}
            </a>
            <a
              href="#qr-generator"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'काउंटर स्टैंडी' : 'In-Store Standee'}
            </a>
            <button
              type="button"
              onClick={() => setIsHostingerModalOpen(true)}
              className="text-[#D97706] hover:text-[#B45309] transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'होस्टिंगर गाइड' : 'Deploy Static'}
            </button>
          </nav>

          {/* Zone 3: Actions & Language Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Minimalist Segmented Language Switch */}
            <div className="flex items-center p-0.5 bg-stone-200/60 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setLang('en');
                  if (selectedLangFilter === 'hi') setSelectedLangFilter('en');
                }}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  setLang('hi');
                  if (selectedLangFilter === 'en') setSelectedLangFilter('hi');
                }}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  lang === 'hi'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Primary Action Button (Responsive text) */}
            <a
              href={OFFICIAL_CONFIG.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 h-8.5 sm:h-9 px-2.5 sm:px-3.5 bg-[#4A0E17] text-white text-[11px] sm:text-xs font-medium rounded-xl hover:bg-[#60121E] transition-all shadow-2xs whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <span>{lang === 'hi' ? 'समीक्षा' : 'Review'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200/80 bg-[#FAF8F5] px-4 py-3 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <a
              href="#suggestions-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-xs font-medium text-stone-700 hover:text-[#4A0E17]"
            >
              {lang === 'hi' ? 'सुझाव पुस्तकालय (100)' : 'Review Suggestions (100)'}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-xs font-medium text-stone-700 hover:text-[#4A0E17]"
            >
              {lang === 'hi' ? 'मार्गदर्शिका (Workflow)' : 'Workflow'}
            </a>
            <a
              href="#google-review-cta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-xs font-medium text-stone-700 hover:text-[#4A0E17]"
            >
              {lang === 'hi' ? 'Google समीक्षा' : 'Google Review'}
            </a>
            <a
              href="#qr-generator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-xs font-medium text-stone-700 hover:text-[#4A0E17]"
            >
              {lang === 'hi' ? 'काउंटर स्टैंडी' : 'In-Store Standee'}
            </a>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsHostingerModalOpen(true);
              }}
              className="block w-full text-left py-2 text-xs font-medium text-[#D97706]"
            >
              {lang === 'hi' ? 'होस्टिंगर गाइड' : 'Deploy Static Guide'}
            </button>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* 2. HERO SECTION (Fully Responsive Typography & Spacing)         */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-16 md:py-20 border-b border-stone-200/60 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Subtle Kicker */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-500 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0" />
            <span className="truncate">Girdhar Morari · Mathura, UP</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heritage text-[#4A0E17] tracking-tight mb-3 sm:mb-4 text-balance leading-tight sm:leading-tight">
            {lang === 'hi' ? 'अपना अनुभव साझा करें' : 'Share your genuine experience.'}
          </h1>

          <p className="text-xs sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-6 font-normal">
            {lang === 'hi'
              ? 'मथुरा स्थित गिरधर मुरारी में अपने वास्तविक अनुभव को शब्दों में ढालने के लिए 100 निष्पक्ष सुझावों में से चुनें। किसी भी टेम्पलेट को संपादित करें, कॉपी करें और Google पर स्वतंत्र रूप से पोस्ट करें।'
              : 'Choose from 100 neutral, editable writing templates to articulate your genuine stay or visit at Girdhar Morari in Mathura. Personalize the bracketed details, copy, and publish on Google.'}
          </p>

          {/* Minimalist Landmark Tags (Responsive wrapping) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => setSearchQuery('Guest House near Dwarika dheesh')}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-600 bg-white border border-stone-200/80 hover:border-stone-400 px-2.5 py-1 sm:px-3 rounded-full shadow-2xs transition-all max-w-full truncate"
            >
              <MapPin className="w-3 h-3 text-[#D97706] shrink-0" />
              <span className="truncate">Guest House near Dwarika dheesh</span>
            </button>

            <button
              type="button"
              onClick={() => setSearchQuery('hotel near vishram ghar')}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-600 bg-white border border-stone-200/80 hover:border-stone-400 px-2.5 py-1 sm:px-3 rounded-full shadow-2xs transition-all max-w-full truncate"
            >
              <MapPin className="w-3 h-3 text-[#D97706] shrink-0" />
              <span className="truncate">hotel near vishram ghar</span>
            </button>

            <button
              type="button"
              onClick={() => setSearchQuery('gujrat samaj guest house')}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-600 bg-white border border-stone-200/80 hover:border-stone-400 px-2.5 py-1 sm:px-3 rounded-full shadow-2xs transition-all max-w-full truncate"
            >
              <MapPin className="w-3 h-3 text-[#D97706] shrink-0" />
              <span className="truncate">gujrat samaj guest house</span>
            </button>
          </div>

          {/* Primary Action Row (Full width on mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">
            <a
              href={OFFICIAL_CONFIG.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 bg-[#4A0E17] text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-[#60121E] shadow-xs active:scale-[0.98] transition-all"
            >
              <span>{lang === 'hi' ? 'Google पर समीक्षा लिखें' : 'Write a Google Review'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#qr-generator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 bg-white text-stone-800 border border-stone-200 text-xs sm:text-sm font-medium rounded-xl hover:bg-stone-50 active:scale-[0.98] transition-all"
            >
              <QrCode className="w-4 h-4 text-[#D97706]" />
              <span>{lang === 'hi' ? 'काउंटर QR स्टैंडी' : 'In-Store QR Standee'}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsHostingerModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 h-11 px-4 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-stone-400" />
              <span>{lang === 'hi' ? 'होस्टिंगर गाइड' : 'Deploy Guide'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 4-STEP WORKFLOW (Responsive grid)                            */}
      {/* ============================================================== */}
      <section id="how-it-works" className="py-8 sm:py-10 border-b border-stone-200/60 no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[#D97706]">01</span>
              <h3 className="text-xs font-bold text-stone-900">
                {lang === 'hi' ? 'सुझाव चुनें' : 'Select Suggestion'}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-stone-500 leading-normal">
                {lang === 'hi'
                  ? 'अपनी यात्रा या प्रवास से मेल खाता टेम्पलेट चुनें।'
                  : 'Find a template matching your stay or visit.'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[#D97706]">02</span>
              <h3 className="text-xs font-bold text-stone-900">
                {lang === 'hi' ? 'विवरण संपादित करें' : 'Personalize Text'}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-stone-500 leading-normal">
                {lang === 'hi'
                  ? 'कोष्ठक में अपना वास्तविक अनुभव दर्ज करें।'
                  : 'Customize the bracketed placeholders.'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[#D97706]">03</span>
              <h3 className="text-xs font-bold text-stone-900">
                {lang === 'hi' ? 'क्लिक करके कॉपी करें' : 'Copy to Clipboard'}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-stone-500 leading-normal">
                {lang === 'hi'
                  ? 'कॉपी करने से कोई समीक्षा स्वतः पोस्ट नहीं होती।'
                  : 'Copying saves text to your device clipboard.'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[#D97706]">04</span>
              <h3 className="text-xs font-bold text-stone-900">
                {lang === 'hi' ? 'Google पर पोस्ट करें' : 'Publish on Google'}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-stone-500 leading-normal">
                {lang === 'hi'
                  ? 'Google Business Profile पर अपनी इच्छानुसार रेटिंग दें।'
                  : 'Paste and submit your honest rating on Google.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. REVIEW SUGGESTIONS LIBRARY (Mobile-friendly layout)          */}
      {/* ============================================================== */}
      <section id="suggestions-section" className="py-8 sm:py-12 flex-1 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Status */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heritage text-[#4A0E17]">
                {lang === 'hi' ? 'समीक्षा सुझाव पुस्तकालय' : 'Review Suggestions Library'}
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                {lang === 'hi'
                  ? '10 श्रेणियों में 100 अद्वितीय, संपादन योग्य टेम्पलेट्स'
                  : '100 unique, editable templates across 10 genuine categories'}
              </p>
            </div>

            <div className="text-xs font-mono text-stone-500 tabular-nums">
              {lang === 'hi'
                ? `दिखाए जा रहे हैं: ${filteredSuggestions.length} / 100`
                : `Showing ${filteredSuggestions.length} of 100`}
            </div>
          </div>

          {/* Minimalist Search & Filter Console (No horizontal overflow on mobile) */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-stone-200/70 shadow-[0_2px_16px_rgba(0,0,0,0.02)] mb-6 sm:mb-8 space-y-3 sm:space-y-4">
            {/* Search Input Row + Language Switch */}
            <div className="flex flex-col md:flex-row gap-2.5">
              <div className="relative flex-1 min-w-0">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'hi'
                      ? 'सुझाव, श्रेणी या कीवर्ड खोजें (जैसे: द्वारिकाधीश, विश्राम घर)...'
                      : 'Search suggestions, category or landmark...'
                  }
                  className="w-full text-base sm:text-sm pl-10 pr-8 py-2.5 bg-stone-50/70 rounded-xl border border-stone-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#4A0E17]/40 text-stone-800 transition-colors min-w-0"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Language Filter Tabs (Full width grid on mobile for easy thumb tapping) */}
              <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center gap-1 p-1 bg-stone-100/70 rounded-xl shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedLangFilter('all')}
                  className={`py-1.5 px-2 text-center text-xs font-medium rounded-lg transition-all whitespace-nowrap truncate ${
                    selectedLangFilter === 'all'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {lang === 'hi' ? 'सभी (100)' : 'All (100)'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLangFilter('en')}
                  className={`py-1.5 px-2 text-center text-xs font-medium rounded-lg transition-all whitespace-nowrap truncate ${
                    selectedLangFilter === 'en'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  EN (50)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLangFilter('hi')}
                  className={`py-1.5 px-2 text-center text-xs font-medium rounded-lg transition-all whitespace-nowrap truncate ${
                    selectedLangFilter === 'hi'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  हिंदी (50)
                </button>
              </div>
            </div>

            {/* Landmark Quick Filter Tags */}
            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mr-1">
                {lang === 'hi' ? 'स्थल फ़िल्टर:' : 'Landmarks:'}
              </span>
              {TARGET_KEYWORDS.map((kw) => {
                const isKwActive = searchQuery.toLowerCase().includes(kw.keyword.toLowerCase());
                return (
                  <button
                    key={kw.key}
                    type="button"
                    onClick={() => {
                      if (isKwActive) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(kw.keyword);
                      }
                    }}
                    className={`px-2.5 py-1 text-[11px] sm:text-xs rounded-lg transition-all truncate max-w-full ${
                      isKwActive
                        ? 'bg-[#4A0E17] text-white shadow-2xs font-medium'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <span>{kw.keyword}</span>
                  </button>
                );
              })}
            </div>

            {/* Horizontal Category Strip (Edge-to-edge scroll on mobile) */}
            <div className="pt-2 border-t border-stone-100">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all shrink-0 ${
                    selectedCategory === 'all'
                      ? 'bg-stone-900 text-white shadow-2xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {lang === 'hi' ? 'सभी श्रेणियां' : 'All Categories'}
                </button>

                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  const label = lang === 'hi' ? cat.labelHi : cat.labelEn;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all shrink-0 ${
                        isActive
                          ? 'bg-stone-900 text-white shadow-2xs'
                          : 'text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters Clear Bar */}
            {(selectedCategory !== 'all' || selectedLangFilter !== 'all' || searchQuery) && (
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="truncate mr-2">
                  {lang === 'hi'
                    ? 'फ़िल्टर सक्रिय हैं। कार्ड ड्राफ्ट सुरक्षित हैं।'
                    : 'Active filters. Drafts remain saved.'}
                </span>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="font-medium text-[#4A0E17] hover:text-[#D97706] underline whitespace-nowrap shrink-0"
                >
                  {lang === 'hi' ? 'रीसेट फ़िल्टर' : 'Reset Filters'}
                </button>
              </div>
            )}
          </div>

          {/* Cards Grid */}
          {filteredSuggestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredSuggestions.map((item) => {
                const currentText = drafts[item.id] !== undefined ? drafts[item.id] : item.template;
                const catObj = CATEGORIES.find((c) => c.key === item.category);

                return (
                  <ReviewCard
                    key={item.id}
                    suggestion={item}
                    categoryInfo={catObj}
                    currentText={currentText}
                    onTextChange={handleTextChange}
                    onReset={handleResetSuggestion}
                    onCopySuccess={showToast}
                    lang={lang}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-stone-200/70 p-6 sm:p-8 max-w-md mx-auto">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                {lang === 'hi' ? 'कोई मेल खाने वाला सुझाव नहीं' : 'No Suggestions Found'}
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                {lang === 'hi'
                  ? 'अपनी खोज बदलें या फ़िल्टर रीसेट करें।'
                  : 'Try clearing your search keyword or selecting a different category.'}
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-xl hover:bg-stone-800"
              >
                {lang === 'hi' ? 'फ़िल्टर रीसेट करें' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. GOOGLE REVIEW CTA (Responsive Callout)                       */}
      {/* ============================================================== */}
      <section id="google-review-cta" className="py-10 sm:py-14 bg-white border-t border-stone-200/60 no-print">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-stone-200/70 shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#4A0E17] text-white flex items-center justify-center mx-auto mb-3 shadow-2xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heritage text-[#4A0E17] mb-2 leading-tight">
              {lang === 'hi'
                ? 'Google पर अपनी समीक्षा सबमिट करें'
                : 'Ready to Publish on Google?'}
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-5 sm:mb-6 font-normal">
              {lang === 'hi'
                ? 'नीचे दिए गए बटन पर क्लिक करें। Google का आधिकारिक समीक्षा पृष्ठ खुलेगा जहाँ आप कॉपी किया हुआ टेक्स्ट चिपकाकर स्वतंत्र रूप से स्टार रेटिंग दे सकते हैं।'
                : 'Click below to open the official Google review form for Girdhar Morari. Paste your personalized text and choose your star rating.'}
            </p>

            <a
              href={OFFICIAL_CONFIG.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-7 bg-[#4A0E17] text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-[#60121E] shadow-xs active:scale-[0.98] transition-all"
            >
              <span>{lang === 'hi' ? 'Google पर समीक्षा लिखें' : 'Write a Google Review'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-4 text-[11px] text-stone-400 font-mono truncate">
              g.page/r/CfcwIoRWwFg7EBM/review
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. QR CODE STANDee GENERATOR                                  */}
      {/* ============================================================== */}
      <QRCodeSection lang={lang} />

      {/* ============================================================== */}
      {/* 7. SITE FOOTER (Responsive columns & padding)                  */}
      {/* ============================================================== */}
      <footer className="bg-white border-t border-stone-200/60 py-10 sm:py-12 text-stone-500 no-print pb-24 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8">
            <div className="md:col-span-5">
              <h3 className="font-heritage text-base font-bold text-[#4A0E17] mb-2">
                Girdhar Morari, Mathura
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-3 max-w-sm">
                Guest House near Dwarika dheesh · Hotel near Vishram Ghar · Gujrat Samaj Guest House, Mathura, Uttar Pradesh.
              </p>
              <a
                href={OFFICIAL_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706] hover:text-[#B45309]"
              >
                <span>girdharmorarimathura.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="md:col-span-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2 sm:mb-3">
                {lang === 'hi' ? 'त्वरित लिंक' : 'Navigation'}
              </div>
              <ul className="text-xs space-y-2">
                <li>
                  <a href="#suggestions-section" className="hover:text-stone-900 transition-colors">
                    {lang === 'hi' ? 'सुझाव पुस्तकालय (100)' : 'Review Suggestions (100)'}
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
                    {lang === 'hi' ? 'प्रक्रिया' : 'Workflow'}
                  </a>
                </li>
                <li>
                  <a href="#qr-generator" className="hover:text-stone-900 transition-colors">
                    {lang === 'hi' ? 'काउंटर QR स्टैंडी' : 'In-Store QR Standee'}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsHostingerModalOpen(true)}
                    className="hover:text-stone-900 transition-colors text-left"
                  >
                    {lang === 'hi' ? 'होस्टिंगर गाइड' : 'Hostinger Deploy Guide'}
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2 sm:mb-3">
                {lang === 'hi' ? 'समीक्षा शुचिता एवं गोपनीयता' : 'Privacy & Integrity'}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                {lang === 'hi'
                  ? 'यह सहायक वेबसाइट कोई व्यक्तिगत डेटा एकत्र नहीं करती। सभी ड्राफ्ट केवल आपके ब्राउज़र में सुरक्षित रहते हैं। कोई समीक्षा स्वतः पोस्ट नहीं होती।'
                  : 'This application collects no customer data, accounts, or tracking cookies. All edits remain stored in your local browser.'}
              </p>
              <p className="text-xs text-stone-400 font-mono">
                Official Google Review Link: g.page/r/CfcwIoRWwFg7EBM/review
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
            <div>
              &copy; {new Date().getFullYear()} Girdhar Morari, Mathura. All rights reserved.
            </div>
            <div>
              Associated with girdharmorarimathura.com
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-stone-900 text-white px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 text-xs border border-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-[90vw]"
        >
          <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span className="truncate">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-1 text-stone-400 hover:text-white"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* Mobile Sticky Quick CTA Bar (Bottom Thumb Zone) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg no-print flex items-center gap-2">
        <a
          href={OFFICIAL_CONFIG.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 bg-[#4A0E17] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]"
        >
          <span>{lang === 'hi' ? 'Google पर समीक्षा लिखें' : 'Write a Google Review'}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="#qr-generator"
          className="w-11 h-11 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center border border-stone-200 active:scale-[0.98]"
          title="QR Standee"
        >
          <QrCode className="w-5 h-5 text-[#D97706]" />
        </a>
      </div>

      {/* Hostinger Deployment Guide Modal */}
      <HostingerGuideModal
        isOpen={isHostingerModalOpen}
        onClose={() => setIsHostingerModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
