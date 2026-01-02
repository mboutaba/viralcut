"use client";

import { useEffect, useState } from 'react';
import { User, CreditCard, Palette, Bell, ArrowLeft, Shield, Mail, Save, Upload, Check, Crown } from 'lucide-react';
import { useRouter } from "next/navigation"; 
 import Link from "next/link";

import  Header  from "@/components/layout/Header";


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showSaved, setShowSaved] = useState(false);

  const router = useRouter();

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    bio: 'Content creator & video enthusiast'
  });

  const [branding, setBranding] = useState({
    logoUrl: '',
    primaryColor: '#8b5cf6',
    secondaryColor: '#ec4899',
    fontFamily: 'Inter'
  });

  const tabs = [
    
      
    { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'subscription', name: 'Subscription', icon: <CreditCard className="w-5 h-5" /> },
    // { id: 'branding', name: 'Branding', icon: <Palette className="w-5 h-5" /> },
    // { id: 'notifications', name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
  ];

  const handleSave = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

   const [user, setUser] = useState<any>(null);


  useEffect(() => {
      async function fetchUser() {
       
         const res = await fetch("/api/me");
          const data = await res.json();
   
  
         if (!data.success) {
             router.push("/login");
            
            return;
            
          }
  
           setUser(data.user);
    
        }
      
      fetchUser();
    }, []);












  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 lg:p-8">
      <Header /> 

     
      
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
          </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold">
                        JD
                      </div>
                      <div>
                        <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition mb-2 flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Upload Photo
                        </button>
                        <p className="text-sm text-slate-400">JPG, PNG or GIF. Max 2MB.</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                        <input
                          type="text"
                          value={profile.username}
                          onChange={(e) => setProfile({...profile, username: e.target.value})}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                      <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            )}




            {/* Subscription Settings */}
            {activeTab === 'subscription' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-2xl font-bold">Professional Plan</h3>
                      </div>
                      <p className="text-purple-200">$79/month - Active</p>
                    </div>
                    
                    <button 
                   onClick={() => router.push("/pricing")}
                    className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-semibold transition">
                      Manage Plan
                    </button>
                    
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">157/200</div>
                      <div className="text-sm text-slate-300">Videos this month</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">1080p</div>
                      <div className="text-sm text-slate-300">Max quality</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">15</div>
                      <div className="text-sm text-slate-300">Days until renewal</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Upgrade Options</h2>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">Enterprise Plan</h3>
                        <div className="text-2xl font-bold">$199<span className="text-sm text-slate-400">/mo</span></div>
                      </div>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          Unlimited videos
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          4K quality
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          API access
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          White label options
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-xs font-bold">
                      VISA
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">•••• •••• •••• 4242</div>
                      <div className="text-sm text-slate-400">Expires 12/25</div>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Branding Settings */}
            {activeTab === 'branding' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Brand Customization</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Brand Logo</label>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-32 bg-white/10 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center">
                          {branding.logoUrl ? (
                            <img src={branding.logoUrl} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                          ) : (
                            <Upload className="w-8 h-8 text-slate-400" />
                          )}
                        </div>
                        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition">
                          Upload Logo
                        </button>
                      </div>
                      <p className="text-sm text-slate-400 mt-2">Recommended: 512x512px, PNG with transparent background</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Primary Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={branding.primaryColor}
                            onChange={(e) => setBranding({...branding, primaryColor: e.target.value})}
                            className="w-16 h-12 rounded-lg cursor-pointer"
                          />
                          <input
                            type="text"
                            value={branding.primaryColor}
                            onChange={(e) => setBranding({...branding, primaryColor: e.target.value})}
                            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Secondary Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={branding.secondaryColor}
                            onChange={(e) => setBranding({...branding, secondaryColor: e.target.value})}
                            className="w-16 h-12 rounded-lg cursor-pointer"
                          />
                          <input
                            type="text"
                            value={branding.secondaryColor}
                            onChange={(e) => setBranding({...branding, secondaryColor: e.target.value})}
                            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Font Family</label>
                      <select
                        value={branding.fontFamily}
                        onChange={(e) => setBranding({...branding, fontFamily: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Playfair Display">Playfair Display</option>
                      </select>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="font-semibold mb-4">Preview</h3>
                      <div 
                        className="aspect-[9/16] rounded-xl relative overflow-hidden max-w-xs mx-auto"
                        style={{ 
                          background: `linear-gradient(135deg, ${branding.primaryColor}, ${branding.secondaryColor})`
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="text-center p-6"
                            style={{ fontFamily: branding.fontFamily }}
                          >
                            <h4 className="text-2xl font-bold mb-2">Your Brand</h4>
                            <p className="text-sm opacity-90">Sample video with your colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Branding
                </button>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  {[
                    { title: 'Video Generation Complete', desc: 'Get notified when your videos are ready' },
                    { title: 'Weekly Summary', desc: 'Receive weekly analytics and insights' },
                    { title: 'New Templates', desc: 'Be the first to know about new templates' },
                    { title: 'Tips & Tutorials', desc: 'Get helpful content creation tips' },
                    { title: 'Billing & Payments', desc: 'Important updates about your subscription' },
                  ].map((notification, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h3 className="font-semibold mb-1">{notification.title}</h3>
                        <p className="text-sm text-slate-400">{notification.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}



           



            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Change Password</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Two-Factor Authentication</h2>
                  <p className="text-slate-400 mb-4">Add an extra layer of security to your account</p>
                  <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
                    Enable 2FA
                  </button>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-2 text-red-400">Danger Zone</h2>
                  <p className="text-slate-300 mb-4">Irreversible actions that affect your account</p>
                  <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Toast */}
        {showSaved && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">
            <Check className="w-5 h-5" />
            <span className="font-semibold">Settings saved successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}