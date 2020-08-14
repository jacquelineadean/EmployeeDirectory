// Dependencies
import React, { useEffect, useState, Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
// import EmployeeContext from "../utils/EmployeeContext";
// import useDebounce from "../utils/debounceHook";

// Main page
class Main extends Component {
    // Set state
    state = {
        employees: [],
        filteredEmployees: [{}]
    }

    componentDidMount(){
        API.getEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
        })
    };
    // const [employees, setEmployees] = useState([]);
    // const [employee, setEmployee] = useState({});
    // const [employeeIndex, setEmployeeIndex] = useState(0);
    // const [search, setSearch] = useState("");

    // const debouncedSearch = useDebounce(search, 500);

    // // When the component mounts, a call is made to load the profiles
    // useEffect(() => {
    //     loadEmployees();
    // }, []);

    // // Function to make API call
    // function loadEmployees() {
    //     API.getEmployees().then(results => {
    //         console.log(results);
    //         setEmployees(results);
    //         // setEmployee(results.data.results[1]);
    //         // console.log(employee);
    //     }).catch(err => console.log(err));
    // }

    // // Handle input change to search the profiles
    // const handleInputChange = event => {
    //     setSearch(event.target.value);
    // };

    // // Handle form submit
    // const handleFormSubmit = event => {
    //     event.preventDefault();
    // };
    render(){
        return (
            // <EmployeeContext.Provider value={{ employees }}>
                <div>
                    <Jumbotron />
                    <SearchForm
                        // handleInputChange={handleInputChange}
                        // handleFormSubmit={handleFormSubmit}
                        // results={search}
                    />
                    <Table results={this.state.employees}/>
                </div>
            // </EmployeeContext.Provider>
        );
    }
};

// Export
export default Main;