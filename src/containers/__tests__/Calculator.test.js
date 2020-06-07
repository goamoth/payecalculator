import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../Calculator';
import renderer from 'react-test-renderer';

describe('Calculator', () => {
   let mountedCal;

   beforeEach(() => {
      mountedCal = shallow(<Calculator />);
   });

   it('renders without crashing', () => {
      expect(mountedCal).toBeDefined();
   });

   it('Renders correctly', () => {
      const tree = renderer.create(<Calculator />).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Renders Header Component', () => {
      const mountedHeader = mountedCal.find('Header');
      expect(mountedHeader.length).toBe(1);
   });

   it('Renders Form component', () => {
      const mountedForm = mountedCal.find('Form');
      expect(mountedForm.length).toBe(1);
   });

   it('Renders Results component', () => {
      const mountedResults = mountedCal.find('Results');
      expect(mountedResults.length).toBe(1);
   });
});