"use client"

import { useState } from 'react';
import { Check, Sparkles, Zap, Crown, ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation"; 
import  Header  from "@/components/layout/Header";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');

    const router = useRouter();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individual creators',
      icon: <Sparkles className="w-6 h-6" />,
      monthlyPrice: 19,
      annualPrice: 180, // $15/month when billed annually
      popular: false,
      features: [
        '30 videos per month',
        '720p HD quality',
        'Basic templates',
        'Standard processing speed',
        'Email support',
        'Watermark removal'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For serious content creators',
      icon: <Zap className="w-6 h-6" />,
      monthlyPrice: 49,
      annualPrice: 468, // $39/month when billed annually
      popular: true,
      features: [
        '150 videos per month',
        '1080p Full HD quality',
        'Premium templates',
        'Priority processing',
        'Priority support',
        'Custom branding',
        'Advanced editing tools',
        'Analytics dashboard'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For agencies and teams',
      icon: <Crown className="w-6 h-6" />,
      monthlyPrice: 149,
      annualPrice: 1428, // $119/month when billed annually
      popular: false,
      features: [
        'Unlimited videos',
        '1080p Full HD quality',
        'All premium templates',
        'Instant processing',
        'Dedicated support',
        'White-label options',
        'API access',
        'Team collaboration',
        'Custom integrations',
        'Priority rendering'
      ]
    }
  ];

  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 lg:p-8">
        <Header /> 
  <section id="pricing" className="pt-16 py-20 px-4 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="relative mb-8">
            {/* Back Button - Absolute positioned on left */}
            <button 
              onClick={() => {router.push("/dashboard")}}
              className="group absolute left-0 top-0 flex items-center justify-center w-20 h-20   hover:bg-white/10 backdrop-blur-sm   hover:border-purple-500/50 rounded-xl transition-all duration-300"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
            </button>

            {/* Header Text - Centered */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-400">
                Choose the plan that fits your content creation needs
              </p>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-lg font-semibold transition relative ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const displayPrice = billingCycle === 'monthly' 
              ? price 
              : Math.round(price / 12);
            const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice);

            return (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20'
                    : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                    : 'bg-white/10'
                }`}>
                  {plan.icon}
                </div>

                {/* Plan Name & Description */}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">${displayPrice}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-green-400 font-semibold">
                        ${price} billed annually
                      </p>
                      <p className="text-xs text-slate-400">
                        Save ${savings.savings} ({savings.percentage}%) per year
                      </p>
                    </div>
                  )}
                  {billingCycle === 'monthly' && (
                    <p className="mt-2 text-sm text-slate-400">
                      Billed monthly
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-purple-400' : 'text-slate-400'
                      }`} />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 text-white transform hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                  }`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>

                {plan.popular && (
                  <p className="text-center text-sm text-purple-300 mt-3">
                    ✨ 14-day free trial • No credit card required
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            All plans include access to our core AI video generation engine
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Secure payment
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              24/7 support
            </span>
          </div>
        </div>

        {/* Enterprise Contact */}
        <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3 text-white">Need a custom solution?</h3>
          <p className="text-slate-400 mb-6">
            For larger teams or specific requirements, we offer custom enterprise plans with volume discounts, dedicated infrastructure, and personalized support.
          </p>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold text-white transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}