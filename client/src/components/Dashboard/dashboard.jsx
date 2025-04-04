import './dashboard.css';
import Column from "../Column/column.jsx";
import { useState } from "react";
import Task from "../Task/task.jsx";
import { DndContext, closestCorners } from "@dnd-kit/core";

function Dashboard() {
    const [columns] = useState(["To Do", "Working", "Optional", "Done"]);
    const [tasks, setTasks] = useState([
        { id: "1", type: "To Do", description: "To Do Task1", author: "Pevey" },
        { id: "2", type: "To Do", description: "To Do Task2", author: "Pevey" },
        { id: "3", type: "To Do", description: "To Do Task3", author: "Pevey" },
        { id: "4", type: "To Do", description: "To Do Task4", author: "Pevey" },
        { id: "5", type: "To Do", description: "To Do Task5", author: "Pevey" },
        { id: "6", type: "To Do", description: "To Do Task6", author: "Pevey" },
        { id: "7", type: "To Do", description: "To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7To Do Task7", author: "Pevey" },
    ]);

    const onDragEnd = ({ active, over }) => {
        if (!over) return;

        setTasks(tasks.map(task =>
            task.id === active.id ? { ...task, type: over.id } : task
        ));
    };

    return (
        <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
            <div className="dashboard">
                {columns.map(title => (
                    <Column key={title} id={title} title={title}>
                        {tasks
                            .filter(task => task.type === title)
                            .map((task) => (
                                <Task key={task.id} id={task.id} author={task.author}>
                                    {task.description}
                                </Task>
                            ))}
                    </Column>
                ))}
            </div>
        </DndContext>
    );
}

export default Dashboard;
