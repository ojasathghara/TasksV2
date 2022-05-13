import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function UpdateTodo(props) {
    let oldTitle = "";
    let oldDescription = "";

    if (props.todo != null) {
        oldTitle = props.todo.title;
        oldDescription = props.todo.description;
    }

    const [newTitle, setNewTitle] = useState(oldTitle);
    const [newDescription, setNewDescription] = useState(oldDescription);

    const onTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    return (
        <div>
            <Modal
                show={props.show}
                onShow={props.onShow}
                onHide={props.onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="todoTitleUpdate">New Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="todoTitleUpdate"
                                name="todoTitleUpdate"
                                value={newTitle}
                                onChange={onTitleChange}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="todoDescriptionUpdate">
                                New Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="todoDescriptionUpdate"
                                name="todoDescriptionUpdate"
                                value={newDescription}
                                onChange={onDescriptionChange}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={props.handleSubmit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

UpdateTodo.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    onClose: PropTypes.func,
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default UpdateTodo;
