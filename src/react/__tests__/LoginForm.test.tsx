import { fireEvent, render } from '@testing-library/react';

import LoginForm from '../LoginForm';

describe('LoginForm test', () => {
  it('render', () => {
    const onSubmit = jest.fn();
    const utils = render(<LoginForm onSubmit={onSubmit} />);

    const header2 = utils.getByText('Login');
    const email = utils.getByPlaceholderText('이메일을 입력해 주세요.');
    const password = utils.container.querySelector('input[type=password]');

    expect(header2).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('login button enabled/disabled', () => {
    const onSubmit = jest.fn();
    const utils = render(<LoginForm onSubmit={onSubmit} />);

    const email = utils.getByPlaceholderText('이메일을 입력해 주세요.');
    const password = utils.container.querySelector('input[type=password]') as Element;
    const LoginButton = utils.getByText('로그인');
    expect(LoginButton).toBeDisabled();

    fireEvent.change(email, { target: { value: 'zmzhoi@gmail.com' } });
    fireEvent.change(password, { target: { value: '1234' } });

    expect(LoginButton).toBeEnabled();
  });
});
