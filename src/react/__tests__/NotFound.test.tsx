import { render } from '@testing-library/react';

import NotFound from '../NotFound';

describe('NotFound test', () => {
  it('h2 render', () => {
    const path = 'www.example.com/nothing';
    const utils = render(<NotFound path={path} />);

    const h2 = utils.getByText(/^404/);
    expect(h2).toBeInTheDocument();
  });

  it('paragraph render', () => {
    const path = 'www.example.com/nothing';
    const utils = render(<NotFound path={path} />);

    const paragraph = utils.getByText(/^해당 페이지를/);
    expect(paragraph).toBeInTheDocument();
  });

  it('image render', () => {
    const path = 'www.example.com/nothing';
    const utils = render(<NotFound path={path} />);

    const image = utils.getByAltText('404');
    expect(image).toHaveAttribute('src', 'https://www.example.com/not-found');
    expect(image).toBeInTheDocument();
  });
});
