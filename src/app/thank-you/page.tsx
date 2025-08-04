// src/app/thank-you/page.tsx

"use client"; // This page needs to be interactive, so we make it a client component.

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use this hook for navigation in App Router
import Link from 'next/link';

export default function ThankYouPage() {
  const router = useRouter();

  // This useEffect hook runs once when the component is first rendered.
  useEffect(() => {
    // We set a timer for 5 seconds (5000 milliseconds).
    const timer = setTimeout(() => {
      // After 5 seconds, this code runs, redirecting to the homepage.
      router.push('/');
    }, 5000);

    // This is a cleanup function. If the user navigates away before 5s,
    // it clears the timer to prevent errors.
    return () => clearTimeout(timer);
  }, [router]); // The hook depends on the router object.

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      <div className="bg-gray-800 border border-teal-500 rounded-lg p-10 max-w-lg">
        <h1 className="text-4xl font-bold text-teal-400">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-300">
          Your inquiry has been successfully submitted. I will review it and get back to you within 24 hours.
        </p>
        <p className="mt-6 text-gray-400">
          You will be automatically redirected to the homepage shortly.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          If you are not redirected, <Link href="/" className="underline hover:text-white">click here</Link>.
        </div>
      </div>
    </main>
  );
}