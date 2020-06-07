import React from 'react';
import { shallow } from 'enzyme';
import Results from '../Results';

describe('Results', () => {
   let wrapper;

   beforeEach( () => {
      wrapper = shallow(<Results />);
   });

   it('Renders without crashing', () => {
      expect(wrapper).toBeDefined();
   });

   it('Displays a Header component with required props', () => {
      expect( wrapper.find('Header[headerText="Results"]').length ).toBe(1);
   });

   it('Displays a table with className table', () => {
      expect( wrapper.find('table.table').length ).toBe(1);
   });

   it('Displays 6 rows in the results table', () => {
      expect( wrapper.find('.table tr').length ).toBe(6);
   });
});
