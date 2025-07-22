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

                <div className="scroll-down-indicator" onClick={() => {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }}>
                    Scroll down
                    <div className="arrows">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="logo-curve-overlay"></div>
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
                    action="https://hexlinggames.us9.list-manage.com/subscribe/post?u=c9620bb1e2220de89024fca2d&amp;id=abb5cc1784&amp;f_id=00e6d7e3f0"
                    method="post"
                    target="_blank"
                    noValidate
                    className="mailchimp-form"
                >
                    <label htmlFor="mce-EMAIL">Email Address *</label>
                    <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        placeholder="Your email address"
                    />

                    {/* Bot protection field */}
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input
                            type="text"
                            name="b_c9620bb1e2220de89024fca2d_abb5cc1784"
                            tabIndex="-1"
                            defaultValue=""
                        />
                    </div>

                    <button type="submit">Subscribe</button>
                </form>
            </footer>
        </div>
    );
}
