import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../Calculator';

describe('Calculator', () => {
   let mountedCal;

   beforeEach(() => {
      mountedCal = shallow(<Calculator />);
   });

   it('renders without crashing', () => {
      expect(mountedCal).toBeDefined();
   });

   it('Renders Header Component', () => {
      const mountedHeader = mountedCal.find('Header');
      expect(mountedHeader.length).toBe(1);
   });

   it('Renders Form component', () => {
      const mountedForm = mountedCal.find('Form');
      expect(mountedForm.length).toBe(1);
   });
});