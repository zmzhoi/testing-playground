import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AuthorizedRoute from '../AuthorizedRoute';
import LoginForm from '../LoginForm';
import * as hooks from '../hooks/useUser';

function setup(Route: JSX.Element) {
  return render(<BrowserRouter>{Route}</BrowserRouter>);
}

describe('AuthorizedRoute', () => {
  it('Anything should not render when authroized is null', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      authorized: null,
    });
    const { container } = setup(<AuthorizedRoute path="*" component={LoginForm} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Heading1 should be render when authroized is false', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      authorized: false,
    });
    const { getByRole } = setup(<AuthorizedRoute path="*" component={LoginForm} />);

    const h1 = getByRole('heading');
    expect(h1).toHaveTextContent('권한 없음');
  });

  it('Component should be render when authroized is true', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      authorized: true,
    });
    setup(<AuthorizedRoute path="*" component={LoginForm} />);
  });
});
