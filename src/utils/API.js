import axios from "axios";

// Export object containing method for retrieving the Random User Generator api
export default {
    // API call to return 100 random profiles
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100")
                // .then(res => {
                //     const employees = res.data.results;
                //     console.log(employees);
                //     const results = employees.map(employee => {
                //         return {
                //             picture: employee.picture.thumbnail,
                //             name: `${employee.name.first} ${employee.name.last}`,
                //             phone: employee.phone,
                //             email: employee.email,
                //             DOB: employee.dob.date
                //         };
                //     });
                //     console.log(results);
                // })
    }
};