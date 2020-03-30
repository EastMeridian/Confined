
export default {
  name: 'Random Dog',
  vidget: 'RandomDog',
  url: 'https://random.dog/woof.json',
  component: 'ImageVidget',
  adapter: ({ url }) => ({ url }),
};
