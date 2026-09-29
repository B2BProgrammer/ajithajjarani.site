import { profile } from '../data/resume';

export default function Header() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="hero-sub">
            Architecting enterprise GenAI, cloud-native and event-driven platforms across Financial,
            Automotive, Retail and Manufacturing.
          </p>
          <div className="contact-row">
            <a href={`tel:${profile.phone.replace(/-/g, '')}`}>📞 {profile.phone}</a>
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          </div>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>Get in touch</a>
            <button className="btn ghost" onClick={() => window.print()}>Print / Save PDF</button>
          </div>
        </div>
        <div className="avatar" aria-hidden="true">AC</div>
      </div>
    </header>
  );
}
