import { education, profile } from '../data/resume';

export default function Education() {
  return (
    <>
      <section id="education" className="section alt">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="edu-grid">
            {education.map((e) => (
              <div className="card" key={e.degree}>
                <span className="edu-icon">🎓</span>
                <h3>{e.degree}</h3>
                <p className="muted">{e.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.name} · Built with React + Vite</p>
        </div>
      </footer>
    </>
  );
}
