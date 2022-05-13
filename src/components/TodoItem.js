import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function TodoItem(props) {
    let strikeText = {
        textDecoration: "line-through",
    };
    let normalText = {
        textDecoration: "none",
    };
    return (
        <div className="card my-2">
            <div className="card-body">
                <h5
                    className="card-title"
                    style={props.todo.active ? normalText : strikeText}
                >
                    {props.todo.title}
                </h5>
                <hr />
                <p
                    className="card-text"
                    style={props.todo.active ? normalText : strikeText}
                >
                    {props.todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={props.showUpdateModal}>
                        Edit
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => props.onToggle(props.todo)}
                    >
                        {props.todo.active ? "Mark as Done" : "Not done yet"}
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => props.onDelete(props.todo)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    showUpdateModal: PropTypes.func,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
};

export default TodoItem;
