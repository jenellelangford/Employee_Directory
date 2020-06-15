import React from "react";

function SearchForm(props) {
  return (
    <form align="center">
      <div className="form-group">
        <input
          type="text"
          name="search"
          list="employees"
          placeholder="Search By First Name"
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
