import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
    let strikeText = {
        textDecoration: "line-through",
    };
    return (
        <div className="card">
            <div className="card-body">
                <h5
                    className="card-title"
                    style={props.todo.active ? {} : strikeText}
                >
                    {props.todo.title}
                </h5>
                <hr />
                <p
                    className="card-text"
                    style={props.todo.active ? {} : strikeText}
                >
                    {props.todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <a href="/" className="btn btn-primary">
                        Edit
                    </a>
                    <a href="/" className="btn btn-success">
                        {props.todo.active ? "Mark as Done" : "Not done yet"}
                    </a>
                    <a href="/" className="btn btn-danger">
                        Delete
                    </a>
                </div>
            </div>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object,
};

export default TodoItem;
