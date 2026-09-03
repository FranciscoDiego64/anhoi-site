"use client";

import { useState } from "react";
import { translations, Language } from "./translations";

const sections = [
  { number: "01" },
  { number: "02" },
  { number: "03" },
  { number: "04" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <main>
      <div className="plant plant-left" aria-hidden="true">
        <img src="/plants/plant-left.png" alt="" />
      </div>

      <div className="plant plant-right" aria-hidden="true">
        <img src="/plants/plant-right.png" alt="" />
      </div>

      <button
  className={`menu-toggle ${menuOpen ? "open" : ""}`}
  type="button"
  aria-label="Open menu"
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span />
  <span />
  <span />
</button>

<nav
  className={`section-menu ${menuOpen ? "open" : ""}`}
  aria-label="Section navigation"
>
  <a href="#welcome" onClick={() => setMenuOpen(false)}>
    {t.menuWelcome}
  </a>

  <a href="#program" onClick={() => setMenuOpen(false)}>
    {t.menuProgram}
  </a>

  <a href="#practical" onClick={() => setMenuOpen(false)}>
    {t.menuPractical}
  </a>

  <a href="#closing" onClick={() => setMenuOpen(false)}>
    {t.menuClosing}
  </a>
</nav>

      <nav className="language-menu" aria-label="Language selection">
        {(["en", "cz", "vn", "es"] as Language[]).map((lang) => (
          <button
            key={lang}
            type="button"
            className={language === lang ? "active" : ""}
            onClick={() => setLanguage(lang)}
          >
            {translations[lang].language}
          </button>
        ))}
      </nav>

      {/* 01 — Welcome */}
      <section id="welcome" className="hero section">
       <p className="section-number">01</p>


        <h1 className="hero-title">
          <span>{t.welcomeLine1}</span>
          <span>{t.welcomeLine2}</span>
          <span>{t.welcomeLine3}</span>
        </h1>

        <p className="date">12.09.2026</p>

        <p className="location">
          Drnovice 130, 683 04 Drnovice, Czech Republic
          <br />
          <a
            href="https://maps.app.goo.gl/7B8MaTMBnnsBZQPg9"
            target="_blank"
            rel="noreferrer"
          >
            {t.viewLocation}
          </a>
        </p>

        <div className="notice">
          <strong>{t.pleaseNote}</strong>{" "}
          {t.twoVillages} <strong>{t.postcode}</strong> {t.journey}
        </div>
      </section>

      <div className="intro-photo">
        <img
          src="/photos/invitation-photo2.jpeg"
          alt="Lễ Ăn Hỏi"
        />
      </div>

      {/* Lễ Ăn Hỏi introduction */}
      <section id="lei-an-hoi" className="content-section">
        <h2>{t.leiAnHoi}</h2>

        <p>{t.intro1}</p>

        <p>{t.intro2}</p>

        <p>{t.intro3}</p>

        <p>{t.intro4}</p>

        <p>{t.intro5}</p>

        <p>{t.intro6}</p>
      </section>

      {/* 02 — Program */}
      <section id="program" className="section">
        <p className="section-number">02</p>

        <h2>{t.program}</h2>

        <div className="event">
          <h3>{t.teaCeremony}</h3>

          <p className="event-time">10:00 AM</p>

          <p className="location">
            Drnovice 130, 683 04 Drnovice, Czech Republic
            <br />
            <a
              href="https://maps.app.goo.gl/7B8MaTMBnnsBZQPg9"
              target="_blank"
              rel="noreferrer"
            >
              {t.viewLocation}
            </a>
          </p>

          <p>{t.teaDescription}</p>
        </div>

        <div className="event">
          <h3>{t.lunch}</h3>

          <p className="event-time">12:00 PM</p>

          <h4>Kulturní dům Drnovice</h4>

          <p className="location">
            Drnovice 713, 683 04 Drnovice
            <br />
            <a
              href="https://www.google.com/maps/place/Kulturn%C3%AD+d%C5%AFm,+Drnovice/@49.2763588,16.9524474,17z/data=!3m1!4b1!4m6!3m5!1s0x4712f00dc79b0d5b:0x172faeb844c93fd1!8m2!3d49.2763588!4d16.9524474!16s%2Fg%2F11b7dv6ctc?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              {t.viewLocation}
            </a>
          </p>

          <p>{t.lunchDescription}</p>
        </div>
      </section>

      {/* 03 — Practical Information */}
    <section id="practical" className="section">
      <p className="section-number">03</p>

        <h2>{t.practical}</h2>

        <div className="info-block">
          <h3>{t.dressCode}</h3>

          <p>
            <strong>{t.formalElegant}</strong>
          </p>

          <p>{t.dressDescription}</p>
        </div>

        <div className="info-block">
          <h3>{t.whereToStay}</h3>

          <p>{t.stayDescription1}</p>

          <p>{t.stayDescription2}</p>
        </div>

        <div className="info-block">
          <h3>{t.transportation}</h3>

          <p>{t.transportDescription1}</p>

          <p>{t.transportDescription2}</p>
        </div>

        <div className="info-block">
          <h3>{t.parking}</h3>

          <p>{t.parkingDescription}</p>

          <p>
            <strong>{t.parkingLocation}</strong>
            <br />
            Parkoviště u stadionu, 37926, 683 04 Drnovice
            <br />
            <a
              href="https://www.google.com/maps/place/Parkovi%C5%A1t%C4%9B+u+stadionu/@49.276755,16.9485374,653m/data=!3m1!1e3!4m6!3m5!1s0x4712f00dc607e4ef:0xf1092bc4d33e744a!8m2!3d49.2760631!4d16.952489!16s%2Fg%2F11bz0p6wxh?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              {t.viewLocation}
            </a>
          </p>
        </div>
      </section>

      {/* 04 — Closing */}
      <section id="closing" className="closing section">
        <p className="section-number">04</p>

        <div className="plant-closing-left" aria-hidden="true">
          
          <img src="/plants/plant-left.png" alt="" />
        </div>

        <div className="plant-closing-right" aria-hidden="true">
          <img src="/plants/plant-right.png" alt="" />
        </div>

      

        <h2>{t.closing}</h2>

        <p>{t.closing1}</p>

        <p>{t.closing2}</p>

        <p>{t.closing3}</p>

        <p>{t.closing4}</p>

        <p className="see-you">{t.seeYou}</p>

        <p className="names">Anh &amp; Diego</p>
      </section>
    </main>
  );
}