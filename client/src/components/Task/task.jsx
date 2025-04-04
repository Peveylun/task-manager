import "./task.css";
import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState } from "react";

function Task({ id, author, children }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setDragging(isDragging);
    }, [isDragging]);

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`task ${dragging ? "dragging" : ""}`}
        >
            <div className="description">{children}</div>
            <div className="line"></div>
            <div className="author">{author}</div>
        </div>
    );
}

export default Task;
