import { allBlogs, allTalks } from '.contentlayer/data';

export function getBlogCategories(data = allBlogs) {
  const values = data.flatMap((blog) => blog.categories);
  return Array.from(new Set(values));
}

export function getTalkTags(data = allTalks) {
  const values = data.flatMap((blog) => blog.tags);
  return Array.from(new Set(values));
}
