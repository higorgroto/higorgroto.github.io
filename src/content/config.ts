import { defineCollection, z } from 'astro:content';

const videoSchema = z.object({
  type: z.enum(['local', 'youtube']),
  src: z.string(),
  title: z.string().optional(),
  title_en: z.string().optional(),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      title_en: z.string(),
      description: z.string(),
      description_en: z.string(),
      excerpt: z.string(),
      excerpt_en: z.string(),
      date: z.coerce.date(),

      cover: image().optional(),
      gallery: z.array(image()).optional(),

      videos: z.array(videoSchema).optional(),
      search: z.string().optional(),
    }),
});

// English bodies for the projects above. Each file is named after the project
// slug and holds only the translated Markdown body (no frontmatter).
const projectsEn = defineCollection({
  type: 'content',
});

export const collections = { projects, 'projects-en': projectsEn };