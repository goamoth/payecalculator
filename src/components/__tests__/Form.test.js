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

describe('When Callback Fn Props is passed to it', () => {
   let wrapper;
   let mockCallback; 

   beforeEach( () => { 
      mockCallback = jest.fn();
      wrapper = shallow(<Form changeHandler={mockCallback} />);
   });
   
   it('Year select calls a Fn passed to it on change', () => {
      //const mockCallback = jest.fn();
      wrapper.find('select#year').simulate('change');
      expect(mockCallback.mock.calls.length).toBe(1);
   });

   it('GrossPay input calls a Fn passed to it on change', () => {
      //const mockCallback = jest.fn();
      wrapper.find('input#grossPay').simulate('change');
      expect(mockCallback.mock.calls.length).toBe(1);
   });

   it('Nssf old radio input calls a Fn passed to it on change', () => {
      //const mockCallback = jest.fn();
      wrapper.find('input#old').simulate('change');
      expect(mockCallback.mock.calls.length).toBe(1);
   });

   it('Nssf new radio input calls a Fn passed to it on change', () => {
      //const mockCallback = jest.fn();
      wrapper.find('input#new').simulate('change');
      expect(mockCallback.mock.calls.length).toBe(1);
   });

   it('isExempted checkbox calls a Fn passed to it on change', () => {
      //const mockCallback = jest.fn();
      wrapper.find('input#isExempted').simulate('change');
      expect(mockCallback.mock.calls.length).toBe(1);
   });
});