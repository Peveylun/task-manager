import './dashboard.css';
import Column from "../Column/column.jsx";
import { useState } from "react";
import Task from "../Task/task.jsx";

function Dashboard() {
    const [column_titles, setDashboard_titles] = useState(["To Do", "Working"]);
    const [tasks, setTasks] = useState([
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "To Do", description: "Some to do", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
        { type: "Working", description: "Some to do2", author: "Pevey" },
    ]);

    return (
        <div className="dashboard">
            {column_titles.map(title => (
                <Column key={title} title={title}>
                    {tasks
                        .filter(task => task.type === title)
                        .map((task, index) => (
                            <Task key={index} author={task.author}>
                                {task.description}
                            </Task>
                        ))}
                </Column>
            ))}
        </div>
    );
}

export default Dashboard;
