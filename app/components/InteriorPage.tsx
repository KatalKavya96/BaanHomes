"use client";

import { ReactNode, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header inner-header">
      <a className="brand" href="/"><span className="brand-mark">B</span><span><strong>BAAN HOMES</strong><small>STAY A LITTLE LONGER</small></span></a>
      <nav className={open ? "nav open" : "nav"}><a href="/about">About</a><a href="/rooms">Rooms &amp; Rates</a><a href="/experiences">Explore Shimla</a><a href="/contact">Contact</a><a className="nav-phone" href="tel:+917018305160">Call 7018305160</a></nav>
      <a className="book-btn desktop-book" href="/book">Book your stay</a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><span></span><span></span></button>
    </header>;
}

export function SiteFooter() {
  return <><footer><div className="footer-top"><a className="brand light-brand" href="/"><span className="brand-mark">B</span><span><strong>BAAN HOMES</strong><small>SHIMLA</small></span></a><div><h4>Explore</h4><a href="/about">About</a><a href="/rooms">Rooms &amp; Rates</a><a href="/experiences">Experiences</a></div><div><h4>Plan your stay</h4><a href="/book">Book now</a><a href="/policies">Stay policies</a><a href="/contact">Contact</a></div><div><h4>Speak to us</h4><a href="tel:+917018305160">+91 70183 05160</a><a href="https://wa.me/917018305160">WhatsApp us</a><span>Shimla, Himachal Pradesh</span></div></div><div className="footer-bottom"><span>© 2026 Baan Homes.</span><span>Made for slow days in the hills.</span></div></footer><a className="whatsapp" href="https://wa.me/917018305160" aria-label="WhatsApp">◔<span>WhatsApp</span></a></>;
}

export function InteriorPage({ eyebrow, title, intro, image, children }: { eyebrow: string; title: string; intro: string; image: string; children: ReactNode }) {
  return <main>
    <SiteHeader />
    <section className="inner-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(12,25,17,.68),rgba(12,25,17,.12)),url(${image})`}}><div><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>
    {children}
    <section className="inner-cta"><p className="eyebrow">MAKE YOURSELF AT HOME</p><h2>Ready for the hills?</h2><p>Choose your room and send us a booking request in a few easy steps.</p><a className="book-btn large" href="/book">Check availability <span>→</span></a></section>
    <SiteFooter />
  </main>;
}
