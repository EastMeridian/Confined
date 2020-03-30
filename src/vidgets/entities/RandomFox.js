export default {
  name: 'Broken API',
  vidget: 'RandomFox',
  url: 'https://randomfox.ca/floof',
  component: 'ImageVidget',
  adapter: ({ image }) => ({ url: image }),
};
