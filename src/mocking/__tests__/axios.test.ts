import axios from 'axios';

import { getUser } from '../user';

describe('axios case 1', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('axios fetch', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'zmzhoi',
      },
    });

    const user = await getUser(1);
    expect(user).toEqual({
      id: 1,
      name: 'zmzhoi',
    });
  });

  it('axios return', async () => {
    const spyGet = jest.spyOn(axios, 'get');

    spyGet.mockResolvedValue({
      data: {
        name: 'amolang',
      },
    });
    const id = 10;
    const result = await getUser(id);

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://example.com/user/${id}`);
    expect(result).toEqual({
      name: 'amolang',
    });
  });
});
