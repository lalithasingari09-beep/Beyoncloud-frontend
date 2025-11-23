"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      // TODO: replace with your auth call
      await new Promise((r) => setTimeout(r, 700));
      // on success:
      router.push("/dashboard");
    } catch (e) {
      setErr("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white dark:bg-gray-800 dark:border-gray-700 border p-6 rounded-xl shadow-md space-y-4 transform transition-all duration-300 ease-out"
      aria-label="Login form"
    >
      <h2 className="text-xl font-semibold dark:text-gray-100">Sign in to beyonCloud</h2>

      {err && <div className="text-sm text-red-500">{err}</div>}

      <div className="space-y-2">
        <label className="text-sm block dark:text-gray-200">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="w-full px-3 py-2 rounded-md border dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm block dark:text-gray-200">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          className="w-full px-3 py-2 rounded-md border dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm flex items-center gap-2 dark:text-gray-200">
          <input type="checkbox" className="rounded" /> Remember me
        </label>

        <a className="text-sm text-indigo-600 hover:underline">Forgot?</a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition transform active:scale-[0.995]"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
