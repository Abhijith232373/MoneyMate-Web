import React from 'react';

export default function MerchantBottomNav({ currentPath, navigate }) {
  const navItems = [
    { name: 'Home', icon: 'home', path: '/merchant/dashboard' },
    { name: 'Analytics', icon: 'analytics', path: '/merchant/earnings-reports' },
    { name: 'Wallet', icon: 'account_balance_wallet', path: '/merchant/payment-qr' },
    { name: 'Profile', icon: 'person', path: '/merchant/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface/95 backdrop-blur-xl md:hidden border-t border-outline-variant/20 shadow-[0_-4px_20px_rgba(108,56,248,0.1)] rounded-t-xl">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-transform ${
              isActive 
                ? 'text-primary font-bold scale-110' 
                : 'text-on-surface-variant hover:bg-surface-variant/50'
            }`}
          >
            <span 
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-label-sm text-label-sm mt-1">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
