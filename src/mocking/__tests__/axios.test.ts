import axios from 'axios';

import { getUser } from '../user';

it('axios', async () => {
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
