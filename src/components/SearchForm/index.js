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
                        onChange={e => props.handleInputChange(e)}
                        type="search"
                        className="form-control"
                        placeholder="Search"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchForm;