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
                <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet"
                          type="text/css"/>
                    <style type="text/css">
                        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
                        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                        <form
                            action="https://hexlinggames.us9.list-manage.com/subscribe/post?u=c9620bb1e2220de89024fca2d&amp;id=abb5cc1784&amp;f_id=00e6d7e3f0"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                            className="validate" target="_blank">
                            <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                                <div className="indicates-required"><span className="asterisk">*</span> indicates
                                    required
                                </div>
                                <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span
                                    className="asterisk">*</span></label><input type="email" name="EMAIL"
                                                                                className="required email"
                                                                                id="mce-EMAIL" required="" value=""/>
                                </div>
                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style="display: none;"></div>
                                    <div className="response" id="mce-success-response" style="display: none;"></div>
                                </div>
                                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                    /* real people should not fill this in and expect good things - do not remove this
                                    or risk form bot signups */
                                    <input type="text" name="b_c9620bb1e2220de89024fca2d_abb5cc1784" tabIndex="-1"
                                           value=""/>
                                </div>
                                <div className="optionalParent">
                                    <div className="clear foot">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe"
                                               className="button" value="Subscribe"/>
                                        <p style="margin: 0px auto;"><a href="http://eepurl.com/jiO0Ts"
                                                                        title="Mailchimp - email marketing made easy and fun"><span
                                            style="display: inline-block; background-color: transparent; border-radius: 4px;"><img
                                            className="refferal_badge"
                                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                            alt="Intuit Mailchimp"
                                            style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"/></span></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <script type="text/javascript"
                            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                    <script
                        type="text/javascript">(function ($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery)
                    )
                    ;var $mcj = jQuery.noConflict(true);</script>
                </div>

            </footer>
        </div>
    );
}
