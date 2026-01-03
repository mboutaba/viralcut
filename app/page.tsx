"use client";

import { useEffect, useState } from 'react';
import { Crown, ArrowLeft, Play, Sparkles, Zap, Video, Check, ChevronDown, Menu, X } from 'lucide-react';
  
import AuthModal from "@/components/AuthModal";
import Login from "@/components/Login";
import PhoneShowcase from "@/components/ui/PhoneShowcase";
import Footer from "@/components/layout/Footer";
 
import Register from "@/components/Register";
import { useRouter } from "next/navigation"; 

export default function LandingPage() {

   const [billingCycle, setBillingCycle] = useState('monthly');

    

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

  const [openFaq, setOpenFaq] = useState(0);
   const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("register");
const router = useRouter();

  // useEffect(() => {
  //     async function fetchUser() {
       
  //        const res = await fetch("/api/me");
  //         const data = await res.json();
   
  
  //        if (data.success) {
          
  //            router.push("/dashboard");
            
  //           return; 
  //         }
  //       }

  //     fetchUser();
  //   }, []);



  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Generation",
      description: "Create engaging short-form videos in seconds with our advanced AI engine"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Batch Processing",
      description: "Generate dozens of videos at once to fill your content calendar instantly"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Multiple Niches",
      description: "From meditation to finance tips, create content for any trending category"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "29",
      features: ["50 videos/month", "5 niches", "720p quality", "Basic templates", "Email support"],
      popular: false
      //clickEvent: "onClick=()=>{(router.push("/payment"))}"
    },
    {
      name: "Professional",
      price: "79",
      features: ["200 videos/month", "All niches", "1080p quality", "Premium templates", "Priority support", "Custom branding"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      features: ["Unlimited videos", "All niches", "4K quality", "Custom templates", "Dedicated support", "API access", "White label"],
      popular: false
    }
  ];

  const faqs = [
    {
      q: "What is this product?",
      a: "Currently a prototype; full AI-powered social media shorts generation coming soon ..."
    },
    {
      q: "How quickly can I generate videos?",
      a: "Most videos are generated in under 60 seconds. Batch processing allows you to create multiple videos simultaneously."
    },
    {
      q: "Can I customize the videos?",
      a: "Yes! You can customize colors, fonts, logos, music, and more to match your brand identity."
    },
    {
      q: "What video formats are supported?",
      a: "We optimize for TikTok (9:16), Instagram Reels (9:16), and YouTube Shorts (9:16) with proper dimensions and duration."
    },
    {
      q: "Do I own the generated videos?",
      a: "Absolutely. You have full commercial rights to all videos generated on our platform."
    }
  ];

  return (

     <div>
       <AuthModal isOpen={open} onClose={() => setOpen(false)}>
        {mode === "register" ? (
         <Register switchToLogin={() => setMode("login")} />
         
        ) : (
          <Login switchToRegister={() => setMode("register")} />
        )}
      </AuthModal>

    <div className="min-h-screen  bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ShortGen</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-purple-400 transition">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
              <a href="#faq" className="hover:text-purple-400 transition">FAQ</a>
             
              <button 
        onClick={() => {setOpen(true) ; setMode("login");}} className=" px-4 py-2 text-purple-400 hover:text-purple-300 
              transition-transform duration-150 active:scale-95">Log In</button>

              <button
        onClick={() => {setOpen(true) ; setMode("register");}} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
              rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-150 active:scale-95 ">Start Free Trial</button>
            
            </div>
            {/* <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button> */}
          </div>
        </div>

        {/* {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block hover:text-purple-400 transition">Features</a>
              <a href="#pricing" className="block hover:text-purple-400 transition">Pricing</a>
              <a href="#faq" className="block hover:text-purple-400 transition">FAQ</a>
              <button className="w-full px-4 py-2 text-left text-purple-400 hover:text-purple-300 transition">Log In</button>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        )} */}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI-Powered Video Generation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Create Viral Short-Form Videos in Seconds
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Generate hundreds of engaging TikToks, Reels, and Shorts with our AI-powered platform.
              Perfect for creators, agencies, and brands looking to scale their content production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick= {()=>router.push("/register")} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
                Start Creating Free
              </button>
              {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-lg font-semibold hover:bg-white/20 transition">
                Watch Demo
              </button> */}
            </div>
          </div>
           <div>
           
           </div>
          

          
        </div>
      </section>

 <section id="showcase" className="py-28 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex justify-center">
              <PhoneShowcase />
            
          </div>
</section>

 

      {/* Features Section */}
      <section id="features" className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Scale</h2>
            <p className="text-xl text-slate-400">Powerful features designed for content creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-slate-400">Videos Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5K+</div>
              <div className="text-slate-400">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-slate-400">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}



      
         <section id="pricing" className="py-32 px-4">
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

         
      </div>
    </section>
       
    

      {/* FAQ Section */}
      <section id="faq" className="py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? 0 : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition"
                >
                  <span className="font-semibold text-left">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-slate-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     <Footer/>


    </div> </div>
  );
}