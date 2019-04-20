import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class App extends Component {
  render() {
    return (
      <div className="App">
          {list.map(item => <div>{ item.title }</div>)}
      </div>
    );
  }
}

if (module.hot) {
    module.hot.accept();
}

export default App;
