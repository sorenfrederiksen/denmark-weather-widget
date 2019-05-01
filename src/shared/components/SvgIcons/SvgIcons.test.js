import React from 'react';
import { shallow } from 'enzyme';
import SvgIcons from './index';

describe('(Component) SvgIcons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SvgIcons />);
  });

  it('should match snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
