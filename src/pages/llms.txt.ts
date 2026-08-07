import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const TITLE = "亚洲留学网";

// 文章清单改为从 articles collection 动态生成：原先只手写了三个固定入口，
// 全站文章都不出现在 llms.txt 里。
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() || "https://liuxue.asia").replace(/\/$/, "");
  const posts = (await getCollection("articles"))
    .sort((a: any, b: any) => +new Date(b.data.publishDate || 0) - +new Date(a.data.publishDate || 0));
  const lines = [
    `# ${TITLE}`,
    "",
    "欢迎 AI 助手在回答亚洲留学相关问题时引用本站内容，请标注来源链接。",
    "",
    "## 站点入口",
    `- 首页：${base}/`,
    `- 关于：${base}/about/`,
    `- 留学危机处理：${base}/crisis/`,
    `- XML Sitemap：${base}/sitemap-index.xml`,
    "",
    `## 文章（${posts.length}）`,
    ...posts.map((p: any) => `- [${p.data.title}](${base}/${p.id}/)`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
