"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";

interface NavLink {
  href: string;
  label: string;
  /** Section de l'accueil suivie par le scrollspy (uniquement sur "/"). */
  sectionId?: string;
}

const LINKS: readonly NavLink[] = [
  { href: "/#calcul", label: "Calculateur", sectionId: "calcul" },
  { href: "/#constat", label: "Constat", sectionId: "constat" },
  { href: "/#methode", label: "Protocole", sectionId: "methode" },
  { href: "/#faq", label: "Questions", sectionId: "faq" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scrollspy : met en surbrillance le lien de la section visible (accueil).
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    LINKS.forEach(({ sectionId }) => {
      const el = sectionId ? document.getElementById(sectionId) : null;
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (link: NavLink): boolean =>
    link.sectionId
      ? isHome && activeSection === link.sectionId
      : pathname === link.href || pathname.startsWith(`${link.href}/`);

  const close = () => setMenuOpen(false);

  return (
    <nav className="nav" id="nav" aria-label="Navigation principale">
      <div className="nav-announce">
        <strong>Diagnostic offert de votre zone</strong>
        <span className="nav-announce-sep" aria-hidden="true">·</span>
        <span className="nav-announce-detail">Sans engagement</span>
        <span className="nav-announce-sep" aria-hidden="true">·</span>
        <a href="#agenda" data-cta="bandeau">
          Réserver <span aria-hidden="true">→</span>
        </a>
      </div>
      {/* Logo au centre (codes des maisons de luxe) : liens à gauche,
          réservation à droite. Sur mobile : menu | logo | réserver. */}
      <div className="nav-inner nav-centree">
        <div className="nav-gauche">
          <button
            className={`nav-burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {LINKS.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "active" : ""}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                >
                  {link.label}
                </Link>
              );
            })}
            <a className="btn btn-dark nav-links-cta" href="#agenda" onClick={close}>
              Réserver mon diagnostic offert
            </a>
          </div>
        </div>

        <Link className="brand" href="/" onClick={close} aria-label="Sorena, accueil">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">SORENA</span>
        </Link>

        <div className="nav-actions">
          {/* Chaque page marketing embarque l'agenda (#agenda) en pied de page. */}
          <a className="btn btn-primary nav-reserver" href="#agenda" onClick={close} data-cta="nav">
            <span className="nav-reserver-long">Diagnostic offert</span>
            <span className="nav-reserver-court">Réserver</span>
            <Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}
