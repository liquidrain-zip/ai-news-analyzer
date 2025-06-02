import React, { type ChangeEvent, type FormEvent } from "react";

interface Props {
  articleText: string;
  setArticleText: (text: string) => void;
  handleSubmit: (e: FormEvent) => void;
  loading: boolean;
}

const UploadForm: React.FC<Props> = ({
  articleText,
  setArticleText,
  handleSubmit,
  loading,
}) => {
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleText(e.target.value);
  };

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === "string") {
        setArticleText(text);
      }
    };
    reader.readAsText(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 shadow-xl border border-white border-opacity-20"
    >
      <label
        htmlFor="article"
        className="block text-white font-semibold mb-3 text-lg"
      >
        Paste your news article text:
      </label>
      <textarea
        id="article"
        value={articleText}
        onChange={onTextChange}
        placeholder="Enter or paste the news article here..."
        className="w-full min-h-[180px] rounded-md p-4 resize-y text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300"
        required
      />
      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <input
          type="file"
          accept=".txt,.docx"
          onChange={onFileUpload}
          className="text-sm text-white cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 transition duration-200"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold shadow-md text-white ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } transition duration-300`}
        >
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
