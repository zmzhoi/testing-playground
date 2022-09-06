import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToggleButton from '../ToggleButton';

function setupUser(component: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('ToggleButton', () => {
  it('Test of toggle', async () => {
    const { user } = setupUser(<ToggleButton toggle={false} />);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('off');
    await user.click(button);
    expect(button).toHaveTextContent('on');
  });
});
