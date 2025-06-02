import React from "react";

const LoadingOverlay: React.FC = () => (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
);

export default LoadingOverlay;
