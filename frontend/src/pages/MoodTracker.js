// src/pages/MoodTracker.js
import React, { useEffect, useRef, useState } from "react";

export default function MoodTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emotion, setEmotion] = useState(null);
  const [snapshot, setSnapshot] = useState(null);
  const [statusMsg, setStatusMsg] = useState("Camera initializing…");

  // Start camera on mount
  useEffect(() => {
    let stream;
    const init = async () => {
      try {
        setStatusMsg("Requesting camera permission…");
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().then(() => {
              setReady(true);
              setStatusMsg("Ready! Center your face and click Capture.");
            });
          };
        }
      } catch (e) {
        console.error(e);
        setStatusMsg("⚠️ Camera blocked. Allow permission and refresh.");
      }
    };
    init();

    return () => {
      try {
        stream?.getTracks()?.forEach((t) => t.stop());
      } catch {}
    };
  }, []);

  // Fake backend response
  const fakeDetectMood = () => {
    const moods = ["happy", "sad", "angry", "surprised", "neutral"];
    const random = moods[Math.floor(Math.random() * moods.length)];
    return new Promise((resolve) =>
      setTimeout(() => resolve({ mood: random }), 1500)
    );
  };

  const captureAndDetect = async () => {
    if (!ready || !videoRef.current) return;
    setLoading(true);
    setEmotion(null);
    setStatusMsg("Capturing photo…");

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video.videoWidth || !video.videoHeight) {
      await new Promise((r) => setTimeout(r, 100));
    }

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setSnapshot(dataUrl);
    setStatusMsg("Analyzing your mood…");

    try {
      // 👇 Fake API call
      const res = await fakeDetectMood();
      setEmotion(res.mood);
      setStatusMsg("Done! You can capture again anytime.");
    } catch (e) {
      setStatusMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #2a1177, #6d52f4, #DDC9FF, #b9deff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          background: "white",
          borderRadius: 24,
          boxShadow: "0 18px 50px rgba(157,78,221,0.25)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 26px",
            background:
              "linear-gradient(135deg, rgba(255,153,204,0.25), rgba(204,153,255,0.25))",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 800,
              color: "#6b21a8",
            }}
          >
            Get your mood checked 💫
          </h1>
          <p style={{ margin: "6px 0 0 0", color: "#6b7280", fontSize: 14 }}>
            Sit in good light, face the camera, relax your expression, and click{" "}
            <strong>Capture & Detect</strong>.
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 18,
            padding: 22,
          }}
        >
          {/* Camera */}
          <div
            style={{
              background: "#faf9fe",
              border: "1px solid rgba(107,33,168,0.08)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {!ready && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(1px)",
                    color: "#6b21a8",
                    fontWeight: 600,
                  }}
                >
                  {statusMsg}
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 14,
                alignItems: "center",
              }}
            >
              <button
                onClick={captureAndDetect}
                disabled={!ready || loading}
                style={{
                  background:
                    "linear-gradient(135deg, #ff66b2 0%, #9933ff 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 18px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: ready && !loading ? "pointer" : "not-allowed",
                }}
              >
                {loading ? "Detecting…" : "Capture & Detect"}
              </button>
              <span style={{ color: "#6b7280", fontSize: 14 }}>{statusMsg}</span>
            </div>
          </div>

          {/* Snapshot + Result */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 18,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
              Your Mood Result
            </h3>

            {snapshot ? (
              <div style={{ position: "relative" }}>
                <img
                  src={snapshot}
                  alt="Snapshot"
                  style={{ width: "100%", borderRadius: 12 }}
                />
                {emotion && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      background:
                        "linear-gradient(135deg, rgba(255,102,178,0.95), rgba(153,51,255,0.95))",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: 10,
                      fontWeight: 800,
                    }}
                  >
                    {emotion === "happy" ? "😊" : ""}
                    {emotion === "sad" ? "😔" : ""}
                    {emotion === "angry" ? "😠" : ""}
                    {emotion === "surprised" ? "😮" : ""}
                    {emotion === "neutral" ? "😐" : ""} {emotion}
                  </div>
                )}
              </div>
            ) : (
              <p style={{ color: "#6b7280" }}>
                No snapshot yet. Click Capture & Detect to see your mood here.
              </p>
            )}
          </div>
        </div>

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
}
