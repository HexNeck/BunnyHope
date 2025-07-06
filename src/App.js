import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

export default function App() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <div className="landing-container">
            {/* Full-page logo section */}
            <motion.section
                className="logo-section"
                style={{ opacity }}
            >
                <img src="logo.png" alt="Bunny Hope Logo" className="logo-full" />
                <div className="logo-curve"></div>
            </motion.section>

            {/* Main content */}
            <main className="landing-main">
                <h1>Welcome to Bunny Hope</h1>
                <p>
                    In Bunny Hope, you play as a brave bunny battling nightmares to help
                    children sleep peacefully. Use powerful cards and strategy in this
                    cozy adventure!
                </p>
            </main>

            {/* Footer / signup */}
            <footer className="landing-footer">
                <h2>Stay Updated!</h2>
                <p>Sign up to get notified when Bunny Hope is ready!</p>
                <form
                    className="signup-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you for signing up!");
                    }}
                >
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Notify Me</button>
                </form>
            </footer>
        </div>
    );
}
