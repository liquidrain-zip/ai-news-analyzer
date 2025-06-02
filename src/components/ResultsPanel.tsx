import React from "react";

interface Props {
  summary: string;
  nationalities: string[];
}

const ResultsPanel: React.FC<Props> = ({ summary, nationalities }) => {
  if (!summary && nationalities.length === 0) return null;

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700 whitespace-pre-line">{summary}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Nationalities / Countries Mentioned
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {nationalities.map((nation, idx) => (
            <li key={idx}>{nation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPanel;
