export function Footer() {
  return (
    <>
      <div className="footer-blend" aria-hidden="true" />

      <footer className="footer">
        <div
          className="wrap"
          style={{ paddingTop: 0, position: "relative", zIndex: 2 }}
        >
          <div className="footer-inner">
            <div className="foot-brand">
              <div className="brand">
                <span className="brand-mark" aria-hidden="true" />
                <span className="brand-name">SORENA</span>
              </div>

              <p>
                Pour les centres esthétiques qui veulent un flux plus prévisible
                de clientes pour leurs cures premium.
              </p>

              <div className="foot-socials">
                <a href="https://www.instagram.com/sorenaagency" aria-label="Instagram" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2" y="2" width="12" height="12" rx="3" />
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="11.5" cy="4.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>

                <a href="https://www.facebook.com/share/1P38aCKRgs/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M9.5 14V8.5h1.9l.3-2.2H9.5V5c0-.6.2-1 1.1-1h1.2V2.1c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 2.9v1.6H5.4v2.2h1.8V14h2.3z" />
                  </svg>
                </a>

                <a href="mailto:sofya@sorenaagency.com" aria-label="Email">
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
                <li><a href="#methode">La solution</a></li>
                <li><a href="#resultat">Le résultat</a></li>
                <li><a href="#positionnement">Pour qui ?</a></li>
                <li><a href="#agenda">Réserver mon audit</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:contact@sorenaagency.com">
                    contact@sorenaagency.com
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
            <span>
              © {new Date().getFullYear()} Sorena Agency — Tous droits réservés.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}