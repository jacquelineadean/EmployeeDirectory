// Dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

// Main page
class Main extends Component {
    // Set state
    constructor(props){
        super(props);
        this.state = {
            employees: [],
            filteredEmployees: [],
            order: "descend",
            sortName: ""
        }

        this.sortBy = this.sortBy.bind(this);
    } 
    

    componentDidMount(){
        API.getEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
        })
    };

    // Handle input change to search the profiles
    handleInputChange = event => {
        const filter = event.target.value;
        console.log(filter);
        this.setState.filteredEmployees.filter(employee => {
            let values = employee.name.first.toLowerCase();
            console.log(filter, values)
            if(values.indexOf(filter.toLowerCase()) !== -1){
                return employee;
            }
        })
    };
        
    sortBy(sortName) {
        let sortedUsers = [];
        const currentSortName = this.state.sortName;
        const filteredEmployees = this.state.filteredEmployees;
        let order = this.state.order;
        if (currentSortName === sortName) {
            order = order === "descend" ? "ascend" : "descend"
            this.sortedUsers = this.compareBy(filteredEmployees, sortName, order);
        }else{
            order = "descend"
            this.sortedUsers = this.compareBy(filteredEmployees, sortName, order);
            
        }
        this.setState({filteredEmployees: this.sortedUsers, order: order, sortName: sortName})
        console.log("Clicked")
    }

    compareBy(objects, field, direction) {
        console.log(direction);
        if (direction === "descend"){
            objects.sort((a,b) => (a.name[field] > b.name[field]) ? 1 : ((b.name[field] > a.name[field]) ? -1 : 0));
            console.log(objects)
            console.log(field)
            return objects;
        }
        objects.sort((a,b) => (a.name[field] < b.name[field]) ? 1 : ((b.name[field] < a.name[field]) ? -1 : 0));
        
        return objects;
    }

    render(){
        return (
            <div>
                <Jumbotron />
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    filteredEmployees={this.state.filteredEmployees}
                />
                <Table 
                    sortBy={this.sortBy}
                    results={this.state.filteredEmployees}
                />
            </div>
        );
    }
};

// Export
export default Main;