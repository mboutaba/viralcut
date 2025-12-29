"use client";
import { Play } from 'lucide-react';

export default function Footer() {
 
  return (
     
     
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">ShortGen</span>
              </div>
              <p className="text-slate-400">Create viral content at scale</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-slate-400">
            <p>© 2024 ShortGen. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
  );
}
