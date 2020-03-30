/* eslint-disable no-global-assign */
import { renderHook, act } from '@testing-library/react-hooks';

import useFetch from '../useFetch';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => Promise.resolve({
    json: () => data,
  }));
}

function mockFetchBroken() {
  return jest.fn().mockImplementation(() => Promise.resolve({
  }));
}

describe('useFetch', () => {
  it('should return default state with no url', () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.loaded).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toStrictEqual({});
  });

  it('should return error after setError', async () => {
    const ERROR_MESSAGE = 'Iam Error message';
    const { result } = renderHook(() => useFetch());

    act(() => {
      result.current.setError(ERROR_MESSAGE);
    });

    expect(result.current.error).toEqual(ERROR_MESSAGE);
  });

  it('should return error with wrong url', async () => {
    global.fetch = mockFetchBroken();
    const { result, waitForNextUpdate } = renderHook(() => useFetch('sfqfss'));
    await waitForNextUpdate();
    expect(result.current.error).toEqual('TypeError: result.json is not a function');
  });

  it('should return data with good url', async () => {
    const data = {
      name: 'test',
    };

    global.fetch = mockFetch(data);
    const { result, waitForNextUpdate } = renderHook(() => useFetch('sfqfss'));
    await waitForNextUpdate();
    expect(result.current.data).toEqual(data);
  });
});
