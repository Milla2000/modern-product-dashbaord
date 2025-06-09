"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-200 h-200 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl0 font-bold">🛒</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Dashboard
              </h1>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Data</span>
            </div>
          </div>
        </div>
      </header>
      <main className="px-4 py-6 max-w-full mx-auto min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
}
