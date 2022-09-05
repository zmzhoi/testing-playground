import axios from 'axios';

import { getUser } from '../user';
jest.mock('axios');

describe('axios using manual mocking', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('case 1', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        name: 'choi',
      },
    });
    const id = 5;
    const user = await getUser(id);
    expect(user).toEqual({
      name: 'choi',
    });
  });

  it('case 2', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {
        name: 'choi',
      },
    });
    const id = 5;
    const user = await getUser(id);
    expect(user).toEqual({
      name: 'choi',
    });
  });

  it('case 3', async () => {
    const mockedAxios = jest.mocked(axios, true);

    mockedAxios.get.mockResolvedValue({
      data: {
        name: 'choi',
      },
    });
    const id = 5;
    const user = await getUser(id);
    expect(user).toEqual({
      name: 'choi',
    });
  });
});
