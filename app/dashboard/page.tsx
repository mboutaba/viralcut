"use client";

import {  useEffect, useState } from 'react';
import { Play, Plus, Video, TrendingUp, Clock, Download, Eye, MoreVertical, Settings, LogOut, Menu, X, Sparkles, Filter } from 'lucide-react';
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import  Header  from "@/components/layout/Header";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  const videos = [
    { id: 1, title: "Morning Meditation Flow", niche: "Meditation", views: "12.4K", status: "completed", thumbnail: "from-blue-500 to-purple-500", date: "2 hours ago" },
    { id: 2, title: "Daily Motivation Quote #47", niche: "Motivational", views: "8.9K", status: "completed", thumbnail: "from-orange-500 to-pink-500", date: "5 hours ago" },
    { id: 3, title: "Crypto Investment Tips", niche: "Finance", views: "15.2K", status: "completed", thumbnail: "from-green-500 to-emerald-500", date: "1 day ago" },
    { id: 4, title: "Mindfulness Practice", niche: "Meditation", views: "6.7K", status: "processing", thumbnail: "from-indigo-500 to-blue-500", date: "Just now" },
    { id: 5, title: "Success Mindset", niche: "Motivational", views: "10.1K", status: "completed", thumbnail: "from-purple-500 to-pink-500", date: "2 days ago" },
    { id: 6, title: "Budget Planning 101", niche: "Finance", views: "9.3K", status: "completed", thumbnail: "from-teal-500 to-cyan-500", date: "3 days ago" },
  ];

  const stats = [
    { label: "Total Videos", value: "127", change: "+12%", icon: <Video className="w-5 h-5" /> },
    { label: "Total Views", value: "284K", change: "+23%", icon: <Eye className="w-5 h-5" /> },
    { label: "Avg. Engagement", value: "8.4%", change: "+3.2%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Processing", value: "3", change: "", icon: <Clock className="w-5 h-5" /> },
  ];

  const filteredVideos = filter === 'all' ? videos : videos.filter(v => v.status === filter);

  

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

     
    
    <div className="pt-16   min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
     
    <Header /> 
     
      {!user && (<div className="flex items-center justify-center min-h-screen">
     <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>)}
     
     
     {user && (<main>
      {/* Sidebar */}
      {sidebarOpen && <aside className={`fixed top-16 left-0 h-full w-64 bg-slate-950/95 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">ShortGen</span>
          </div>

          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300">
              <Video className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition">
              <Plus className="w-5 h-5" />
              <span>Create Video</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition">
              <Sparkles className="w-5 h-5" />
              <span>Templates</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>

       
      </aside>}

      {/* sidebar Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-lg"
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Main Content */}
     <main className="mx-auto p-4 lg:p-8 max-w-7xl w-full">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 gap-4 ">  Welcome back, {user?.name}!</h1>
          <p className="text-slate-400">Here's what's happening with your videos today.</p>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  {stat.icon}
                </div>
                {stat.change && (
                  <span className="text-sm text-green-400">{stat.change}</span>
                )}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
         <Link href="/generator">
          <button className="btn p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 text-left">
            <Plus className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Create New Video</h3>
            <p className="text-purple-100">Start generating your next viral short</p>
          </button>
            </Link>
          <button className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition text-left">
            <Sparkles className="w-8 h-8 mb-3 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Browse Templates</h3>
            <p className="text-slate-400">Explore our template library</p>
          </button>

          <button className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition text-left">
            <TrendingUp className="w-8 h-8 mb-3 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">View Analytics</h3>
            <p className="text-slate-400">Track your performance</p>
          </button>
        </div>

        {/* Video Library */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Video Library</h2>
              <p className="text-slate-400">Manage and download your generated videos</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition ${filter === 'all' ? 'bg-purple-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg transition ${filter === 'completed' ? 'bg-purple-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter('processing')}
                className={`px-4 py-2 rounded-lg transition ${filter === 'processing' ? 'bg-purple-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                Processing
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition group">
                <div className={`aspect-[9/16] bg-gradient-to-br ${video.thumbnail} relative flex items-center justify-center`}>
                  {video.status === 'processing' ? (
                    <div className="text-center">
                      <Clock className="w-12 h-12 mb-2 animate-spin" />
                      <p className="text-sm">Processing...</p>
                    </div>
                  ) : (
                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <Play className="w-16 h-16" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs">
                    {video.niche}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span>{video.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </main>)}
    </div>
     
  );
}