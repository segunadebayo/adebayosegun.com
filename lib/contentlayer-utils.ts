import { allBlogs, allProjects, allSnippets, allTalks, allTestimonials } from '.contentlayer/data';

export function getBlogTags(data = allBlogs) {
  const values = data.flatMap((blog) => blog.tags);
  return Array.from(new Set(values));
}

export function getSnippetCategories(data = allSnippets) {
  const values = data.flatMap((snippet) => snippet.categories);
  return Array.from(new Set(values));
}

export function getTalkTags(data = allTalks) {
  const values = data.flatMap((blog) => blog.tags);
  return Array.from(new Set(values));
}

export const allFeaturedBlogs = allBlogs.filter((blog) => blog.featured);

export const allFeaturedProjects = allProjects.filter((project) => project.featured);

export const allFeaturedTalks = allTalks.filter((talk) => talk.featured);

export const allFeaturedTestimonials = allTestimonials.filter(
  (testimonial) => testimonial.featured,
);
