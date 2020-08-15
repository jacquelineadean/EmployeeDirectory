// Dependencies
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

// App function
function App() {
    return (
        // <Router>
            <div>
                <Main />
                {/* <Route exact path="/" component={Main} /> */}
            </div>
        // </Router>
    );
}

// Export App
export default App;