import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function Todos(props) {
    return (
        <div className="container my-5">
            <h3>{props.title}</h3>
            <hr />
            <div className="row">
                {props.todos.map((todo) => {
                    return (
                        // have to give unique key to each item
                        <div className="col-md-4" key={todo.key}>
                            <TodoItem todo={todo} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.array,
    title: PropTypes.string,
};

export default Todos;
