export default {
  name: 'Language Detection',
  vidget: 'LanguageDetection',
  url: 'http://api.languagelayer.com/detect?access_key=f7353cf66783ba03907d2481dec38256&query=',
  component: 'TextValidationVidget',
  adapter: ({
    success,
    error,
    results,
    ...other
  }) => {
    if (success) return ({ valid: true, message: results[0].language_name });
    if (error) return ({ message: error.info, valid: false });
    return ({ message: '', valid: null });
  },
};
