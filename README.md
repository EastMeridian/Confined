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

## Structure du projet

### components
Les composants UI du projet, les briques UI de bases.
A noter qu'ils peuvent importer 'styles', et de ce fait sont couplés avec ce dossier, pour un découplage optimal dans le but par example de creer une libraire, nous pourrions inclure styles dans component, et mieux, creer un ThemeContext.
### decorators
Les decorateur du projet, a utiliser pour enrichir un component
```javascript
const EhancedComponent = withStuff(Component);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)