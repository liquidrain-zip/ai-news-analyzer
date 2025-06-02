import React from "react";

interface Props {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<Props> = ({ onFileSelect }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Or upload .txt / .docx
    </label>
    <input
      type="file"
      accept=".txt,.docx"
      onChange={(e) => onFileSelect(e.target.files?.[0] || null)}
      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
    />
  </div>
);

export default FileUpload;
