import React, { Component } from 'react';
import EmployeeList from "./components/EmployeeList";
// import SearchForm from "./components/SearchForm";
import Table from 'react-bootstrap/Table';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      term: "",

    }

    this.searchHandler=this.searchHandler.bind(this);
  }


  searchHandler(event) {
    this.setState({term: event.target.value})
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

  searchList(term) {
    return function(x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }

  render() {
    const {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {

    return (
      <div className="App">
        <EmployeeList/>

        <form align="center">
          <div className="form-group">
            <input
              type="text"
                onChange={this.searchHandler}
              placeholder="Search By First Name"
            />
          </div>
        </form>

        <div class="list-container">
              <Table responsive>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
                {items.filter(this.searchList(this.state.term)).map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
                )
                )}
              </Table>
        </div>
      </div>
      
    )
  }
}
}

export default App;
