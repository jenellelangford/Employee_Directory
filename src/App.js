import React, { Component } from 'react';
import EmployeeList from "./components/EmployeeList";
import SearchForm from "./components/SearchForm";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })

    });
  }


  render() {
    const {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {

    return (
      <div className="App">
        <EmployeeList/>
        <SearchForm />
        <div class="list-container">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <strong>Name:</strong> {item.name} | <strong>Phone:</strong> {item.phone} | <strong>Email:</strong> {item.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    )
  }
}
}

export default App;
