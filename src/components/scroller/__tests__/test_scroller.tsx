import React from 'react';
import renderer from 'react-test-renderer';

import { Scroller } from '../component';

describe('scroller component', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Scroller
          onClickScrollTop={jest.fn()}
          onClickScrollBottom={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
