import { Arrow } from "./Arrow";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <>
      <div className="footer-blend" aria-hidden="true" />

      <footer className="footer">
        <div className="wrap" style={{ paddingTop: 64, position: "relative", zIndex: 2 }}>
          <div className="foot-mega-cta">
            <div>
              <span className="kicker" style={{ color: "var(--rose)" }}>VOUS HÉSITEZ ENCORE ?</span>
              <h3>
                Une discussion de 30 minutes
                <br />
                peut <em>tout changer.</em>
              </h3>
            </div>
            <a className="btn btn-primary big-cta" href="#agenda">
              Réserver mon diagnostic
              <Arrow />
            </a>
          </div>

          <div className="footer-inner">
            <div className="foot-brand">
              <div className="brand">
                <span className="brand-mark" aria-hidden="true" />
                <span className="brand-name">SORENA</span>
              </div>
              <p>
                L'agence d'acquisition des centres esthétiques qui vendent des cures premium.
                Système clé en main, résultats en 30 jours, image préservée.
              </p>
              <NewsletterForm />
              <div className="foot-socials">
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2" y="2" width="12" height="12" rx="3" />
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="11.5" cy="4.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M9.5 14V8.5h1.9l.3-2.2H9.5V5c0-.6.2-1 1.1-1h1.2V2.1c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 2.9v1.6H5.4v2.2h1.8V14h2.3z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM2 6.5h2v7H2v-7zm4 0h2v1c.5-.7 1.3-1.2 2.5-1.2 1.8 0 2.5 1.3 2.5 3v4.2h-2V9.8c0-1-.5-1.5-1.3-1.5-.8 0-1.2.5-1.2 1.5v3.7H6v-7z" />
                  </svg>
                </a>
                <a href="mailto:contact@sorenaagency.com" aria-label="Email">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2" y="3" width="12" height="10" rx="1" />
                    <path d="M2 4l6 5 6-5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="foot-col">
              <h4>Agence</h4>
              <ul>
                <li><a href="#methode">La méthode</a></li>
                <li><a href="#resultats">Résultats clients</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#agenda">Réserver un appel</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Pour qui</h4>
              <ul>
                <li><a href="#">Centres cryolipolyse</a></li>
                <li><a href="#">Spa &amp; instituts premium</a></li>
                <li><a href="#">Médecine esthétique</a></li>
                <li><a href="#">Head Spa</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@sorenaagency.com">contact@sorenaagency.com</a></li>
                <li><a href="tel:+33000000000">+33 (0)1 00 00 00 00</a></li>
                <li>
                  <a href="#agenda" className="foot-availability">
                    <span className="dot" /> Disponible aujourd'hui
                  </a>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Légal</h4>
              <ul>
                <li><a href="/mentions-legales">Mentions légales</a></li>
                <li><a href="/cgv">CGV</a></li>
                <li><a href="/confidentialite">Confidentialité</a></li>
                <li><a href="/cookies">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-wordmark" aria-hidden="true">
          <span className="foot-wordmark-text">Sorena</span>
        </div>

        <div className="wrap">
          <div className="foot-base">
            <span>© {new Date().getFullYear()} Sorena Agency — Tous droits réservés.</span>
            <span className="foot-base-made">
              Conçu &amp; développé avec soin à Paris.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
