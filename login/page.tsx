"use client";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import Background from "@/components/background";
import ThemeToggle from "@/components/themetoggle";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-stretch">

      {/* LEFT SIDE → Background image */}
      <div className="hidden md:block md:w-1/2 lg:w-2/5">
        <Background />
      </div>

      {/* RIGHT SIDE → Logo, Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        
        {/* Logo + theme toggle */}
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Login Form */}
        <div className="mt-8 max-w-md w-full mx-auto">
          <div className="animate-fade-in-up">
            <LoginForm />
          </div>

          {/* Mobile theme toggle */}
          <div className="mt-4 block sm:hidden text-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} beyonCloud. All rights reserved.
        </p>
      </div>

    </div>
  );
}
