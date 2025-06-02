import React from "react";

interface Props {
  message: string;
}

const ErrorAlert: React.FC<Props> = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
    <strong className="font-bold">Error:</strong>
    <span className="block sm:inline ml-2">{message}</span>
  </div>
);

export default ErrorAlert;
