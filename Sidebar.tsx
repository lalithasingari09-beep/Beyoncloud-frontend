"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  const items = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Create User", href: "/create-user" },
  ];

  const NavItem = ({ label, href }: { label: string; href: string }) => {
    const active = pathname === href;

    return (
      <Link href={href} onClick={onClose}>
        <div
          className={`flex items-center gap-3 p-3 rounded-md transition 
          ${active ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"}
        `}
        >
          <span className="text-sm">{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <>
      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition 
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* SLIDING SIDEBAR */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-64 bg-white p-4 shadow-xl 
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-bold">beyonCloud</div>
            <button onClick={onClose} className="text-xl">✕</button>
          </div>

          <nav className="flex flex-col gap-2">
            {items.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </nav>
        </aside>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:min-h-screen md:p-4 md:border-r md:bg-white">
        <div className="mb-4 text-xl font-bold">beyonCloud</div>

        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
