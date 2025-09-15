import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [
    { name: "Chatbot 🤖", path: "/chatbot", desc: "Talk to your AI buddy anytime." },
    { name: "Journal 📔", path: "/journal", desc: "Write your thoughts and reflect." },
    { name: "Mood Tracker 😊", path: "/mood", desc: "Track emotions & find balance." },
 
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #22054F, #9D65D1, #28CFFD)", // pink → purple
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "3rem",
          marginBottom: "50px",
          textShadow: "2px 2px 12px rgba(0,0,0,0.6)",
        }}
      >
        🌟 Welcome to MindMate 🌟
      </h1>

      <div style={{ width: "100%", maxWidth: "1200px" }}>
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                borderRadius: "25px",
                padding: "40px",
                marginBottom: "30px",
                textAlign: "center",
                color: "#fff",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,255,255,0.1)",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.6), inset 0 0 40px rgba(255,255,255,0.3)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,255,255,0.1)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))";
              }}
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
                {feature.name}
              </h2>
              <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>{feature.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
