import './dashboard.css'
import Column from "../Column/column.jsx";
import {useState} from "react";

function Dashboard() {
    const [dashboard_titles, setDashboard_titles] = useState([]);

    return (
        <div className="dashboard">
            {dashboard_titles.map(title => (
                <Column title={title}>

                </Column>
            ))}
        </div>
    )
}

export default Dashboard;