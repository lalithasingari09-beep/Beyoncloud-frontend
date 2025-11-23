"use client";
export default function Background(){
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-10 bg-gradient-to-br from-indigo-400 to-sky-400"/>
      <div className="absolute -bottom-56 -right-32 w-[420px] h-[420px] rounded-full opacity-8 bg-gradient-to-tr from-emerald-300 to-cyan-300"/>
    </div>
  );
}
