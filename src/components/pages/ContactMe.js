import React from "react";

export default function ContactMe() {
    return (
        <div>
            <main>
                <section id="contact-me">
                    <h3><span>Contact</span><span>Me</span></h3>
                    <div>
                        <p>Tel:</p>
                        <a href="tel:+14255039206">425.503.9206</a>
                        <p>Email:</p>
                        <a href="mailto:ywkuo@outlook.com">ywkuo@outlook.com</a>

                        <form>
                            <div>
                                <label for="name-contact">Name:</label>
                                <input type="text" id="name-contact" />
                            </div>
                            <div>
                                <label for="email-contact">Email Address:</label>
                                <input type="email" id="email-contact" />
                            </div>
                            <div>
                                <label for="msg-contact">Message:</label>
                                <textarea rows="7" type="text" id="msg-contact" />
                            </div>
                            <div>
                                <button type="submit"><i class="bi bi-envelope-open"></i> Submit</button>
                            </div>
                        </form>

                    </div>
                </section>
            </main>
        </div>
    )
}