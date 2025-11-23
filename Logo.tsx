"use client";
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? "text-lg" : "text-2xl"}`}>
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold shadow">
        B
      </div>
      <div className="font-semibold leading-tight">
        <div className="hidden sm:block">beyonCloud</div>
        <div className="sm:hidden">bCloud</div>
      </div>
    </div>
  );
}
