import React from 'react';
import { X, Server, CheckCircle2, HelpCircle } from 'lucide-react';
import { OFFICIAL_CONFIG } from '../data/reviewsData';

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'hi';
}

export const HostingerGuideModal: React.FC<HostingerGuideModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8 max-h-[88vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-white px-6 py-4.5 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4A0E17] text-white flex items-center justify-center">
              <Server className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900 font-heritage">
                {lang === 'hi'
                  ? 'होस्टिंगर (Hostinger) परिनियोजन निर्देश'
                  : 'Hostinger Static Deployment Guide'}
              </h3>
              <p className="text-[11px] text-stone-400">
                girdharmorarimathura.com · Zero Backend Required
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-stone-600">
          {/* Quick Architecture Summary */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
            <div className="flex items-center gap-1.5 font-semibold text-stone-800 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'hi' ? '100% क्लाइंट-साइड आर्किटेक्चर' : 'Zero-Dependency Static Architecture'}</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11.5px]">
              {lang === 'hi'
                ? 'यह समीक्षा सहायक 100% शुद्ध HTML5, CSS3 और Vanilla JS पर चलता है। किसी Node.js सर्वर, डेटाबेस या API की आवश्यकता नहीं है। इसे सीधे होस्टिंगर के public_html में अपलोड किया जा सकता है।'
                : 'This application runs 100% client-side (HTML5 + CSS3 + Vanilla JavaScript with Canvas QR). It requires no Node.js runtime, build server, or database, and deploys directly into Hostinger public_html in under 2 minutes.'}
            </p>
          </div>

          {/* 4 Step Process */}
          <div>
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5">
              {lang === 'hi' ? 'परिनियोजन चरण (Step-by-Step):' : 'Deployment Steps:'}
            </div>
            <div className="space-y-2.5">
              <div className="flex gap-3 items-start p-3 bg-white rounded-xl border border-stone-200/70">
                <span className="font-mono text-xs font-bold text-[#D97706] shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {lang === 'hi' ? 'होस्टिंगर hPanel में लॉगिन करें' : 'Log into Hostinger hPanel'}
                  </h4>
                  <p className="text-stone-500 mt-0.5 text-[11.5px]">
                    Go to <strong>hpanel.hostinger.com</strong> → Click <strong>Websites</strong> → Select <strong>girdharmorarimathura.com</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white rounded-xl border border-stone-200/70">
                <span className="font-mono text-xs font-bold text-[#D97706] shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {lang === 'hi' ? 'File Manager खोलें' : 'Open File Manager → public_html'}
                  </h4>
                  <p className="text-stone-500 mt-0.5 text-[11.5px]">
                    Under <strong>Files</strong>, click <strong>File Manager</strong>. Navigate into <code>public_html/</code> (or create <code>public_html/reviews/</code>).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white rounded-xl border border-stone-200/70">
                <span className="font-mono text-xs font-bold text-[#D97706] shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {lang === 'hi' ? 'फाइलें अपलोड करें' : 'Upload Standalone Files'}
                  </h4>
                  <p className="text-stone-500 mt-0.5 text-[11.5px]">
                    Upload <code>index.html</code>, <code>style.css</code>, and <code>script.js</code> from the standalone bundle directly to the folder.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white rounded-xl border border-stone-200/70">
                <span className="font-mono text-xs font-bold text-[#D97706] shrink-0 mt-0.5">
                  04
                </span>
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {lang === 'hi' ? 'SSL व मोबाइल पर परीक्षण करें' : 'Verify SSL & Test on Smartphone'}
                  </h4>
                  <p className="text-stone-500 mt-0.5 text-[11.5px]">
                    Confirm Free SSL is active under <strong>Security → SSL</strong>, then visit <code>https://girdharmorarimathura.com</code> on mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Local testing */}
          <div>
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              {lang === 'hi' ? 'लोकल टेस्टिंग:' : 'Local Testing Command:'}
            </div>
            <div className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[11px] leading-relaxed">
              <span className="text-stone-500"># Run quick local server</span><br />
              npx serve public/standalone<br />
              <span className="text-stone-500"># or python</span><br />
              python3 -m http.server 8080
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
          <span className="text-[11px] text-stone-400 font-mono">
            {OFFICIAL_CONFIG.businessName}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="h-8.5 px-4 bg-stone-900 text-white text-xs font-medium rounded-xl hover:bg-stone-800 transition-colors"
          >
            {lang === 'hi' ? 'बंद करें' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
