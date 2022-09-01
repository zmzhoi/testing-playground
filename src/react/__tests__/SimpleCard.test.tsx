import { render } from '@testing-library/react';

import Example1 from '../SimpleCard';

it('Matchs snapshot', () => {
  const title = '이것은 제목입니다.';
  const description = '이것은 설명입니다! 가나다라마바사  아자차카 타 파  하';

  const utils = render(<Example1 title={title} description={description} />);

  expect(utils.container).toMatchSnapshot();
});

it('Props should be correct', () => {
  const title = 'Title';
  const description = 'description~';

  const utils = render(<Example1 title={title} description={description} />);

  utils.getByText(title);
  utils.getByText(description);
});
