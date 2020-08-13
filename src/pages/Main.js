// Dependencies
import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";

// Main page
function Main() {
    // Set state
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    // const [employeeIndex, setEmployeeIndex] = useState(0);

    // When the component mounts, a call is made to load the profiles
    useEffect(() => {
        loadEmployees();
    }, []);

    // Function to make API call
    function loadEmployees() {
        API.getEmployees().then(employees => {
            setEmployees(employees);
            setEmployee(employees[0]);
        })
            .catch(err => console.log(err));
    }

    // Handle input change to search the profiles
    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };

    return (
        <EmployeeContext.Provider value={{ employee, employees }}>
            <div>
                <Jumbotron />
                <SearchForm
                // handleInputChange={this.handleInputChange}
                />
                <Table />
            </div>
        </EmployeeContext.Provider>
    );

};

// Export
export default Main;