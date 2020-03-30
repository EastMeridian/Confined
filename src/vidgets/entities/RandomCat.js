export default {
  name: 'Random Cat',
  vidget: 'RandomCat',
  url: 'https://aws.random.cat/meow',
  component: 'ImageVidget',
  adapter: ({ file }) => ({ url: file }),
};
