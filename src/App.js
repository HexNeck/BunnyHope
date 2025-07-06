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
                    In Bunny Hope, you’re a brave bunny fighting nightmares to help
                    children sleep peacefully. Use powerful cards and clever strategy in
                    this cozy, dreamlike adventure.
                </p>

                <p>
                    Bunny Hope is a turn-based card battler where you wield dreams,
                    stories and even light as weapons. Build your deck, defeat nightmares,
                    and guide children toward peaceful slumber. Blending whimsical charm
                    with strategic depth, this adventure is perfect for players who love
                    tactical games with heart.
                </p>

                <ul className="feature-list">
                    <li>Build and customize your dream-powered card deck</li>
                    <li>
                        Explore hand-painted dream worlds, from cozy nurseries to eerie
                        nightmare realms
                    </li>
                    <li>Attack with lullabies, paintbrushes, and musical blasts</li>
                    <li>Defeat bizarre enemies like shadow monsters and conquer fears</li>
                    <li>
                        Unlock unique bunnies, each with their own powers and personalities
                    </li>
                </ul>

                <p className="sweet-dreams">Sweet dreams</p>

                <div className="gif-grid">
                    <img src="gif1.gif" alt="Bunny Hope gameplay 1" className="gif" />
                    <img src="gif2.gif" alt="Bunny Hope gameplay 2" className="gif" />
                    <img src="gif3.gif" alt="Bunny Hope gameplay 3" className="gif" />
                    <img src="gif4.gif" alt="Bunny Hope gameplay 4" className="gif" />
                </div>
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
