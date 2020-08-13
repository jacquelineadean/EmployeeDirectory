// Dependencies
import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

// Table component
function Table() {
    const { employee } = useContext(EmployeeContext);
    return (
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={employee.id}>
                        <th scope="row">
                            <img alt="employee thumbnail" src={employee.picture} />
                        </th>
                        <td>{employee.name}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// Export 
export default Table;