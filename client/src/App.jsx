import './App.css'
import Footer from "./components/Footer/footer.jsx";
import Dashboard from "./components/Dashboard/dashboard.jsx";
import Registration from "./components/Registration/registration.jsx";
import {useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            {!isAuthenticated && <Registration />}
            <div className="app">
                <Footer />
                <Dashboard />
            </div>
        </>
    )
}

export default App
