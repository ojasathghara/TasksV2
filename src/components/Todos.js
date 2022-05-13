import React, { useState } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";
import AddTodo from "./AddTodo";

let todosUtil = [
    { key: 1, title: "Hello", description: "Hello description", active: true },
    {
        key: 2,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
];

let globalKey = 3;

function Todos(props) {
    const [todos, setTodos] = useState(todosUtil);
    const [currentTodo, setCurrentTodo] = useState({ key: -1 }); // setting a default key for the first mount

    const [modalShow, setModalShow] = useState(false);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    const handleModalSubmit = (newTitle, newDescription) => {
        if (!newTitle || !newDescription) {
            alert("Title or description must not be empty.");
            return;
        }

        let todoIdx = todos.indexOf(currentTodo);
        let tempTodos = [...todos];

        if (!tempTodos[todoIdx].active) {
            tempTodos[todoIdx].active = true;
        }
        tempTodos[todoIdx].title = newTitle;
        tempTodos[todoIdx].description = newDescription;

        setTodos(tempTodos);

        setModalShow(false);
    };

    const editTodo = (todo) => {
        setCurrentTodo(todo);
        setModalShow(true);
    };

    const addTodo = (title, description) => {
        let newTodo = {
            key: globalKey,
            title: title,
            description: description,
            active: true,
        };
        globalKey += 1;

        setTodos(todos.concat(newTodo));
    };

    const toggleTodo = (todo) => {
        console.log("Toggle of todo clicked: " + todo.key);
        let todoIdx = todos.indexOf(todo);
        let tempTodos = [...todos];
        tempTodos[todoIdx].active = !tempTodos[todoIdx].active;

        setTodos(tempTodos);
    };

    const deleteTodo = (todo) => {
        setTodos(
            todos.filter((td) => {
                return td !== todo;
            })
        );
    };

    return (
        <div className="container my-5">
            <AddTodo onAdd={addTodo} />
            <UpdateTodo
                key={currentTodo.key} // to remount the modal
                show={modalShow}
                todo={currentTodo}
                onShow={handleModalShow}
                onHide={handleModalClose}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
            <h3>My Tasks</h3>
            <hr />
            <div className="row">
                {todos.length !== 0 ? (
                    todos.map((todo) => {
                        return (
                            // have to give unique key to each item
                            <div className="col-md-4" key={todo.key}>
                                <TodoItem
                                    todo={todo}
                                    onEdit={editTodo}
                                    onDelete={deleteTodo}
                                    onToggle={toggleTodo}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>No tasks available to show.</p>
                )}
            </div>
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.array,
    title: PropTypes.string,
};

export default Todos;
