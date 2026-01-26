import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';

export async function GET(context) {
	const stories = (await getCollection('story')).filter((post) => post.data.published);
	const nmuPosts = (await getCollection('nmu')).filter((post) => post.data.published);

	const nmuLinks = nmuPosts.map((post) => ({
		...post.data,
		link: `/nmu/${post.id}/`,
	}));

	const storyLinks = stories.map((post) => ({
		...post.data,
		link: `/stories/${post.id}/`,
	}));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [...storyLinks, ...nmuLinks],
	});
}
