"use client";

import { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";
import LoadingAnimation from "./LoadingAnimation";

export default function GeneratorCard() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async (payload: any) => {
    setStatus("loading");
    setVideoUrl(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setVideoUrl(data.videoUrl);
    setStatus("done");
  };

  return (
    <div className="h-[calc(100vh-120px)] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 pt-0">
      {/* LEFT: CONTROLS */}
      <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/20 shadow-xl p-6 flex flex-col overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Customize your short</h2>
        <div className="flex-1 flex flex-col">
          <Controls onGenerate={handleGenerate} />
        </div>
      </div>


      {/* RIGHT: PREVIEW */}
      <div className="rounded-3xl bg-white/5 border border-white/10 shadow-xl p-2 flex flex-col items-stretch justify-between h-full overflow-hidden">
        <div className="flex-1">
          {status === "idle" && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-gray-300">Ready to create</p>
                <p className="text-sm text-gray-500">Configure options and click generate</p>
              </div>
            </div>
          )}
          {status === "loading" && <LoadingAnimation />}
          {status === "done" && videoUrl && <Preview videoUrl={videoUrl} />}
        </div>
      </div>
    </div>
  );
}
