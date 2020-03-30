const createAdapterManager = ({ entityRegister } = {}) => {
  if (!entityRegister || typeof entityRegister.get !== 'function') {
    throw new Error('Wrong entityRegister provided');
  }
  let adapterStore = {};

  return ({
    subscribe: (options) => {
      const { adapter, vidget } = options;
      if (adapterStore[vidget]) adapterStore[vidget].count += 1;
      else adapterStore[vidget] = { adapter, count: 1 };
      return options;
    },
    unsubscribe: (options) => {
      const { vidget } = options;
      if (!adapterStore[vidget]) return options;
      adapterStore[vidget].count -= 1;
      if (adapterStore[vidget].count === 0) delete adapterStore[vidget];
      return options;
    },
    get: (name) => adapterStore[name].adapter,
    getStore: () => ({
      ...adapterStore,
    }),
    rehydrate({ vidgets, vidgetStore }) {
      adapterStore = {};
      vidgets.forEach((id) => {
        const { vidget } = vidgetStore[id];
        const entity = entityRegister.get(vidget);
        this.subscribe(entity);
      });
    },
  });
};

export default createAdapterManager;
