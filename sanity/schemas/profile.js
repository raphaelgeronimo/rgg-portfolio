import { defineField, defineType } from 'sanity';

// One document: who you are, your skills, and your company.
export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  groups: [
    { name: 'me', title: 'About me', default: true },
    { name: 'skills', title: 'Skills' },
    { name: 'company', title: 'Company' },
  ],
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', group: 'me' }),
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'me', description: 'e.g. Full-stack developer & founder' }),
    defineField({ name: 'city', title: 'City', type: 'string', group: 'me' }),
    defineField({ name: 'email', title: 'Email', type: 'string', group: 'me', validation: (r) => r.email() }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url', group: 'me' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', group: 'me' }),
    defineField({ name: 'origin', title: 'Where you started (one line)', type: 'string', group: 'me' }),
    defineField({ name: 'skillsFrontend', title: 'Front end', type: 'string', group: 'skills', description: 'Frameworks and tools, one short line' }),
    defineField({ name: 'skillsBackend', title: 'Back end', type: 'string', group: 'skills', description: 'Languages, databases, cloud' }),
    defineField({ name: 'skillsDesign', title: 'Design', type: 'string', group: 'skills' }),
    defineField({ name: 'skillsBusiness', title: 'As an owner', type: 'string', group: 'skills', description: 'What you handle running the business' }),
    defineField({ name: 'companyName', title: 'Company name', type: 'string', group: 'company' }),
    defineField({ name: 'companySummary', title: 'What you sell (one sentence)', type: 'string', group: 'company', description: 'Retail and wholesale, online. Who buys from you?' }),
    defineField({ name: 'companyUrl', title: 'Company website', type: 'url', group: 'company' }),
  ],
  preview: { select: { title: 'name', subtitle: 'title' } },
});
