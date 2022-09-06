import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '../LoginForm';

function setupUser(component: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('LoginForm test using @testing-library/user-event', () => {
  it('Test of button disabled/enabled using @testing-library/react', async () => {
    const onSubmit = jest.fn().mockImplementation((event: MouseEvent) => event.preventDefault());
    const { user, getByPlaceholderText, getByRole, container } = setupUser(
      <LoginForm onSubmit={onSubmit} />,
    );

    const email = getByPlaceholderText('이메일을 입력해 주세요.');
    const password = container.querySelector('input[type=password]') as Element;
    const loginButton = getByRole('button');

    // Render test
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    // Login button enabled/disabled test
    expect(loginButton).toBeDisabled();
    await user.type(email, 'zmzhoi@gmail.com');
    expect(loginButton).toBeDisabled();
    await user.type(password, '12345');
    expect(loginButton).toBeEnabled();
  });
});
