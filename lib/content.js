// The one place all 18 themes read from.
// Values here are the fallbacks used until Sanity has real content
// (or when no Sanity project is configured at all).

export const DEFAULT_CONTENT = {
  name: 'Raphael Gabriel Geronimo',
  title: 'Full-stack developer & founder',
  city: '[your city]',
  email: '[your@email.com]',
  links: {
    github: '#contact',
    linkedin: '#contact',
  },
  bio: {
    origin: '[Add a line about where you started.]',
  },
  skills: {
    frontend: '[Frameworks and tools you use for the front end.]',
    backend: '[Languages, databases and cloud you work in.]',
    design: '[How you handle design and UX.]',
    business: '[What you handle as an owner: clients, hiring, strategy.]',
  },
  company: {
    name: '[Company name]',
    summary: '[What you sell and who buys it: retail and wholesale, online.]',
    url: '#venture',
    siteLabel: '[Company site]',
  },
  projects: [
    { name: '[Project 1 name]', type: '[Web app]', summary: '[One line on what it does and the result it got.]', result: '[the result it got]', problem: '[the problem it solved]', stack: '[stack used]', url: '#work', image: null },
    { name: '[Project 2 name]', type: '[API / platform]', summary: '[One line on what it does and the result it got.]', result: '[the result it got]', problem: '[the problem it solved]', stack: '[stack used]', url: '#work', image: null },
    { name: '[Project 3 name]', type: '[Mobile / side project]', summary: '[One line on what it does and the result it got.]', result: '[the result it got]', problem: '[the problem it solved]', stack: '[stack used]', url: '#work', image: null },
  ],
};

const pick = (v, fallback) => (v === undefined || v === null || v === '' ? fallback : v);

// Merge whatever the CMS returned over the defaults, field by field,
// so a half-filled CMS never breaks a theme.
export function normalizeContent(raw) {
  const d = DEFAULT_CONTENT;
  const r = raw || {};
  const p = r.profile || {};
  const projects = (r.projects || []).slice(0, 3);
  const siteLabel = p.companyUrl ? p.companyUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : d.company.siteLabel;
  return {
    name: pick(p.name, d.name),
    title: pick(p.title, d.title),
    city: pick(p.city, d.city),
    email: pick(p.email, d.email),
    links: {
      github: pick(p.github, d.links.github),
      linkedin: pick(p.linkedin, d.links.linkedin),
    },
    bio: { origin: pick(p.origin, d.bio.origin) },
    skills: {
      frontend: pick(p.skillsFrontend, d.skills.frontend),
      backend: pick(p.skillsBackend, d.skills.backend),
      design: pick(p.skillsDesign, d.skills.design),
      business: pick(p.skillsBusiness, d.skills.business),
    },
    company: {
      name: pick(p.companyName, d.company.name),
      summary: pick(p.companySummary, d.company.summary),
      url: pick(p.companyUrl, d.company.url),
      siteLabel,
    },
    projects: d.projects.map((dp, i) => {
      const x = projects[i] || {};
      return {
        name: pick(x.name, dp.name),
        type: pick(x.type, dp.type),
        summary: pick(x.summary, dp.summary),
        result: pick(x.result, dp.result),
        problem: pick(x.problem, dp.problem),
        stack: pick(x.stack, dp.stack),
        url: pick(x.url, dp.url),
        image: pick(x.image, null),
      };
    }),
  };
}
