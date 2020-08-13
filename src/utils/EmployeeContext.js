// Dependencies
import React from "react";

// Set employee context 
const EmployeeContext = React.createContext({
    picture: "",
    name: "",
    phone: "",
    email: "",
    DOB: ""
});

// Export
export default EmployeeContext;