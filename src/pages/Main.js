// Dependencies
import React, { Component } from "react";
import API from "../utils/API";

// Main page
class Main extends Component {
    // Set state
    state = {
        picture: "",
        name: "",
        phone: "",
        email: "",
        dob: ""
    };

    // When the component mounts, load the profiles
    componentDidMount() {};

    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
            </div>
        );
    }
};

// Export
export default Main;