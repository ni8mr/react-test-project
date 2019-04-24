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
  constructor (props) {
      // Without following we wouldn't be able to access this.props (if needed)
      // According to the ReAct official doc: Class components should always call the base constructor with props.
      super(props);
      this.state = {
        list,
      };
      // Binding onDismiss() method in the constructor
      // Binding is necessary because (in JavaScript) class methods don't automatically bind 'this' to the class instance
      this.onDismiss = this.onDismiss.bind(this);
      // Binding can be done automatically using arrow functions when declaring methods but officially ReAct sticks
      // with class method bindings
  }

  onDismiss (id) {
      const isNotId = item => item.objectID !== id;
      const updatedList =  this.state.list.filter(isNotId);
      // Setting a state directly won't re-render a component
      // Thus we need to use setState()
      this.setState({ list: updatedList });
      // this.props and this.state may be updated asynchronously
      // Thus, we should not rely on their values for calculating the next state
      // A way around can be accepting a function instead of an object at setState()
  }

  render() {
    return (
      <div className="App">
          {this.state.list.map(item =>
              <div> key={item.objectID}
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                    <button
                        type='button'
                        onClick={() => this.onDismiss(item.objectID)} // It has to be a function
                        // Otherwise the class method would be executed immediately when application is opened at
                        // the browser
                    >
                        Dismiss
                    </button>
                </span>
              </div>
          )}
      </div>
    );
  }
}

// if (module.hot) {
//     module.hot.accept();
// }

export default App;