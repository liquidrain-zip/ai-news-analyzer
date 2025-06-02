import React from "react";

const ErrorBanner: React.FC<{ message: string }> = ({ message }) => (
  <div className="mt-6 max-w-4xl text-red-400 font-semibold text-center">
    {message}
  </div>
);

export default ErrorBanner;
