// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-primary rounded-full"></div>
        <div className="absolute inset-1 bg-white rounded-full"></div>
        <div className="absolute inset-2 bg-[#FF9933] rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
            <path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" />
          </svg>
        </div>
        <div className="absolute inset-0 border-2 border-[#138808] rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-primary leading-tight">CosmoTravel</span>
        <span className="text-sm text-[#FF9933] font-semibold leading-tight">भारत की यात्रा</span>
      </div>
    </div>
  );
}