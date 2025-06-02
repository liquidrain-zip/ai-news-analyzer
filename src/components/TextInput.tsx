import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const TextInput: React.FC<Props> = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Paste News Article
    </label>
    <textarea
      rows={8}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste the article text here..."
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default TextInput;
