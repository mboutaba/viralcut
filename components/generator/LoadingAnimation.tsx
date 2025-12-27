"use client";

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm text-gray-300">
      <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      <p>Generating your calming video…</p>
      <p className="text-xs text-gray-500">This may take ~30 seconds</p>
    </div>
  );
}
