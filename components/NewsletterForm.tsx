"use client";

import { useState } from "react";
import { Arrow } from "./Arrow";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to a real provider (Resend, Mailchimp, Buttondown, ...)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="foot-newsletter">
      <label htmlFor="foot-news">Une newsletter mensuelle, sans bullshit.</label>
      <form className="foot-news-form" onSubmit={onSubmit}>
        <input
          id="foot-news"
          type="email"
          placeholder="votre@email.com"
          aria-label="Email pour la newsletter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted}
          required
        />
        <button type="submit" aria-label="S'inscrire" disabled={submitted}>
          <Arrow />
        </button>
      </form>
      <p className="foot-news-note">
        {submitted
          ? "Merci, c'est noté. Premier email dans quelques jours."
          : "1 email/mois · 1 clic pour partir · jamais de spam."}
      </p>
    </div>
  );
}
