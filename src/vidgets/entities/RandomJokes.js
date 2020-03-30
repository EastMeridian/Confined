export default {
  name: 'Random Chuck Jokes',
  vidget: 'RandomJokes',
  url: 'http://api.icndb.com/jokes/random',
  component: 'TextVidget',
  adapter: ({ value }) => ({ content: value.joke, categories: value.categories }),
};
