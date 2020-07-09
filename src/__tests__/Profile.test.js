import React from 'react';
import { render } from '@testing-library/react';
import Profile from 'Components/Profile';

test('renders learn react link', () => {
  const { getByText } = render(<Profile />);
  const textElement = getByText(/Customer Support/i);
  expect(textElement).toBeDefined();
});
