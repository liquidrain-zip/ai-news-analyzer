import React from "react";

const ResultsDisplay: React.FC<{
  summary: string;
  nationalities: string[];
}> = ({ summary, nationalities }) => (
  <section className="mt-10 w-full max-w-4xl space-y-8 text-white">
    {summary && (
      <div className="bg-white bg-opacity-15 rounded-xl p-6 shadow-lg border border-white border-opacity-20">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-gray-100 leading-relaxed whitespace-pre-line">
          {summary}
        </p>
      </div>
    )}
    {nationalities.length > 0 && (
      <div className="bg-white bg-opacity-15 rounded-xl p-6 shadow-lg border border-white border-opacity-20">
        <h2 className="text-2xl font-bold mb-4">Nationalities Mentioned</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          {nationalities.map((nat, idx) => (
            <li key={idx}>{nat}</li>
          ))}
        </ul>
      </div>
    )}
  </section>
);

export default ResultsDisplay;
