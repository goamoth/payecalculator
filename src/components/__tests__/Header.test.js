import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
   let mountedHeader, props;

   beforeEach( () => {
      props = {
         headerType: 'h3',
         headerText: 'Sample Header Text'
      };

      mountedHeader = shallow(<Header {...props} />);
   });

   it('Renders without crashing', () => {
      expect(mountedHeader).toBeDefined();
   });

   it('Displays a heading with text based on props passed to it', () => {
      expect( mountedHeader.find('h3').text() ).toEqual('Sample Header Text');
   });

   it('Displays default heading when no props is given to it', () => {
      let defaultHeader = shallow(<Header />);
      expect( defaultHeader.find('h1').text() ).toEqual("I'm a Default Header!");
   });

   it('Displays a h4 heading with error message when one props is missing', () => {
      let alternativeProps = {
         headerType: '',
         headerText: 'Anything goes here...'
      };
      let mHeader = shallow(<Header {...alternativeProps} />);
      expect( mHeader.find('h4').text() ).toEqual("Error: one props is missing!");
   });

   it('Returns an error when non-heading and / or non-string headerType props is passed to it', () => {
      let alternativeProps = {
         headerType: 'hello',
         headerText: 'Anything goes here...'
      };

      let mHeader = shallow(<Header {...alternativeProps}/>);
      expect( mHeader.find('h4').text() ).toEqual('Error: headerType props must be a string and valid HTML heading tag!');
   });

   it('Returns an error when non-string headerText props is passed to it', () => {
      let alternativeProps = {
         headerType: 'h5',
         headerText: 45
      };

      let mHeader = shallow(<Header {...alternativeProps}/>);
      expect( mHeader.find('h4').text() ).toEqual('Error: headerText props must be a string!');
   });
});