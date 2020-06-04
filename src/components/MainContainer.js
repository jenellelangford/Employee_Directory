import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";



class MainContainer extends Component {
    state = {
      result: {},
      search: ""
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
      this.searchMovies("The Matrix");
    }
  
    searchEmployees = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };


// When the form is submitted, search the OMDB API for the value of `this.state.search`
handleFormSubmit = event => {
    event.preventDefault();
    this.searchForm(this.state.search);
  };
  /*
  render() {
    return (

      <Container>
        <Row>
            <Card
              heading={this.state.result.Title || "Search"}
            >
              {this.state.result.Title ? (
                <EmployeeList
                  src={this.state.result.src}
                  name={this.state.result.Name}
                  phone={this.state.result.Phone}
                  email={this.state.result.Email}
                  dob={this.state.result.dob}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
        </Row>
      </Container>
       );
    }
    */
  }
  
export default MainContainer;