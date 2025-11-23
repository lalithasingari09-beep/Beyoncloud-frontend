import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-12">
          Welcome to <span className="text-yellow-300">beyonCloud</span>
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card */}
          <Link
            href="/dashboard"
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg hover:bg-white/30 hover:scale-[1.03] transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Dashboard</h2>
            <p className="text-gray-200">View your dashboard and analytics</p>
          </Link>

          <Link
            href="/create-user"
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg hover:bg-white/30 hover:scale-[1.03] transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Create User</h2>
            <p className="text-gray-200">Create new user accounts</p>
          </Link>

          <Link
            href="/login"
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg hover:bg-white/30 hover:scale-[1.03] transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Login</h2>
            <p className="text-gray-200">Access your account</p>
          </Link>

        </div>
      </div>
    </div>
  );
}
