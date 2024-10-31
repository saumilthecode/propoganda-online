'use client'; 

import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13

export default function Home() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/propoganda'); // Navigate to the Propoganda page
    // This will now show the external URL embedded in the iframe
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-100 p-4">
      {/* School Logo as Button */}
      <div onClick={handleLogoClick}>
        <Image
          src="/images/school-logo.png" // Update to your image path
          alt="Bukit Batnext dev ok Secondary School Logo"
          className="object-contain shadow-lg rounded-lg mt-12 mb-6 cursor-pointer" // Added cursor-pointer for better UX
          width={192} // Specify the width
          height={256} // Specify the height
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <Link href="/about">
          <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800">
            About BBSS
          </button>
        </Link>
        <Link href="/how-to-get-to-bbss">
          <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800">
            How to get to BBSS
          </button>
        </Link>
      </div>

      <Link href="/feedback">
        <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 mb-12">
          Feedback!
        </button>
      </Link>

      {/* Footer Text */}
      <p className="text-center mb-2 text-black">
        Made by Saumil, Zenneth, and Daivik
      </p>
      <p className="text-center text-black">
        A product of{' '}
        <a
          href="https://bbsshack.club"
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

// New components for the pages
// propoganda.tsx
export function Propoganda() {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start">
      <button onClick={() => window.history.back()} className="m-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Back
      </button>
      <iframe
        src="https://www.moe.gov.sg/schoolfinder/schooldetail?schoolname=bukit-batok-secondary-school"
        className="w-full h-full"
        title="BBSS Propoganda"
      />
    </div>
  );
}

// feedback.tsx
export function Feedback() {
  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
      <iframe
        src="https://docs.google.com/forms/d/11EIaaQngAFi9lIY8X2p1YzdfFGoUKArIyZZ4KjiaI3c/viewform"
        className="w-full h-full"
        title="BBSS Feedback"
      />
    </div>
  );
}

// About and HowToGetToBBSS components can be created similarly
