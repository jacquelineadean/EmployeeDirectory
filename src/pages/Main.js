// Dependencies
import React, { Component } from "react";
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
        filteredEmployees: []
    }

    componentDidMount(){
        API.getEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
        })
    };

    // const debouncedSearch = useDebounce(search, 500);

    // Handle input change to search the profiles
    handleInputChange = event => {
        const filter = event.target.value;
        console.log(filter);
    };

    // Handle form submit
    handleFormSubmit = event => {
        event.preventDefault();
        
        
        // this.setState.filteredEmployees.filter(item => {
        //     let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
        //     console.log(filter, values)
        //     if(values.indexOf(filter.toLowerCase()) !== -1){
        //         return item
        //     }
        // })
    };

    compareBy(key) {
        return function (a,b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        }
    }

    sortBy(key) {
        let array = [...this.state.filteredEmployees];
        array.sort(this.compareBy(key));
        this.setState({filteredEmployees: array})
    }

    render(){
        return (
            // <EmployeeContext.Provider value={{ employees }}>
                <div>
                    <Jumbotron />
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        filteredEmployees={this.state.filteredEmployees}
                    />
                    <Table results={this.state.filteredEmployees}/>
                </div>
            // </EmployeeContext.Provider>
        );
    }
};

// Export
export default Main;