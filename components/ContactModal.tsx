"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFieldRef.current?.focus(), 300);
    };
    window.addEventListener("sorena:open-form", onOpen);
    return () => window.removeEventListener("sorena:open-form", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    let valid = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]").forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });
    if (!valid) return;

    const data = Object.fromEntries(new FormData(form).entries());
    // TODO: replace with real endpoint (Formspree, Resend, /api/contact, ...)
    console.log("Demande Sorena:", data);

    setSubmitted(true);
    setTimeout(() => {
      if (!open) {
        form.reset();
        setSubmitted(false);
      }
    }, 30000);
  };

  return (
    <div
      className={`modal-backdrop ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={onBackdropClick}
    >
      <div className="modal">
        <button className="modal-close" onClick={close} aria-label="Fermer">
          ×
        </button>

        {!submitted ? (
          <div>
            <div className="modal-kicker">DIAGNOSTIC STRATÉGIQUE · 30 MIN</div>
            <h2 id="modalTitle">
              Obtenir mon <em>diagnostic stratégique.</em>
            </h2>
            <p className="modal-intro">
              Laissez-nous vos coordonnées. Nous vous recontactons sous 24h pour planifier votre
              diagnostic stratégique.
            </p>

            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="f-firstname">Prénom</label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    id="f-firstname"
                    name="firstname"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-lastname">Nom</label>
                  <input
                    type="text"
                    id="f-lastname"
                    name="lastname"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <div className="form-field full">
                  <label htmlFor="f-center">Nom de votre centre</label>
                  <input type="text" id="f-center" name="center" required />
                </div>
                <div className="form-field">
                  <label htmlFor="f-email">Email</label>
                  <input
                    type="email"
                    id="f-email"
                    name="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-phone">Téléphone</label>
                  <input
                    type="tel"
                    id="f-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="form-field full">
                  <label htmlFor="f-type">Type d&apos;établissement</label>
                  <select id="f-type" name="type" required defaultValue="">
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    <option>Centre de cryolipolyse / minceur</option>
                    <option>Spa &amp; institut haut de gamme</option>
                    <option>Médecine esthétique</option>
                    <option>Head Spa / concept-store</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="form-field full">
                  <label htmlFor="f-message">Votre demande (optionnel)</label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={3}
                    placeholder="Quelques mots sur votre centre, vos cures, vos objectifs…"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Envoyer ma demande
                <Arrow />
              </button>
              <p className="form-note">Aucune obligation. Réponse personnelle sous 24h.</p>
            </form>
          </div>
        ) : (
          <div className="form-success show">
            <div className="form-success-check">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8l3 3 7-7" />
              </svg>
            </div>
            <h3>Merci.</h3>
            <p>Votre demande nous est parvenue. Nous revenons vers vous sous 24h.</p>
          </div>
        )}
      </div>
    </div>
  );
}
