import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Review', 'Comparison', 'Guide', 'FAQ', 'Gift Guide', 'Local']),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Northville Tech'),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { posts };
