# Emotion Tracker App 😄

This is a modern Emotion Tracker Web App built using **React.js**, **Tailwind CSS**, and **Framer Motion**.  
It allows users to select their current emotion, write the reason behind it, and receive suggestions — all with beautiful UI transitions.

---

## 📌 Features

- 🎭 Emotion selection from visual cards
- 📝 Reason input with styled textarea
- ✅ Success page with congratulatory message and recommendations
- 📱 Swiper carousel for mobile-only view
- 💡 Static card display on desktop
- 🎨 Fully responsive and mobile-friendly layout
- 🔔 Toast notifications using `react-hot-toast`
- 🚀 Smooth page transitions using `framer-motion`

---

## 🛠️ Technologies Used

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **React Router DOM**
- **Swiper.js**
- **Axios**
- **React Hot Toast**

---

## 🧾 Installation & Running Locally

Follow these steps to run the app locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/emotion-tracker.git


Navigate into the project folder

cd emotion-tracker

Install the dependencies

npm install

Start the development server

npm run dev (App will run at: http://localhost:5173/)

Folder Structure Overview
src/
├── assets/           → Logos & images
├── components/       → Reusable components (Button, PageWrapper, etc.)
├── data/             → Static JSON file for emotions
├── pages/            → Main pages like ChooseEmotion, ReasonInput, Succes
├── App.jsx           → Routing setup
├── main.jsx          → React root entry
