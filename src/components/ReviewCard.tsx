import React, { useState } from 'react';
import { Copy, Check, RotateCcw, ArrowUpRight } from 'lucide-react';
import { ReviewSuggestion, CategoryInfo, OFFICIAL_CONFIG } from '../data/reviewsData';

interface ReviewCardProps {
  suggestion: ReviewSuggestion;
  categoryInfo?: CategoryInfo;
  currentText: string;
  onTextChange: (id: number, text: string) => void;
  onReset: (id: number) => void;
  onCopySuccess: (message: string) => void;
  lang: 'en' | 'hi';
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  suggestion,
  categoryInfo,
  currentText,
  onTextChange,
  onReset,
  onCopySuccess,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const isEdited = currentText !== suggestion.template;
  const charCount = currentText.length;
  const wordCount = currentText.trim() === '' ? 0 : currentText.trim().split(/\s+/).length;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      const msg = lang === 'hi'
        ? 'समीक्षा कॉपी हो गई! कृपया अपने वास्तविक अनुभव के अनुसार इसे संपादित करें।'
        : 'Text copied! Please personalize it to reflect your genuine experience.';
      onCopySuccess(msg);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      prompt(
        lang === 'hi'
          ? 'टेक्स्ट कॉपी करने के लिए Ctrl+C / Cmd+C दबाएं:'
          : 'Press Ctrl+C / Cmd+C to copy this text:',
        currentText
      );
    }
  };

  const getToneDetails = () => {
    switch (suggestion.tone) {
      case 'positive':
        return {
          label: lang === 'hi' ? 'सकारात्मक' : 'Positive',
          dot: 'bg-emerald-500',
          textColor: 'text-stone-600',
        };
      case 'neutral':
        return {
          label: lang === 'hi' ? 'संतुलित' : 'Balanced',
          dot: 'bg-amber-500',
          textColor: 'text-stone-600',
        };
      case 'constructive':
        return {
          label: lang === 'hi' ? 'सुधार सुझाव' : 'Feedback',
          dot: 'bg-rose-500',
          textColor: 'text-stone-600',
        };
    }
  };

  const tone = getToneDetails();
  const categoryLabel = lang === 'hi'
    ? (categoryInfo?.labelHi || categoryInfo?.labelEn)
    : (categoryInfo?.labelEn || categoryInfo?.labelHi);

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/70 hover:border-stone-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between w-full min-w-0">
      <div>
        {/* Unboxed Minimalist Metadata Header */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-100">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-stone-500 min-w-0">
            <span className="font-mono font-bold text-stone-400 shrink-0">
              #{String(suggestion.id).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="font-medium text-stone-700 truncate max-w-[130px] sm:max-w-[170px]">
              {categoryLabel}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="font-medium text-stone-400 uppercase text-[10px] tracking-wider shrink-0">
              {suggestion.language === 'hi' ? 'हिंदी' : 'EN'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-stone-500 shrink-0">
            <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} aria-hidden="true" />
            <span className={tone.textColor}>{tone.label}</span>
          </div>
        </div>

        {/* Modern Minimalist Textarea (16px base font on mobile avoids iOS Safari auto-zoom) */}
        <div className="relative mb-2.5">
          <label htmlFor={`review-textarea-${suggestion.id}`} className="sr-only">
            {lang === 'hi' ? `सुझाव #${suggestion.id} संपादित करें` : `Edit suggestion #${suggestion.id}`}
          </label>
          <textarea
            id={`review-textarea-${suggestion.id}`}
            value={currentText}
            onChange={(e) => onTextChange(suggestion.id, e.target.value)}
            rows={4}
            className={`w-full text-base sm:text-[13.5px] leading-relaxed text-stone-800 p-3 sm:p-3.5 rounded-xl border transition-all resize-y focus:outline-none focus:ring-1 focus:ring-[#4A0E17]/30 ${
              isEdited
                ? 'bg-[#FCFAF7] border-amber-300 shadow-2xs'
                : 'bg-stone-50/50 border-stone-200/80 hover:bg-white hover:border-stone-300'
            }`}
            placeholder={
              lang === 'hi'
                ? 'अपने वास्तविक अनुभव के अनुसार लिखें...'
                : 'Personalize with your genuine experience...'
            }
          />
        </div>

        {/* Tabular Numerals & Subtle Edit Flag */}
        <div className="flex items-center justify-between text-[11px] text-stone-400 mb-3 font-mono tabular-nums">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>{charCount} {lang === 'hi' ? 'अक्षर' : 'chars'}</span>
            <span aria-hidden="true" className="text-stone-200">/</span>
            <span>{wordCount} {lang === 'hi' ? 'शब्द' : 'words'}</span>
          </div>
          {isEdited && (
            <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded tracking-wide uppercase">
              {lang === 'hi' ? 'संपादित' : 'Edited'}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Bar */}
      <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleCopy}
            className={`h-9 sm:h-8.5 px-3.5 text-xs font-medium rounded-xl transition-all duration-150 flex items-center gap-1.5 active:scale-[0.97] ${
              copied
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[#4A0E17] text-white hover:bg-[#60121E] shadow-2xs'
            }`}
            title={lang === 'hi' ? 'समीक्षा कॉपी करें' : 'Copy Review Text'}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{lang === 'hi' ? 'कॉपी हो गया' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'कॉपी करें' : 'Copy Text'}</span>
              </>
            )}
          </button>

          {isEdited && (
            <button
              type="button"
              onClick={() => onReset(suggestion.id)}
              className="h-9 sm:h-8.5 px-2.5 text-xs text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors flex items-center gap-1"
              title={lang === 'hi' ? 'मूल टेम्पलेट पर वापस जाएं' : 'Reset to original'}
            >
              <RotateCcw className="w-3 h-3 text-stone-400" />
              <span className="hidden sm:inline">{lang === 'hi' ? 'रीसेट' : 'Reset'}</span>
            </button>
          )}
        </div>

        {copied && (
          <a
            href={OFFICIAL_CONFIG.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#4A0E17] hover:text-amber-700 flex items-center gap-0.5 transition-colors group/link py-1"
          >
            <span>{lang === 'hi' ? 'Google' : 'Review on Google'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </article>
  );
};
