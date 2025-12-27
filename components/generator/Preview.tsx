"use client";

export default function Preview({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-0">
      {/* Tiny centered video to fit right panel without scrolling */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl p-0">
          <video
            src={videoUrl}
            controls
            className="w-[220px] h-auto max-h-[90vh] aspect-[9/16] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Download button always visible */}
      <div className="w-full flex items-center justify-center pb-2">
        <a
          href={videoUrl}
          download
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500 transition"
        >
          ⬇ Download
        </a>
      </div>
    </div>
  );
}