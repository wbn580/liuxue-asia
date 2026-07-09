import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() || "https://liuxue.asia").replace(/\/$/, "");
  const articles = await getCollection("articles");
  const staticPages = ["", "/about", "/crisis"];
  const urls = [
    ...staticPages.map((path) => ({ loc: `${base}${path}/` })),
    ...articles.map((article) => ({
      loc: `${base}/${article.slug}/`,
      lastmod: article.data.publishDate?.toISOString?.().slice(0, 10),
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(({ loc, lastmod }) => `  <url><loc>${encodeURI(loc)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
