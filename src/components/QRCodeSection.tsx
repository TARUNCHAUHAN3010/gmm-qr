import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Printer, AlertCircle, Sparkles, Smartphone } from 'lucide-react';
import { OFFICIAL_CONFIG } from '../data/reviewsData';

interface QRCodeSectionProps {
  lang: 'en' | 'hi';
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ lang }) => {
  const defaultAssistantUrl = typeof window !== 'undefined' && window.location.origin.includes('run.app')
    ? window.location.origin
    : 'https://girdharmorarimathura.com/reviews';

  const [activePreset, setActivePreset] = useState<'google' | 'assistant' | 'custom'>('google');
  const [urlInput, setUrlInput] = useState<string>(OFFICIAL_CONFIG.reviewUrl);
  const [includeBusinessName, setIncludeBusinessName] = useState<boolean>(true);
  const [includeInstructions, setIncludeInstructions] = useState<boolean>(true);
  const [standeeHeadline, setStandeeHeadline] = useState<string>(
    lang === 'hi' ? 'Google पर अपनी निष्पक्ष समीक्षा दें' : 'Scan to Review Us on Google'
  );
  
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState<boolean>(false);

  const handlePresetSelect = (preset: 'google' | 'assistant' | 'custom') => {
    setActivePreset(preset);
    setError(null);
    if (preset === 'google') {
      setUrlInput(OFFICIAL_CONFIG.reviewUrl);
    } else if (preset === 'assistant') {
      setUrlInput(defaultAssistantUrl);
    }
  };

  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const generateQRCode = async (targetUrl: string) => {
    if (!targetUrl || targetUrl.trim() === '') {
      setError(lang === 'hi' ? 'कृपया एक वैध URL दर्ज करें' : 'Please enter a valid URL');
      return;
    }

    if (!isValidUrl(targetUrl.trim())) {
      setError(
        lang === 'hi'
          ? 'अमान्य URL। कृपया https:// से शुरू होने वाला पूर्ण लिंक दर्ज करें।'
          : 'Invalid URL. Please enter a full URL starting with https://'
      );
      return;
    }

    try {
      setGenerating(true);
      setError(null);
      const dataUrl = await QRCode.toDataURL(targetUrl.trim(), {
        width: 600,
        margin: 2,
        color: {
          dark: '#380B12',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      });
      setQrDataUrl(dataUrl);
    } catch (err) {
      console.error('QR generation error:', err);
      setError(
        lang === 'hi'
          ? 'QR कोड बनाने में त्रुटि हुई। कृपया URL जांचें।'
          : 'Failed to generate QR code. Please check the URL.'
      );
    } finally {
      setGenerating(false);
    }
  };

  useEffect(() => {
    generateQRCode(urlInput);
  }, []);

  const handleDownload = () => {
    if (!qrDataUrl) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const qrImage = new Image();
    qrImage.onload = () => {
      const width = 800;
      const height = includeBusinessName ? 1040 : 840;
      canvas.width = width;
      canvas.height = height;

      // Clean white card background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Elegant minimal dark frame
      ctx.strokeStyle = '#4A0E17';
      ctx.lineWidth = 8;
      ctx.strokeRect(24, 24, width - 48, height - 48);

      // Saffron hairline inner accent
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.strokeRect(34, 34, width - 68, height - 68);

      let currentY = 88;

      if (includeBusinessName) {
        ctx.fillStyle = '#4A0E17';
        ctx.font = 'bold 36px "Cinzel", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText('GIRDHAR MORARI', width / 2, currentY);

        currentY += 32;
        ctx.fillStyle = '#D97706';
        ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
        ctx.letterSpacing = '2px';
        ctx.fillText('MATHURA • DWARIKADHISH & VISHRAM GHAT', width / 2, currentY);

        currentY += 34;
        ctx.fillStyle = '#1C1917';
        ctx.font = '600 22px "Plus Jakarta Sans", "Noto Sans Devanagari", sans-serif';
        ctx.fillText(standeeHeadline, width / 2, currentY);

        currentY += 24;
      }

      const qrSize = 510;
      const qrX = (width - qrSize) / 2;
      ctx.drawImage(qrImage, qrX, currentY, qrSize, qrSize);

      currentY += qrSize + 40;

      if (includeInstructions) {
        ctx.fillStyle = '#78716C';
        ctx.font = '15px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Open Camera or Google Lens to Scan', width / 2, currentY);
        currentY += 24;
      }

      ctx.fillStyle = '#4A0E17';
      ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(OFFICIAL_CONFIG.websiteUrl.replace('https://', ''), width / 2, currentY);

      const downloadLink = document.createElement('a');
      downloadLink.download = `Girdhar-Morari-Mathura-Standee-QR.png`;
      downloadLink.href = canvas.toDataURL('image/png');
      downloadLink.click();
    };
    qrImage.src = qrDataUrl;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="qr-generator" className="py-10 sm:py-16 bg-stone-100/40 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-8 sm:mb-12 no-print">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-stone-600 bg-white border border-stone-200/80 px-3 py-0.5 rounded-full mb-3 shadow-2xs">
            <QrCode className="w-3 h-3 text-[#D97706]" />
            <span>{lang === 'hi' ? 'काउंटर स्टैंडी जनरेटर' : 'In-Store Counter Standee'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-heritage text-stone-900 tracking-tight mb-2">
            {lang === 'hi' ? 'दुकान व काउंटर के लिए QR कोड' : 'Printable Counter QR Code'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            {lang === 'hi'
              ? 'मथुरा स्थित गिरधर मुरारी के काउंटर के लिए सुरुचिपूर्ण एक्रेलिक स्टैंडी तैयार करें और डाउनलोड करें।'
              : 'Generate an elegant high-resolution QR standee to display at the front desk or counter in Mathura.'}
          </p>
        </div>

        {/* Generator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Settings Panel */}
          <div className="lg:col-span-6 bg-white p-4 sm:p-7 rounded-2xl border border-stone-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.02)] no-print w-full min-w-0">
            <h3 className="text-sm font-bold text-stone-900 mb-3.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>{lang === 'hi' ? 'QR गंतव्य चुनें' : 'Select Destination URL'}</span>
            </h3>

            {/* Segmented Presets (Responsive layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-stone-100/70 rounded-xl mb-4 sm:mb-5">
              <button
                type="button"
                onClick={() => handlePresetSelect('google')}
                className={`py-2 px-2 text-xs font-medium rounded-lg text-center transition-all ${
                  activePreset === 'google'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {lang === 'hi' ? 'Google समीक्षा' : 'Google Review'}
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('assistant')}
                className={`py-2 px-2 text-xs font-medium rounded-lg text-center transition-all ${
                  activePreset === 'assistant'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {lang === 'hi' ? 'समीक्षा सहायक' : 'Assistant Site'}
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('custom')}
                className={`py-2 px-2 text-xs font-medium rounded-lg text-center transition-all ${
                  activePreset === 'custom'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {lang === 'hi' ? 'कस्टम लिंक' : 'Custom URL'}
              </button>
            </div>

            {/* Destination URL Input */}
            <div className="mb-4 sm:mb-5">
              <label htmlFor="qr-url-target" className="block text-xs font-medium text-stone-600 mb-1.5">
                {lang === 'hi' ? 'लक्षित URL (Target Link):' : 'Target Link:'}
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="qr-url-target"
                  type="url"
                  value={urlInput}
                  onChange={(e) => {
                    setUrlInput(e.target.value);
                    if (activePreset !== 'custom') setActivePreset('custom');
                  }}
                  placeholder="https://g.page/r/CfcwIoRWwFg7EBM/review"
                  className="flex-1 min-w-0 text-base sm:text-xs font-mono px-3.5 py-2.5 bg-stone-50/60 rounded-xl border border-stone-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#4A0E17]/40 text-stone-800"
                />
                <button
                  type="button"
                  onClick={() => generateQRCode(urlInput)}
                  disabled={generating}
                  className="h-10 px-4 bg-[#4A0E17] text-white text-xs font-medium rounded-xl hover:bg-[#60121E] transition-all disabled:opacity-50 active:scale-[0.98] shrink-0"
                >
                  {generating ? '...' : (lang === 'hi' ? 'अपडेट करें' : 'Update')}
                </button>
              </div>

              {error && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            {/* Customization Options */}
            <div className="pt-3.5 border-t border-stone-100 space-y-3 mb-5 sm:mb-6">
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                {lang === 'hi' ? 'कस्टमाइज़ेशन' : 'Standee Customization'}
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeBusinessName}
                  onChange={(e) => setIncludeBusinessName(e.target.checked)}
                  className="w-4 h-4 rounded text-[#4A0E17] focus:ring-[#D97706]"
                />
                <span className="text-xs text-stone-700 leading-snug">
                  {lang === 'hi' ? 'व्यवसाय का नाम प्रदर्शित करें (Girdhar Morari, Mathura)' : 'Display business title (Girdhar Morari, Mathura)'}
                </span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInstructions}
                  onChange={(e) => setIncludeInstructions(e.target.checked)}
                  className="w-4 h-4 rounded text-[#4A0E17] focus:ring-[#D97706]"
                />
                <span className="text-xs text-stone-700 leading-snug">
                  {lang === 'hi' ? 'कैमरा स्कैनिंग निर्देश शामिल करें' : 'Show camera scan prompt'}
                </span>
              </label>

              <div>
                <label className="block text-xs text-stone-600 mb-1">
                  {lang === 'hi' ? 'स्टैंडी शीर्षक:' : 'Headline:'}
                </label>
                <input
                  type="text"
                  value={standeeHeadline}
                  onChange={(e) => setStandeeHeadline(e.target.value)}
                  className="w-full text-base sm:text-xs px-3.5 py-2 bg-stone-50/60 rounded-xl border border-stone-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#4A0E17]/40 min-w-0"
                />
              </div>
            </div>

            {/* Action Buttons (Full width on mobile) */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!qrDataUrl}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 h-11 sm:h-10 px-4 bg-[#4A0E17] text-white text-xs font-medium rounded-xl hover:bg-[#60121E] shadow-2xs active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'PNG डाउनलोड करें' : 'Download Standee PNG'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                disabled={!qrDataUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 sm:h-10 px-4 bg-white text-stone-800 border border-stone-200 text-xs font-medium rounded-xl hover:bg-stone-50 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'प्रिंट करें' : 'Print Standee'}</span>
              </button>
            </div>

            {/* Phone Scan Tips */}
            <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-start gap-2.5">
              <Smartphone className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-500 space-y-0.5">
                <p>
                  <strong className="text-stone-700">iOS & Android:</strong> {lang === 'hi' ? 'सीधे फोन का कैमरा या Google Lens खोलकर QR कोड पर रखें।' : 'Point camera or Google Lens directly at the QR code to open link.'}
                </p>
              </div>
            </div>
          </div>

          {/* Standee Preview Column (Auto scales on small devices) */}
          <div className="lg:col-span-6 flex justify-center w-full min-w-0">
            <div className="w-full max-w-full sm:max-w-[390px] print-standee-card bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-stone-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
              {/* Minimalist Top Bar Marker */}
              <div className="w-12 h-1 bg-[#4A0E17] mx-auto rounded-full mb-4 sm:mb-5"></div>

              {/* Branding Header */}
              {includeBusinessName && (
                <div className="mb-3 sm:mb-4">
                  <div className="text-[10px] font-bold tracking-widest text-[#D97706] uppercase mb-1">
                    MATHURA • UTTAR PRADESH
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heritage text-[#4A0E17] tracking-tight">
                    GIRDHAR MORARI
                  </h3>
                  <p className="text-[11px] text-stone-400 font-medium mt-0.5 leading-snug">
                    Near Dwarika Dheesh Temple & Vishram Ghat
                  </p>
                </div>
              )}

              {/* Headline */}
              <h4 className="text-xs sm:text-sm font-semibold text-stone-800 mb-3 sm:mb-4 px-2">
                {standeeHeadline}
              </h4>

              {/* QR Code Container */}
              <div className="inline-block p-2 sm:p-4 bg-white rounded-2xl border border-stone-150 shadow-2xs mb-3 sm:mb-4 max-w-full">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="Girdhar Morari Google Review QR Code"
                    className="w-44 h-44 sm:w-56 sm:h-56 object-contain mx-auto"
                  />
                ) : (
                  <div className="w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center text-xs text-stone-400">
                    Generating...
                  </div>
                )}
              </div>

              {/* Target URL indicator */}
              <div className="text-[10px] font-mono text-stone-400 bg-stone-50 py-1.5 px-2.5 rounded-lg inline-block max-w-full truncate mb-3 sm:mb-4">
                {activePreset === 'google'
                  ? 'g.page/r/CfcwIoRWwFg7EBM/review'
                  : urlInput.replace('https://', '')}
              </div>

              {/* Helper prompt */}
              {includeInstructions && (
                <p className="text-xs text-stone-500 mb-2">
                  {lang === 'hi'
                    ? 'कृपया अपने फोन कैमरे से स्कैन करें और अनुभव साझा करें'
                    : 'Scan with smartphone camera to review'}
                </p>
              )}

              <a
                href={OFFICIAL_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#4A0E17] hover:text-[#D97706] transition-colors"
              >
                girdharmorarimathura.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
