export const buildUrlPath = (categoryString: string): string => {
  const urlFormatted = categoryString
    .toLocaleLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll(/--/g, "-");

  return urlFormatted;
};
