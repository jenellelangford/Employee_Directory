import React from "react";

function SearchForm(props) {
  return (
    <form align="center">
      <div className="form-group">
        <input
          value={props.handleInputChange}
          name="search"
          list="employees"
          type="text"
          placeholder="Search Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
