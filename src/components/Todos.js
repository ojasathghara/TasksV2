import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";
import AddTodo from "./AddTodo";

// let globalKey = 3;

function Todos({ pageTitle, localhost }) {
    document.title = pageTitle;

    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState({ key: -1 }); // setting a default key for the first mount

    const [modalShow, setModalShow] = useState(false);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    //get the todos from api
    useEffect(() => {
        let getTodosUrl = localhost + "/crud/read";
        fetch(getTodosUrl)
            .then((resp) => resp.json())
            .then((data) => setTodos(data.todos));
    });

    // or updateTodo()
    const handleModalSubmit = (key, newTitle, newDescription) => {
        if (!newTitle || !newDescription) {
            alert("Title or description must not be empty.");
            return;
        }

        let updateTodoUrl = localhost + `/crud/update/${key}`;

        let formData = new FormData();
        formData.append("title", newTitle);
        formData.append("description", newDescription);

        fetch(updateTodoUrl, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.updatedTodo);

                let todoIdx = todos.findIndex(
                    (todo) => todo.key === data.updatedTodo.key
                );
                let tempTodos = [...todos];
                tempTodos[todoIdx] = data.updatedTodo;
                setTodos(tempTodos);
            });

        setModalShow(false);
    };

    const editTodo = (todo) => {
        setCurrentTodo(todo);
        setModalShow(true);
    };

    const addTodo = (title, description) => {
        let addTodosUrl = localhost + "/crud/add";

        let formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);

        fetch(addTodosUrl, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.todo);
                setTodos(todos.concat(data.todo));
            });
    };

    const toggleTodo = (key) => {
        let toggledTodoUrl = localhost + `/crud/toggle/${key}`;

        fetch(toggledTodoUrl, { method: "POST" })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.toggledTodo);

                let todoIdx = todos.findIndex(
                    (todo) => todo.key === data.toggledTodo.key
                );

                let tempTodos = [...todos];
                tempTodos[todoIdx].active = !tempTodos[todoIdx].active;
                setTodos(tempTodos);
            });
    };

    const deleteTodo = (key) => {
        let toggledTodoUrl = localhost + `/crud/delete/${key}`;

        fetch(toggledTodoUrl, { method: "POST" })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.deletedTodoKey);

                let todoIdx = todos.findIndex(
                    (todo) => todo.key === data.deletedTodoKey
                );

                let tempTodos = [...todos];
                tempTodos.splice(todoIdx, 1);
                setTodos(tempTodos);
            });
    };

    return (
        <div className="container my-5">
            <AddTodo onAdd={addTodo} />
            <UpdateTodo
                key={currentTodo.key} // to remount the modal
                id={currentTodo.key}
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
    pageTitle: PropTypes.string,
};

export default Todos;
