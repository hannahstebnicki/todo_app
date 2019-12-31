import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import ListItems from 'pages/components/ListItems.js';


// test('____', () => {
//   expect().toBe();
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});