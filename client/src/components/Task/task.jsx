import "./task.css"

function Task(props) {
    return (
        <div className="task">
            <div className="description">
                <p>{props.children}</p>
            </div>
            <div className="line"></div>
            <div className="author">
                <p>{props.author}</p>
            </div>
        </div>
    )
}

export default Task;