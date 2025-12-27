"use client";

import { useState } from "react";

export default function Controls({ onGenerate }: any) {
  const [style, setStyle] = useState("forest");
  const [mood, setMood] = useState("calm");
  const [subject, setSubject] = useState("motivation");

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card: Style */}
        <div className="bg-white/3 p-3 rounded-lg border border-white/6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Background Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="input"
            aria-label="Background style"
          >
            <option value="forest">🌲 Forest</option>
            <option value="beach">🏖 Beach</option>
            <option value="mountain">⛰ Mountain</option>
            <option value="temple">🛕 Temple</option>
          </select>
        </div>

        {/* Card: Mood */}
        <div className="bg-white/3 p-3 rounded-lg border border-white/6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Mood</label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="input"
            aria-label="Mood"
          >
            <option value="calm">😌 Calm</option>
            <option value="focus">🎯 Focus</option>
            <option value="motivation">🔥 Motivation</option>
          </select>
        </div>
      </div>

      {/* Subject (full width) */}
      <div className="mt-4 bg-white/3 p-3 rounded-lg border border-white/6">
        <label className="block text-sm font-semibold text-gray-300 mb-2">Quote Subject</label>
        <input
          className="input"
          placeholder="e.g., Success, Happiness, Growth..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Quote subject"
        />
        <p className="text-xs text-gray-400 mt-2">Tip: keep it short for punchy shorts.</p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onGenerate({ style, mood, subject })}
          className="w-full py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:scale-[1.02] transition"
        >
          ✨ Generate Short
        </button>
      </div>
    </div>
  );
}
