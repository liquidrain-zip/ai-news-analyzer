import React, { useState } from "react";
import TextInput from "./components/TextInput";
import FileUpload from "./components/FileUpload";
import ResultsPanel from "./components/ResultsPanel";
import LoadingOverlay from "./components/LoadingOverlay";
import ErrorAlert from "./components/ErrorAlert";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");
  const [nationalities, setNationalities] = useState<string[]>([]);

  const handleSubmit = async () => {
    setError("");
    setSummary("");
    setNationalities([]);
    setLoading(true);

    try {
      const formData = new FormData();

      if (file) {
        formData.append("file", file);
      } else if (text.trim()) {
        formData.append("text", text);
      } else {
        throw new Error("Please enter text or upload a file.");
      }

      const response = await fetch(
        import.meta.env.VITE_API_URL || "http://localhost:8000/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Server error: " + response.statusText);
      }

      const data = await response.json();
      setSummary(data.summary || "");
      setNationalities(data.nationalities || []);
    } catch (err: any) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          AI News Analyzer
        </h1>

        {error && <ErrorAlert message={error} />}

        <TextInput value={text} onChange={setText} />
        <FileUpload onFileSelect={setFile} />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        <ResultsPanel summary={summary} nationalities={nationalities} />
      </div>

      {loading && <LoadingOverlay />}
    </div>
  );
};

export default App;
