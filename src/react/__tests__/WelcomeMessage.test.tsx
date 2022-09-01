import { render } from '@testing-library/react';

import WelcomeMessage from '../WelcomeMessage';

describe('WelcomeMessage', () => {
  it('render', () => {
    render(<WelcomeMessage authorized={false} />);
  });

  it('authorized with username', () => {
    const username = '최종명';
    const utils = render(<WelcomeMessage authorized={true} username={username} />);

    const expectedText = `환영합니다! ${username}님`;
    utils.getByText(expectedText);
  });

  it('authorized without username', () => {
    const username = '';
    const utils = render(<WelcomeMessage authorized={true} username={username} />);

    const expectedText = `환영합니다! 이름없음님`;
    utils.getByText(expectedText);
  });

  it('unauthorized', () => {
    const utils = render(<WelcomeMessage authorized={false} />);

    const expectedText = '로그인을 해주세요.';
    utils.getByText(expectedText);
  });
});
