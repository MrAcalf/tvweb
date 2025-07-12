#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://unitvrecargas.com";
const SITEMAP_PATH = path.join(__dirname, "../public/sitemap.xml");

const pages = [
  {
    url: "/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/planos",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/sobre",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/recursos",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/depoimentos",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/faq",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/contato",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach((page) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += "</urlset>";

  return sitemap;
}

function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    fs.writeFileSync(SITEMAP_PATH, sitemapContent, "utf8");
    console.log("✅ Sitemap generated successfully!");
    console.log(`📁 Location: ${SITEMAP_PATH}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

// Run the script
writeSitemap();
