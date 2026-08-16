"use client";

import { FormEvent, useMemo, useState } from "react";

const photos = {
  hero: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=2200&q=90",
  living: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  room: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
  view: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  dining: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  suite: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
};

const amenities = [
  ["⌁", "Valley views", "Uninterrupted views of Shimla's forested slopes"],
  ["◒", "Breakfast", "Fresh homestyle breakfast available every morning"],
  ["⌂", "Housekeeping", "Hotel-style daily room care and essentials"],
  ["⌁", "High-speed Wi-Fi", "Reliable connectivity across the property"],
  ["P", "Free parking", "Convenient on-site parking for guests"],
  ["♨", "Hot water", "24-hour hot water for cozy mountain stays"],
];

const roomOptions = [
  {
    name: "Valley View Deluxe",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
    guests: 2,
    bed: "1 king bed",
    size: "320 sq ft",
    price: 6500,
    oldPrice: 7800,
    badge: "Only 2 left",
    features: ["Private balcony", "Valley view", "Breakfast included"],
  },
  {
    name: "Garden Family Suite",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    guests: 4,
    bed: "1 king + 1 sofa bed",
    size: "480 sq ft",
    price: 8900,
    oldPrice: 10500,
    badge: "Family favourite",
    features: ["Private sit-out", "Garden access", "Breakfast included"],
  },
  {
    name: "Entire Baan Home",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85",
    guests: 6,
    bed: "3 bedrooms",
    size: "Full property",
    price: 18500,
    oldPrice: 22000,
    badge: "Best value",
    features: ["Exclusive use", "Living & dining", "Breakfast for 6"],
  },
];

const faqs = [
  ["What are the check-in and check-out timings?", "Check-in is from 1:00 PM and check-out is by 11:00 AM. Early check-in is subject to availability."],
  ["Is parking available at Baan Homes?", "Yes, complimentary on-site parking is available for staying guests."],
  ["Is Baan Homes suitable for families?", "Absolutely. The quiet setting, comfortable rooms and helpful local host make it an easy family stay."],
  ["How do I confirm my booking?", "Send an enquiry through this website or call us at 7018305160. Our host will confirm availability and share payment details."],
];

