import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('PAYE Form', () => {
   let wrapper;

   beforeEach( () => {
      wrapper = shallow(<Form />);
   });

   it('Renders without crashing', () => {
      expect(wrapper).toBeDefined();
   });

   it('Displays a form with className theForm', () => {
      expect( wrapper.find('form.theForm').length ).toBe(1);
   });

   it('Display select input with id year', () => {
      expect( wrapper.find('select[name="year"]').length ).toBe(1);
   });

   it('Displays input type number with id grossPay', () => {
      expect( wrapper.find('input[type="number"]').length ).toBe(1);
      expect( wrapper.find('input[name="grossPay"]').length).toBe(1);
   });
   it('Displays two radio buttons with name nssf', () => {
      expect( wrapper.find('input[type="radio"]').length ).toBe(2);
      expect( wrapper.find('input[name="nssf"]').length ).toBe(2);
   });

   it('Displays a disability tax exemtion eligibility checkbox', () => {
      expect( wrapper.find('input[type="checkbox"]').length ).toBe(1);
      expect( wrapper.find('input[name="isExempted"]').length ).toBe(1);
   });

   it('Displays a button of type submit', () => {
      const submitBtn = wrapper.find('button[type="submit"]');
      expect(submitBtn.length).toBe(1);
      expect( submitBtn.text() ).toEqual('Calculate');
   });
});