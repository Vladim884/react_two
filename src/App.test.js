import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SamuraiJsApp from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render (<SamuraiJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