function formatDate(value: string) {
  if (!value) return "Select date";
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [checkin, setCheckin] = useState("2026-08-20");
  const [checkout, setCheckout] = useState("2026-08-22");
  const [guests, setGuests] = useState("2");
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0].name);

  const nights = useMemo(() => {
    const start = new Date(checkin).getTime();
    const end = new Date(checkout).getTime();
    return Math.max(1, Math.round((end - start) / 86400000) || 1);
  }, [checkin, checkout]);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function openBooking() {
    setSubmitted(false);
    setModalOpen(true);
    setMenuOpen(false);
  }

  function chooseRoom(roomName: string) {
    setSelectedRoom(roomName);
    openBooking();
  }

  const activeRoom = roomOptions.find((room) => room.name === selectedRoom) ?? roomOptions[0];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Baan Homes home">
          <span className="brand-mark">B</span>
          <span><strong>BAAN HOMES</strong><small>STAY A LITTLE LONGER</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/rooms">Rooms &amp; Rates</a>
          <a href="#amenities" onClick={() => setMenuOpen(false)}>Amenities</a>
          <a href="/experiences">Explore Shimla</a>
          <a href="/contact">Contact</a>
          <a className="nav-phone" href="tel:+917018305160">Call 7018305160</a>
        </nav>
        <button className="book-btn desktop-book" onClick={openBooking}>Book your stay</button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>

      <section id="top" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,23,18,.62), rgba(15,23,18,.08)), url(${photos.hero})` }}>
        <div className="hero-content reveal">
          <p className="eyebrow light">A PRIVATE HILLSIDE HOMESTAY · SHIMLA</p>
          <h1>Wake up to the<br /><em>quiet side</em> of Shimla.</h1>
          <p className="hero-copy">A warm, hotel-style stay with mountain views, thoughtful comforts and the ease of feeling at home.</p>
          <div className="hero-actions">
            <button className="book-btn large" onClick={openBooking}>Check availability <span>→</span></button>
            <a href="#stay" className="text-link light-link">Explore Baan Homes</a>
          </div>
        </div>
        <div className="hero-note"><span>✦</span><div><b>4.9 / 5</b><small>Loved by our guests</small></div></div>
      </section>

      <section className="booking-bar" aria-label="Check stay availability">
        <label><span>CHECK-IN</span><input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} /><b>{formatDate(checkin)}</b></label>
        <label><span>CHECK-OUT</span><input type="date" value={checkout} min={checkin} onChange={(e) => setCheckout(e.target.value)} /><b>{formatDate(checkout)}</b></label>
        <label><span>GUESTS</span><select value={guests} onChange={(e) => setGuests(e.target.value)}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option></select><b>{guests} guest{guests === "1" ? "" : "s"}</b></label>
        <button onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}>Search availability <span>→</span></button>
      </section>

      <section id="stay" className="intro section-pad">
        <div>
          <p className="eyebrow">WELCOME TO BAAN HOMES</p>
          <h2>A mountain home,<br />with hotel-like care.</h2>
        </div>
        <div className="intro-copy">
          <p>Set in the calm hills of Shimla, Baan Homes brings together the soul of a private homestay and the comfort of a boutique hotel. Unpack, slow down, and let the mountains set the pace.</p>
          <div className="mini-stats"><span><b>6</b> guests</span><span><b>3</b> bedrooms</span><span><b>3</b> baths</span></div>
          <a href="#rooms" className="text-link">Discover the home <span>→</span></a>
        </div>
      </section>

      <section className="gallery section-pad">
        <img className="gallery-main" src={photos.living} alt="Warm sunlit living room at Baan Homes" />
        <img src={photos.room} alt="Comfortable bedroom at Baan Homes" />
        <img src={photos.view} alt="Mountain views around Shimla" />
        <button className="gallery-button" onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}>View all spaces&nbsp; ↗</button>
      </section>

      <section id="rooms" className="rooms section-pad">
        <div className="section-head">
          <div><p className="eyebrow">AVAILABLE FOR YOUR DATES</p><h2>Choose your<br /><em>Baan Homes stay.</em></h2></div>
          <div className="search-summary"><span>{formatDate(checkin)} → {formatDate(checkout)}</span><b>{nights} night{nights > 1 ? "s" : ""} · {guests} guest{guests === "1" ? "" : "s"}</b><button onClick={() => document.querySelector(".booking-bar")?.scrollIntoView({behavior:"smooth"})}>Change search</button></div>
        </div>
        <div className="availability-note"><span>✓</span><div><b>Rooms are available</b><small>Free cancellation up to 7 days before check-in</small></div></div>
        <div className="room-options">
          {roomOptions.map((room) => (
            <article className="option-card" key={room.name}>
              <div className="option-image" style={{backgroundImage:`url(${room.image})`}}><span>{room.badge}</span><button aria-label={`Save ${room.name}`}>♡</button></div>
              <div className="option-details">
                <div className="option-title"><div><h3>{room.name}</h3><p>★ 4.9 · Exceptional</p></div><button className="mobile-select" onClick={() => chooseRoom(room.name)}>Select</button></div>
                <div className="room-facts"><span>♙ Up to {room.guests} guests</span><span>▱ {room.bed}</span><span>↔ {room.size}</span></div>
                <ul>{room.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
                <a href="#amenities">View room details</a>
              </div>
              <div className="option-price">
                <small>PER NIGHT</small><del>₹{room.oldPrice.toLocaleString("en-IN")}</del><b>₹{room.price.toLocaleString("en-IN")}</b><span>+ taxes &amp; fees</span><p><strong>₹{(room.price*nights).toLocaleString("en-IN")}</strong> for {nights} night{nights > 1 ? "s" : ""}</p><button onClick={() => chooseRoom(room.name)}>Select room <span>→</span></button><em>Pay securely after confirmation</em>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-strip">
        <div><span className="offer-icon">✦</span><p><b>Stay a little longer</b><small>Book 3 nights and enjoy a complimentary breakfast for two.</small></p></div>
        <button onClick={openBooking}>View offer</button>
      </section>

      <section id="amenities" className="amenities section-pad">
        <div className="section-head centered"><div><p className="eyebrow">EVERYTHING YOU NEED</p><h2>Comfort, considered.</h2></div></div>
        <div className="amenity-grid">
          {amenities.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="experiences" className="experience" style={{backgroundImage:`linear-gradient(90deg, rgba(17,28,20,.76), rgba(17,28,20,.12)), url(${photos.view})`}}>
        <div><p className="eyebrow light">THE SHIMLA EXPERIENCE</p><h2>Step out.<br /><em>The hills are waiting.</em></h2><p>From quiet forest walks to bustling Mall Road evenings, Baan Homes puts the best of Shimla within easy reach.</p><div className="distance-row"><span><b>15 min</b>Mall Road</span><span><b>20 min</b>The Ridge</span><span><b>35 min</b>Kufri</span></div><a className="text-link light-link" href="https://maps.google.com/?q=Shimla" target="_blank" rel="noreferrer">Explore nearby <span>↗</span></a></div>
      </section>

      <section className="reviews section-pad">
        <p className="eyebrow">GUEST NOTES</p>
        <div className="review-feature"><span className="quote">“</span><blockquote>The views are beautiful, the rooms are spotless and the hospitality feels genuinely personal. Exactly the quiet Shimla break we were hoping for.</blockquote><div><b>Riya &amp; Ankit</b><span>New Delhi · Family stay</span></div></div>
        <div className="review-stats"><span><b>4.9</b> Average rating</span><span><b>98%</b> Would stay again</span><span><b>4.8</b> Cleanliness</span></div>
      </section>

      <section className="faq section-pad">
        <div><p className="eyebrow">GOOD TO KNOW</p><h2>Before you arrive.</h2><p>Still have a question? Call us directly and we’ll be happy to help.</p><a href="tel:+917018305160" className="text-link">7018305160 <span>↗</span></a></div>
        <div className="faq-list">{faqs.map(([q,a], i) => <article key={q} className={openFaq === i ? "active" : ""}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button><p>{a}</p></article>)}</div>
      </section>

      <section id="contact" className="final-cta" style={{backgroundImage:`linear-gradient(rgba(15,28,20,.58), rgba(15,28,20,.72)), url(${photos.hero})`}}>
        <p className="eyebrow light">YOUR SHIMLA ESCAPE</p><h2>The mountains<br />are calling.</h2><p>Reserve your stay at Baan Homes and come home to the hills.</p><button className="book-btn large cream" onClick={openBooking}>Book Baan Homes <span>→</span></button>
      </section>

      <footer>
        <div className="footer-top"><a className="brand light-brand" href="#top"><span className="brand-mark">B</span><span><strong>BAAN HOMES</strong><small>SHIMLA</small></span></a><div><h4>Explore</h4><a href="#stay">The Stay</a><a href="#rooms">Rooms</a><a href="#amenities">Amenities</a></div><div><h4>Plan your stay</h4><button onClick={openBooking}>Check availability</button><a href="https://maps.google.com/?q=Shimla" target="_blank" rel="noreferrer">Location</a><a href="#">House rules</a></div><div><h4>Speak to us</h4><a href="tel:+917018305160">+91 70183 05160</a><a href="https://wa.me/917018305160?text=Hi%20Baan%20Homes%2C%20I%20would%20like%20to%20check%20availability." target="_blank" rel="noreferrer">WhatsApp us</a><span>Shimla, Himachal Pradesh</span></div></div>
        <div className="footer-bottom"><span>© 2026 Baan Homes. All rights reserved.</span><span>Made for slow days in the hills.</span></div>
      </footer>

      <a className="whatsapp" href="https://wa.me/917018305160?text=Hi%20Baan%20Homes%2C%20I%20would%20like%20to%20book%20a%20stay." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◔<span>WhatsApp</span></a>
      <div className="mobile-book"><div><small>FROM</small><b>₹6,500 <span>/ night</span></b></div><button onClick={openBooking}>Check dates</button></div>

      {modalOpen && <div className="modal-backdrop" onMouseDown={() => setModalOpen(false)}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close booking form">×</button>
        {!submitted ? <><p className="eyebrow">DIRECT BOOKING</p><h2 id="booking-title">Plan your stay.</h2><p className="modal-copy">Share your details and our Baan Homes host will call you to confirm availability.</p><form onSubmit={submitBooking}><label>Stay option<select value={selectedRoom} onChange={(e)=>setSelectedRoom(e.target.value)}>{roomOptions.map((room)=><option key={room.name} value={room.name}>{room.name} — ₹{room.price.toLocaleString("en-IN")}/night</option>)}</select></label><div className="form-row"><label>Check-in<input required type="date" value={checkin} onChange={(e)=>setCheckin(e.target.value)} /></label><label>Check-out<input required type="date" min={checkin} value={checkout} onChange={(e)=>setCheckout(e.target.value)} /></label></div><div className="form-row"><label>Guests<select value={guests} onChange={(e)=>setGuests(e.target.value)}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option></select></label><label>Phone number<input required type="tel" placeholder="Your mobile number" /></label></div><label>Full name<input required type="text" placeholder="Your name" /></label><div className="selected-summary"><img src={activeRoom.image} alt="" /><div><b>{activeRoom.name}</b><span>{activeRoom.bed} · Up to {activeRoom.guests} guests</span></div></div><div className="price-line"><span>{nights} night{nights > 1 ? "s" : ""} · {guests} guest{guests === "1" ? "" : "s"}</span><b>₹{(activeRoom.price*nights).toLocaleString("en-IN")}</b></div><button className="submit-btn" type="submit">Request booking <span>→</span></button></form><a className="call-direct" href="tel:+917018305160">Or call +91 70183 05160</a></> : <div className="success"><span>✓</span><h2>Request received.</h2><p>Thanks! Our host will call you shortly to confirm your {selectedRoom} booking.</p><button className="submit-btn" onClick={()=>setModalOpen(false)}>Done</button></div>}
      </div></div>}
    </main>
  );
}
