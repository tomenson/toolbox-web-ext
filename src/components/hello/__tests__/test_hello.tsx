import React from 'react';
import renderer from 'react-test-renderer';

import { Hello } from '../component';

describe('hello component', () => {
  it('renders', () => {
    const tree = renderer.create(<Hello />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
