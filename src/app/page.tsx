// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">LinkedIn Redesign</h1>
      <Link 
        href="/linkedin-redesign" 
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition-colors"
      >
        Ver Rediseño
      </Link>
    </div>
  );
}
