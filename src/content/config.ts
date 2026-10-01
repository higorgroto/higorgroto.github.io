import { defineCollection, z } from 'astro:content';

const videoSchema = z.object({
  type: z.enum(['local', 'youtube']),
  src: z.string(),
  title: z.string().optional(),
  title_en: z.string().optional(),
  poster: z.string().optional(),
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

      // Optional build log: photos and videos grouped by project phase, each
      // with its own heading and short text. Rendered after the main gallery.
      phases: z
        .array(
          z.object({
            title: z.string(),
            title_en: z.string(),
            text: z.string().optional(),
            text_en: z.string().optional(),
            gallery: z.array(image()).optional(),
            videos: z.array(videoSchema).optional(),
          })
        )
        .optional(),
      search: z.string().optional(),
    }),
});

// English bodies for the projects above. Each file is named after the project
// slug and holds only the translated Markdown body (no frontmatter).
const projectsEn = defineCollection({
  type: 'content',
});

export const collections = { projects, 'projects-en': projectsEn };