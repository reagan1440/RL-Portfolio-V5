// src/data/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "src/content/blog");

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get a single blog post by slug
 */
export function getPost(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    content,
  };
}
