import { profile } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Professional Overview</h2>
        <p className="lead">{profile.summary}</p>
        <div className="stats">
          {profile.highlights.map((h) => (
            <div className="stat" key={h.label}>
              <span className="stat-value">{h.value}</span>
              <span className="stat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
