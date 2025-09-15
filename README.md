```markdown
# 🌸 MindMate: Gen AI Hackathon Prototype

MindMate is a **mental health companion app** designed to help users track moods, write journals, chat with an AI companion, and access resources for emotional well-being.  
This project was built as a **prototype** for a Gen AI Hackathon challenge, focusing on **frontend + backend integration without a database** (lightweight, fast setup).

---

## ✨ Features

### ✅ Core Features
- 📝 **Journal** – Write and save personal reflections (stored locally).
- 😊 **Mood Tracker** – Track emotions via:
  - Manual selection (happy, sad, angry, stressed, etc.)
  - 📷 **AI Mood Detection** (prototype: webcam capture + mock AI detection).
- 🤖 **AI Chatbot** – Conversational bot with multiple response variations to guide and support users.
- 📚 **Resources Page** – Curated articles, mental health tips, and emergency contacts.
- 🌐 **Community Page** – Safe space for sharing positivity and motivational content.

### 💡 Unique Add-Ons
- 🎨 **Custom Gradient UI** – Bright pink and purple gradients for a calming, engaging design.
- 📊 **Mood Trends Visualization** – Chart to see mood history at a glance.
- 🔮 **Future Scope (for hackathon pitch)**:
  - Real AI-based mood detection using image models.
  - Secure cloud storage for journals & mood history.
  - Community support with verified therapists.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React.js (Create React App)**
- 🎨 **Custom CSS with gradients**
- 📊 **Recharts** (for mood visualization)

### Backend
- 🚀 **Node.js + Express**
- 🔒 **CORS enabled**
- 📦 Mock APIs (no database)

---

## 📂 Project Structure

```

mindmate\_gen\_ai/
│
├── backend/                # Express backend
│   ├── server.js           # Main server file with mock APIs
│   ├── package.json        # Backend dependencies
│   └── ...
│
├── frontend/               # React frontend
│   ├── public/             # index.html, static files
│   ├── src/
│   │   ├── index.js        # React entry
│   │   ├── App.js          # Main routing
│   │   ├── pages/          # Journal, Chatbot, MoodTracker, etc.
│   │   ├── components/     # Reusable UI
│   │   └── ...
│   ├── package.json        # Frontend dependencies
│   └── ...
│
└── README.md               # Project overview

````

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/mindmate-gen-ai-prototype.git
cd mindmate-gen-ai-prototype
````

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

➡ Runs the server on `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

➡ Runs React frontend on `http://localhost:3000`

---

### 4. Test Mood Detection (Mock API)

```bash
curl -X POST http://localhost:5000/api/detect-mood \
  -H "Content-Type: application/json" \
  -d '{"image":"test123"}'
```

Expected response:

```json
{ "mood": "Happy" }
```

---

## 🎨 UI Theme

The app uses a **pink-to-purple gradient** for a modern, positive vibe:

* **Background:** `linear-gradient(to right, #ff66cc, #9933ff)`
* **Dashboard (brighter):** `linear-gradient(to right, #ff99e6, #b366ff)`
* **Cards:** White with soft shadows & rounded corners.

---

## 📦 Deployment

For prototype submission:

1. Push code to **GitHub**.
2. Mention:

   * Frontend → React App (run on `3000`)
   * Backend → Express API (run on `5000`)
3. Clearly highlight **mock mood detection** (not real AI, placeholder for demo).

---

## 📌 Notes

* No **database** integration (prototype requirement).
* **.env files** should NOT be committed.
* Mood detection is currently **mocked** to return `"Happy"` for every request.
* Prototype is focused on **UI/UX + basic APIs** to validate hackathon idea.

---

## 📅 Future Improvements

* Integrate **OpenAI API** for chatbot (instead of hardcoded responses).
* Add **real facial emotion detection** models.
* Multi-language support.
* Secure **user authentication** and cloud storage.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to add.

---

## 📜 License

This project is built for **hackathon prototype purposes** and not production-ready. Free to use and extend.
