import './column.css';
import { useDroppable } from "@dnd-kit/core";

function Column({ id, title, children }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div className="column" ref={setNodeRef}>
            <div className="column-title">{title}</div>
            <div className="column-body">{children}</div>
        </div>
    );
}

export default Column;
