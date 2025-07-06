import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
      <div className="landing-container">
        {/* Header */}
        <header className="landing-header">
          <img src="/logo.png" alt="Bunny Hope Logo" className="logo" />
        </header>

        {/* Main content */}
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="landing-main"
        >
          <h1>Welcome to Bunny Hope</h1>
          <p>
            In Bunny Hope, you play as a brave bunny battling nightmares to help
            children sleep peacefully. Use powerful cards and strategy in this
            cozy adventure!
          </p>
          <div className="gif-container">
            <img src="/gif1.gif" alt="Gameplay 1" className="gif" />
            <img src="/gif2.gif" alt="Gameplay 2" className="gif" />
          </div>
        </motion.main>

        {/* Footer / signup */}
        <footer className="landing-footer">
          <h2>Stay Updated!</h2>
          <p>Sign up to get notified when Bunny Hope is ready!</p>
          <form className="signup-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Notify Me</button>
          </form>
        </footer>
      </div>
  );
}
