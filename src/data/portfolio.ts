export interface Project {
  index: string
  title: string
  year: string
  description: string
  tags: string[]
  shotLabel: string
  /** Route to a live subpage or external URL, if the project is playable/interactive. */
  href?: string
  /** Set when href points off-site, so the link doesn't go through client-side routing. */
  external?: boolean
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Property CRM',
    year: '2026',
    description:
      'A mini property-management CRM with full CRUD for properties, built on Next.js Server Actions and Postgres. Zod-validated writes end to end, deployed against Supabase.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'POSTGRES', 'DRIZZLE'],
    shotLabel: '[ VIEW THE CRM → ]',
    href: 'https://property-crm.pablopaliza.com',
    external: true,
  },
  {
    index: '02',
    title: 'Monolith',
    year: '2026',
    description:
      'A playable web-based synthesizer — a warm analog voice built on the Web Audio API. Oscillators, filter, ADSR, LFO and FX, driven live from an oscilloscope-lit panel and your keyboard.',
    tags: ['TYPESCRIPT', 'REACT', 'WEB AUDIO', 'CANVAS'],
    shotLabel: '[ LAUNCH THE SYNTH → ]',
    href: '/synth',
  },
  {
    index: '03',
    title: 'Tiny Survival',
    year: '2025',
    description:
      'A browser-playable survival game built in Godot and exported to HTML5.',
    tags: ['GODOT', 'GDSCRIPT', 'HTML5'],
    shotLabel: '[ PLAY ON ITCH.IO → ]',
    href: 'https://pfpaliza.itch.io/tiny-survival',
    external: true,
  },
  {
    index: '04',
    title: 'Cancer Detection',
    year: '2025',
    description:
      'A convolutional neural network that classifies histopathologic scans for signs of cancer, trained on a 220k-image Kaggle dataset with Keras and TensorFlow.',
    tags: ['PYTHON', 'TENSORFLOW', 'KERAS', 'CNN'],
    shotLabel: '[ VIEW THE NOTEBOOK → ]',
    href: 'https://github.com/unit4216/cancer-cnn/blob/main/cnn-cancer-detection.ipynb',
    external: true,
  },
]

export interface ExperienceEntry {
  role: string
  detail: string
  range: string
}

export const experience: ExperienceEntry[] = [
  { role: 'Staff Engineer · Vantage', detail: 'Payments platform & developer tooling', range: '2022—NOW' },
  { role: 'Senior Engineer · Meridian', detail: 'Data infrastructure for logistics', range: '2019—2022' },
  { role: 'Software Engineer · Bynel', detail: 'Full-stack product engineering', range: '2017—2019' },
]

export interface ToolkitGroup {
  label: string
  items: string[]
}

export const toolkit: ToolkitGroup[] = [
  { label: 'LANGUAGES', items: ['Go', 'TypeScript', 'Rust', 'Python', 'SQL'] },
  { label: 'FRAMEWORKS', items: ['React', 'Next.js', 'Node', 'gRPC', 'GraphQL'] },
  { label: 'INFRA', items: ['Postgres', 'Kafka', 'Kubernetes', 'Terraform', 'AWS'] },
]

export const contact = {
  email: 'pf.paliza@gmail.com',
  links: [
    { label: 'GITHUB', href: 'https://github.com/unit4216' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pablo-paliza-carre-029676134/' },
  ],
}
