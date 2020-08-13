// Dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

// Main page
class Main extends Component {
    // Set state
    state = {
        search: "",
        employees: [],
        error: ""
    };

    // When the component mounts, load the profiles
    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({ employees: res}))
        .catch(err => console.log(err));
    };

    // Handle input change to search the profiles
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <SearchForm 
                  handleInputChange={this.handleInputChange}
                />
                <Table employees={this.state.employees} />
            </div>
        );
    }
};

// Export
export default Main;