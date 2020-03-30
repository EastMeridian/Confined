import entityRegister from 'vidgets/entityRegister';
import createAdapterManager from '../createAdapterManager';


describe('createAdapterManager factory', () => {
  it('should console error with wrong entityRegister provided', () => {
    expect(createAdapterManager).toThrow('Wrong entityRegister provided');
    expect(() => createAdapterManager({ entityRegister: {} })).toThrow('Wrong entityRegister provided');
  });

  const adapterManager = createAdapterManager({ entityRegister });
  it('should return good adapter on get', () => {
    const entity = entityRegister.get('RandomFox');
    adapterManager.subscribe(entity);
    const adapter = adapterManager.get('RandomFox');
    expect(JSON.stringify(entity.adapter)).toEqual(JSON.stringify(adapter));
  });

  it('should subscribe a vidget with count at 1 or add 1 if already in', () => {
    const entity = entityRegister.get('RandomDog');
    adapterManager.subscribe(entity);
    expect(adapterManager.getStore()[entity.vidget]).toEqual({
      count: 1,
      adapter: entity.adapter,
    });
    adapterManager.subscribe(entity);
    expect(adapterManager.getStore()[entity.vidget]).toEqual({
      count: 2,
      adapter: entity.adapter,
    });
  });

  it('should remove entity on unsuscribe or remove 1 if multiple subscription', () => {
    const vidget = 'RandomDog';
    const entity = entityRegister.get(vidget);
    adapterManager.unsubscribe(entity);
    expect(adapterManager.getStore()[vidget]).toEqual({
      count: 1,
      adapter: entity.adapter,
    });
    adapterManager.unsubscribe(entity);
    expect(adapterManager.getStore()[vidget]).toBeUndefined();
  });

  it('should return options on subscribe and unsubscribe', () => {
    const entity = entityRegister.get('RandomDog');

    expect(adapterManager.subscribe(entity)).toEqual(entity);
    expect(adapterManager.unsubscribe(entity)).toEqual(entity);
  });

  it('should rehydrate data correctly', () => {
    const vidgets = ['1', '2'];
    const vidgetStore = {
      1: { vidget: 'RandomFox' },
      2: { vidget: 'RandomDog' },
    };
    adapterManager.rehydrate({ vidgets, vidgetStore });
    expect(adapterManager.getStore()).toEqual({
      RandomFox: { adapter: entityRegister.get('RandomFox').adapter, count: 1 },
      RandomDog: { adapter: entityRegister.get('RandomDog').adapter, count: 1 },
    });
  });
});
