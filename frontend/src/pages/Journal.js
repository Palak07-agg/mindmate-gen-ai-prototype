import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Journal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSave = () => {
    if (!entry.trim()) return;
    const newEntry = {
      text: entry,
      date: new Date().toLocaleString(),
    };
    setEntries([newEntry, ...entries]);
    setEntry("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #2a1177, #6d52f4, #DDC9FF, #b9deff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          borderRadius: "20px",
          padding: "30px",
          width: "80%",
          maxWidth: "900px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#7b2cbf",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          My Journal
        </h1>

        {/* Rich Text Editor */}
        <ReactQuill
          theme="snow"
          value={entry}
          onChange={setEntry}
          style={{
            background: "white",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleSave}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(to right, #ff85e4, #9f5de2)",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "30px",
            display: "block",
            marginLeft: "auto",
          }}
        >
          Save Entry
        </button>

        {/* Journal Entries */}
        <div>
          <h2 style={{ color: "#5a189a", marginBottom: "15px" }}>
            Past Entries
          </h2>
          {entries.length === 0 ? (
            <p style={{ color: "#444" }}>No entries yet. Start writing!</p>
          ) : (
            entries.map((e, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#7b2cbf",
                    marginBottom: "8px",
                  }}
                >
                  {e.date}
                </p>
                <div dangerouslySetInnerHTML={{ __html: e.text }} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Journal;
