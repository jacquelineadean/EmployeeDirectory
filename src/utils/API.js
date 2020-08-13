import axios from "axios";

// Export object containing method for retrieving the Random User Generator api
export default {
    // API call to return 100 random profiles
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100")
                .then(res => {
                    const employees = res.data;
                    const results = employees.map(employee => {
                        return {
                            picture: employee.picture.thumbnail,
                            name: employee.name,
                            phone: employee.phone,
                            email: employee.email,
                            DOB: employee.dob
                        };
                    });
                    return results;
                })
    }
};