# Side Canon

A modern fan fiction platform built with Astro, showcasing creative stories from across the multiverse.

## ✨ Features

- ✅ Clean, minimalistic design with purple/blue theme
- ✅ Responsive grid layout for story cards
- ✅ Markdown & MDX support for rich content
- ✅ Tailwind CSS v4 with typography plugin
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ RSS Feed support
- ✅ Sitemap generation
- ✅ Fast performance with Astro's static site generation
- ✅ Sticky navigation for better UX

## 🚀 Project Structure

```text
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/         # Image assets
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── StoryCard.astro
│   │   └── ...
│   ├── content/
│   │   └── story/      # Fan fiction stories (Markdown/MDX)
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── StoryLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── stories/    # Story listing and dynamic routes
│   └── styles/
│       └── global.css  # Global styles with Tailwind
├── astro.config.mjs
└── package.json
```

## 📖 Content Management

Stories are stored as Markdown/MDX files in `src/content/story/`. Each story includes frontmatter with:

- `title`: Story title
- `description`: Brief summary
- `pubDate`: Publication date
- `heroImage`: Cover image
- `updatedDate` (optional): Last update date

Use `getCollection('story')` to retrieve and display stories throughout the site.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
