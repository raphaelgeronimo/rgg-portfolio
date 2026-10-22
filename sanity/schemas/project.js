import { defineField, defineType } from 'sanity';

// The first three projects (by Order) appear in every theme.
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Order', type: 'number', description: '1, 2 or 3. Lower shows first.', initialValue: 1 }),
    defineField({ name: 'type', title: 'Type', type: 'string', description: 'e.g. Web app, API / platform, Mobile app' }),
    defineField({ name: 'summary', title: 'One-liner', type: 'string', description: 'What it does and the result it got' }),
    defineField({ name: 'problem', title: 'The problem it solved', type: 'string' }),
    defineField({ name: 'result', title: 'The result', type: 'string' }),
    defineField({ name: 'stack', title: 'Stack', type: 'string', description: 'e.g. Next.js, Postgres, AWS' }),
    defineField({ name: 'url', title: 'Link', type: 'url' }),
    defineField({ name: 'image', title: 'Screenshot', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'type', media: 'image' } },
});
