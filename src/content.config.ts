import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const story = defineCollection({
	// Load Markdown and MDX files in the `src/content/story/` directory.
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/story' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

export const collections = { story };
