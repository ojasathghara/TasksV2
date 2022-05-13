import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function UpdateTodo(props) {
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
                            <label htmlFor="title">New Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Enter title"
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="description">New Description</label>
                            <input
                                type="password"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Enter a description"
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
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
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default UpdateTodo;
