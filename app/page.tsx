"use client";

import { useState } from 'react';
import { Play, Sparkles, Zap, Video, Check, ChevronDown, Menu, X } from 'lucide-react';
 
import AuthModal from "@/components/AuthModal";
import Login from "@/components/Login";
import Footer from "@/components/layout/Footer";
import Register from "@/components/Register";

export default function LandingPage() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
   const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("register");


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
    <div className="min-h-screen  bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      
       <AuthModal isOpen={open} onClose={() => setOpen(false)}>
        {mode === "login" ? (
          <Login switchToRegister={() => setMode("register")} />
        ) : (
          <Register switchToLogin={() => setMode("login")} />
        )}
      </AuthModal>
      
      
      
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
        onClick={() => setOpen(true)} className=" px-4 py-2 text-purple-400 hover:text-purple-300 
              transition-transform duration-150 active:scale-95">Log In</button>

              <button
        onClick={() => setOpen(true)} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
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
      <section className="pt-32 pb-20 px-4">
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
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
                Start Creating Free
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-lg font-semibold hover:bg-white/20 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Video Preview */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10" />
                  </div>
                  <p className="text-slate-400">Platform Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
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
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border ${plan.popular ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105' : 'bg-white/5 border-white/10'}`}>
                {plan.popular && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50' : 'bg-white/10 hover:bg-white/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
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


    </div>
  );
}