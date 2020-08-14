// Dependencies
import React from "react";
import "./style.css";

// Search form 
function SearchForm(props) {
    return (
        <div className="container">
            <form className="search">
                <div className="form-group">
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="name"
                        list="results"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        id="search"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchForm;