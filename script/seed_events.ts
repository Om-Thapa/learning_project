import dotenv from 'dotenv';
import connectDB from '../lib/mongodb';
import Event from '../database/event.model';

dotenv.config();

const seedEvents = [
  {
    title: 'React Next Summit 2026',
    slug: 'react-next-summit-2026',
    description:
      'A full-day virtual summit covering advanced React patterns, Next.js 14 features, and real-world performance strategies.',
    overview:
      'Deep dives, case studies, and hands-on workshops focused on scaling React apps with Next.js.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    venue: 'Virtual - Live Stream',
    location: 'Online',
    date: '2026-03-14',
    time: '09:00',
    mode: 'online',
    audience: 'Frontend engineers, architects, and technical leads',
    agenda: [
      'Keynote: The future of React and SSR',
      'Next.js performance tuning',
      'Edge functions and caching strategies',
      'Hands-on workshop: incremental adoption',
    ],
    organizer: 'DevCon Media',
    tags: ['react', 'nextjs', 'performance', 'frontend'],
  },
  {
    title: 'Full-Stack Bootcamp: From Idea to Production',
    slug: 'full-stack-bootcamp-from-idea-to-production',
    description: 'An intensive 3-day in-person bootcamp that walks teams from MVP design through deployment and monitoring.',
    overview: 'Collaborative workshops, pair-programming sessions, and expert-led talks on building production-ready full-stack apps.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    venue: 'TechWorks Campus Hall B',
    location: 'San Francisco, CA',
    date: '2026-06-21',
    time: '10:00',
    mode: 'offline',
    audience: 'Startup teams, junior-to-mid developers, product managers',
    agenda: [
      'Day 1: API design and database modeling',
      'Day 2: Frontend architecture and authentication',
      'Day 3: CI/CD, observability, and production readiness',
    ],
    organizer: 'BuildLabs',
    tags: ['fullstack', 'bootcamp', 'devops', 'product'],
  },
  {
    title: 'Cloud-Native Microservices Workshop',
    slug: 'cloud-native-microservices-workshop',
    description:
      'Hands-on workshop focused on designing resilient microservices using Kubernetes, service mesh, and DDD principles.',
    overview:
      'Small-group labs building and deploying microservices with best practices for observability and fault tolerance.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    venue: 'Innovation Lab 3',
    location: 'Austin, TX',
    date: '2026-09-09',
    time: '13:00',
    mode: 'hybrid',
    audience: 'Backend engineers, SREs, architects',
    agenda: [
      'Designing bounded contexts and APIs',
      'Kubernetes patterns for reliability',
      'Service mesh: traffic control and security',
      'Chaos engineering lab',
    ],
    organizer: 'CloudNative Guild',
    tags: ['microservices', 'kubernetes', 'sre', 'cloud'],
  },
  {
    title: 'AI for Product Managers — Workshop',
    slug: 'ai-for-product-managers-workshop',
    description:
      'A practical half-day workshop on incorporating AI/ML into product roadmaps, ethical considerations, and rapid prototyping.',
    overview:
      'Case studies and templates to help PMs scope feasible AI features and coordinate with engineering teams.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    venue: 'Design Studio 1',
    location: 'Remote & London Studio',
    date: '2026-05-12',
    time: '14:00',
    mode: 'hybrid',
    audience: 'Product managers, founders, designers',
    agenda: [
      'Evaluating AI fit for your product',
      'Data and labeling fundamentals',
      'Prototyping with off-the-shelf models',
      'Ethics and release checklists',
    ],
    organizer: 'ProductX',
    tags: ['ai', 'product', 'ethics', 'workshop'],
  },
  {
    title: 'Frontend Styling Deep Dive: CSS in 2026',
    slug: 'frontend-styling-deep-dive-css-2026',
    description:
      'A focused one-day event that covers modern CSS, design systems, and performance-friendly styling workflows.',
    overview:
      'Learn CSS container queries, design tokens, and critical CSS techniques for faster paint times.',
    image: 'https://images.unsplash.com/photo-1526378724298-9b1b1bd7a88b',
    venue: 'Design Hub Auditorium',
    location: 'Berlin, Germany',
    date: '2026-11-02',
    time: '11:00',
    mode: 'offline',
    audience: 'Frontend developers, UI engineers, designers',
    agenda: [
      'Modern responsive approaches',
      'Design tokens and theming',
      'Critical CSS & load performance',
      'Building accessible components',
    ],
    organizer: 'PixelCraft',
    tags: ['css', 'design-systems', 'frontend', 'performance'],
  },
];

async function seed() {
  try {
    console.log('Connecting to database...');
    await connectDB();

    console.log('Inserting seed events...');
    // Use insertMany to create multiple documents in one operation
    const created = await Event.insertMany(seedEvents, { ordered: true });
    console.log(`Inserted ${created.length} events.`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding events:', err);
    process.exit(1);
  }
}

seed();
