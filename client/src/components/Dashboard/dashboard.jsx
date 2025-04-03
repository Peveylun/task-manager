import './dashboard.css';
import Column from "../Column/column.jsx";
import { useState } from "react";
import Task from "../Task/task.jsx";

function Dashboard() {
    const [column_titles, setDashboard_titles] = useState([]);
    const [tasks, setTasks] = useState([]);

    return (
        <div className="dashboard">
            {column_titles.map(title => (
                <Column key={title} title={title}>
                    {tasks
                        .filter(task => task.type === title)
                        .map((task) => (
                            <Task key={task.id} author={task.author}>
                                {task.description}
                            </Task>
                        ))}
                </Column>
            ))}
        </div>
    );
}

export default Dashboard;
