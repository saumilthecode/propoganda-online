'use client'; 


import React, { useEffect, useRef } from 'react';

export function Propoganda() {
  const webViewRef = useRef<HTMLIFrameElement | null>(null);
  const url = "https://www.moe.gov.sg/schoolfinder/schooldetail?schoolname=bukit-batok-secondary-school";

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.src = url;
    }
  }, [url]);

  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start">
      <button onClick={() => window.history.back()} className="m-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Back
      </button>
      <iframe
        ref={webViewRef}
        className="w-full h-full border-none"
        title="BBSS Propoganda"
      />
    </div>
  );
}
