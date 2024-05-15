import React from 'react';
import renderer from 'react-test-renderer';

import { Popup } from '../component';

describe('popup', () => {
  it('renders', () => {
    const tree = renderer.create(<Popup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
