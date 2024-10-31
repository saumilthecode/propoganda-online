'use client'; 

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-100 p-4">
      {/* School Logo as Button */}
      <button className="mb-8" onClick={() => alert('Image Button Clicked!')}>
        <Image
          src="/images/school-logo.png"
          alt="Bukit Batok Secondary School Logo"
          className="w-48 h-64 object-contain shadow-lg rounded-lg"
          width={192}
          height={256}
        />
      </button>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800">
          About BBSS
        </button>
        <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800">
          How to get to BBSS
        </button>
      </div>

      <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 mb-12">
        Feedback!
      </button>

      {/* Footer Text */}
      <p className="text-center mb-2">
        Made by Saumil, Zenneth, and Daivik
      </p>
      <p className="text-center">
        A product of{' '}
        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Hack Club BBSS 🔥
        </a>
      </p>
    </div>
  );
}
