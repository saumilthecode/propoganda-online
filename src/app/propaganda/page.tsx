'use client';

export default function Propaganda() {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start">
      <button onClick={() => window.history.back()} className="m-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Back
      </button>
      <iframe
        src="https://www.moe.gov.sg/schoolfinder/schooldetail?schoolname=bukit-batok-secondary-school"
        className="w-full h-full"
        title="BBSS Propaganda"
      />
    </div>
  );
}
