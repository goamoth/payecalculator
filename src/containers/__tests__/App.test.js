import React from 'react';
import { shalow, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {

  let mountedApp;

  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it('Renders without crashing', () => {
    mountedApp;
  });

  it('Renders Calculator component', () => {
    const mountedCal = mountedApp.find('Calculator');
    expect(mountedCal.length).toBe(1);
  });

});
