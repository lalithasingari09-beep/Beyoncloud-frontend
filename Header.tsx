"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [username, setUsername] = useState("User");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUsername(user);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 border-b shadow-sm dark:border-gray-700">
      {/* Mobile Hamburger */}
      <button className="md:hidden text-2xl dark:text-white" onClick={onMenuClick}>
        ☰
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold dark:text-gray-100">beyonCloud Admin</h1>

      {/* Right Section */}
      <div className="relative" ref={dropdownRef}>
        {/* Avatar + Username */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {/* Avatar */}
          <img
            src="https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />

          {/* Username (hide on mobile) */}
          <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">
            {username}
          </span>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 border dark:border-gray-700 animate-fadeIn">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              onClick={() => router.push("/profile")}
            >
              Profile
            </button>

            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              onClick={() => router.push("/settings")}
            >
              Settings
            </button>

            <hr className="my-1 border-gray-200 dark:border-gray-700" />

            <button
              className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
