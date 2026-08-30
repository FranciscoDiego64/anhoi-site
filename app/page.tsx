const sections = [
  {
    number: "01",
    title: "WELCOME TO OUR CEREMONY",
  },
  {
    number: "02",
    title: "The Day",
  },
  {
    number: "03",
    title: "Practical Information",
  },
  {
    number: "04",
    title: "We’re Looking Forward to Seeing You",
  },
];

export default function Home() {
  return (
    <main>
      {/* 01 — Welcome */}
      <section className="hero section">
        <p className="section-number">{sections[0].number}</p>

        <h1>{sections[0].title}</h1>

        <p className="date">12.09.2026</p>

        <p className="location">Drnovice, Czech Republic</p>

        <div className="notice">
          <strong>Please note:</strong> There are two villages in the Czech
          Republic called Drnovice. Please make sure you use the correct{" "}
          <strong>postcode: 683 04</strong> when planning your journey.
        </div>
      </section>

      <section className="content-section">
        <h2>Lễ Ăn Hỏi</h2>

        <p>We would love to invite you to a day that is truly special to us and our families.</p>

        <p>Lễ Ăn Hỏi is a traditional Vietnamese ceremony where the bride’s and groom’s families come together. 
          The groom’s family formally comes to ask for the bride’s hand and brings symbolic gifts to her family. 
          The ceremony also includes a traditional tea ceremony, which represents respect and gratitude towards parents and older generations.
        </p>

        <p>In Vietnamese culture, Lễ Ăn Hỏi is a very meaningful occasion. 
          It is not only about two people, but above all about bringing two families together.</p>

        <p>For us, this day will be even more special because our loved ones will be coming together from different parts of the world — Vietnam, Mexico, the Czech Republic and Germany.</p>

        <p>We have decided to celebrate this tradition in our own way — a little traditional, a little western, and most importantly, surrounded by the people who are close to us.</p>

        <p>And because this will be our only celebration together in Europe, we would really love to have you there with us.</p>
      </section>

      {/* 02 — The Day */}
      <section className="section">
        <p className="section-number">{sections[1].number}</p>

        <h2>{sections[1].title}</h2>

        <div className="event">
          <h3>Lễ Ăn Hỏi &amp; Tea Ceremony</h3>

          <p className="event-date">Saturday, 12 September 2026</p>
          <p className="event-time">10:00 AM</p>

          <p>
            We will begin the morning with a traditional Vietnamese{" "}
            <strong>tea ceremony</strong>, followed by the{" "}
            <strong>Lễ Ăn Hỏi</strong> ceremony, where our families will
            officially come together.
          </p>

          <p>
            After the ceremony, we will all head to lunch and continue the
            celebration together.
          </p>
        </div>

        <div className="event">
          <h3>Lunch &amp; Celebration</h3>

          <p className="event-time">12:00 PM</p>

          <h4>Kulturní dům Drnovice</h4>

          <p>
            Drnovice 713, 683 04 Drnovice {" "}
            <br />
            <a href="#" target="https://www.google.com/maps/place/Kulturn%C3%AD+d%C5%AFm,+Drnovice/@49.2763588,16.9524474,17z/data=!3m1!4b1!4m6!3m5!1s0x4712f00dc79b0d5b:0x172faeb844c93fd1!8m2!3d49.2763588!4d16.9524474!16s%2Fg%2F11b7dv6ctc?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D" rel="noreferrer">
              View location on Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* 03 — Practical Information */}
      <section className="section">
        <p className="section-number">{sections[2].number}</p>

        <h2>{sections[2].title}</h2>

        <div className="info-block">
          <h3>Dress Code</h3>

          <p>
            <strong>Formal / Elegant</strong>
          </p>

          <p>
            There is no specific traditional dress code. Simply come{" "}
            <strong>dressed elegantly and ready to celebrate</strong>.
          </p>
        </div>

        <div className="info-block">
          <h3>Where to Stay</h3>

          <p>
            If you are travelling from further away, we recommend staying in{" "}
            <strong>Brno</strong>.
          </p>

          <p>
            Drnovice is approximately <strong>25 minutes by car from Brno</strong>,
            which offers the widest choice of hotels, Airbnbs, restaurants, breweries and
            other things to do.
          </p>
        </div>

        <div className="info-block">
          <h3>Transportation</h3>

          <p>
            If you would like a ride from Brno,{" "}
            <strong>
              please send us the address of your hotel or accommodation in
              advance
            </strong>
            .
          </p>

          <p>
            We will arrange a car to pick you up in the morning, approximately
            between <strong>8:40 and 9:20 AM</strong>, depending on the
            location of your accommodation. We will also arrange a car back to
            your hotel.
          </p>
        </div>

        <div className="info-block">
          <h3>Parking</h3>

          <p>
            There is <strong>free parking next to the cultural centre</strong>,
            with plenty of space for all our guests.
          </p>

          <p>
            <strong>Parking location:</strong>
            <br />
            37926, 683 04 Drnovice{" "}
            <br />
            <a href="#" target="https://www.google.com/maps/place/Parkovi%C5%A1t%C4%9B+u+stadionu/@49.276755,16.9485374,653m/data=!3m1!1e3!4m6!3m5!1s0x4712f00dc607e4ef:0xf1092bc4d33e744a!8m2!3d49.2760631!4d16.952489!16s%2Fg%2F11bz0p6wxh?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D" rel="noreferrer">
              View location on Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* 04 — Closing */}
      <section className="closing section">
        <p className="section-number">{sections[3].number}</p>

        <h2>{sections[3].title}</h2>

        <p>
          For us, this will be more than just another celebration.
        </p>

        <p>
          It will be the day when{" "}
          <strong>our two families meet for the first time</strong>, when we
          celebrate our roots and create something new together.
        </p>

        <p>
          And we are so happy that we can share it with you.
        </p>

        <p>
          We are looking forward to good food, tea, laughter, meeting our
          families and, most importantly, spending a beautiful day together.
        </p>

        <p className="see-you">See you on 12 September 2026 🤍</p>

        <p className="names">Anh &amp; Diego</p>
      </section>
    </main>
  );
}