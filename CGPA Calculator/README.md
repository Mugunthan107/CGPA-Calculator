# CGPA Calculator Tool
A web-based application to calculate and manage CGPA (Cumulative Grade Point Average) for students. This tool allows users to log in, calculate their CGPA, and view their history.

## Features
- **User Authentication**: Sign up, log in, and log out functionality using Firebase Authentication.
- **CGPA Calculation**: Calculate CGPA based on user input.
- **History Management**: View and manage CGPA calculation history, stored securely in Firebase Firestore.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Google Sign-In**: Authenticate using Google for quick access.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Firebase Authentication, Firebase Firestore
- **Build Tool**: Vite
- **State Management**: React Query

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cgpa-calculator-tool.git
   cd cgpa-calculator-tool

## Install dependencies:
   npm install

## Start the development server:
   npm run dev

## Open the app in your browser:
   http://localhost:8080

## Firebase Setup
1) Go to the Firebase Console.
2) Create a new project and enable Authentication and Firestore Database.
3) Replace the Firebase configuration in firebaseConfig.js with your project's
credentials.

## Folder Structure
src/
├── components/         # Reusable UI components
├── pages/              # Application pages (Home, Login, Account, History, etc.)
├── styles/             # Global styles and Tailwind configuration
├── firebaseConfig.js   # Firebase configuration
├── App.tsx             # Main application component
└── main.tsx            # Entry point for the application