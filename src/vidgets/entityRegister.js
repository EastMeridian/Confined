import createEntityRegister from 'factories/createEntityRegister';
import RandomDog from './entities/RandomDog';
import RandomFox from './entities/RandomFox';
import RandomCat from './entities/RandomCat';
import PhoneValidation from './entities/LanguageDetection';
import ProfanityDetection from './entities/ProfanityDetection';
import RandomJokes from './entities/RandomJokes';

const register = {
  RandomDog,
  RandomFox,
  RandomCat,
  PhoneValidation,
  ProfanityDetection,
  RandomJokes,
};

const entityRegister = createEntityRegister(register);

export default entityRegister;
