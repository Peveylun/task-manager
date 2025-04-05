import './dashboard.css';
import Column from "../Column/column.jsx";
import { useState } from "react";
import Task from "../Task/task.jsx";
import { DndContext, closestCorners } from "@dnd-kit/core";

function Dashboard() {
    const [columns] = useState([]);
    const [tasks, setTasks] = useState([]);

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
