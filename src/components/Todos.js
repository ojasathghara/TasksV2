import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";

let todos = [
    { key: 1, title: "Hello", description: "Hello description", active: true },
    { key: 2, title: "Hello", description: "Hello description", active: true },
    { key: 3, title: "Hello", description: "Hello description", active: true },

    {
        key: 4,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
    {
        key: 5,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
    {
        key: 6,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
];

function Todos(props) {
    return (
        <div className="container my-5">
            <UpdateTodo />
            <h3>My Tasks</h3>
            <hr />
            <div className="row">
                {todos.map((todo) => {
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
