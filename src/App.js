import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

export default function App() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <div className="landing-container">
            {/* Full-page logo section */}
            <motion.section className="logo-section" style={{ opacity }}>
                <img src="logo.png" alt="Bunny Hope Logo" className="logo-full" />
                <div className="logo-curve"></div>
            </motion.section>

            {/* Main content */}
            <main className="landing-main">
                <h1>Welcome to Bunny Hope</h1>
                <p className="intro-text">
                    In Bunny Hope, you’re a brave bunny fighting nightmares to help
                    children sleep peacefully. Use powerful cards and clever strategy in
                    this cozy, dreamlike adventure.
                </p>
                <p className="intro-text">
                    Bunny Hope is a turn-based card battler where you wield dreams,
                    stories and even light as weapons. Build your deck, defeat nightmares,
                    and guide children toward peaceful slumber. Blending whimsical charm
                    with strategic depth, this adventure is perfect for players who love
                    tactical games with heart.
                </p>

                <div className="feature-block">
                    <img src="gif1.gif" alt="Build deck" className="gif-inline" />
                    <p>Build and customize your dream-powered card deck</p>
                </div>

                <div className="feature-block">
                    <img src="gif2.gif" alt="Explore world" className="gif-inline" />
                    <p>
                        Explore hand-painted dream worlds, from cozy nurseries to eerie
                        nightmare realms
                    </p>
                </div>

                <div className="feature-block">
                    <img src="gif3.gif" alt="Attack" className="gif-inline" />
                    <p>Attack with lullabies, paintbrushes, and musical blasts</p>
                </div>

                <div className="feature-block">
                    <img src="gif4.gif" alt="Enemies" className="gif-inline" />
                    <p>
                        Defeat bizarre enemies like shadow monsters and conquer fears
                    </p>
                </div>

                <img src="gif5.gif" alt="Enemies" className="gif-inline" />
                <p>
                    Defeat bizarre enemies like shadow monsters and conquer fears
                </p>                <p className="sweet-dreams">Sweet dreams</p>
            </main>

            {/* Footer */}
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
