import {getLocalStorageItems, removeLocalStorageItems, setLocalStorageItems} from '@utils/storage';

describe('로컬 스토리지 테스트', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('set item', () => {
    setLocalStorageItems('example', 1234);

    expect(mockSetItem).toHaveBeenCalledWith('example', '1234');
  });

  it('get item', () => {
    getLocalStorageItems('example');

    expect(mockGetItem).toHaveBeenCalledWith('example');
  });

  it('remove item', () => {
    removeLocalStorageItems('example');

    expect(mockRemoveItem).toHaveBeenCalledWith('example');
  });
});
