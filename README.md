Welcome to the Real-Time Bus Tracking System! 

🚀 Project Overview
This system tracks the real-time location of a moving bus using a GPS module (e.g., NEO-6M) connected to an ESP8266/ESP32 board.
The data is sent to Firebase Realtime Database, and users can access the current location via a web-based dashboard after logging in.

✨ Features:

📡 Real-time GPS tracking

🔐 Secure login and signup system

🌍 Location updates displayed on Google Maps

🧑‍💻 Firebase integration for data storage and authentication

📱 Responsive dashboard for desktop and mobile views

🛠️ Tech Stack
Component	Description
ESP8266 / ESP32	Microcontroller for sending GPS data
GPS Module	Captures current coordinates
Firebase	Realtime Database + Auth
HTML/CSS/JS	Frontend dashboard
Google Maps API	For location visualization

🧩 System Architecture
GPS Module receives live coordinates (latitude & longitude).

ESP board reads the data and pushes it to Firebase.

Firebase updates the database in real time.

Web Dashboard fetches the coordinates and displays them on a map.

User Authentication ensures only registered users can view the bus locations.

📦 Installation & Setup

📍 Hardware Requirements:
ESP8266 or ESP32

NEO-6M GPS Module

Jumper wires and breadboard

Internet connection (Wi-Fi)

🧪 Software Requirements:
Arduino IDE with ESP board support

Firebase project with Database & Auth enabled

Google Maps API key

