# 🚘 GuardianDrive AI 🛡️

GuardianDrive AI is a **full-stack, AI-powered driver safety web application** that runs entirely in the browser. It leverages real-time computer vision to detect driver fatigue and distraction, integrates a hands-free voice assistant, and provides a persistent dashboard to monitor driving safety over time.

---

## 🌐 Live Demo

🔗 **https://69f9d298ae052e15c58dc171--superlative-brioche-db683d.netlify.app/**

---

## ✨ Features

* **Real-Time Computer Vision:**
  Utilizes **MediaPipe FaceMesh** to track facial landmarks and compute:

  * Eye Aspect Ratio (EAR) → detects drowsiness
  * Mouth Aspect Ratio (MAR) → detects yawning
    Enables real-time detection of fatigue, sleeping, and driver distraction.

* **Voice Assistant:**
  Powered by the **Web Speech API**, allowing activation via **"Hey Guardian"** for:

  * Navigation updates
  * Safety alerts
  * Driving insights

* **Smart Navigation:**
  Real-time GPS tracking and interactive maps using **Leaflet.js** and **OpenStreetMap**.

* **Emergency Protocols:**
  Generates high-visibility alerts during unsafe conditions and prepares emergency notifications for critical situations.

* **Data Persistence:**
  Stores:

  * User accounts
  * Preferences
  * Emergency contacts
  * Historical trip and safety data

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **Database:** SQLite (via sql.js)
* **Authentication:** JWT (JSON Web Tokens), bcrypt
* **APIs & Libraries:** MediaPipe, Web Speech API, Geolocation API, Leaflet.js, Chart.js

---

## 🚀 Getting Started

### Prerequisites

* Node.js installed on your machine

---

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/GuardianDrive-AI.git
   cd GuardianDrive-AI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Run the application:**
   Open your browser and navigate to:
   **http://localhost:3000**

---

### 👤 Demo Credentials

* **Username:** demo_user
* **Password:** DriveSafe@123

---

## 🔒 Permissions Required

To enable full functionality, the application requires access to:

* **Camera:** For real-time fatigue and distraction detection
* **Microphone:** For hands-free voice assistant interaction
* **Location:** For navigation and emergency tracking

---

## 📄 License

This project is licensed under the **MIT License** and is open for use, modification, and distribution.

---

## 💡 Project Highlights

* Real-time AI-based driver monitoring system
* Fully browser-based implementation (no external software required)
* Integrated voice + vision + navigation system
* Designed for safety-critical applications

---

## 👩‍💻 Author

**Sanskriti Sharma**

* Full-Stack Developer | AI Enthusiast

---

⭐ *If you found this project useful, consider giving it a star!*
