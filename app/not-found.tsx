"use client";

import Link from "next/link";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-6">
      <div className="max-w-lg w-full text-center bg-slate-900/70 backdrop-blur rounded-2xl shadow-xl p-8 border border-slate-700">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-400">
            <AlertTriangle size={32} />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold text-white tracking-tight">404</h1>
        <p className="mt-4 text-xl font-semibold text-slate-200">
          Page not found
        </p>
        <p className="mt-2 text-slate-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            <Home size={16} />
            Go to homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
}

/*
USAGE (Next.js 13+ App Router):
--------------------------------
1. Create this file:
   app/not-found.tsx

2. Ensure Tailwind CSS is installed and configured.

3. Install icons (optional):
   npm install lucide-react

This page will automatically be rendered when a route is not found.
*/
