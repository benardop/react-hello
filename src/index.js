import React from 'react'
import ReactDOM  from 'react-dom/client'

class CounterParent extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      actionCount: 0
    }
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(event) {
    console.log('Child says', event);

    this.setState({
      actionCount: this.state.actionCount + 1
    })
  }

  render() {
    return(
      <div>
        <Child onAction={this.handleAction} />
        <p>You clicked {this.state.actionCount} times</p>
      </div>
    )
  }
  
}
function Child({onAction}) {
  return(
    <button onClick={onAction}>
      Click me!
    </button>
  )
}

  


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CounterParent />
  </React.StrictMode>
)