// require react and react-dom modules (in ES6, you would import)
var React = require('react');
var ReactDOM = require('react-dom');

// Create component with React's createClass method
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'nail interview']
    }
  },
  //this is where we render HTML
  render: function(){

    var todos = this.state.todos;

    todos = todos.map(function(item, index){
      // each time we cycle through the array we want to return something
      return(
        <TodoItem item={item} key={index}/>
      );
    });

    return(
      <div id="todo-list">
      <p>The busiest people have the most leisure...</p>
      <p>{this.state.age}</p>
      <ul>{todos}</ul>
      </div>
    );
  } // render
});

// Create TodoItem component
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    )
  }
})

// put component into HTML page with ReactDOM's method which takes two arguments
// first argument is the component we define. Second is the element in which we send it to.

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
