import './column.css';

function Column(props) {
    return (
        <div className="column">
            <div className="column-title">
                <p>{props.title}</p>
            </div>
            <div className="column-body">
                {props.children}
            </div>
        </div>
    )
}

export default Column;