import React from 'react';
import MerchantSidebar from '../components/MerchantSidebar';
import MerchantNavbar from '../components/MerchantNavbar';
import MerchantBottomNav from '../components/MerchantBottomNav';

export default function KYCStatus({ navigate, showToast }) {
  const currentPath = '/merchant/kyc-status';

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <MerchantSidebar currentPath={currentPath} navigate={navigate} />

      {/* Main Container */}
      <div className="flex-grow md:ml-64 flex flex-col">
        {/* Top Navbar */}
        <MerchantNavbar currentPath={currentPath} navigate={navigate} />

        {/* Page Content */}
        <main className="p-6 md:p-8 space-y-8 max-w-4xl w-full mx-auto pb-24 md:pb-8 flex-grow">
          {/* Header */}
          <div className="animate-fade-in">
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface text-3xl">KYC Status</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Review your business compliance documentation and verification status.</p>
          </div>

          <div className="space-y-6">
            {/* KYC status card */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-primary/20 shadow-lg relative overflow-hidden animate-scale-up">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2 text-lg">
                  <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <span>KYC Status</span>
                </h3>
                <span className="bg-tertiary/10 text-tertiary font-label-sm text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-tertiary/20 font-semibold">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  <span>Verified</span>
                </span>
              </div>
              
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Your business identity has been verified. You have full access to all merchant features and high transaction limits.
              </p>

              <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                <div className="flex justify-between items-center py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">description</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-bold text-sm">Shop License / Registration</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">Approved • Oct 12, 2023</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast && showToast('Viewing document placeholder...', 'info')}
                    className="text-primary hover:bg-primary/10 p-2 rounded transition-colors" 
                    title="View Document"
                  >
                    <span className="material-symbols-outlined text-md">visibility</span>
                  </button>
                </div>

                <div className="flex justify-between items-center py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">badge</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-bold text-sm">Aadhaar Card Document</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">Approved • Oct 12, 2023</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast && showToast('Viewing document placeholder...', 'info')}
                    className="text-primary hover:bg-primary/10 p-2 rounded transition-colors" 
                    title="View Document"
                  >
                    <span className="material-symbols-outlined text-md">visibility</span>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => showToast && showToast('Document upload panel is coming soon!', 'info')}
                  className="w-full py-2.5 border-2 border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary/5 transition-all flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined text-md">upload_file</span>
                  <span>Update Documents</span>
                </button>
                <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-3 opacity-70">
                  Next review due: Oct 2026
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile bottom nav */}
        <MerchantBottomNav currentPath={currentPath} navigate={navigate} />
      </div>
    </div>
  );
}
