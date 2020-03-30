# Confined
Une implementation naive d'un système de widget sur React

## Installation

```bash
git clone https://github.com/EastMeridian/Confined.git
cd Confined && npm i 
```

## Usage

```bash
npm start
```

## Le système de widgets
L'idée ici était de proposer un (super) mini framework de création de widgets,
pour ajouter un vidget il suffit de creer un object dans vidgets/entites/ puis de l'inscrire dans vidgets/entityRegister;

examples de vidgets:

```javascript
// Deux ImageVidgets widgets
export default {
  name: 'Random Dog',
  vidget: 'RandomDog',
  url: 'https://random.dog/woof.json',
  component: 'ImageVidget',
  adapter: ({ url }) => ({ url }),
};

export default {
  name: 'Broken API',
  vidget: 'RandomFox',
  url: 'https://randomfox.ca/floof',
  component: 'ImageVidget',
  adapter: ({ image }) => ({ url: image }),
};

// Deux TextValidationVidget widgets
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

```
nous pouvons ajouter de nouveaux vidget component dans vidgets/component, l'inscription est dans vidgets/componentRegister (inscription avec React.lazy);

A noter que pour améliorer le coté framework, nous pourrions utiliser webpack pour aller chercher directement les entities et components dans les dossiers sans devoir les inscrire a chaque fois;

## Structure du projet

### components
Les composants UI du projet, les briques UI de bases.

A noter qu'ils peuvent importer 'styles', et de ce fait sont couplés avec ce dossier, pour un découplage optimal dans le but par example de creer une libraire, nous pourrions inclure styles dans component, et mieux, creer un ThemeContext.
### decorators
Les decorateur du projet, a utiliser pour enrichir un component.
Méthode un peu spéciale de composition que j'experimente depuis quelque temps.
```javascript
const EhancedComponent = withStuff(Component);

// ainsi que 

const MultiEhancedComponent = compose(
  withStuffA,
  withStuffB,
  withStuffC,
)(Component);
```
### factories
Les outils de création ou de rehydratation d'object du projet.
### flux
Le dossier Redux du projet, décomposition en sous dossier par type.
Branché sur un persistor pour pouvoir réhydrater le store au démarrage de l'app.
A noter que le système de vidget a besoin d'un store externe pour les fonctions (adapterManager) et que ce store est réhydrater parallelement au store redux;

```javascript
// flux/vidgetTransform.js
(outboundState, key) => {
    if (key === 'vidgetReducer') adapterManager.rehydrate(outboundState);
    return { ...outboundState, mySet: new Set(outboundState.mySet || []) };
  }
```
## License
[MIT](https://choosealicense.com/licenses/mit/)