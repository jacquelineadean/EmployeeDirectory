// Dependencies
import React from "react";
import "./style.css";

// Table component
function Table(props) {
    console.log(props);
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={() => {props.sortBy("name")}}>First Name</th>
                        <th scope="col" onClick={() => {props.sortBy("name")}}>Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map(employee => (
                        <tr key={employee.login.uuid}>
                            <th scope="row">
                                <img alt="employee thumbnail" src={employee.picture.medium} />
                            </th>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

// Export 
export default Table;