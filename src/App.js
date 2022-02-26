import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (

      <div className="box">
        <div className="App-title">
          <h1>
            My Todo-List
          </h1>
        </div>
        <div className='Container'>
          <div style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
          >
            <div className='input'>

              <label>
                <h3 >
                  Add Task(s) here ...
                </h3>
                
              </label>

              <br />

              <input
                type="text"
                placeholder="Enter Task Here ..."
                value={this.state.newItem}
                onChange={i => this.updateInput("newItem", i.target.value)}
              />

              <button onClick={() => this.addItem()} className="add-btn btn-floating">
                <i className="material-icons"> + </i>
              </button>

              <br />
              <h3>My Tasks</h3>
              <div className='input'>
                <ul>
                  {this.state.list.map(item => {
                    return (
                      <li key={item.id}>
                        {item.value}
                       
                        <button onClick={() => this.deleteItem(item.id)} className="btn btn-floating">
                          <i className="material-icons"> X </i>
                        </button>
                      </li>
                    )
                  })
                  }
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

    )
  }
}




export default App;
