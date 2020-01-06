import React, { Component } from "react";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  // adds Items to array
  addTask(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }
  // this method delets tasks by filtering the array
  deleteTask(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  // this method converts the task to editable text
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-6 mx-auto col-md-3 mt-4 bg-info">
            <header>
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
              ></link>
              <title>My Todo List</title>
              <h1>My Todo List</h1>
              <form className="input-group md-2" onSubmit={this.addTask}>
                <input
                  className="d-flex justify-content-center "
                  type="text"
                  placeholder="Enter Task"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}
                ></input>
                <button
                  className="btn btn-outline-secondary bg-info text-white "
                  type="submit"
                >
                  Add
                </button>
              </form>
              <p>{this.state.items.text}</p>

              <ListItems
                items={this.state.items}
                deleteTask={this.deleteTask}
                setUpdate={this.setUpdate}
              />
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
