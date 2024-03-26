export const pathWithSearch = (urlString: string) => {
  const url = new URL(urlString);
  return `${url.pathname}${url.search}`;
};
