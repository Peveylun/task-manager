import './dashboard.css'
import Column from "../Column/column.jsx";
import Task from "../Task/task.jsx";

function Dashboard() {

    return (
        <div className="dashboard">
            <Column title="To Do">
            </Column>
            <Column title="Working"></Column>
            <Column title="Done"></Column>
            <Column title="Optional"></Column>
        </div>
    )
}

export default Dashboard;