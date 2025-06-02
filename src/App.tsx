import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultsDisplay from "./components/ResultsDisplay";
import ErrorBanner from "./components/ErrorBanner";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [articleText, setArticleText] = useState("");
  const [summary, setSummary] = useState("");
  const [nationalities, setNationalities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!articleText.trim()) {
      setError("Please enter or upload an article.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");
    setNationalities([]);

    try {
      const response = await fetch("https://your-backend-api-url/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: articleText }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      setSummary(data.summary || "No summary returned.");
      setNationalities(data.nationalities || []);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-start p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
        AI News Article Analyzer
      </h1>

      <UploadForm
        articleText={articleText}
        setArticleText={setArticleText}
        handleSubmit={handleAnalyze}
        loading={loading}
      />

      {error && <ErrorBanner message={error} />}

      {!loading && (summary || nationalities.length > 0) && (
        <ResultsDisplay summary={summary} nationalities={nationalities} />
      )}

      {loading && <Loader />}
    </div>
  );
};

export default App;
