import { skills } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title">Technologies</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="card skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
