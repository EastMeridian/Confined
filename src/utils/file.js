/* eslint-disable import/prefer-default-export */
export const fileExtension = (url) => {
  if (!url) return [];
  return url.split('.').pop().split(/#|\?/)[0];
};
