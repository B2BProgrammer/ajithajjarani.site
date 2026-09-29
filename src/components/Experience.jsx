import { useState } from 'react';
import { experience } from '../data/resume';

function BulletList({ items }) {
  return (
    <ul className="bullets">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function Project({ project, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="project">
      <button className="project-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <div>
          {project.client && <span className="client">Client: {project.client}</span>}
          <h4>{project.name}</h4>
        </div>
        <span className={`chevron ${open ? 'open' : ''}`}>▾</span>
      </button>

      {/* Always rendered (hidden when collapsed) so printing includes every project */}
      {(
        <div className={`project-body ${open ? '' : 'collapsed'}`}>
          <p className="muted">{project.description}</p>

          {project.subsections?.map((sub) => (
            <div key={sub.title} className="sub">
              <h5>{sub.title}</h5>
              <BulletList items={sub.points} />
            </div>
          ))}

          {project.responsibilities && (
            <div className="sub">
              <h5>Responsibilities</h5>
              <BulletList items={project.responsibilities} />
            </div>
          )}

          {project.value && (
            <div className="value">
              <h5>Business / Technology Value</h5>
              <BulletList items={project.value} />
            </div>
          )}

          {project.tech && (
            <div className="tags">
              {project.tech.map((t) => <span className="tag small" key={t}>{t}</span>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experience.map((job, idx) => (
            <article className="job" key={`${job.company}-${job.period}`}>
              <div className="dot" />
              <div className="job-head">
                <div>
                  <h3>{job.company}</h3>
                  <p className="role">{job.role}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              {job.projects.map((p, i) => (
                <Project key={p.name} project={p} defaultOpen={idx === 0 && i === 0} />
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
