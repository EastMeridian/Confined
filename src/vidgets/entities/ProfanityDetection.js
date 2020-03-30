export default {
  name: 'Profanity Remover',
  vidget: 'ProfanityDetection',
  url: 'https://www.purgomalum.com/service/json?text=',
  component: 'TextValidationVidget',
  parameters: {
    placeholder: 'Type fuck or something...',
  },
  adapter: ({
    result,
  }) => ({ message: result }),
};
