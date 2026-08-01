import React, { useState } from 'react';
import MerchantSidebar from '../components/MerchantSidebar';
import MerchantNavbar from '../components/MerchantNavbar';
import MerchantBottomNav from '../components/MerchantBottomNav';
import PlanCard from '../components/PlanCard';

export default function ChoosePlan({ navigate, showToast }) {
  const currentPath = '/merchant/choose-plan';
  const [currentPlan, setCurrentPlan] = useState('Essential');

  const handleSelectPlan = (planName) => {
    if (planName === 'Enterprise') {
      if (showToast) showToast('Redirecting to sales consultation scheduling...', 'info');
    } else {
      setCurrentPlan(planName);
      if (showToast) showToast(`Successfully switched to the ${planName} plan!`, 'success');
    }
  };

  const plans = [
    {
      title: "Essential",
      subtitle: "For new merchants starting their loyalty and scan payments journey.",
      price: "₹0",
      billingCycle: "/mo",
      buttonText: currentPlan === 'Essential' ? "Active Plan" : "Downgrade to Essential",
      buttonType: "secondary",
      isCurrent: currentPlan === 'Essential',
      features: [
        { text: "Standard QR Payments" },
        { text: "1 Active Offer Campaign" },
        { text: "Standard Dashboard Analytics" },
        { text: "Support via email" },
        { text: "Custom API Integrations", included: false },
        { text: "Dedicated Account Manager", included: false },
      ]
    },
    {
      title: "Growth",
      subtitle: "For growing businesses wanting to supercharge sales and customer retention.",
      price: "₹2,499",
      billingCycle: "/mo",
      buttonText: currentPlan === 'Growth' ? "Active Plan" : "Upgrade to Growth",
      buttonType: "primary",
      isPopular: true,
      isCurrent: currentPlan === 'Growth',
      features: [
        { text: "Unlimited QR Payments" },
        { text: "5 Active Offer Campaigns" },
        { text: "Advanced Analytics & Insights" },
        { text: "SMS Customer Notifications" },
        { text: "Priority Email & Chat Support" },
        { text: "Custom API Integrations", included: false },
      ]
    },
    {
      title: "Enterprise",
      subtitle: "For large retail chains needing bespoke integrations and dedicated support.",
      price: "₹8,499",
      billingCycle: "/mo",
      buttonText: "Contact Sales",
      buttonType: "secondary",
      isCurrent: currentPlan === 'Enterprise',
      features: [
        { text: "Everything in Growth" },
        { text: "Unlimited Active Campaigns" },
        { text: "Custom API & Webhook Integrations", highlight: true },
        { text: "Dedicated Account Manager" },
        { text: "24/7 Phone & Slack Support" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <MerchantSidebar currentPath={currentPath} navigate={navigate} />

      <div className="flex-grow md:ml-[280px] flex flex-col min-w-0">
        {/* Top Navbar */}
        <MerchantNavbar currentPath={currentPath} navigate={navigate} />

        {/* Page Content */}
        <main className="p-6 md:px-12 md:py-10 space-y-8 w-full pb-24 md:pb-8 flex-grow">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-in">
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-background text-3xl">
              Choose Your Plan
            </h2>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pt-4 items-stretch animate-scale-up delay-100 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <PlanCard 
                key={idx} 
                {...plan} 
                onAction={() => handleSelectPlan(plan.title)} 
              />
            ))}
          </div>
        </main>

        {/* Mobile bottom nav */}
        <MerchantBottomNav currentPath={currentPath} navigate={navigate} />
      </div>
    </div>
  );
}
