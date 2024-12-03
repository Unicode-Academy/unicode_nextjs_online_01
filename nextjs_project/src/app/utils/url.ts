export const getProductUrl = (slug: string) => {
  return `/san-pham/${slug}.html`;
};
export const getPostUrl = (slug: string) => {
  return `/blog/${slug}.html`;
};
export const getPageUrl = (slug: string) => {
  return `/${slug}`;
};
export const getCategoryUrl = (slug: string) => {
  return `/shop/${slug}`;
};
