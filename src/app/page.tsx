'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/propaganda');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-100 p-4">
      <div onClick={handleLogoClick}>
        <Image
          src="/images/school-logo.png"
          alt="Bukit Batok Secondary School Logo"
          className="object-contain shadow-lg rounded-lg mt-12 mb-6 cursor-pointer"
          width={192}
          height={256}
        />
      </div>

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

      <p className="text-center mb-2 text-black">Made by Saumil, Zenneth, and Daivik</p>
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
