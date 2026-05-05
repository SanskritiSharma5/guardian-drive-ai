# GuardianDrive AI 🚘🛡️

GuardianDrive AI is a full-stack, AI-powered driver safety web application that runs entirely in your browser. It uses computer vision to detect driver fatigue and distraction in real-time, features a hands-free voice assistant, and provides a persistent dashboard to track your driving safety scores over time.

## ✨ Features

- **Real-Time Computer Vision:** Uses Google’s MediaPipe FaceMesh to track facial landmarks. Calculates Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to detect sleeping, yawning, and looking away.
- **Voice Assistant:** Integrated Web Speech API allows drivers to say "Hey Guardian" for hands-free navigation updates and safety scores.
- **Smart Navigation:** Live GPS tracking and mapping powered by Leaflet.js and OpenStreetMap.
- **Emergency Protocols:** Automatically dispatches high-contrast alerts and prepares to notify emergency contacts if severe danger is detected.
- **Data Persistence:** Full backend database to permanently save user accounts, settings, emergency contacts, and historical trip telemetry.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** SQLite (via sql.js)
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **APIs & Libraries:** MediaPipe, Web Speech API, Geolocation API, Leaflet.js, Chart.js

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

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

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

*Note: A demo user (`demo_user` / `DriveSafe@123`) is automatically seeded into the database on the first run.*

## 🔒 Permissions Required
To use the app fully, your browser will request access to:
- **Camera:** For AI fatigue detection.
- **Microphone:** For the voice assistant.
- **Location:** For navigation and emergency tracking.

## 📄 License
This project is open-source and available under the MIT License.
