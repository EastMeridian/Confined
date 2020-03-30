/* eslint-disable no-plusplus */
const createEntityRegister = (store) => {
  const array = Object.keys(store).map((key) => store[key]);
  return ({
    map: (func) => array.map(func),
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: () => ({
          value: array[i++],
          done: i > array.length,
        }),
      };
    },
    get: (name) => store[name],
  });
};

export default createEntityRegister;
