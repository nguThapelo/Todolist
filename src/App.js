import React, { Component } from 'react';

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
      newItem:""
    })
  }


  deleteItem(id){
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
             Add item here ...
          </label>
         
            <br/>
        </div>
             
          <input
            type="text"
            placeholder="Enter Your Item Here ..."
            value={this.state.newItem}
            onChange={i => this.updateInput("newItem", i.target.value)}
          />

          <button onClick={() => this.addItem()}>
            Add Item
           </button>

<br/>

<ul>
  {this.state.list.map(item => {
    return (
      <li key={item.id}>
        <button onClick={() => {this.delete(item.id)}}>
X
        </button>

      </li>
    )
  })
}
</ul>
      </div>
     
    )
  }
}




export default App;
